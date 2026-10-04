import { useLanguage } from '../i18n';
import { PROFILE } from '../data/content';

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="section" id="sobre" aria-labelledby="sobre-titulo" data-c="Sobre">
      <div className="container grid about">
        <figure className="about-photo" data-c="Sobre/Foto">
          <img src={PROFILE.photo} alt={a.photoAlt} width={460} height={460} loading="lazy" />
          <figcaption className="label">{a.photoCaption}</figcaption>
        </figure>

        <div className="about-text">
          <p className="label">{a.label}</p>
          <h2 id="sobre-titulo" className="section-title">
            {a.title}
          </h2>
          <div className="about-body" data-c="Sobre/Texto">
            {a.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
