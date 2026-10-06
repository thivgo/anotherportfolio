import { useSyncExternalStore } from 'react';

// O botão de som fica no topo e o vídeo mais abaixo, então os dois
// conversam por aqui em vez de passar props pela página inteira.
let video: HTMLVideoElement | null = null;
let sound = false;
const listeners = new Set<() => void>();

function setSound(next: boolean) {
  if (sound === next) return;
  sound = next;
  listeners.forEach((fn) => fn());
}

export function attachReel(el: HTMLVideoElement | null) {
  video = el;
}

// O áudio do reel foi masterizado bem alto, então ele toca a 6%, como som
// ambiente, e sobe aos poucos em vez de começar de uma vez.
const VOLUME = 0.06;
const FADE_MS = 600;
let fade = 0;

function fadeIn(el: HTMLVideoElement) {
  cancelAnimationFrame(fade);
  const start = performance.now();
  const step = (now: number) => {
    // o tempo do quadro pode vir um pouco antes de `start`; volume negativo dá erro
    const p = Math.min(Math.max((now - start) / FADE_MS, 0), 1);
    el.volume = VOLUME * p;
    if (p < 1) fade = requestAnimationFrame(step);
  };
  el.volume = 0;
  fade = requestAnimationFrame(step);
}

export function playWithSound() {
  if (!video) return;
  fadeIn(video);
  video.muted = false;
  video.currentTime = 0;
  video.play().catch(() => {});
  setSound(true);
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // se o vídeo ocupa quase a tela toda, encosta embaixo do menu; senão, centraliza
  const tall = video.offsetHeight > innerHeight - 72 - 128;
  video.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: tall ? 'start' : 'center' });
}

export function muteReel() {
  if (!video) return;
  cancelAnimationFrame(fade);
  video.muted = true;
  setSound(false);
}

export function useReelSound() {
  return useSyncExternalStore(
    (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    () => sound,
  );
}
