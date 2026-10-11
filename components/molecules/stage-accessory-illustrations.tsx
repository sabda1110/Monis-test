import { FC } from 'react';

export interface StageMonitorProps {
  id: string;
  slotIndex?: number;
  className?: string;
}

export const StageMonitorIllustration: FC<StageMonitorProps> = ({ id, className = '' }) => {
  if (id === 'monitor-34-ultrawide') {
    return (
      <svg viewBox="0 0 280 150" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
        <defs>
          <linearGradient id="screenGradient34" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#0F766E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <rect x="10" y="8" width="260" height="105" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="2.5" />
        <rect x="15" y="13" width="250" height="95" rx="4" fill="url(#screenGradient34)" />
        <rect x="134" y="113" width="12" height="28" fill="#475569" />
        <rect x="105" y="138" width="70" height="7" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="1" />
        <circle cx="140" cy="103" r="1.5" fill="#34D399" />
      </svg>
    );
  }

  if (id === 'monitor-27-4k') {
    return (
      <svg viewBox="0 0 200 150" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
        <defs>
          <linearGradient id="screenGradient27" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#09121F" />
          </linearGradient>
        </defs>
        <rect x="10" y="8" width="180" height="105" rx="5" fill="#111827" stroke="#374151" strokeWidth="2" />
        <rect x="14" y="12" width="172" height="97" rx="3" fill="url(#screenGradient27)" />
        <rect x="94" y="113" width="12" height="28" fill="#4B5563" />
        <rect x="75" y="138" width="50" height="6" rx="3" fill="#1F2937" />
        <circle cx="100" cy="105" r="1.5" fill="#38BDF8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 170 140" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
      <rect x="10" y="10" width="150" height="92" rx="4" fill="#1F2937" stroke="#374151" strokeWidth="2" />
      <rect x="14" y="14" width="142" height="84" rx="2" fill="#0F172A" />
      <rect x="80" y="102" width="10" height="26" fill="#4B5563" />
      <rect x="62" y="126" width="46" height="6" rx="3" fill="#1F2937" />
    </svg>
  );
};

export interface StageLampProps {
  id: string;
  isNight?: boolean;
  className?: string;
}

export const StageLampIllustration: FC<StageLampProps> = ({ id, isNight = false, className = '' }) => {
  if (id === 'lamp-minimal-screenbar') {
    return (
      <svg viewBox="0 0 160 50" fill="none" className={`w-full h-auto ${className}`}>
        <rect x="20" y="10" width="120" height="8" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1" />
        <rect x="25" y="18" width="110" height="4" fill="#FDE047" fillOpacity={isNight ? '0.9' : '0.4'} />
        {isNight && (
          <polygon points="25,22 10,60 150,60 135,22" fill="#FDE047" fillOpacity="0.15" />
        )}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 180" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
      <path d="M40 165 C40 30, 95 30, 95 65" stroke="#D97706" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M78 65 L112 65 L104 88 L86 88 Z" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="95" cy="90" r="4" fill="#FEF08A" />
      <rect x="24" y="165" width="32" height="10" rx="3" fill="#78350F" />
      {isNight && (
        <polygon points="86,90 40,180 150,180 104,90" fill="#FDE047" fillOpacity="0.18" />
      )}
    </svg>
  );
};

export interface StagePlantProps {
  id: string;
  className?: string;
}

export const StagePlantIllustration: FC<StagePlantProps> = ({ id, className = '' }) => {
  if (id === 'plant-monstera') {
    return (
      <svg viewBox="0 0 120 160" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
        <path d="M60 105 Q35 55 15 65 Q45 80 58 106" fill="#047857" />
        <path d="M60 105 Q45 35 60 20 Q70 45 62 105" fill="#059669" />
        <path d="M60 105 Q85 45 105 55 Q80 75 62 106" fill="#10B981" />
        <path d="M60 105 Q30 75 10 90 Q38 100 58 108" fill="#065F46" />
        <polygon points="44,106 76,106 70,154 50,154" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5" />
        <ellipse cx="60" cy="106" rx="16" ry="4" fill="#78350F" />
      </svg>
    );
  }

  if (id === 'plant-snake') {
    return (
      <svg viewBox="0 0 100 160" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
        <path d="M48 108 C42 60 48 30 50 15 C54 35 58 60 52 108 Z" fill="#065F46" stroke="#10B981" strokeWidth="2" />
        <path d="M42 108 C32 75 36 45 38 30 C44 50 46 80 44 108 Z" fill="#047857" stroke="#34D399" strokeWidth="1.5" />
        <path d="M58 108 C66 75 62 45 60 30 C56 50 54 80 56 108 Z" fill="#059669" stroke="#34D399" strokeWidth="1.5" />
        <polygon points="34,108 66,108 61,152 39,152" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 110" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
      <rect x="25" y="85" width="50" height="8" rx="2" fill="#C4884D" />
      <polygon points="28,68 40,68 38,85 30,85" fill="#E2E8F0" />
      <circle cx="34" cy="62" r="7" fill="#10B981" />
      <polygon points="44,65 56,65 54,85 46,85" fill="#E2E8F0" />
      <circle cx="50" cy="58" r="9" fill="#059669" />
      <polygon points="60,68 72,68 70,85 62,85" fill="#E2E8F0" />
      <circle cx="66" cy="63" r="6" fill="#34D399" />
    </svg>
  );
};

export interface StageDeskAccessoriesProps {
  hasKeyboard?: boolean;
  hasMouse?: boolean;
  hasStand?: boolean;
  hasHeadphones?: boolean;
  className?: string;
}

export const StageDeskAccessoriesIllustration: FC<StageDeskAccessoriesProps> = ({
  hasKeyboard = false,
  hasMouse = false,
  hasStand = false,
  hasHeadphones = false,
  className = ''
}) => {
  return (
    <svg viewBox="0 0 340 50" fill="none" className={`w-full h-auto drop-shadow-xs ${className}`}>
      {hasStand && (
        <g id="laptop-stand">
          <polygon points="30,35 65,15 85,15 60,35" fill="#94A3B8" />
          <rect x="35" y="10" width="55" height="30" rx="3" fill="#64748B" stroke="#475569" strokeWidth="1" />
          <rect x="38" y="13" width="49" height="24" rx="2" fill="#1E293B" />
        </g>
      )}

      {hasKeyboard && (
        <g id="keyboard">
          <rect x="105" y="24" width="115" height="20" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="1" />
          <rect x="110" y="27" width="105" height="14" rx="2" fill="#0F172A" />
          <circle cx="116" cy="34" r="1.5" fill="#94A3B8" />
          <circle cx="124" cy="34" r="1.5" fill="#94A3B8" />
          <circle cx="132" cy="34" r="1.5" fill="#94A3B8" />
          <rect x="142" y="32" width="40" height="4" rx="1" fill="#D97706" />
        </g>
      )}

      {hasMouse && (
        <g id="mouse">
          <rect x="232" y="25" width="18" height="20" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
          <line x1="241" y1="26" x2="241" y2="33" stroke="#94A3B8" strokeWidth="1" />
        </g>
      )}

      {hasHeadphones && (
        <g id="headphones">
          <path d="M280 38 C280 20, 310 20, 310 38" stroke="#1F2937" strokeWidth="3" fill="none" />
          <rect x="275" y="32" width="8" height="14" rx="3" fill="#0F766E" />
          <rect x="307" y="32" width="8" height="14" rx="3" fill="#0F766E" />
        </g>
      )}
    </svg>
  );
};
