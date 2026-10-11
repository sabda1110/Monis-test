import { FC } from 'react';
import {
  StageLightingMode,
  WorkspaceItem,
  WorkspaceSetup
} from '@/types/workspace';
import { formatCurrencyIDR } from '@/utils/pricing';
import {
  RefreshCwIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@/components/atoms/icons';
import { StageRoomBackdrop } from '@/components/molecules/stage-room-backdrop';
import { StageScene } from '@/components/molecules/stage-scene';

export interface CheckoutPreviewPanelProps {
  setup: WorkspaceSetup;
  selectedItems: readonly WorkspaceItem[];
  lightingMode: StageLightingMode;
}

export const CheckoutPreviewPanel: FC<CheckoutPreviewPanelProps> = ({
  setup,
  selectedItems,
  lightingMode
}) => {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-neutral-200 overflow-hidden bg-white p-2 shadow-xs">
        <StageRoomBackdrop mode={lightingMode}>
          <div className="w-full h-[320px] flex items-end justify-center scale-90">
            <StageScene
              setup={setup}
              lightingMode={lightingMode}
              readOnly
            />
          </div>
        </StageRoomBackdrop>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-3">
        <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          Configured Equipment ({selectedItems.length})
        </h3>
        <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1.5 overscroll-contain">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-xs py-1 border-b border-neutral-100 last:border-none"
            >
              <span className="text-neutral-700 font-medium">{item.name}</span>
              <span className="text-neutral-900 font-semibold">
                {formatCurrencyIDR(item.pricePerWeek)}/wk
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-neutral-100 border border-neutral-200 text-center">
        <div className="flex flex-col items-center gap-1">
          <RefreshCwIcon size={16} className="text-neutral-900" />
          <span className="text-[10px] font-bold text-neutral-900">Free 48h swap</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <TruckIcon size={16} className="text-neutral-900" />
          <span className="text-[10px] font-bold text-neutral-900">Villa delivery</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ShieldCheckIcon size={16} className="text-neutral-900" />
          <span className="text-[10px] font-bold text-neutral-900">Flexible extend</span>
        </div>
      </div>
    </div>
  );
};
