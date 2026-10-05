import { useEffect, type RefObject } from 'react';

type FrameVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number;
  cancelVideoFrameCallback?: (id: number) => void;
};

const SAMPLES = 16;

// Em telas largas o vídeo cabe na altura e sobra espaço dos lados. Em vez de
// faixas de cor fixa, as laterais copiam a cor da borda do quadro atual, então
// cena clara tem lateral clara e cena escura tem lateral escura.
export function useEdgeColor(videoRef: RefObject<HTMLVideoElement | null>, boxRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const video = videoRef.current as FrameVideo | null;
    const box = boxRef.current;
    if (!video || !box) return;

    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = SAMPLES;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // mediana da coluna: um pedaço de texto encostando na borda não muda a cor
    const median = (data: Uint8ClampedArray, x: number) => {
      const px: number[][] = [];
      for (let y = 0; y < SAMPLES; y++) {
        const i = (y * 2 + x) * 4;
        px.push([data[i], data[i + 1], data[i + 2]]);
      }
      px.sort((a, b) => a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]));
      const [r, g, b] = px[SAMPLES >> 1];
      return `rgb(${r} ${g} ${b})`;
    };

    // marca quando sobra espaço dos lados; o CSS usa isso pra esfumar as bordas
    const hasSides = () => {
      const sides = video.clientWidth < box.clientWidth - 1;
      box.classList.toggle('has-sides', sides);
      return sides;
    };

    const sample = () => {
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (!w || !hasSides()) return;
      try {
        ctx.drawImage(video, 0, 0, 2, h, 0, 0, 1, SAMPLES);
        ctx.drawImage(video, w - 2, 0, 2, h, 1, 0, 1, SAMPLES);
        const { data } = ctx.getImageData(0, 0, 2, SAMPLES);
        box.style.setProperty('--reel-left', median(data, 0));
        box.style.setProperty('--reel-right', median(data, 1));
      } catch {
        // sem acesso aos pixels, fica a cor padrão
      }
    };

    let id = 0;
    let stopped = false;
    const byFrame = typeof video.requestVideoFrameCallback === 'function';
    const loop = () => {
      if (stopped) return;
      sample();
      id = byFrame ? video.requestVideoFrameCallback!(loop) : requestAnimationFrame(loop);
    };
    const start = () => {
      stop();
      stopped = false;
      loop();
    };
    const stop = () => {
      stopped = true;
      if (byFrame) video.cancelVideoFrameCallback?.(id);
      else cancelAnimationFrame(id);
    };

    const ro = new ResizeObserver(() => {
      if (hasSides()) sample();
    });
    ro.observe(box);

    video.addEventListener('play', start);
    video.addEventListener('pause', stop);
    video.addEventListener('seeked', sample);
    if (!video.paused) start();
    return () => {
      stop();
      ro.disconnect();
      video.removeEventListener('play', start);
      video.removeEventListener('pause', stop);
      video.removeEventListener('seeked', sample);
    };
  }, [videoRef, boxRef]);
}
