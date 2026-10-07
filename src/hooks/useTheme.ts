import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

// O script inline do index.html já definiu data-theme antes da pintura.
function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Só grava quando a pessoa escolhe; sem escolha, segue o tema do sistema.
  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignora */
    }
  };

  return { theme, toggleTheme };
}

// Acompanha o data-theme do <html> de qualquer lugar da página: o botão do
// menu muda o atributo, e quem só precisa ler o tema (como o reel) reage aqui.
export function useDocTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    const root = document.documentElement;
    const mo = new MutationObserver(() => setTheme(readTheme()));
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    setTheme(readTheme());
    return () => mo.disconnect();
  }, []);

  return theme;
}
