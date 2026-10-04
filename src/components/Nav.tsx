import { useLanguage } from '../i18n';
import { useTheme } from '../hooks/useTheme';
import { TileIcon } from './Azulejo';

export function Nav() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav" aria-label={lang === 'pt' ? 'Principal' : 'Main'}>
      <a className="nav-brand" href="#top">
        <TileIcon className="nav-mark" />
        <span>Thiago Maués</span>
      </a>

      <ul className="nav-links">
        <li><a href="#projetos">{t.nav.projects}</a></li>
        <li><a href="#experiencia">{t.nav.experience}</a></li>
        <li><a href="#stack">{t.nav.stack}</a></li>
        <li><a href="#contato">{t.nav.contact}</a></li>
      </ul>

      <div className="nav-tools">
        <button type="button" className="tool lang" onClick={toggleLang} aria-label={t.ui.switchLang}>
          <span aria-current={lang === 'pt' ? 'true' : undefined}>PT</span>
          <span aria-current={lang === 'en' ? 'true' : undefined}>EN</span>
        </button>
        <button
          type="button"
          className="tool"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="3.6" />
              <path d="M10 1.8v2.2M10 16v2.2M1.8 10h2.2M16 10h2.2M4.2 4.2l1.6 1.6M14.2 14.2l1.6 1.6M4.2 15.8l1.6-1.6M14.2 5.8l1.6-1.6" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16.5 12.3A7 7 0 0 1 7.7 3.5a7 7 0 1 0 8.8 8.8Z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
