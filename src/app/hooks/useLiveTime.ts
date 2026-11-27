'use client';

import { useEffect, useState } from 'react';

const date = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const clock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'America/Sao_Paulo',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

export function useLiveTime() {
  const [time, setTime] = useState<{ date: string; time: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime({ date: date.format(now), time: clock.format(now) });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
