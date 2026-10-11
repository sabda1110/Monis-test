import { FC } from 'react';
import { RentalDuration } from '@/types/workspace';
import { DURATION_OPTIONS } from '@/data/catalog';

export interface DurationSelectorProps {
  selectedDuration: RentalDuration;
  onSelectDuration: (duration: RentalDuration) => void;
}

export const DurationSelector: FC<DurationSelectorProps> = ({
  selectedDuration,
  onSelectDuration
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-900">
          Rental Duration
        </label>
        <span className="text-[10px] text-emerald-600 font-semibold">
          Longer rentals save up to 25%
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {DURATION_OPTIONS.map((option) => {
          const isSelected = selectedDuration === option.id;

          const activeStyle = isSelected
            ? 'bg-black text-white border-black shadow-xs'
            : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50';

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectDuration(option.id)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between ${activeStyle}`}
            >
              <div className="flex items-center justify-between w-full mb-0.5">
                <span className="text-xs font-bold">
                  {option.label}
                </span>
                {option.discountPercentage > 0 && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-emerald-500 text-white'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    Save {option.discountPercentage}%
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] leading-tight ${
                  isSelected ? 'text-white/80' : 'text-neutral-500'
                }`}
              >
                {option.discountLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
