import { FC } from 'react';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const VerifiedCheckIcon: FC<{ size?: number; className?: string }> = ({
  size = 14,
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#1D9BF0"
      className={`shrink-0 ${className}`}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
};

export const BrandLogoIcon: FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = ''
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full bg-black text-white flex items-center justify-center font-black text-xs select-none shrink-0 ${className}`}
    >
      m
    </div>
  );
};

export const BrandLogo: FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const textSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <span className={`font-black tracking-tighter text-black lowercase leading-none whitespace-nowrap ${textSize}`}>
        monis
      </span>

      {showSubtitle && (
        <div className="hidden sm:flex items-center gap-1 pl-2 border-l border-neutral-200 text-xs font-semibold text-neutral-600">
          <span>Bali</span>
          <VerifiedCheckIcon size={13} />
        </div>
      )}
    </div>
  );
};
