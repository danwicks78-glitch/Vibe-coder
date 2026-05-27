import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { weeks } from '@/constants/curriculum';

const DEVICE_ID_KEY = 'vibe_coder_device_id';
const LOCAL_COMPLETED_KEY = 'vibe_coder_completed';
const LOCAL_WEEK_KEY = 'vibe_coder_active_week';

function getDeviceId(): string {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = 'dev_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

function getLocalCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(LOCAL_COMPLETED_KEY);
    if (raw) return new Set(JSON.parse(raw) as number[]);
  } catch { /* empty */ }
  return new Set();
}

function setLocalCompleted(days: Set<number>) {
  localStorage.setItem(LOCAL_COMPLETED_KEY, JSON.stringify([...days]));
}

function getLocalWeek(): number {
  const raw = localStorage.getItem(LOCAL_WEEK_KEY);
  return raw ? parseInt(raw, 10) : 0;
}

function setLocalWeek(week: number) {
  localStorage.setItem(LOCAL_WEEK_KEY, String(week));
}

export function useProgress() {
  const [completedDays, setCompletedDays] = useState<Set<number>>(getLocalCompleted);
  const [activeWeek, setActiveWeek] = useState(getLocalWeek);

  const totalDays = weeks.flatMap(w => w.days).length;
  const pct = Math.round((completedDays.size / totalDays) * 100);

  useEffect(() => {
    if (!supabase) return;
    const db = supabase;
    const deviceId = getDeviceId();
    const sync = async () => {
      try {
        const { data } = await db
          .from('progress')
          .select('id')
          .eq('device_id', deviceId)
          .maybeSingle();

        const payload = {
          device_id: deviceId,
          completed_days: [...completedDays],
          active_week: activeWeek,
          updated_at: new Date().toISOString(),
        };

        if (data) {
          await db.from('progress').update(payload).eq('device_id', deviceId);
        } else {
          await db.from('progress').insert(payload);
        }
      } catch { /* empty */ }
    };

    const timeout = setTimeout(sync, 500);
    return () => clearTimeout(timeout);
  }, [completedDays, activeWeek]);

  useEffect(() => {
    if (!supabase) return;
    const db = supabase;
    const deviceId = getDeviceId();
    (async () => {
      try {
        const { data } = await db
          .from('progress')
          .select('completed_days, active_week')
          .eq('device_id', deviceId)
          .maybeSingle();

        if (data) {
          const serverDays = new Set(data.completed_days as number[]);
          const localDays = getLocalCompleted();
          const merged = new Set([...localDays, ...serverDays]);
          setCompletedDays(merged);
          setLocalCompleted(merged);
          if (data.active_week !== null) {
            setActiveWeek(data.active_week);
            setLocalWeek(data.active_week);
          }
        }
      } catch { /* empty */ }
    })();
  }, []);

  const toggleComplete = useCallback((dayNum: number) => {
    setCompletedDays(prev => {
      const next = new Set(prev);
      if (next.has(dayNum)) next.delete(dayNum);
      else next.add(dayNum);
      setLocalCompleted(next);
      return next;
    });
  }, []);

  const changeWeek = useCallback((week: number) => {
    setActiveWeek(week);
    setLocalWeek(week);
  }, []);

  return { completedDays, activeWeek, totalDays, pct, toggleComplete, changeWeek };
}
