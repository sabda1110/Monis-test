import { FC, ReactNode } from 'react';
import { StageLightingMode } from '@/types/workspace';

export interface StageRoomBackdropProps {
  mode: StageLightingMode;
  children: ReactNode;
  className?: string;
}

export const StageRoomBackdrop: FC<StageRoomBackdropProps> = ({
  mode,
  children,
  className = ''
}) => {
  const isNight = mode === 'night';

  const wallBg = isNight
    ? 'bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]'
    : 'bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]';

  const platformBg = isNight
    ? 'bg-[#1E293B] border-[#334155] shadow-2xl shadow-teal-950/40'
    : 'bg-white border-neutral-300 shadow-xl shadow-neutral-200/70';

  const floorLineColor = isNight ? '#334155' : '#E2E8F0';
  const heightStyle = className || 'h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px]';

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border transition-colors duration-500 flex flex-col justify-between select-none ${wallBg} ${
        isNight ? 'border-neutral-800' : 'border-neutral-200'
      } ${heightStyle}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isNight ? (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            className="w-full h-full object-cover opacity-60"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="680" cy="110" r="38" fill="#FEF08A" fillOpacity="0.8" />
            <circle cx="668" cy="98" r="30" fill="#1E293B" />
            <path
              d="M750 0 C700 80 620 120 540 100 C620 150 720 120 800 110 Z"
              fill="#064E3B"
              fillOpacity="0.4"
            />
            <path
              d="M800 60 C740 140 650 170 580 180 C670 210 760 170 800 150 Z"
              fill="#022C22"
              fillOpacity="0.5"
            />
            <line x1="200" y1="0" x2="350" y2="400" stroke="#FEF08A" strokeWidth="60" strokeOpacity="0.04" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            className="w-full h-full object-cover opacity-85"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="sunBeam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <polygon points="120,0 380,0 520,500 20,500" fill="url(#sunBeam)" />
            <path
              d="M800 20 C710 110 590 140 480 120 C580 170 710 150 800 130 Z"
              fill="#D1C3AD"
              fillOpacity="0.35"
            />
            <path
              d="M800 80 C730 170 630 200 530 190 C630 230 740 200 800 180 Z"
              fill="#C4B49C"
              fillOpacity="0.3"
            />
            <path
              d="M800 160 C750 230 670 250 590 240 C670 270 760 250 800 240 Z"
              fill="#B7A58B"
              fillOpacity="0.25"
            />
          </svg>
        )}
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-end items-center pb-4 sm:pb-6 px-2 sm:px-6">
        <div
          className={`w-[96%] max-w-[760px] h-[64px] sm:h-[86px] md:h-[100px] rounded-[52px] border transition-all duration-500 relative flex items-center justify-center ${platformBg}`}
        >
          <svg
            viewBox="0 0 600 60"
            fill="none"
            className="w-full h-full absolute inset-0 opacity-40"
          >
            <line x1="60" y1="30" x2="540" y2="30" stroke={floorLineColor} strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-4 sm:bottom-6 top-6 flex flex-col items-center justify-end pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
