import { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { weeks } from '@/constants/curriculum';
import type { WeekData, DayData } from '@/constants/curriculum';

interface CurriculumPageProps {
  completedDays: Set<number>;
  activeWeek: number;
  totalDays: number;
  pct: number;
  toggleComplete: (day: number) => void;
  changeWeek: (week: number) => void;
}

export default function CurriculumPage({
  completedDays,
  activeWeek,
  totalDays,
  pct,
  toggleComplete,
  changeWeek,
}: CurriculumPageProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const currentWeek = weeks[activeWeek]!;

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="badge">30-Day Programme</div>
          <h1 className="header-title">Zero to Vibe Coder</h1>
          <p className="header-subtitle">
            Build real apps with AI — no CS degree required
          </p>
          <div className="progress-wrap">
            <div className="progress-labels">
              <span>{completedDays.size} / {totalDays} days done</span>
              <span>{pct}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
      </header>

      <div className="content">
        <WeekTabs
          activeWeek={activeWeek}
          onSelect={(i) => { changeWeek(i); setExpandedDay(null); }}
        />
        <WeekHeader week={currentWeek} weekIndex={activeWeek} />
        <DayList
          week={currentWeek}
          completedDays={completedDays}
          expandedDay={expandedDay}
          onToggleDay={setExpandedDay}
          onToggleComplete={toggleComplete}
        />
        <p className="footer-text">
          Tap any day to expand · Mark days complete to track progress
        </p>
      </div>
    </>
  );
}

function WeekTabs({ activeWeek, onSelect }: { activeWeek: number; onSelect: (i: number) => void }) {
  return (
    <div className="week-tabs">
      {weeks.map((w, i) => {
        const isActive = activeWeek === i;
        return (
          <button
            key={i}
            className={`week-tab ${isActive ? 'active' : ''}`}
            style={isActive ? {
              backgroundColor: w.color,
              color: w.accent,
              borderColor: w.accent + '40',
            } : undefined}
            onClick={() => onSelect(i)}
          >
            <div className="week-tab-label">Wk {w.week}</div>
            <div className="week-tab-title">{w.title}</div>
          </button>
        );
      })}
    </div>
  );
}

function WeekHeader({ week, weekIndex }: { week: WeekData; weekIndex: number }) {
  return (
    <div
      className="week-header"
      style={{
        backgroundColor: week.color + '18',
        borderColor: week.accent + '30',
      }}
    >
      <div
        className="week-header-badge"
        style={{ backgroundColor: week.color, color: week.accent }}
      >
        {weekIndex + 1}
      </div>
      <div>
        <div className="week-header-title">{week.title}</div>
        <div className="week-header-subtitle">
          {week.subtitle} · Days {week.days[0]!.day}–{week.days[week.days.length - 1]!.day}
        </div>
      </div>
    </div>
  );
}

function DayList({
  week,
  completedDays,
  expandedDay,
  onToggleDay,
  onToggleComplete,
}: {
  week: WeekData;
  completedDays: Set<number>;
  expandedDay: number | null;
  onToggleDay: (day: number | null) => void;
  onToggleComplete: (day: number) => void;
}) {
  return (
    <div className="day-list">
      {week.days.map((d) => (
        <DayCard
          key={d.day}
          day={d}
          weekColor={week.color}
          weekAccent={week.accent}
          isOpen={expandedDay === d.day}
          isDone={completedDays.has(d.day)}
          onToggle={() => onToggleDay(expandedDay === d.day ? null : d.day)}
          onToggleComplete={() => onToggleComplete(d.day)}
        />
      ))}
    </div>
  );
}

function DayCard({
  day,
  weekColor,
  weekAccent,
  isOpen,
  isDone,
  onToggle,
  onToggleComplete,
}: {
  day: DayData;
  weekColor: string;
  weekAccent: string;
  isOpen: boolean;
  isDone: boolean;
  onToggle: () => void;
  onToggleComplete: () => void;
}) {
  return (
    <div
      className={`day-card ${isDone ? 'done' : ''}`}
      style={{ borderColor: isOpen ? weekAccent + '60' : undefined }}
      onClick={onToggle}
    >
      <div className="day-row">
        <div
          className={`day-badge ${isDone ? 'done' : ''}`}
          style={isDone ? {
            backgroundColor: weekAccent,
            borderColor: weekAccent,
          } : undefined}
        >
          {isDone ? <Check size={14} strokeWidth={3} /> : day.day}
        </div>
        <div className="day-info">
          <div className="day-title">{day.title}</div>
          <div className="day-goal">Goal: {day.goal}</div>
        </div>
        <div className={`day-chevron ${isOpen ? 'open' : ''}`}>
          <ChevronRight size={18} />
        </div>
      </div>

      {isOpen && (
        <div className="day-expanded" style={{ borderColor: weekAccent + '20' }}>
          <div className="day-expanded-inner">
            <div className="section-label" style={{ color: weekAccent }}>
              Today's tasks
            </div>

            {day.tasks.map((task, ti) => (
              <div key={ti} className="task-row">
                <div
                  className="task-num"
                  style={{
                    backgroundColor: weekColor + '30',
                    borderColor: weekAccent + '40',
                    color: weekAccent,
                  }}
                >
                  {ti + 1}
                </div>
                <span className="task-text">{task}</span>
              </div>
            ))}

            <div
              className="tip-box"
              style={{
                backgroundColor: weekColor + '15',
                borderColor: weekAccent + '25',
              }}
            >
              {day.tip}
            </div>

            <button
              className={`complete-btn ${isDone ? 'done' : ''}`}
              style={isDone ? undefined : { backgroundColor: weekAccent }}
              onClick={(e) => { e.stopPropagation(); onToggleComplete(); }}
            >
              {isDone ? 'Mark incomplete' : 'Mark complete'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
