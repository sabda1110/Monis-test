'use client';

import { FC } from 'react';
import {
  CustomerCheckoutDetails,
  RentalPricing,
  StageLightingMode,
  WorkspaceItem,
  WorkspaceSetup
} from '@/types/workspace';
import { Button } from '@/components/atoms/button';
import { formatCurrencyIDR } from '@/utils/pricing';
import { CheckIcon, VillaIcon } from '@/components/atoms/icons';
import { StageRoomBackdrop } from '@/components/molecules/stage-room-backdrop';
import { StageScene } from '@/components/molecules/stage-scene';

export interface SuccessViewProps {
  setup: WorkspaceSetup;
  selectedItems: readonly WorkspaceItem[];
  pricing: RentalPricing;
  lightingMode: StageLightingMode;
  customerDetails: CustomerCheckoutDetails;
  deliveryAreaLabel: string;
  onReset: () => void;
}

export const SuccessView: FC<SuccessViewProps> = ({
  setup,
  selectedItems,
  pricing,
  lightingMode,
  customerDetails,
  deliveryAreaLabel,
  onReset
}) => {
  const deliveryDateDisplay = customerDetails.startDate
    ? new Date(customerDetails.startDate).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'scheduled date';

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-50 p-3 sm:p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl border border-neutral-200 p-4 sm:p-10 shadow-lg text-center space-y-4 sm:space-y-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto shadow-md">
          <CheckIcon size={26} />
        </div>

        <div className="space-y-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-2xl sm:rounded-full bg-emerald-50 border border-emerald-200 shadow-2xs max-w-full">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckIcon size={10} />
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-800 whitespace-nowrap">
                Reservation Confirmed
              </span>
            </div>
            <span className="hidden sm:inline-block h-3 w-px bg-emerald-200" />
            <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-900 bg-white px-2 py-0.5 rounded-md sm:rounded-lg border border-neutral-200 whitespace-nowrap">
              #MN-BALI-8924
            </span>
          </div>

          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
            Your office lands in Bali on <span className="text-black font-black underline decoration-neutral-300">{deliveryDateDisplay}</span>!
          </h1>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
            Our concierge team is preparing your custom setup. A confirmation receipt and setup tracking link have been dispatched to {customerDetails.email || 'your email'} and WhatsApp {customerDetails.whatsapp}.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 overflow-hidden bg-neutral-50 p-1.5 sm:p-2 max-w-lg mx-auto shadow-xs w-full">
          <StageRoomBackdrop mode={lightingMode} className="h-[220px] sm:h-[280px]">
            <div className="w-full h-full flex items-end justify-center scale-[0.62] sm:scale-75 origin-bottom pb-1">
              <StageScene
                setup={setup}
                lightingMode={lightingMode}
                readOnly
              />
            </div>
          </StageRoomBackdrop>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left text-xs space-y-2">
          <div className="flex items-center gap-2 text-neutral-900 font-bold">
            <VillaIcon size={16} />
            <span>Delivery Destination: {deliveryAreaLabel}</span>
          </div>
          <p className="text-neutral-600 break-words">{customerDetails.villaAddress || 'Bali Villa'}</p>
          <p className="text-[11px] text-neutral-500">
            Equipped items: {selectedItems.map((item) => item.name).join(' • ')}
          </p>
          <div className="pt-2 border-t border-neutral-200 flex justify-between items-baseline font-bold text-neutral-900">
            <span>Total Paid for {pricing.durationLabel}</span>
            <span className="text-base text-neutral-900 whitespace-nowrap">{formatCurrencyIDR(pricing.finalTotal)}</span>
          </div>
        </div>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="primary" size="lg" onClick={onReset} className="w-full sm:w-auto shadow-md rounded-full px-8">
            Build Another Setup
          </Button>
        </div>
      </div>
    </div>
  );
};
