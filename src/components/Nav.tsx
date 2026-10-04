import { useLanguage } from '../i18n';
import { useTheme } from '../hooks/useTheme';
import { useInspect } from '../inspect/InspectContext';
import { Crosshair, Moon, Sun } from './Icons';

export function Nav() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { inspecting, toggle } = useInspect();

  return (
    <nav className="nav" aria-label={lang === 'pt' ? 'Principal' : 'Main'} data-c="Nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top" data-c="Nav/Marca">
          Thiago Maués
        </a>

        <ul className="nav-links">
          <li><a href="#trabalho">{t.nav.work}</a></li>
          <li><a href="#sobre">{t.nav.about}</a></li>
          <li><a href="#contato">{t.nav.contact}</a></li>
        </ul>

        <div className="nav-tools">
          <button
            type="button"
            className={`chip inspect-toggle ${inspecting ? 'is-on' : ''}`}
            onClick={toggle}
            aria-pressed={inspecting}
            data-inspect-toggle
          >
            <Crosshair />
            <span className="inspect-label">{t.nav.inspect}</span>
            <kbd>I</kbd>
          </button>
          <button type="button" className="chip" onClick={toggleLang} aria-label={t.ui.switchLang} data-c="Nav/Idioma">
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            className="chip chip-icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark}
            data-c="Nav/Tema"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
