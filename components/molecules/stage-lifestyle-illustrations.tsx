import { FC } from 'react';

export interface StageLifestyleIllustrationProps {
  id: string;
  className?: string;
}

export const StageEspressoMachineIllustration: FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      className={`w-full h-auto drop-shadow-md ${className}`}
    >
      <rect x="18" y="18" width="64" height="74" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
      <rect x="24" y="24" width="52" height="18" rx="4" fill="#0F172A" />
      <circle cx="34" cy="33" r="3" fill="#38BDF8" />
      <circle cx="50" cy="33" r="3" fill="#34D399" />
      <circle cx="66" cy="33" r="3" fill="#F59E0B" />
      <rect x="36" y="46" width="28" height="12" rx="3" fill="#94A3B8" />
      <rect x="46" y="58" width="8" height="10" fill="#64748B" />
      <rect x="38" y="68" width="24" height="16" rx="4" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M62 72 Q70 76 62 80" stroke="#CBD5E1" strokeWidth="2" fill="none" />
      <rect x="22" y="86" width="56" height="4" rx="2" fill="#475569" />
      <rect x="26" y="92" width="48" height="3" rx="1.5" fill="#334155" />
    </svg>
  );
};

export const StageSurfboardIllustration: FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <svg
      viewBox="0 0 70 180"
      fill="none"
      className={`w-full h-auto drop-shadow-lg ${className}`}
    >
      <path
        d="M35 8 C52 45 58 115 48 165 C44 172 26 172 22 165 C12 115 18 45 35 8 Z"
        fill="#F8FAFC"
        stroke="#0F766E"
        strokeWidth="2.5"
      />
      <path
        d="M35 12 C39 45 42 115 35 168"
        stroke="#0F766E"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path
        d="M26 70 C34 60 46 80 44 95 C36 105 24 85 26 70 Z"
        fill="#FF6B4A"
        opacity="0.85"
      />
      <ellipse cx="35" cy="140" rx="10" ry="16" fill="#14B8A6" opacity="0.6" />
    </svg>
  );
};

export const StageScooterIllustration: FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <svg
      viewBox="0 0 160 110"
      fill="none"
      className={`w-full h-auto drop-shadow-lg ${className}`}
    >
      <circle cx="36" cy="78" r="20" fill="#334155" stroke="#1E293B" strokeWidth="4" />
      <circle cx="36" cy="78" r="9" fill="#94A3B8" />
      <circle cx="124" cy="78" r="20" fill="#334155" stroke="#1E293B" strokeWidth="4" />
      <circle cx="124" cy="78" r="9" fill="#94A3B8" />
      <path
        d="M36 78 L58 78 C70 78 78 68 84 56 L94 36 L112 36"
        stroke="#FF6B4A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M124 78 L114 42 L110 24 L100 24"
        stroke="#475569"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="52" y="44" width="38" height="12" rx="6" fill="#1E293B" />
      <circle cx="112" cy="22" r="6" fill="#FEF08A" stroke="#E2E8F0" strokeWidth="1.5" />
    </svg>
  );
};

export const StageBeanBagIllustration: FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <svg
      viewBox="0 0 130 95"
      fill="none"
      className={`w-full h-auto drop-shadow-md ${className}`}
    >
      <path
        d="M20 72 C12 50 30 22 65 18 C100 22 118 50 110 72 C104 84 85 88 65 88 C45 88 26 84 20 72 Z"
        fill="#0F766E"
      />
      <path
        d="M30 68 C24 52 38 30 65 26 C92 30 106 52 100 68 C95 78 80 82 65 82 C50 82 35 78 30 68 Z"
        fill="#14B8A6"
      />
      <path
        d="M65 18 C65 26 65 82 65 88"
        stroke="#0D5F58"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <ellipse cx="65" cy="54" rx="20" ry="10" fill="#0F766E" opacity="0.3" />
      <path d="M60 14 Q65 10 70 14" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
};

export const StageShelfIllustration: FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <svg
      viewBox="0 0 110 140"
      fill="none"
      className={`w-full h-auto drop-shadow-md ${className}`}
    >
      <rect x="18" y="16" width="6" height="114" rx="2" fill="#854D0E" />
      <rect x="86" y="16" width="6" height="114" rx="2" fill="#854D0E" />
      <rect x="14" y="32" width="82" height="6" rx="2" fill="#A16207" />
      <rect x="14" y="68" width="82" height="6" rx="2" fill="#A16207" />
      <rect x="14" y="104" width="82" height="6" rx="2" fill="#A16207" />
      <rect x="28" y="20" width="22" height="12" rx="2" fill="#3B82F6" opacity="0.8" />
      <rect x="56" y="18" width="24" height="14" rx="3" fill="#10B981" opacity="0.8" />
      <rect x="24" y="54" width="30" height="14" rx="2" fill="#64748B" />
      <rect x="60" y="52" width="22" height="16" rx="2" fill="#F59E0B" opacity="0.8" />
      <rect x="26" y="88" width="58" height="16" rx="3" fill="#334155" />
    </svg>
  );
};

export const StageLifestyleIllustration: FC<StageLifestyleIllustrationProps> = ({
  id,
  className = ''
}) => {
  if (id === 'lifestyle-coffee-machine') {
    return <StageEspressoMachineIllustration className={className} />;
  }
  if (id === 'lifestyle-surfboard') {
    return <StageSurfboardIllustration className={className} />;
  }
  if (id === 'lifestyle-scooter') {
    return <StageScooterIllustration className={className} />;
  }
  if (id === 'lifestyle-bean-bag') {
    return <StageBeanBagIllustration className={className} />;
  }
  if (id === 'lifestyle-tool-shelf') {
    return <StageShelfIllustration className={className} />;
  }
  return null;
};
