import { FC } from 'react';
import {
  DeliveryArea,
  RentalDuration,
  RentalPricing,
  SetupScore,
  WorkspaceItem
} from '@/types/workspace';
import { SelectedItemRow } from '@/components/molecules/selected-item-row';
import { DurationSelector } from '@/components/molecules/duration-selector';
import { DeliverySelector } from '@/components/molecules/delivery-selector';
import { SetupScoreCard } from '@/components/molecules/setup-score-card';
import { Button } from '@/components/atoms/button';
import { formatCurrencyIDR } from '@/utils/pricing';
import { ArrowRightIcon } from '@/components/atoms/icons';

export interface SetupSummaryPanelProps {
  selectedItems: readonly WorkspaceItem[];
  pricing: RentalPricing;
  score: SetupScore;
  duration: RentalDuration;
  deliveryArea: DeliveryArea;
  isRentable: boolean;
  onRemoveItem: (id: string) => void;
  onClearSetup: () => void;
  onSelectDuration: (duration: RentalDuration) => void;
  onSelectArea: (area: DeliveryArea) => void;
  onReviewAndRent: () => void;
}

export const SetupSummaryPanel: FC<SetupSummaryPanelProps> = ({
  selectedItems,
  pricing,
  score,
  duration,
  deliveryArea,
  isRentable,
  onRemoveItem,
  onClearSetup,
  onSelectDuration,
  onSelectArea,
  onReviewAndRent
}) => {
  return (
    <aside className="w-full lg:w-[320px] xl:w-[340px] bg-white border-l border-neutral-200 flex flex-col h-full overflow-hidden select-none">
      <div className="p-4 border-b border-neutral-200 flex items-center justify-between bg-white/95 backdrop-blur-xs">
        <div>
          <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
            Your Setup
          </h2>
          <span className="text-[11px] text-neutral-500">
            {selectedItems.length} items configured
          </span>
        </div>
        {selectedItems.length > 0 && (
          <button
            type="button"
            onClick={onClearSetup}
            className="text-[11px] text-red-500 hover:text-red-700 hover:underline font-semibold cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto p-3.5 pb-24 lg:pb-3.5 space-y-3">
        {selectedItems.length === 0 ? (
          <div className="p-5 text-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 space-y-2">
            <div className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto text-black font-bold text-xs">
              0
            </div>
            <h4 className="text-xs font-bold text-neutral-900">Your setup is empty</h4>
            <p className="text-[11px] text-neutral-500">
              Pick a desk and chair from the catalog to bring your Bali office to life.
            </p>
          </div>
        ) : (
          <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1.5 overscroll-contain">
            {selectedItems.map((item) => (
              <SelectedItemRow
                key={item.id}
                item={item}
                onRemove={onRemoveItem}
              />
            ))}
          </div>
        )}

        <SetupScoreCard score={score} />

        <div className="pt-2 border-t border-neutral-200">
          <DurationSelector
            selectedDuration={duration}
            onSelectDuration={onSelectDuration}
          />
        </div>

        <div className="pt-2 border-t border-neutral-200">
          <DeliverySelector
            selectedArea={deliveryArea}
            onSelectArea={onSelectArea}
          />
        </div>

        <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-2 shadow-2xs">
          <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
            Price Breakdown
          </h3>

          <div className="space-y-1.5 text-xs text-neutral-600">
            <div className="flex justify-between">
              <span>Weekly Rate</span>
              <span className="font-semibold text-neutral-900">
                {formatCurrencyIDR(pricing.itemsSubtotalPerWeek)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Duration ({pricing.durationLabel})</span>
              <span>{pricing.durationWeeks} weeks</span>
            </div>

            {pricing.discountAmount > 0 && (
              <div className="flex justify-between text-red-500 font-semibold">
                <span>Discount ({pricing.discountPercentage}%)</span>
                <span>-{formatCurrencyIDR(pricing.discountAmount)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Delivery & Villa Setup</span>
              <span>{formatCurrencyIDR(pricing.deliveryFee)}</span>
            </div>

            <div className="pt-2 border-t border-neutral-200 flex justify-between items-baseline">
              <span className="text-xs font-bold text-neutral-900">Total Rental</span>
              <div className="text-right">
                <span className="text-base font-extrabold text-neutral-900">
                  {formatCurrencyIDR(pricing.finalTotal)}
                </span>
                <span className="text-[10px] text-neutral-500 block font-medium">
                  ~{formatCurrencyIDR(pricing.effectiveWeeklyRate)}/week
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block p-4 border-t border-neutral-200 bg-white shrink-0">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isRentable}
          onClick={onReviewAndRent}
          className="rounded-full"
        >
          <span>Review & Rent</span>
          <ArrowRightIcon size={16} />
        </Button>
        {!isRentable && (
          <p className="text-[10px] text-center text-red-500 mt-1.5 font-medium">
            Select at least 1 desk and 1 chair to proceed
          </p>
        )}
      </div>
    </aside>
  );
};
