import { useLanguage } from '../i18n';
import { SectionHead } from './SectionHead';

export function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section className="section experience" id="experiencia" aria-labelledby="experiencia-titulo">
      <SectionHead id="experiencia-titulo" label={e.label} title={e.title} motif="az-losango" />
      <ol className="jobs">
        {e.jobs.map((job) => (
          <li key={job.org} className="job">
            <p className="job-period">{job.period ?? ''}</p>
            <div className="job-main">
              <h3 className="job-org">{job.org}</h3>
              <p className="job-role">{job.role}</p>
              {job.points.length > 0 && (
                <ul className="job-points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
