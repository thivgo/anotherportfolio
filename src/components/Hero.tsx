import { useState } from 'react';
import { useLanguage } from '../i18n';
import { PROFILE } from '../data/content';
import { useInspect } from '../inspect/InspectContext';
import { useLocalTime } from '../hooks/useLocalTime';
import { ArrowDown } from './Icons';

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const { toggle } = useInspect();
  const time = useLocalTime();
  const [canHover] = useState(() => matchMedia('(hover: hover) and (pointer: fine)').matches);

  return (
    <header className="hero" id="top" data-c="Hero">
      <div className="container hero-top">
        <p className="label" data-c="Hero/Função">{h.role}</p>
        <p className="label hero-clock" data-c="Hero/Relógio">
          Belém <span>{time}</span>
        </p>
      </div>

      <h1 className="container hero-name" data-c="Hero/Nome">
        <span className="line">
          <span>Thiago</span>
        </span>
        <span className="line line-indent">
          <span>Maués</span>
        </span>
      </h1>

      <div className="container grid hero-body">
        <p className="hero-intro" data-c="Hero/Intro">
          {h.intro}
        </p>

        <div className="hero-side">
          <dl className="specs" data-c="Hero/Ficha">
            {h.specs.map((s) => (
              <div key={s.term}>
                <dt>{s.term}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#trabalho" data-c="Botão/Principal">
              {h.ctaWork}
              <ArrowDown />
            </a>
            <a className="btn btn-line" href={PROFILE.cv} download data-c="Botão/Secundário">
              {h.ctaCv}
            </a>
          </div>
        </div>
      </div>

      <div className="container hero-foot">
        <p className="status" data-c="Hero/Status">
          <span className="status-dot" aria-hidden="true" />
          {h.status}
        </p>
        <button type="button" className="hint" onClick={toggle} data-inspect-toggle>
          {canHover ? (
            <>
              {h.hint.press} <kbd>I</kbd> {h.hint.rest}
            </>
          ) : (
            h.hint.touch
          )}
        </button>
      </div>
    </header>
  );
}
