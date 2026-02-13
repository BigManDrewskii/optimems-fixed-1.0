import { useMemo } from 'react';
import {
  DashboardStats,
  PowerInstallation,
  HednoRequest,
  PowerGaugeData,
} from '../../types/dashboard.types';
import {
  mockDashboardStats,
  mockPowerInstallations,
  mockHednoRequests,
  calculateTotalPower,
  calculateTotalSize,
  calculatePercentage,
} from '../../data/mock-data';

/**
 * Hook to provide mock dashboard data
 * Uses useMemo to prevent unnecessary recalculations
 */
export function useMockData() {
  const stats: DashboardStats = useMemo(() => mockDashboardStats, []);
  const installations: PowerInstallation[] = useMemo(
    () => mockPowerInstallations,
    []
  );
  const requests: HednoRequest[] = useMemo(() => mockHednoRequests, []);

  const powerGauge: PowerGaugeData = useMemo(
    () => ({
      totalPower: calculateTotalPower(),
      totalSize: calculateTotalSize(),
      percentage: calculatePercentage(),
      isLowPower: calculatePercentage() < 30,
      warningThreshold: 30,
    }),
    []
  );

  return {
    stats,
    installations,
    requests,
    powerGauge,
  };
}
