import { Cpu, Globe, Code, Database, Rocket, GitBranch, Palette, LayoutGrid } from 'lucide-react';
import { toolStack } from '@/constants/curriculum';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'Claude': Cpu,
  'Bolt.new': Globe,
  'Cursor': Code,
  'Supabase': Database,
  'Vercel': Rocket,
  'GitHub': GitBranch,
  'Tailwind CSS': Palette,
  'shadcn/ui': LayoutGrid,
};

export default function ToolsPage() {
  return (
    <div className="tools-page">
      <h1 className="tools-title">Your Tool Stack</h1>
      <p className="tools-subtitle">The essential toolkit for vibe coding</p>

      <div className="tools-grid">
        {toolStack.map(tool => {
          const Icon = iconMap[tool.name] ?? Cpu;
          return (
            <div key={tool.name} className="tool-card">
              <div className="tool-icon">
                <Icon size={22} strokeWidth={2} />
              </div>
              <div>
                <div className="tool-name">{tool.name}</div>
                <div className="tool-role">{tool.role}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="tools-tip">
        <div className="tools-tip-title">Getting started</div>
        <div className="tools-tip-text">
          Start with Claude for thinking and planning. Use Bolt.new for instant
          app scaffolding. Add Supabase when you need data persistence. Deploy
          with Vercel when you're ready to share.
        </div>
      </div>
    </div>
  );
}
