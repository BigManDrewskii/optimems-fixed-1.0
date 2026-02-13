import {
  DashboardStats,
  PowerInstallation,
  HednoRequest,
} from '../types/dashboard.types';

// Mock dashboard statistics
export const mockDashboardStats: DashboardStats = {
  parks: 12,
  devices: 248,
  totalSize: 450,
  activeConnections: 235,
};

// Mock power installations
export const mockPowerInstallations: PowerInstallation[] = [
  {
    id: '1',
    name: 'Athens Central',
    installedPower: 85,
    totalSize: 100,
    percentage: 85,
    status: 'online',
    park: 'Athens',
  },
  {
    id: '2',
    name: 'Thessaloniki Solar',
    installedPower: 62,
    totalSize: 80,
    percentage: 77.5,
    status: 'online',
    park: 'Thessaloniki',
  },
  {
    id: '3',
    name: 'Patras Energy Hub',
    installedPower: 45,
    totalSize: 60,
    percentage: 75,
    status: 'warning',
    park: 'Patras',
  },
  {
    id: '4',
    name: 'Heraklion Plant',
    installedPower: 38,
    totalSize: 50,
    percentage: 76,
    status: 'online',
    park: 'Heraklion',
  },
  {
    id: '5',
    name: 'Larissa Array',
    installedPower: 25,
    totalSize: 40,
    percentage: 62.5,
    status: 'offline',
    park: 'Larissa',
  },
];

// Mock HEDNO requests
export const mockHednoRequests: HednoRequest[] = [
  {
    id: '1',
    requestType: 'Grid Connection',
    submittedDate: '2024-01-15',
    status: 'completed',
    description: 'New 100kW connection approval',
    park: 'Athens',
  },
  {
    id: '2',
    requestType: 'Capacity Upgrade',
    submittedDate: '2024-01-18',
    status: 'active',
    description: 'Upgrade from 50kW to 80kW',
    park: 'Thessaloniki',
  },
  {
    id: '3',
    requestType: 'Maintenance Schedule',
    submittedDate: '2024-01-20',
    status: 'pending',
    description: 'Quarterly maintenance request',
    park: 'Patras',
  },
  {
    id: '4',
    requestType: 'Grid Connection',
    submittedDate: '2024-01-22',
    status: 'pending',
    description: 'New 60kW connection application',
    park: 'Heraklion',
  },
];

// Calculate total power from installations
export const calculateTotalPower = () => {
  return mockPowerInstallations.reduce(
    (sum, installation) => sum + installation.installedPower,
    0
  );
};

// Calculate total size from installations
export const calculateTotalSize = () => {
  return mockPowerInstallations.reduce(
    (sum, installation) => sum + installation.totalSize,
    0
  );
};

// Calculate overall percentage
export const calculatePercentage = () => {
  const totalPower = calculateTotalPower();
  const totalSize = calculateTotalSize();
  return Math.round((totalPower / totalSize) * 100);
};
