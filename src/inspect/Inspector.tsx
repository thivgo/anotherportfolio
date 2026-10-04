import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n';
import { useInspect } from './InspectContext';

interface Spec {
  component: string;
  element: string;
  size: string;
  font: string;
  color: string;
  colorRaw: string;
  background: string;
  backgroundRaw: string;
  padding: string;
  radius: string;
}

interface Box {
  top: number;
  left: number;
  width: number;
  height: number;
  pad: [number, number, number, number];
}

const IGNORE = '[data-inspector], [data-inspect-toggle]';

function toHex(color: string) {
  const m = color.match(/^rgba?\(([^)]+)\)$/);
  if (!m) return color.length > 22 ? color.slice(0, 22) + '…' : color;
  const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  const hex = '#' + [r, g, b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('').toUpperCase();
  return a < 1 ? `${hex} · ${Math.round(a * 100)}%` : hex;
}

function isTransparent(color: string) {
  return color === 'transparent' || /rgba\(.*,\s*0\)$/.test(color) || /\/\s*0\)$/.test(color);
}

function backgroundOf(el: Element | null): string {
  let node: Element | null = el;
  while (node) {
    const bg = getComputedStyle(node).backgroundColor;
    if (bg && !isTransparent(bg)) return bg;
    node = node.parentElement;
  }
  return getComputedStyle(document.body).backgroundColor;
}

function px(value: string) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? Math.round(n * 10) / 10 : 0;
}

function describe(el: HTMLElement | SVGElement): Spec {
  const cs = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const owner = el.closest<HTMLElement>('[data-c]');
  const family = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
  const lh = cs.lineHeight === 'normal' ? 'auto' : `${px(cs.lineHeight)}`;
  const tracking = cs.letterSpacing === 'normal' ? '' : ` · ${px(cs.letterSpacing)}px`;
  const pads = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].map(px);
  const [pt, pr, pb, pl] = pads;
  const padding =
    pt === pr && pr === pb && pb === pl
      ? `${pt}`
      : pt === pb && pr === pl
        ? `${pt} ${pr}`
        : pads.join(' ');
  const bg = backgroundOf(el);

  return {
    component: owner?.dataset.c ?? '',
    element: `<${el.tagName.toLowerCase()}>`,
    size: `${Math.round(rect.width)} × ${Math.round(rect.height)}`,
    font: `${family} ${cs.fontWeight} · ${px(cs.fontSize)}/${lh}${tracking}`,
    color: toHex(cs.color),
    colorRaw: cs.color,
    background: toHex(bg),
    backgroundRaw: bg,
    padding,
    radius: cs.borderRadius === '0px' ? '0' : cs.borderRadius,
  };
}

function boxOf(el: Element): Box {
  const r = el.getBoundingClientRect();
  const cs = getComputedStyle(el);
  const clamp = (v: string, max: number) => Math.min(px(v), max / 2);
  return {
    top: r.top,
    left: r.left,
    width: r.width,
    height: r.height,
    pad: [
      clamp(cs.paddingTop, r.height),
      clamp(cs.paddingRight, r.width),
      clamp(cs.paddingBottom, r.height),
      clamp(cs.paddingLeft, r.width),
    ],
  };
}

function resolveTarget(node: EventTarget | null): HTMLElement | SVGElement | null {
  if (!(node instanceof Element)) return null;
  if (node.closest(IGNORE)) return null;
  // Partes de um ícone contam como o ícone inteiro.
  const svg = node.closest('svg');
  if (svg) return svg;
  return node as HTMLElement;
}

export function Inspector() {
  const { inspecting, setInspecting } = useInspect();
  const { t } = useLanguage();
  const i = t.inspect;
  const target = useRef<HTMLElement | SVGElement | null>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [spec, setSpec] = useState<Spec | null>(null);

  useEffect(() => {
    if (!inspecting) {
      target.current = null;
      setBox(null);
      setSpec(null);
      return;
    }

    let raf = 0;
    const select = (el: HTMLElement | SVGElement | null) => {
      if (!el || el === target.current) return;
      target.current = el;
      setSpec(describe(el));
      setBox(boxOf(el));
    };
    const follow = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => target.current && setBox(boxOf(target.current)));
    };

    const onOver = (e: PointerEvent) => select(resolveTarget(e.target));
    // Enquanto inspeciona, clique só seleciona: links e botões não disparam.
    const onClick = (e: MouseEvent) => {
      const el = resolveTarget(e.target);
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      target.current = null;
      select(el);
    };

    document.addEventListener('pointerover', onOver);
    document.addEventListener('click', onClick, true);
    window.addEventListener('scroll', follow, { passive: true });
    window.addEventListener('resize', follow);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('scroll', follow);
      window.removeEventListener('resize', follow);
    };
  }, [inspecting]);

  if (!inspecting) return null;

  const labelAbove = box ? box.top > 34 : true;

  return (
    <div data-inspector className="inspector" aria-hidden="false">
      <div className="inspector-grid" aria-hidden="true">
        <div className="inspector-grid-inner">
          {Array.from({ length: 12 }, (_, n) => (
            <span key={n} />
          ))}
        </div>
      </div>

      {box && (
        <div
          className="inspector-box"
          aria-hidden="true"
          style={{
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height,
            borderWidth: box.pad.map((p) => `${p}px`).join(' '),
          }}
        >
          <span className={`inspector-tag ${labelAbove ? '' : 'is-below'}`}>
            {spec?.component || spec?.element} · {spec?.size}
          </span>
        </div>
      )}

      <p className="inspector-banner">
        <span className="inspector-dot" aria-hidden="true" />
        {i.on}
        <span className="inspector-banner-hint">{i.exit}</span>
      </p>

      <aside className="inspector-card" aria-live="polite">
        <div className="inspector-card-head">
          <span>{i.on}</span>
          <button type="button" onClick={() => setInspecting(false)} aria-label={i.exit}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>
        {spec ? (
          <dl>
            {spec.component && (
              <div>
                <dt>{i.component}</dt>
                <dd>{spec.component}</dd>
              </div>
            )}
            <div>
              <dt>{i.element}</dt>
              <dd>{spec.element}</dd>
            </div>
            <div>
              <dt>{i.size}</dt>
              <dd>{spec.size}</dd>
            </div>
            <div>
              <dt>{i.font}</dt>
              <dd>{spec.font}</dd>
            </div>
            <div>
              <dt>{i.color}</dt>
              <dd>
                <span className="swatch" style={{ background: spec.colorRaw }} />
                {spec.color}
              </dd>
            </div>
            <div>
              <dt>{i.background}</dt>
              <dd>
                <span className="swatch" style={{ background: spec.backgroundRaw }} />
                {spec.background}
              </dd>
            </div>
            <div>
              <dt>{i.padding}</dt>
              <dd>{spec.padding}</dd>
            </div>
            <div>
              <dt>{i.radius}</dt>
              <dd>{spec.radius}</dd>
            </div>
          </dl>
        ) : (
          <p className="inspector-empty">{i.empty}</p>
        )}
      </aside>
    </div>
  );
}
