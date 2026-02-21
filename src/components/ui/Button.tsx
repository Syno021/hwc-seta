import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', fullWidth, className = '', type = 'button', children, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${fullWidth ? 'btn--full' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
