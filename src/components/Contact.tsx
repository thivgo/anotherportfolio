import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n';
import { PROFILE } from '../data/content';
import { Barrado, TileIcon } from './Azulejo';

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2400);
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
        <p className="section-label">
          <TileIcon motif="az-losango" className="section-tile" />
          {c.label}
        </p>
        <h2 id="contato-titulo" className="contact-title">
          {c.title}
        </h2>
        <p className="contact-body">{c.body}</p>

        <a className="contact-email" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>

        <div className="contact-actions">
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            {copied ? c.copied : c.copy}
          </button>
          <a className="btn btn-ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost" href={PROFILE.cv} download>
            {c.cv}
          </a>
        </div>
        <p className="sr-only" role="status">
          {copied ? c.copied : ''}
        </p>
      </section>

      <footer className="footer">
        <Barrado />
        <div className="footer-inner">
          <p>{t.footer.built}</p>
          <p>{t.footer.source}</p>
          <p>© 2026 Thiago Maués</p>
        </div>
      </footer>
    </>
  );
}
