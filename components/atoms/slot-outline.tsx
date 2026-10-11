import { FC } from 'react';

export interface SlotOutlineProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const SlotOutline: FC<SlotOutlineProps> = ({
  label,
  className = '',
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-2 border-dashed border-neutral-300 hover:border-black rounded-2xl p-3 flex flex-col items-center justify-center text-center transition-all duration-200 bg-white/40 hover:bg-white/80 backdrop-blur-xs group cursor-pointer ${className}`}
    >
      <span className="w-8 h-8 rounded-full border border-dashed border-neutral-400 group-hover:border-black flex items-center justify-center text-neutral-500 group-hover:text-black font-bold text-sm mb-1 transition-colors">
        +
      </span>
      <span className="text-xs font-semibold text-neutral-500 group-hover:text-black transition-colors">
        {label}
      </span>
    </button>
  );
};
