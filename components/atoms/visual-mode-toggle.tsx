import { FC } from 'react';
import { StageVisualMode } from '@/types/workspace';
import { CubeIcon, LayersIcon } from '@/components/atoms/icons';

export interface VisualModeToggleProps {
  mode: StageVisualMode;
  onToggle: (mode: StageVisualMode) => void;
  className?: string;
}

export const VisualModeToggle: FC<VisualModeToggleProps> = ({
  mode,
  onToggle,
  className = ''
}) => {
  const is3D = mode === '3d';

  return (
    <div
      role="radiogroup"
      aria-label="Stage visual rendering mode"
      className={`inline-flex items-center p-1 rounded-full border border-neutral-200 bg-neutral-100 transition-colors select-none ${className}`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={!is3D}
        onClick={() => {
          if (is3D) onToggle('2d');
        }}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
          !is3D
            ? 'bg-black text-white shadow-xs'
            : 'text-neutral-600 hover:text-neutral-900'
        }`}
      >
        <LayersIcon size={13} className={!is3D ? 'text-white' : 'text-neutral-500'} />
        <span>2D<span className="hidden min-[380px]:inline"> Stage</span></span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={is3D}
        onClick={() => {
          if (!is3D) onToggle('3d');
        }}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
          is3D
            ? 'bg-black text-white shadow-xs'
            : 'text-neutral-600 hover:text-neutral-900'
        }`}
      >
        <CubeIcon size={13} className={is3D ? 'text-white' : 'text-neutral-500'} />
        <span>3D<span className="hidden min-[380px]:inline"> Studio</span></span>
      </button>
    </div>
  );
};
