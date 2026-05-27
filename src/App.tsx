import { useState } from 'react';
import { BookOpen, ChartBar as BarChart3, Wrench } from 'lucide-react';
import CurriculumPage from './components/CurriculumPage';
import ProgressPage from './components/ProgressPage';
import ToolsPage from './components/ToolsPage';
import { useProgress } from './hooks/useProgress';

type Tab = 'curriculum' | 'progress' | 'tools';

const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
  { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
  { id: 'progress', label: 'Progress', icon: BarChart3 },
  { id: 'tools', label: 'Tool Stack', icon: Wrench },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('curriculum');
  const progress = useProgress();

  return (
    <div className="app">
      {activeTab === 'curriculum' && <CurriculumPage {...progress} />}
      {activeTab === 'progress' && <ProgressPage {...progress} />}
      {activeTab === 'tools' && <ToolsPage />}

      <nav className="tab-nav">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`tab-nav-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={22} strokeWidth={2} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
