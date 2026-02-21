import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', padding = 'md' }: CardProps) {
  return (
    <div className={`card card--${padding} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function CardHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="card__header">
      <h2 className="card__title">{title}</h2>
      {action && <div className="card__action">{action}</div>}
    </div>
  );
}
