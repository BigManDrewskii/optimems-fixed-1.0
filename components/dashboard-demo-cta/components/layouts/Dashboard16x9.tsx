import { motion } from 'framer-motion';
import { useMockData } from '../hooks/useMockData';
import StatCardsDemo from '../widgets/StatCardsDemo';
import PowerBarsDemo from '../widgets/PowerBarsDemo';
import SidebarDemo from '../widgets/SidebarDemo';

export function Dashboard16x9() {
  const { stats, installations } = useMockData();

  // Prepare stat cards data
  const statCardsData = [
    {
      title: 'Parks',
      value: stats.parks,
      subtitle: 'Active locations',
      trend: { value: '+2 this month', isPositive: true },
    },
    {
      title: 'Devices',
      value: stats.devices,
      subtitle: 'Connected',
      trend: { value: '+12 this week', isPositive: true },
    },
    {
      title: 'Total Size',
      value: stats.totalSize,
      subtitle: 'MWp installed',
      trend: { value: '+5% vs last month', isPositive: true },
    },
    {
      title: 'Active Now',
      value: stats.activeConnections,
      subtitle: 'Online devices',
      trend: { value: '98.5% uptime', isPositive: true },
    },
  ];

  return (
    <div className="h-full flex bg-[var(--dashboard-bg)] rounded-lg overflow-hidden">
      {/* Sidebar - Fixed width to match content */}
      <SidebarDemo autoCycle={false} />

      {/* Main Canvas - 2/3 width - No animations */}
      <div className="flex-1 py-3 px-3 overflow-y-auto space-y-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          div > div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {/* Stat Cards - Full width row */}
        <div className="bg-[var(--dashboard-surface)] rounded-lg border border-[var(--dashboard-border)] p-3">
          <h3 className="text-[var(--dashboard-text-primary)] text-sm font-semibold mb-3">Overview</h3>
          <StatCardsDemo stats={statCardsData} columns={1} />
        </div>

        {/* Power Bars - Full width */}
        <div className="bg-[var(--dashboard-surface)] rounded-lg border border-[var(--dashboard-border)] p-3">
          <h3 className="text-[var(--dashboard-text-primary)] text-sm font-semibold mb-3">Installations</h3>
          <PowerBarsDemo installations={installations} maxItems={5} />
        </div>
      </div>
    </div>
  );
}
