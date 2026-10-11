import { FC } from 'react';
import { WorkspaceItem } from '@/types/workspace';
import { CloseIcon } from '@/components/atoms/icons';
import { formatCurrencyIDR } from '@/utils/pricing';

export interface SelectedItemRowProps {
  item: WorkspaceItem;
  onRemove: (itemId: string) => void;
}

export const SelectedItemRow: FC<SelectedItemRowProps> = ({ item, onRemove }) => {
  return (
    <div className="h-[46px] min-h-[46px] max-h-[46px] flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-2xs select-none">
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none mb-1">
          <span className="text-[9px] uppercase tracking-wider font-bold text-neutral-700 bg-neutral-100 px-1.5 py-0.5 rounded-sm shrink-0">
            {item.category}
          </span>
          <h5 className="text-xs font-semibold text-neutral-900 truncate">
            {item.name}
          </h5>
        </div>
        <p className="text-[11px] font-semibold text-neutral-800 leading-none">
          {formatCurrencyIDR(item.pricePerWeek)}{' '}
          <span className="text-[9px] text-neutral-400 font-normal">/wk</span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name}`}
        className="w-6 h-6 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors cursor-pointer shrink-0"
      >
        <CloseIcon size={13} />
      </button>
    </div>
  );
};
