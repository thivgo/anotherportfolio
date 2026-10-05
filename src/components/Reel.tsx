import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n';
import { attachReel, muteReel, useReelSound } from '../hooks/useReel';
import { useEdgeColor } from '../hooks/useEdgeColor';

const SRC = '/video/reel.mp4';
const POSTER = '/video/reel-poster.jpg';

// Nada fica por cima do vídeo: o som é ligado pelo botão do topo e um clique
// no próprio vídeo pausa ou continua.
export function Reel() {
  const { t } = useLanguage();
  const r = t.reel;
  const ref = useRef<HTMLVideoElement>(null);
  const box = useRef<HTMLElement>(null);
  const sound = useReelSound();
  const [held, setHeld] = useState(false);
  const [paused, setPaused] = useState(true);
  useEdgeColor(ref, box);

  useEffect(() => {
    attachReel(ref.current);
    return () => attachReel(null);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // saiu da tela: pausa e, se estava com som, volta pro modo mudo
          video.pause();
          muteReel();
        } else if (!calm && !held) {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [held]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      setHeld(false);
      video.play().catch(() => {});
    } else {
      setHeld(true);
      video.pause();
    }
  };

  return (
    <section ref={box} className="reel" id="reel" aria-label={r.label}>
      <video
        ref={ref}
        src={SRC}
        poster={POSTER}
        muted
        loop={!sound}
        playsInline
        preload="metadata"
        tabIndex={0}
        aria-label={`${r.label}. ${paused ? r.resume : r.pause}`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggle();
          }
        }}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        onEnded={() => {
          // terminou com som: volta pro loop mudo
          muteReel();
          ref.current?.play().catch(() => {});
        }}
      />
    </section>
  );
}
