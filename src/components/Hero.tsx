import { useLanguage } from '../i18n';
import { PROFILE } from '../data/content';
import { useLocalTime } from '../hooks/useLocalTime';
import { muteReel, playWithSound, useReelSound } from '../hooks/useReel';
import { ArrowDown, ArrowUpRight, SoundOff, SoundOn } from './Icons';

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const time = useLocalTime();
  const sound = useReelSound();

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
        <div className="reel-cue">
          <a className="reel-cue-link" href="#reel">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="icon icon-fill reel-cue-play">
              <path d="M4.5 2.8v10.4L13 8 4.5 2.8Z" />
            </svg>
            <span>{t.reel.cue}</span>
          </a>
          <button
            type="button"
            className={`reel-sound ${sound ? 'is-on' : ''}`}
            onClick={sound ? muteReel : playWithSound}
            aria-pressed={sound}
          >
            {sound ? <SoundOff /> : <SoundOn />}
            {sound ? t.reel.mute : t.reel.sound}
          </button>
        </div>
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
