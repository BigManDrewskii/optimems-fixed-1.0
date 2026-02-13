import { motion } from 'framer-motion';
import { HednoRequest } from '../../types/dashboard.types';
import { useStaggeredAnimation } from '../hooks';

interface RequestCardProps {
  request: HednoRequest;
  index: number;
}

function RequestCard({ request, index }: RequestCardProps) {
  const getStatusColor = () => {
    switch (request.status) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'active':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-[var(--dashboard-surface)] text-[var(--dashboard-text-secondary)] border-[var(--dashboard-border)]';
    }
  };

  const getStatusLabel = () => {
    switch (request.status) {
      case 'completed':
        return 'Completed';
      case 'pending':
        return 'Pending';
      case 'active':
        return 'Active';
      default:
        return 'Unknown';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative bg-[var(--dashboard-card-bg)] rounded-lg p-4 border border-[var(--dashboard-border)] hover:border-[var(--dashboard-accent)]/30 transition-all hover:scale-[1.02]"
    >
      {/* Timeline connector */}
      {index < 4 && (
        <div className="absolute left-6 top-12 w-0.5 h-4 bg-[var(--dashboard-surface)]" />
      )}

      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span
              className={`px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor()}`}
            >
              {getStatusLabel()}
            </span>
            <span className="text-[var(--dashboard-text-secondary)] text-xs">{request.submittedDate}</span>
          </div>
          <h4 className="text-[var(--dashboard-text-primary)] text-sm font-semibold mb-1">
            {request.requestType}
          </h4>
          <p className="text-[var(--dashboard-text-secondary)] text-xs">{request.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--dashboard-border)]/50">
        <span className="text-[var(--dashboard-text-secondary)] text-xs">{request.park} Park</span>
        <span className="text-[var(--dashboard-text-secondary)] text-xs">ID: {request.id}</span>
      </div>
    </motion.div>
  );
}

interface RequestCardsDemoProps {
  requests: HednoRequest[];
  maxItems?: number;
}

export default function RequestCardsDemo({
  requests,
  maxItems = 4,
}: RequestCardsDemoProps) {
  const { containerVariants } = useStaggeredAnimation(0.1);
  const displayRequests = requests.slice(0, maxItems);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      <h3 className="text-[var(--dashboard-text-primary)] text-sm font-semibold mb-3">Recent Requests</h3>
      {displayRequests.map((request, index) => (
        <RequestCard key={request.id} request={request} index={index} />
      ))}
    </motion.div>
  );
}
