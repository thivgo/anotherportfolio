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
