import { useRef, useState } from 'react';
import { useLanguage } from '../i18n';
import type { Project } from '../data/content';
import { ArrowUpRight, GitHub } from './Icons';

function Links({ project, code, live }: { project: Project; code: string; live: string }) {
  if (!project.repo && !project.demo) return null;
  return (
    <div className="links">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" data-c="Link/Externo">
          {live}
          <ArrowUpRight />
          <span className="sr-only">: {project.title}</span>
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" data-c="Link/GitHub">
          <GitHub />
          {code}
          <span className="sr-only">: {project.title}</span>
        </a>
      )}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack" data-c="Tags/Stack">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

export function Work() {
  const { t } = useLanguage();
  const w = t.work;
  const previewRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const movePreview = (e: React.PointerEvent) => {
    const el = previewRef.current;
    if (!el || e.pointerType !== 'mouse') return;
    el.style.transform = `translate3d(${e.clientX + 28}px, ${e.clientY - 100}px, 0)`;
  };

  return (
    <section className="section" id="trabalho" aria-labelledby="trabalho-titulo" data-c="Trabalho">
      <div className="container section-head">
        <p className="label">{w.label}</p>
        <h2 id="trabalho-titulo" className="section-title">
          {w.title}
        </h2>
      </div>

      <div className="container cases">
        {w.featured.map((p) => (
          <article key={p.title} className="case" data-c="Projeto/Destaque">
            <a
              className="case-media"
              href={p.demo ?? p.repo}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={p.image} alt="" loading="lazy" width={1440} height={900} />
              <span className="case-open">
                {p.demo ? w.openLive : w.openRepo}
                <ArrowUpRight />
              </span>
            </a>
            <div className="case-info">
              <div className="case-heading">
                <p className="label case-meta">
                  {p.kind} <span>{p.year}</span>
                </p>
                <h3 className="case-title">{p.title}</h3>
              </div>
              <p className="case-desc">{p.description}</p>
              <div className="case-extra">
                <Stack items={p.stack} />
                <Links project={p} code={w.code} live={w.live} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container index">
        <h3 className="label index-label">{w.moreLabel}</h3>
        <ul className="rows" onPointerMove={movePreview} onPointerLeave={() => setPreview(null)}>
          {w.others.map((p) => (
            <li
              key={p.title}
              className="row"
              data-c="Projeto/Linha"
              onPointerEnter={(e) => e.pointerType === 'mouse' && setPreview(p.image ?? null)}
            >
              {p.image && <img className="row-thumb" src={p.image} alt="" loading="lazy" />}
              <h4 className="row-title">{p.title}</h4>
              <p className="row-kind">{p.kind}</p>
              <p className="row-desc">{p.description}</p>
              <Links project={p} code={w.code} live={w.live} />
            </li>
          ))}
        </ul>

        <h3 className="label index-label">
          {w.clientsLabel} <span className="muted">· {w.clientsNote}</span>
        </h3>
        <ul className="rows">
          {w.clients.map((p) => (
            <li key={p.title} className="row" data-c="Projeto/Cliente">
              <h4 className="row-title">{p.title}</h4>
              <p className="row-kind">{p.kind}</p>
              <p className="row-desc">{p.description}</p>
              <p className="row-stack">{p.stack.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>

      <div ref={previewRef} className={`preview ${preview ? 'is-visible' : ''}`} aria-hidden="true">
        {w.others.map((p) => p.image && <img key={p.image} src={p.image} alt="" className={preview === p.image ? 'is-current' : ''} />)}
      </div>
    </section>
  );
}
