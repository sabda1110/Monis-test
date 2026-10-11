import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'coral' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  ...rest
}) => {
  const hasHidden = className.includes('hidden');
  const baseDisplay = hasHidden ? '' : 'inline-flex';
  const baseStyles =
    `${baseDisplay} items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100`;

  const variantStyles = {
    primary:
      'bg-black text-white hover:bg-neutral-800 focus:ring-black shadow-xs',
    coral:
      'bg-[#EF4444] text-white hover:bg-[#DC2626] focus:ring-[#EF4444] shadow-xs',
    secondary:
      'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200',
    outline:
      'border border-neutral-300 text-neutral-900 bg-white hover:bg-neutral-50 focus:ring-neutral-400',
    ghost:
      'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-300'
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  }[size];

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${widthStyle} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
