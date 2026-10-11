import { FC } from 'react';
import { StageLightingMode } from '@/types/workspace';
import { MoonIcon, SunIcon } from '@/components/atoms/icons';

export interface LightingToggleProps {
  mode: StageLightingMode;
  onToggle: () => void;
  className?: string;
}

export const LightingToggle: FC<LightingToggleProps> = ({
  mode,
  onToggle,
  className = ''
}) => {
  const isNight = mode === 'night';

  return (
    <div
      role="radiogroup"
      aria-label="Stage lighting mode"
      className={`inline-flex items-center p-1 rounded-full border transition-colors select-none ${
        isNight
          ? 'bg-neutral-900 border-neutral-800'
          : 'bg-neutral-100 border-neutral-200'
      } ${className}`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={!isNight}
        onClick={() => {
          if (isNight) onToggle();
        }}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
          !isNight
            ? 'bg-white text-neutral-900 shadow-xs border border-neutral-200/80'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        <SunIcon size={13} className={!isNight ? 'text-amber-500' : 'text-neutral-400'} />
        <span>Day</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={isNight}
        onClick={() => {
          if (!isNight) onToggle();
        }}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
          isNight
            ? 'bg-neutral-800 text-amber-300 shadow-xs'
            : 'text-neutral-600 hover:text-neutral-900'
        }`}
      >
        <MoonIcon size={13} className={isNight ? 'text-amber-300' : 'text-neutral-500'} />
        <span>Night</span>
      </button>
    </div>
  );
};
