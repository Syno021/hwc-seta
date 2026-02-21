import './StatusBadge.css';

type Status = 'approved' | 'pending' | 'rejected';

interface StatusBadgeProps {
  status: Status;
  children?: React.ReactNode;
}

const labels: Record<Status, string> = {
  approved: 'Approved',
  pending: 'Pending',
  rejected: 'Rejected',
};

export function StatusBadge({ status, children }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {children ?? labels[status]}
    </span>
  );
}
