// Dashboard Statistics
export interface DashboardStats {
  parks: number;
  devices: number;
  totalSize: number;
  activeConnections: number;
}

// Power Installation
export interface PowerInstallation {
  id: string;
  name: string;
  installedPower: number;
  totalSize: number;
  percentage: number;
  status: 'online' | 'offline' | 'warning';
  park: string;
}

// HEDNO Request
export interface HednoRequest {
  id: string;
  requestType: string;
  submittedDate: string;
  status: 'completed' | 'pending' | 'active';
  description: string;
  park: string;
}

// Stat Card Props
export interface StatCardData {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

// Power Gauge Data
export interface PowerGaugeData {
  totalPower: number;
  totalSize: number;
  percentage: number;
  isLowPower?: boolean;
  warningThreshold?: number;
}

// Sidebar State
export type SidebarState = 'expanded' | 'compact' | 'collapsed';

export interface SidebarProps {
  activeSection: string;
  onNavigate?: (section: string) => void;
  initialState?: SidebarState;
}

// Animation Variants
export interface AnimationVariants {
  hidden: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
}
