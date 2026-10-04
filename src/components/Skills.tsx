import { useLanguage } from '../i18n';

export function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section className="section section-tight" aria-labelledby="ferramentas-titulo" data-c="Ferramentas">
      <div className="container">
        <h2 id="ferramentas-titulo" className="label block-label">
          {s.label}
        </h2>
        <dl className="tools">
          {s.groups.map((g) => (
            <div key={g.name} className="tool-group" data-c="Ferramentas/Grupo">
              <dt>{g.name}</dt>
              <dd>{g.items.join(', ')}</dd>
            </div>
          ))}
        </dl>

        <h2 className="label block-label">{s.eduLabel}</h2>
        <div className="edu">
          <div className="edu-degree" data-c="Formação/Graduação">
            <p className="edu-title">{s.degree.title}</p>
            <p className="muted">
              {s.degree.place} · {s.degree.status}
            </p>
          </div>
          <ul className="edu-courses">
            {s.courses.map((c) => (
              <li key={c.title} data-c="Formação/Curso">
                <span className="edu-course">{c.title}</span>
                <span className="muted">{c.place}</span>
                <span className="edu-year">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
