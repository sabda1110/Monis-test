import { FC } from 'react';
import { PresetType } from '@/types/workspace';
import { PRESET_DEFINITIONS } from '@/data/presets';
import { SparklesIcon } from '@/components/atoms/icons';

export interface PresetChipsProps {
  onApplyPreset: (presetId: PresetType) => void;
}

export const PresetChips: FC<PresetChipsProps> = ({ onApplyPreset }) => {
  return (
    <div className="w-full max-w-full flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-xs">
      <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-500 px-2 py-1 shrink-0">
        <SparklesIcon size={14} className="text-black" />
        <span className="hidden sm:inline">Quick Presets:</span>
        <span className="sm:hidden">Presets:</span>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {PRESET_DEFINITIONS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => onApplyPreset(preset.id)}
            title={preset.tagline}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 hover:bg-black text-neutral-800 hover:text-white border border-neutral-200 hover:border-black transition-all duration-200 cursor-pointer active:scale-95 shadow-2xs whitespace-nowrap"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
};
