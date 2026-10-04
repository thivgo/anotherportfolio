import { useLanguage } from '../i18n';
import { PROFILE } from '../data/content';
import { useLocalTime } from '../hooks/useLocalTime';
import { ArrowDown, ArrowUpRight } from './Icons';

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const time = useLocalTime();

  return (
    <header className="hero" id="top">
      <div className="container hero-top">
        <p className="label">{h.role}</p>
        <p className="label hero-clock">
          Belém <span>{time}</span>
        </p>
      </div>

      <h1 className="container hero-name">
        <span className="line">
          <span>Thiago</span>
        </span>
        <span className="line line-indent">
          <span>Maués</span>
        </span>
      </h1>

      <div className="container grid hero-body">
        <p className="hero-intro">
          {h.intro}
        </p>

        <div className="hero-side">
          <dl className="specs">
            {h.specs.map((s) => (
              <div key={s.term}>
                <dt>{s.term}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#trabalho">
              {h.ctaWork}
              <ArrowDown />
            </a>
            <a className="btn btn-line" href={PROFILE.cv} download>
              {h.ctaCv}
            </a>
          </div>
        </div>
      </div>

      <div className="container hero-foot">
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          {h.status}
        </p>
        <ul className="hero-social">
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight />
            </a>
          </li>
          <li>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
