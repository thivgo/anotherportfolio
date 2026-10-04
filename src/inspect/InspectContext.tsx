import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface InspectValue {
  inspecting: boolean;
  setInspecting: (v: boolean) => void;
  toggle: () => void;
}

const InspectContext = createContext<InspectValue | null>(null);

function isTyping(el: EventTarget | null) {
  if (!(el instanceof HTMLElement)) return false;
  return el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);
}

export function InspectProvider({ children }: { children: ReactNode }) {
  const [inspecting, setInspecting] = useState(false);
  const toggle = () => setInspecting((v) => !v);

  // Atalho: I liga e desliga, Esc sai.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      if (e.key === 'i' || e.key === 'I') setInspecting((v) => !v);
      if (e.key === 'Escape') setInspecting(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('is-inspecting', inspecting);
  }, [inspecting]);

  return (
    <InspectContext.Provider value={{ inspecting, setInspecting, toggle }}>{children}</InspectContext.Provider>
  );
}

export function useInspect() {
  const ctx = useContext(InspectContext);
  if (!ctx) throw new Error('useInspect precisa estar dentro de <InspectProvider>');
  return ctx;
}
