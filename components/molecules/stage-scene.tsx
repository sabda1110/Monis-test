'use client';

import { FC, useState, DragEvent } from 'react';
import {
  ItemCategory,
  StageLightingMode,
  WorkspaceSetup
} from '@/types/workspace';
import { StageDeskIllustration } from '@/components/molecules/stage-desk-illustrations';
import { StageChairIllustration } from '@/components/molecules/stage-chair-illustrations';
import {
  StageDeskAccessoriesIllustration,
  StageLampIllustration,
  StageMonitorIllustration,
  StagePlantIllustration
} from '@/components/molecules/stage-accessory-illustrations';
import {
  StageBeanBagIllustration,
  StageEspressoMachineIllustration,
  StageShelfIllustration,
  StageSurfboardIllustration
} from '@/components/molecules/stage-lifestyle-illustrations';
import { SlotOutline } from '@/components/atoms/slot-outline';
import { PlusIcon } from '@/components/atoms/icons';

export interface StageSceneProps {
  setup: WorkspaceSetup;
  lightingMode: StageLightingMode;
  onNavigateToCategory?: (category: ItemCategory) => void;
  onDropItem?: (itemId: string) => void;
  readOnly?: boolean;
}

export const StageScene: FC<StageSceneProps> = ({
  setup,
  lightingMode,
  onNavigateToCategory,
  onDropItem,
  readOnly = false
}) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const isNight = lightingMode === 'night';

  const hasDesk = setup.desk !== null;
  const hasChair = setup.chair !== null;
  const hasMonitors = setup.monitors.length > 0;
  const hasLamp = setup.lamp !== null;
  const hasPlant = setup.plant !== null;

  const isFloorPlant = setup.plant?.id === 'plant-monstera';
  const isDeskPlant = hasPlant && !isFloorPlant;

  const hasEspresso = setup.lifestyle.some((i) => i.id === 'lifestyle-coffee-machine');
  const hasSurfboard = setup.lifestyle.some((i) => i.id === 'lifestyle-surfboard');
  const hasBeanBag = setup.lifestyle.some((i) => i.id === 'lifestyle-bean-bag');
  const hasShelf = setup.lifestyle.some((i) => i.id === 'lifestyle-tool-shelf');

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    if (readOnly) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    if (readOnly) return;
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    if (readOnly) return;
    event.preventDefault();
    setIsDragOver(false);
    const itemId = event.dataTransfer.getData('text/plain');
    if (itemId && onDropItem) {
      onDropItem(itemId);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative w-[680px] max-w-full h-[440px] flex items-end justify-center select-none origin-bottom transform scale-[0.78] min-[420px]:scale-[0.88] sm:scale-100 transition-all duration-200 ${
        isDragOver
          ? 'ring-4 ring-black/30 rounded-3xl bg-black/5 scale-[1.01]'
          : ''
      }`}
    >
      {isDragOver && !readOnly && (
        <div className="absolute inset-x-8 top-4 z-50 bg-black text-white text-xs font-bold py-2 px-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 animate-bounce">
          <span>Drop equipment here to snap into workspace</span>
        </div>
      )}

      {hasSurfboard && (
        <div className="absolute bottom-[20px] left-[-8px] sm:left-[2px] z-10 w-[55px] sm:w-[62px] transition-all duration-300">
          <StageSurfboardIllustration />
        </div>
      )}

      {hasBeanBag && (
        <div className="absolute bottom-[14px] right-[-4px] sm:right-[6px] z-11 w-[96px] sm:w-[110px] transition-all duration-300">
          <StageBeanBagIllustration />
        </div>
      )}

      {hasShelf && (
        <div className="absolute bottom-[18px] right-[8px] sm:right-[16px] z-11 w-[46px] sm:w-[52px] transition-all duration-300">
          <StageShelfIllustration />
        </div>
      )}

      {hasDesk ? (
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[520px] h-[270px] z-10 transition-all duration-300 pointer-events-none">
          <StageDeskIllustration id={setup.desk!.id} />
        </div>
      ) : !readOnly && onNavigateToCategory ? (
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[480px] h-[200px] z-10">
          <SlotOutline
            label="Drag or Click to Choose Desk"
            className="w-full h-full text-xs font-bold"
            onClick={() => onNavigateToCategory('desks')}
          />
        </div>
      ) : null}

      {hasDesk && hasMonitors ? (
        <div className="absolute bottom-[246px] left-1/2 -translate-x-1/2 z-12 flex items-end justify-center transition-all duration-300">
          {setup.monitors.length === 1 && (
            <div className="w-[220px]">
              <StageMonitorIllustration id={setup.monitors[0].id} slotIndex={0} />
            </div>
          )}
          {setup.monitors.length === 2 && (
            <div className="flex items-end justify-center gap-2 w-[390px]">
              <div className="w-[190px]">
                <StageMonitorIllustration id={setup.monitors[0].id} slotIndex={0} />
              </div>
              <div className="w-[190px]">
                <StageMonitorIllustration id={setup.monitors[1].id} slotIndex={1} />
              </div>
            </div>
          )}
          {setup.monitors.length >= 3 && (
            <div className="flex items-end justify-center gap-1.5 w-[460px]">
              <div className="w-[145px]">
                <StageMonitorIllustration id={setup.monitors[0].id} slotIndex={0} />
              </div>
              <div className="w-[160px]">
                <StageMonitorIllustration id={setup.monitors[1].id} slotIndex={1} />
              </div>
              <div className="w-[145px]">
                <StageMonitorIllustration id={setup.monitors[2].id} slotIndex={2} />
              </div>
            </div>
          )}
        </div>
      ) : hasDesk && !readOnly && onNavigateToCategory ? (
        <div className="absolute bottom-[285px] left-1/2 -translate-x-1/2 z-14">
          <button
            type="button"
            onClick={() => onNavigateToCategory('monitors')}
            className="flex items-center gap-1.5 bg-white/95 hover:bg-white text-black border-2 border-dashed border-black/60 px-4 py-2 rounded-2xl text-xs font-extrabold shadow-sm hover:scale-105 transition-all cursor-pointer"
          >
            <PlusIcon size={14} />
            <span>Add Monitor!</span>
          </button>
        </div>
      ) : null}

      {hasDesk && hasLamp && (
        <div className="absolute bottom-[246px] right-[88px] z-14 w-[76px] transition-all duration-300 pointer-events-none">
          <StageLampIllustration id={setup.lamp!.id} isNight={isNight} />
        </div>
      )}

      {hasDesk && isDeskPlant && (
        <div className="absolute bottom-[246px] right-[130px] z-13 w-[52px] transition-all duration-300 pointer-events-none">
          <StagePlantIllustration id={setup.plant!.id} />
        </div>
      )}

      {hasDesk && hasEspresso && (
        <div className="absolute bottom-[246px] left-[92px] z-14 w-[62px] transition-all duration-300 pointer-events-none">
          <StageEspressoMachineIllustration />
        </div>
      )}

      {hasDesk && setup.extras.length > 0 && (
        <div className="absolute bottom-[236px] left-1/2 -translate-x-1/2 z-16 w-[250px] pointer-events-none">
          <StageDeskAccessoriesIllustration
            hasKeyboard={setup.extras.some((e) => e.id === 'extra-mech-keyboard')}
            hasMouse={setup.extras.some((e) => e.id === 'extra-ergo-mouse')}
            hasStand={setup.extras.some((e) => e.id === 'extra-laptop-stand')}
            hasHeadphones={setup.extras.some((e) => e.id === 'extra-headphones')}
          />
        </div>
      )}

      {isFloorPlant ? (
        <div className="absolute bottom-[20px] left-[15px] sm:left-[25px] z-15 w-[92px] transition-all duration-300 pointer-events-none">
          <StagePlantIllustration id={setup.plant!.id} />
        </div>
      ) : hasDesk && !hasPlant && !readOnly && onNavigateToCategory ? (
        <div className="absolute bottom-[50px] left-[25px] z-15">
          <button
            type="button"
            onClick={() => onNavigateToCategory('plants')}
            className="flex items-center gap-1 bg-white/95 hover:bg-white text-black border-2 border-dashed border-black/50 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xs hover:scale-105 transition-transform cursor-pointer"
          >
            <PlusIcon size={12} />
            <span>Place a Plant!</span>
          </button>
        </div>
      ) : null}

      {hasChair ? (
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-20 w-[185px] transition-all duration-300 pointer-events-none">
          <StageChairIllustration id={setup.chair!.id} />
        </div>
      ) : hasDesk && !readOnly && onNavigateToCategory ? (
        <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 w-[140px] h-[120px]">
          <SlotOutline
            label="Choose Chair"
            className="w-full h-full text-xs font-bold"
            onClick={() => onNavigateToCategory('chairs')}
          />
        </div>
      ) : null}
    </div>
  );
};
