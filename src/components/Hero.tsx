import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { useLanguage } from '../i18n';
import { PROFILE } from '../data/content';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { baseTurn, motifFor } from './Azulejo';

const GAP = 3;

interface Geometry {
  cols: number;
  size: number;
  c0: number; // coluna onde a placa começa
  r0: number; // linha onde a placa começa
  span: number; // largura da placa, em azulejos
}

function geometryFor(width: number): Geometry {
  const cols = width < 560 ? 6 : width < 900 ? 9 : Math.max(12, Math.round(width / 108));
  const size = (width - GAP * (cols - 1)) / cols;
  const step = size + GAP;
  if (cols <= 6) return { cols, size, c0: 0, r0: 1, span: cols };
  return { cols, size, c0: 1, r0: 1, span: Math.min(cols - 2, Math.ceil(760 / step)) };
}

export function Hero() {
  const { t } = useLanguage();
  const reduced = usePrefersReducedMotion();
  const wallRef = useRef<HTMLDivElement>(null);
  const plaqueRef = useRef<HTMLDivElement>(null);
  const turns = useRef(new Map<string, number>());

  const [geo, setGeo] = useState<Geometry | null>(null);
  const [plaqueRows, setPlaqueRows] = useState(4);
  const [viewportH, setViewportH] = useState(() => window.innerHeight);
  const [broken, setBroken] = useState(0);
  const [laid, setLaid] = useState(false);
  const [settled, setSettled] = useState(false);
  const [canHover] = useState(() => matchMedia('(hover: hover)').matches);

  // Largura do muro -> colunas e tamanho das peças
  useLayoutEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;
    const measure = () => {
      const next = geometryFor(wall.clientWidth);
      setGeo((prev) => {
        if (prev && prev.cols === next.cols && Math.abs(prev.size - next.size) < 0.5) return prev;
        if (prev && prev.cols !== next.cols) {
          turns.current.clear();
          setBroken(0);
        }
        return next;
      });
      setViewportH(window.innerHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wall);
    return () => ro.disconnect();
  }, []);

  // Altura do texto da placa -> quantas fileiras de azulejo ela ocupa
  useLayoutEffect(() => {
    const inner = plaqueRef.current;
    if (!inner || !geo) return;
    const measure = () => {
      const step = geo.size + GAP;
      setPlaqueRows(Math.max(2, Math.ceil((inner.offsetHeight + GAP) / step)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [geo]);

  // Assentamento inicial: as peças entram em onda diagonal
  useEffect(() => {
    if (!geo || laid) return;
    if (reduced) {
      setLaid(true);
      setSettled(true);
      return;
    }
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setLaid(true));
    });
    const done = window.setTimeout(() => setSettled(true), 2200);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(done);
    };
  }, [geo, laid, reduced]);

  const rotateTile = useCallback(
    (el: HTMLElement) => {
      if (!settled) return;
      const now = performance.now();
      if (now - Number(el.dataset.at ?? 0) < 450) return;
      el.dataset.at = String(now);

      const key = el.dataset.k!;
      const prev = turns.current.get(key) ?? 0;
      const next = prev + 1;
      turns.current.set(key, next);
      el.style.setProperty('--turn', String(next));

      const wasBroken = prev % 4 !== 0;
      const isBroken = next % 4 !== 0;
      if (wasBroken !== isBroken) setBroken((b) => b + (isBroken ? 1 : -1));
    },
    [settled],
  );

  const onPointerOver = (e: React.PointerEvent) => {
    const tile = (e.target as HTMLElement).closest<HTMLElement>('.tile');
    if (tile) rotateTile(tile);
  };

  const resetTiles = () => {
    const wall = wallRef.current;
    if (!wall) return;
    let i = 0;
    for (const [key, n] of turns.current) {
      if (n % 4 === 0) continue;
      const fixed = n + (4 - (n % 4));
      turns.current.set(key, fixed);
      const el = wall.querySelector<HTMLElement>(`[data-k="${key}"]`);
      if (!el) continue;
      el.style.transitionDelay = `${Math.min(i++ * 35, 600)}ms`;
      el.style.setProperty('--turn', String(fixed));
      window.setTimeout(() => (el.style.transitionDelay = ''), 1400);
    }
    setBroken(0);
  };

  const step = geo ? geo.size + GAP : 100;
  const minRows = Math.ceil(Math.min(Math.max(viewportH * 0.72, 440), 780) / step);
  const rows = geo ? Math.max(minRows, geo.r0 + plaqueRows + 1) : 0;

  const tiles: React.ReactNode[] = [];
  if (geo) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < geo.cols; c++) {
        const underPlaque =
          c >= geo.c0 && c < geo.c0 + geo.span && r >= geo.r0 && r < geo.r0 + plaqueRows;
        if (underPlaque) continue;
        tiles.push(
          <div
            key={`${r}-${c}`}
            data-k={`${r}-${c}`}
            className="tile"
            style={{ gridRow: r + 1, gridColumn: c + 1, '--b': baseTurn(r, c), '--d': r + c } as CSSProperties}
          >
            <svg viewBox="0 0 100 100">
              <use href={`#${motifFor(r, c)}`} />
            </svg>
          </div>,
        );
      }
    }
  }

  const wallStyle = geo
    ? ({
        gridTemplateColumns: `repeat(${geo.cols}, ${geo.size}px)`,
        gridAutoRows: `${geo.size}px`,
        height: rows * step - GAP,
      } as CSSProperties)
    : undefined;

  const wallClass = ['wall', laid ? 'is-laid' : 'is-laying', settled ? 'is-settled' : ''].join(' ');

  return (
    <header className="hero" id="top">
      <div ref={wallRef} className={wallClass} style={wallStyle} onPointerOver={onPointerOver}>
        <div aria-hidden="true" className="wall-tiles">
          {tiles}
        </div>
        {geo && (
          <div
            className="plaque"
            style={{
              gridColumn: `${geo.c0 + 1} / span ${geo.span}`,
              gridRow: `${geo.r0 + 1} / span ${plaqueRows}`,
            }}
          >
            <div ref={plaqueRef} className="plaque-inner">
              <p className="plaque-eyebrow">
                <span>{t.hero.eyebrow}</span>
                <span className="plaque-place">{t.hero.place}</span>
              </p>
              <h1 className="plaque-name">
                Thiago <span>Maués</span>
              </h1>
              <p className="plaque-summary">{t.hero.summary}</p>
              <div className="plaque-actions">
                <a className="btn btn-primary" href="#projetos">
                  {t.hero.ctaProjects}
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
                  </svg>
                </a>
                <a className="btn btn-ghost" href={PROFILE.cv} download>
                  {t.hero.ctaCv}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hero-bar">
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          {t.hero.status}
        </p>
        {broken > 0 ? (
          <button type="button" className="reset" onClick={resetTiles}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M13 8a5 5 0 1 1-1.5-3.6M13 2.5v3h-3" />
            </svg>
            {t.hero.resetTiles(broken)}
          </button>
        ) : (
          <p className="hint" aria-hidden="true">
            {canHover ? t.hero.hintPointer : t.hero.hintTouch}
          </p>
        )}
      </div>
    </header>
  );
}
