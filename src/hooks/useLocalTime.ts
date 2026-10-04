import { useEffect, useState } from 'react';

const format = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Belem',
  hour: '2-digit',
  minute: '2-digit',
});

/** Hora atual em Belém (UTC-3), atualizada a cada 15 segundos. */
export function useLocalTime() {
  const [time, setTime] = useState(() => format.format(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setTime(format.format(new Date())), 15_000);
    return () => clearInterval(id);
  }, []);

  return time;
}
