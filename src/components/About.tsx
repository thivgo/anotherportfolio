import { useLanguage } from '../i18n';
import { SectionHead } from './SectionHead';

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="section about" aria-labelledby="sobre-titulo" id="sobre">
      <SectionHead id="sobre-titulo" label={a.label} title={a.title} motif="az-folha" />
      <div className="about-grid">
        <div className="about-body">
          {a.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="facts">
          {a.facts.map((f) => (
            <div key={f.term} className="fact">
              <dt>{f.term}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
