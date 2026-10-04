import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content, type Content, type Lang } from './data/content';

interface LanguageContextValue {
  lang: Lang;
  t: Content;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    /* storage indisponível: segue para o idioma do navegador */
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = t.meta.title;
  }, [lang, t]);

  // Só grava quando a pessoa escolhe; sem escolha, segue o idioma do navegador.
  const toggleLang = () => {
    const next: Lang = lang === 'pt' ? 'en' : 'pt';
    setLang(next);
    try {
      localStorage.setItem('lang', next);
    } catch {
      /* ignora */
    }
  };

  return <LanguageContext.Provider value={{ lang, t, toggleLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>');
  return ctx;
}
