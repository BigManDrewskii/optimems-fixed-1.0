import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Zap,
  Map,
  BarChart3,
  Users,
  User,
  FileText,
  FileCheck,
} from '@/lib/icons';
import { SidebarState } from '../../types/dashboard.types';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, section: 'SOLARCONTROL' },
  { id: 'containment', label: 'Containment', icon: Zap, section: 'SOLARCONTROL' },
  { id: 'overview', label: 'Overview', icon: Map, section: 'PARKS' },
  { id: 'insights', label: 'Insights', icon: BarChart3, section: 'PARKS' },
  { id: 'management', label: 'Management', icon: Users, section: 'ADMIN' },
  { id: 'profile', label: 'Profile', icon: User, section: 'ACCOUNT' },
  { id: 'terms', label: 'Terms & Conditions', icon: FileCheck, section: 'ACCOUNT' },
  { id: 'documents', label: 'Documents', icon: FileText, section: 'ACCOUNT' },
];

const sections = ['SOLARCONTROL', 'PARKS', 'ADMIN', 'ACCOUNT'];

const sidebarWidths = {
  expanded: 256,
  compact: 128,
  collapsed: 64,
};

interface SidebarDemoProps {
  activeSection?: string;
  autoCycle?: boolean;
  cycleInterval?: number;
}

export default function SidebarDemo({
  activeSection = 'dashboard',
  autoCycle = true,
  cycleInterval = 3000,
}: SidebarDemoProps) {
  const [sidebarState, setSidebarState] = useState<SidebarState>('expanded');

  // Auto-cycle through states
  useEffect(() => {
    if (!autoCycle) return;

    const interval = setInterval(() => {
      setSidebarState((prev) => {
        if (prev === 'expanded') return 'compact';
        if (prev === 'compact') return 'collapsed';
        return 'expanded';
      });
    }, cycleInterval);

    return () => clearInterval(interval);
  }, [autoCycle, cycleInterval]);

  const currentWidth = sidebarWidths[sidebarState];
  const showLabels = sidebarState === 'expanded';
  const showSectionHeaders = sidebarState === 'expanded';
  const isCentered = sidebarState === 'collapsed';

  return (
    <motion.div
      animate={{ width: currentWidth }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[var(--dashboard-sidebar-bg)] h-full border-r border-[var(--dashboard-border)] flex flex-col overflow-hidden"
    >
      {/* Logo Section */}
      <div className="p-4 border-b border-[var(--dashboard-border)] flex items-center justify-between">
        <motion.div
          animate={{
            justifyContent: isCentered ? 'center' : 'flex-start',
          }}
          className="flex items-center space-x-2"
        >
          <img
            src="/optimems-logos/optimems-logo-icon-dark.svg"
            alt="OptiMems"
            className="w-6 h-6 flex-shrink-0"
          />
          <AnimatePresence mode="wait">
            {showLabels && (
              <motion.img
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                src="/optimems-logos/optimems-logo-fontmark-dark.svg"
                alt="OptiMems"
                className="h-5 flex-shrink-0"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Collapse indicator */}
        <AnimatePresence mode="wait">
          {showLabels && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[var(--dashboard-text-secondary)]"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--dashboard-accent)] animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        {sections.map((section) => (
          <div key={section} className="mb-4">
            <AnimatePresence mode="wait">
              {showSectionHeaders && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 mb-2"
                >
                  <h3 className="text-[var(--dashboard-accent)] text-xs font-semibold tracking-wider">
                    {section}
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>

            {menuItems
              .filter((item) => item.section === section)
              .map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeSection;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`w-full px-4 py-2.5 flex items-center transition-all ${
                      isActive
                        ? 'bg-[var(--dashboard-surface)] text-[var(--dashboard-text-primary)] border-l-2 border-[var(--dashboard-accent)]'
                        : 'text-[var(--dashboard-text-secondary)] hover:text-[var(--dashboard-text-primary)] hover:bg-[var(--dashboard-surface)]/50'
                    } ${isCentered ? 'justify-center' : 'space-x-3'}`}
                    title={!showLabels ? item.label : ''}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <AnimatePresence mode="wait">
                      {showLabels && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
