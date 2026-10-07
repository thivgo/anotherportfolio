import { useLanguage } from '../i18n';
import { useTheme } from '../hooks/useTheme';
import { Logo, Moon, Sun } from './Icons';

export function Nav() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav" aria-label={lang === 'pt' ? 'Principal' : 'Main'}>
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          <Logo />
          Thiago Maués
        </a>

        <ul className="nav-links">
          <li><a href="#trabalho">{t.nav.work}</a></li>
          <li><a href="#sobre">{t.nav.about}</a></li>
          <li><a href="#contato">{t.nav.contact}</a></li>
        </ul>

        <div className="nav-tools">
          <button type="button" className="chip" onClick={toggleLang} aria-label={t.ui.switchLang}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            className="chip chip-icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
