import { FC } from 'react';
import { formatCurrencyIDR } from '@/utils/pricing';

export interface PriceTagProps {
  amount: number;
  periodLabel?: string;
  size?: 'sm' | 'md' | 'lg';
  highlight?: boolean;
  className?: string;
}

export const PriceTag: FC<PriceTagProps> = ({
  amount,
  periodLabel = '/week',
  size = 'md',
  highlight = false,
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-xs',
    md: 'text-sm font-semibold',
    lg: 'text-lg sm:text-xl font-bold'
  }[size];

  const colorStyle = highlight ? 'text-[#EF4444]' : 'text-neutral-900';

  return (
    <div className={`inline-flex items-baseline gap-1 whitespace-nowrap select-none ${className}`}>
      <span className={`whitespace-nowrap font-bold ${sizeStyles} ${colorStyle}`}>
        {formatCurrencyIDR(amount)}
      </span>
      {periodLabel && (
        <span className="text-xs text-neutral-500 font-medium whitespace-nowrap">
          {periodLabel}
        </span>
      )}
    </div>
  );
};
