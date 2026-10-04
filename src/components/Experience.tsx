import { useLanguage } from '../i18n';

export function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section className="section section-tight" aria-labelledby="experiencia-titulo" data-c="Experiência">
      <div className="container">
        <h2 id="experiencia-titulo" className="label block-label">
          {e.label}
        </h2>
        <ol className="jobs">
          {e.jobs.map((job) => (
            <li key={job.org} className="job" data-c="Experiência/Item">
              <p className="job-period">{job.period}</p>
              <div className="job-head">
                <h3 className="job-org">{job.org}</h3>
                <p className="job-role">{job.role}</p>
              </div>
              {job.points.length > 0 && (
                <ul className="job-points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
