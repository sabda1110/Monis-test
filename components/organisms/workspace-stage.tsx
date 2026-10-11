'use client';

import { FC } from 'react';
import {
  ItemCategory,
  PresetType,
  StageLightingMode,
  StageVisualMode,
  WorkspaceItem,
  WorkspaceSetup
} from '@/types/workspace';
import { StageRoomBackdrop } from '@/components/molecules/stage-room-backdrop';
import { StageScene } from '@/components/molecules/stage-scene';
import { Stage3DCanvas } from '@/components/molecules/stage-3d-canvas';
import { PresetChips } from '@/components/molecules/preset-chips';
import { LightingToggle } from '@/components/atoms/lighting-toggle';
import { VisualModeToggle } from '@/components/atoms/visual-mode-toggle';

export interface WorkspaceStageProps {
  setup: WorkspaceSetup;
  lightingMode: StageLightingMode;
  visualMode: StageVisualMode;
  isRentable?: boolean;
  onToggleLighting: () => void;
  onToggleVisualMode: (mode: StageVisualMode) => void;
  onApplyPreset: (preset: PresetType) => void;
  onNavigateToCategory: (category: ItemCategory) => void;
  onSelectItem?: (item: WorkspaceItem) => void;
  onRemoveItem?: (id: string) => void;
  onDropItem: (itemId: string) => void;
  onReviewAndRent?: () => void;
}

export const WorkspaceStage: FC<WorkspaceStageProps> = ({
  setup,
  lightingMode,
  visualMode,
  onToggleLighting,
  onToggleVisualMode,
  onApplyPreset,
  onNavigateToCategory,
  onDropItem
}) => {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-between p-3 sm:p-4 select-none">
      <div className="w-full relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 z-20 mb-2">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <VisualModeToggle mode={visualMode} onToggle={onToggleVisualMode} />
          <div className="sm:hidden">
            <LightingToggle mode={lightingMode} onToggle={onToggleLighting} />
          </div>
        </div>

        <div className="text-center flex-1">
          <h1 className="text-base sm:text-xl md:text-2xl font-black text-neutral-900 tracking-tight">
            Design Your Workspace!
          </h1>
          <p className="text-[10px] sm:text-xs font-medium text-neutral-500 tracking-wide mt-0.5">
            Create Your Perfect Setup in Bali
          </p>
        </div>

        <div className="hidden sm:flex items-center justify-end">
          <LightingToggle mode={lightingMode} onToggle={onToggleLighting} />
        </div>
      </div>

      <div className="w-full max-w-[780px] relative flex-1 flex items-center justify-center my-1 min-h-[360px]">
        {visualMode === '3d' ? (
          <Stage3DCanvas
            setup={setup}
            lightingMode={lightingMode}
            onDropItem={onDropItem}
          />
        ) : (
          <StageRoomBackdrop mode={lightingMode}>
            <StageScene
              setup={setup}
              lightingMode={lightingMode}
              onNavigateToCategory={onNavigateToCategory}
              onDropItem={onDropItem}
            />
          </StageRoomBackdrop>
        )}
      </div>

      <div className="w-full flex items-center justify-center z-20 pt-2">
        <PresetChips onApplyPreset={onApplyPreset} />
      </div>
    </div>
  );
};
