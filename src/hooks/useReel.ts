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
  if (el !== video) graph = null;
  video = el;
}

// O áudio do reel foi masterizado bem alto, então ele toca a 3%, como som
// ambiente, e sobe aos poucos em vez de começar de uma vez.
const VOLUME = 0.03;
const FADE_S = 0.6;

// O volume passa por um GainNode em vez de `video.volume`: o Safari do iPhone
// ignora `video.volume` e tocaria sempre no volume do aparelho.
let graph: { ctx: AudioContext; gain: GainNode } | null = null;

function audioGraph(el: HTMLVideoElement) {
  if (graph) return graph;
  try {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    ctx.createMediaElementSource(el).connect(gain).connect(ctx.destination);
    graph = { ctx, gain };
  } catch {
    graph = null;
  }
  return graph;
}

let fade = 0;

function fadeIn(el: HTMLVideoElement) {
  const g = audioGraph(el);
  if (g) {
    g.ctx.resume().catch(() => {});
    el.volume = 1;
    const now = g.ctx.currentTime;
    g.gain.gain.cancelScheduledValues(now);
    g.gain.gain.setValueAtTime(0, now);
    g.gain.gain.linearRampToValueAtTime(VOLUME, now + FADE_S);
    return;
  }
  // sem Web Audio: sobe o volume do próprio vídeo
  cancelAnimationFrame(fade);
  const start = performance.now();
  const step = (now: number) => {
    // o tempo do quadro pode vir um pouco antes de `start`; volume negativo dá erro
    const p = Math.min(Math.max((now - start) / (FADE_S * 1000), 0), 1);
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
  if (graph) {
    const now = graph.ctx.currentTime;
    graph.gain.gain.cancelScheduledValues(now);
    graph.gain.gain.setValueAtTime(0, now);
  }
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
