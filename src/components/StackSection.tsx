import { useLanguage } from '../i18n';
import { SectionHead } from './SectionHead';

export function StackSection() {
  const { t } = useLanguage();
  const s = t.stack;
  const ed = t.education;

  return (
    <section className="section stack" id="stack" aria-labelledby="stack-titulo">
      <SectionHead id="stack-titulo" label={s.label} title={s.title} motif="az-folha" />
      <dl className="stack-grid">
        {s.groups.map((g) => (
          <div key={g.name} className="stack-group">
            <dt>{g.name}</dt>
            <dd>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div className="education" aria-labelledby="formacao-titulo">
        <h3 id="formacao-titulo" className="list-title">
          {ed.label}
        </h3>
        <div className="education-grid">
          <div className="degree">
            <p className="degree-title">{ed.degree.title}</p>
            <p className="degree-place">{ed.degree.place}</p>
            <p className="degree-status">{ed.degree.status}</p>
          </div>
          <ul className="courses" aria-label={ed.coursesTitle}>
            {ed.courses.map((c) => (
              <li key={c.title}>
                <span className="course-year">{c.year}</span>
                <span className="course-title">{c.title}</span>
                <span className="course-place">{c.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
