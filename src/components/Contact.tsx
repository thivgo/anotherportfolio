import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n';
import { PROFILE } from '../data/content';
import { useLocalTime } from '../hooks/useLocalTime';
import { ArrowUpRight } from './Icons';

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const time = useLocalTime();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <>
      <section className="section contact" id="contato" aria-labelledby="contato-titulo">
        <div className="container">
          <p className="label">{c.label}</p>
          <h2 id="contato-titulo" className="contact-title">
            <span>{c.title[0]}</span> <span>{c.title[1]}</span>
          </h2>
          <p className="contact-body">{c.body}</p>

          <div className="contact-mail">
            <a href={`mailto:${PROFILE.email}`} className="contact-address">
              {PROFILE.email}
            </a>
            <button type="button" className={`btn btn-solid ${copied ? 'is-done' : ''}`} onClick={copyEmail}>
              {copied ? c.copied : c.copy}
            </button>
          </div>

          <ul className="contact-links">
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
            <li>
              <a href={PROFILE.cv} download>
                {c.cv} <ArrowUpRight />
              </a>
            </li>
          </ul>
          <p className="sr-only" role="status">
            {copied ? c.copied : ''}
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>{t.footer.made}</p>
          <p>
            {t.footer.time} <span className="footer-time">{time}</span>
          </p>
          <a href="#top">{t.footer.top}</a>
        </div>
      </footer>
    </>
  );
}
