import { FC, ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'teal' | 'coral' | 'sand' | 'neutral' | 'outline' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'sm',
  className = ''
}) => {
  const variantStyles = {
    teal: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold',
    coral: 'bg-[#EF4444] text-white border-transparent font-bold shadow-2xs',
    sand: 'bg-neutral-100 text-neutral-800 border-neutral-200 font-medium',
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    outline: 'bg-transparent text-neutral-600 border-neutral-300',
    dark: 'bg-black text-white border-black font-semibold'
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1'
  }[size];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </span>
  );
};
