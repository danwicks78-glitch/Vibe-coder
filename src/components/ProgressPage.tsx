import { Flame, Trophy, Target } from 'lucide-react';
import { weeks } from '@/constants/curriculum';

interface ProgressPageProps {
  completedDays: Set<number>;
  pct: number;
  totalDays: number;
}

export default function ProgressPage({ completedDays, pct, totalDays }: ProgressPageProps) {
  const completedCount = completedDays.size;

  const weekStats = weeks.map(w => {
    const weekDays = w.days.map(d => d.day);
    const done = weekDays.filter(d => completedDays.has(d)).length;
    return { week: w.week, title: w.title, total: weekDays.length, done, accent: w.accent, lightColor: w.color };
  });

  let streak = 0;
  for (let i = 1; i <= 30; i++) {
    if (completedDays.has(i)) streak++;
    else break;
  }

  const lastCompleted = Math.max(...[...completedDays, 0]);
  const currentPhase = lastCompleted <= 7 ? 1 : lastCompleted <= 14 ? 2 : lastCompleted <= 21 ? 3 : 4;

  return (
    <div className="progress-page">
      <div className="progress-hero">
        <div className="progress-circle-outer">
          <div className="progress-circle-fill" style={{ height: `${pct}%` }} />
          <div className="progress-circle-text">
            <span className="progress-circle-pct">{pct}%</span>
            <span className="progress-circle-label">complete</span>
          </div>
        </div>
        <div className="progress-hero-title">Your Journey</div>
        <div className="progress-hero-sub">
          {completedCount} of {totalDays} days completed
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <Flame size={20} color="#e84500" />
          <div className="stat-value">{streak}</div>
          <div className="stat-label">Day streak</div>
        </div>
        <div className="stat-card">
          <Trophy size={20} color="#f5a623" />
          <div className="stat-value">{currentPhase}</div>
          <div className="stat-label">Phase reached</div>
        </div>
        <div className="stat-card">
          <Target size={20} color="#3D8B1F" />
          <div className="stat-value">{30 - lastCompleted}</div>
          <div className="stat-label">Days left</div>
        </div>
      </div>

      <div className="section-heading">Weekly Breakdown</div>
      {weekStats.map(ws => {
        const weekPct = Math.round((ws.done / ws.total) * 100);
        return (
          <div key={ws.week} className="week-stat">
            <div className="week-stat-info">
              <div className="week-stat-badge" style={{ backgroundColor: ws.lightColor, color: ws.accent }}>
                {ws.week}
              </div>
              <div className="week-stat-text">
                <div className="week-stat-title">{ws.title}</div>
                <div className="week-stat-sub">{ws.done}/{ws.total} days</div>
              </div>
              <div className="week-stat-pct" style={{ color: ws.accent }}>{weekPct}%</div>
            </div>
            <div className="week-stat-track">
              <div className="week-stat-fill" style={{ width: `${weekPct}%`, backgroundColor: ws.accent }} />
            </div>
          </div>
        );
      })}

      <div className="section-heading" style={{ marginTop: 28 }}>Day Map</div>
      <div className="day-grid">
        {weeks.flatMap(w => w.days).map(d => {
          const isDone = completedDays.has(d.day);
          const weekIdx = Math.floor((d.day - 1) / 7);
          const accent = weeks[weekIdx]?.accent ?? '#e84500';
          return (
            <div
              key={d.day}
              className={`day-grid-dot ${isDone ? 'done' : ''}`}
              style={isDone ? {
                backgroundColor: accent,
                borderColor: accent,
              } : undefined}
            >
              {d.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
