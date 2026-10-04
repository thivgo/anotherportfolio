import { useRef, useState } from 'react';
import { useLanguage } from '../i18n';
import type { Project } from '../data/content';
import { SectionHead } from './SectionHead';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="icon-fill">
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.33.67.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

function Links({ project, code, live }: { project: Project; code: string; live: string }) {
  if (!project.repo && !project.demo) return null;
  return (
    <div className="links">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer">
          {live}
          <ArrowIcon />
          <span className="sr-only">: {project.title}</span>
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer">
          <GitHubIcon />
          {code}
          <span className="sr-only">: {project.title}</span>
        </a>
      )}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack-chips">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;
  const previewRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const movePreview = (e: React.PointerEvent) => {
    const el = previewRef.current;
    if (!el || e.pointerType !== 'mouse') return;
    el.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 90}px)`;
  };

  return (
    <section className="section projects" id="projetos" aria-labelledby="projetos-titulo">
      <SectionHead id="projetos-titulo" label={p.label} title={p.title} motif="az-rosa" />
      <p className="section-intro">{p.intro}</p>

      <div className="features">
        {p.featured.map((f) => (
          <article key={f.title} className="feature">
            <a
              className="feature-frame"
              href={f.repo}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={f.image} alt="" loading="lazy" width={1400} height={900} />
            </a>
            <div className="feature-body">
              {f.year && <p className="feature-year">{f.year}</p>}
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
              <Stack items={f.stack} />
              <Links project={f} code={p.code} live={p.live} />
            </div>
          </article>
        ))}
      </div>

      <h3 className="list-title">{p.more}</h3>
      <ul className="rows" onPointerMove={movePreview} onPointerLeave={() => setPreview(null)}>
        {p.others.map((o) => (
          <li key={o.title} className="row" onPointerEnter={(e) => e.pointerType === 'mouse' && setPreview(o.image ?? null)}>
            {o.image && <img className="row-thumb" src={o.image} alt="" loading="lazy" />}
            <h4 className="row-title">{o.title}</h4>
            <p className="row-desc">{o.description}</p>
            <Stack items={o.stack} />
            <Links project={o} code={p.code} live={p.live} />
          </li>
        ))}
      </ul>

      <h3 className="list-title">
        {p.clientsTitle}
        <span className="tag-private">{p.clientsNote}</span>
      </h3>
      <ul className="rows rows-clients">
        {p.clients.map((c) => (
          <li key={c.title} className="row">
            <h4 className="row-title">{c.title}</h4>
            <p className="row-desc">{c.description}</p>
            <Stack items={c.stack} />
          </li>
        ))}
      </ul>

      <div ref={previewRef} className={`preview ${preview ? 'is-visible' : ''}`} aria-hidden="true">
        {p.others.map(
          (o) =>
            o.image && <img key={o.image} src={o.image} alt="" className={preview === o.image ? 'is-current' : ''} />,
        )}
      </div>
    </section>
  );
}
