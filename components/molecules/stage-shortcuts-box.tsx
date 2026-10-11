'use client';

import { FC } from 'react';
import { ItemCategory, WorkspaceItem, WorkspaceSetup } from '@/types/workspace';
import { CATALOG_ITEMS } from '@/data/catalog';
import { PlusIcon, CheckIcon } from '@/components/atoms/icons';
import {
  StageDeskAccessoriesIllustration,
  StageMonitorIllustration,
  StagePlantIllustration
} from '@/components/molecules/stage-accessory-illustrations';

export interface StageShortcutsBoxProps {
  setup: WorkspaceSetup;
  onSelectItem: (item: WorkspaceItem) => void;
  onRemoveItem: (id: string) => void;
  onNavigateToCategory: (category: ItemCategory) => void;
}

export const StageShortcutsBox: FC<StageShortcutsBoxProps> = ({
  setup,
  onSelectItem,
  onRemoveItem,
  onNavigateToCategory
}) => {
  const hasMonitors = setup.monitors.length > 0;
  const hasDualMonitors = setup.monitors.length >= 2;
  const hasPlant = setup.plant !== null;
  const hasStandOrKeyboard = setup.extras.length > 0;

  const defaultMonitor1 = CATALOG_ITEMS.find((i) => i.id === 'monitor-27-4k')!;
  const defaultMonitor2 = CATALOG_ITEMS.find((i) => i.id === 'monitor-24-ips')!;
  const defaultPlant = CATALOG_ITEMS.find((i) => i.id === 'plant-monstera')!;
  const defaultStand = CATALOG_ITEMS.find((i) => i.id === 'extra-laptop-stand')!;

  const handleToggleMonitor1 = () => {
    if (hasMonitors) {
      onRemoveItem(setup.monitors[0].id);
    } else {
      onSelectItem(defaultMonitor1);
    }
  };

  const handleToggleMonitor2 = () => {
    if (hasDualMonitors) {
      onRemoveItem(setup.monitors[1].id);
    } else {
      onSelectItem(defaultMonitor2);
    }
  };

  const handleTogglePlant = () => {
    if (hasPlant) {
      onRemoveItem(setup.plant!.id);
    } else {
      onSelectItem(defaultPlant);
    }
  };

  const handleToggleExtras = () => {
    if (hasStandOrKeyboard) {
      onRemoveItem(setup.extras[0].id);
    } else {
      onSelectItem(defaultStand);
    }
  };

  return (
    <div className="w-[180px] sm:w-[200px] bg-white/90 backdrop-blur-xs border border-neutral-200 rounded-2xl p-2.5 flex flex-col gap-2 shadow-xs select-none">
      <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-900">
          Quick Slots
        </span>
        <button
          type="button"
          onClick={() => onNavigateToCategory('monitors')}
          className="text-[10px] text-neutral-700 hover:text-black font-semibold hover:underline cursor-pointer"
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        <button
          type="button"
          onClick={handleToggleMonitor1}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl border border-dashed transition-all cursor-pointer ${
            hasMonitors
              ? 'border-black bg-neutral-100'
              : 'border-neutral-200 bg-white hover:border-black'
          }`}
        >
          <div className="w-10 h-7 flex items-center justify-center">
            <StageMonitorIllustration id="monitor-27-4k" />
          </div>
          <span className="text-[10px] font-bold text-neutral-900 flex items-center gap-0.5 mt-1">
            {hasMonitors ? <CheckIcon size={10} className="text-black" /> : <PlusIcon size={10} />}
            Monitor
          </span>
        </button>

        <button
          type="button"
          onClick={handleToggleMonitor2}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl border border-dashed transition-all cursor-pointer ${
            hasDualMonitors
              ? 'border-black bg-neutral-100'
              : 'border-neutral-200 bg-white hover:border-black'
          }`}
        >
          <div className="w-9 h-7 flex items-center justify-center">
            <StageMonitorIllustration id="monitor-24-ips" />
          </div>
          <span className="text-[10px] font-bold text-neutral-900 flex items-center gap-0.5 mt-1">
            {hasDualMonitors ? <CheckIcon size={10} className="text-black" /> : <PlusIcon size={10} />}
            Dual Screen
          </span>
        </button>

        <button
          type="button"
          onClick={handleToggleExtras}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl border border-dashed transition-all cursor-pointer ${
            hasStandOrKeyboard
              ? 'border-black bg-neutral-100'
              : 'border-neutral-200 bg-white hover:border-black'
          }`}
        >
          <div className="w-12 h-6 flex items-center justify-center">
            <StageDeskAccessoriesIllustration hasStand={true} />
          </div>
          <span className="text-[10px] font-bold text-neutral-900 flex items-center gap-0.5 mt-1">
            {hasStandOrKeyboard ? <CheckIcon size={10} className="text-black" /> : <PlusIcon size={10} />}
            Stand
          </span>
        </button>

        <button
          type="button"
          onClick={handleTogglePlant}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl border border-dashed transition-all cursor-pointer ${
            hasPlant
              ? 'border-black bg-neutral-100'
              : 'border-neutral-200 bg-white hover:border-black'
          }`}
        >
          <div className="w-8 h-7 flex items-center justify-center">
            <StagePlantIllustration id="plant-monstera" />
          </div>
          <span className="text-[10px] font-bold text-neutral-900 flex items-center gap-0.5 mt-1">
            {hasPlant ? <CheckIcon size={10} className="text-black" /> : <PlusIcon size={10} />}
            Plant
          </span>
        </button>
      </div>
    </div>
  );
};
