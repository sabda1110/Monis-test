import { FC } from 'react';

export interface StageDeskProps {
  id: string;
  className?: string;
}

export const StageDeskIllustration: FC<StageDeskProps> = ({ id, className = '' }) => {
  if (id === 'desk-standing-pro') {
    return (
      <svg viewBox="0 0 540 280" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
        <defs>
          <linearGradient id="bambooSurface" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4A373" />
            <stop offset="30%" stopColor="#E6CCB2" />
            <stop offset="70%" stopColor="#DDB892" />
            <stop offset="100%" stopColor="#C59B6D" />
          </linearGradient>
          <linearGradient id="motorColumn" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
        </defs>
        <rect x="25" y="45" width="490" height="22" rx="4" fill="url(#bambooSurface)" stroke="#B07D4C" strokeWidth="2" />
        <rect x="27" y="67" width="486" height="5" fill="#9C6B3B" />
        <rect x="50" y="72" width="440" height="14" rx="2" fill="#1E293B" />
        <rect x="75" y="78" width="22" height="188" rx="3" fill="url(#motorColumn)" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="443" y="78" width="22" height="188" rx="3" fill="url(#motorColumn)" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="80" y="145" width="12" height="110" fill="#475569" />
        <rect x="448" y="145" width="12" height="110" fill="#475569" />
        <rect x="45" y="262" width="82" height="10" rx="3" fill="#0F172A" />
        <rect x="413" y="262" width="82" height="10" rx="3" fill="#0F172A" />
        <rect x="460" y="69" width="36" height="10" rx="2" fill="#0F172A" />
        <circle cx="468" cy="74" r="1.5" fill="#34D399" />
        <circle cx="476" cy="74" r="1.5" fill="#94A3B8" />
        <circle cx="484" cy="74" r="1.5" fill="#94A3B8" />
      </svg>
    );
  }

  if (id === 'desk-compact-wood') {
    return (
      <svg viewBox="0 0 540 280" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
        <defs>
          <linearGradient id="teakWood" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="40%" stopColor="#D97706" />
            <stop offset="80%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>
        <rect x="35" y="45" width="470" height="24" rx="4" fill="url(#teakWood)" stroke="#78350F" strokeWidth="2" />
        <rect x="37" y="69" width="466" height="5" fill="#78350F" />
        <rect x="55" y="74" width="430" height="24" fill="#92400E" stroke="#78350F" strokeWidth="1" />
        <rect x="355" y="76" width="120" height="20" rx="2" fill="#B45309" stroke="#78350F" strokeWidth="1" />
        <circle cx="415" cy="86" r="2.5" fill="#FEF3C7" />
        <polygon points="65,98 52,268 66,268 83,98" fill="#78350F" />
        <polygon points="475,98 488,268 474,268 457,98" fill="#78350F" />
        <polygon points="85,98 96,268 108,268 97,98" fill="#92400E" opacity="0.6" />
        <polygon points="455,98 444,268 432,268 443,98" fill="#92400E" opacity="0.6" />
        <rect x="50" y="266" width="18" height="4" rx="1" fill="#1E293B" />
        <rect x="472" y="266" width="18" height="4" rx="1" fill="#1E293B" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 540 280" fill="none" className={`w-full h-auto drop-shadow-md ${className}`}>
      <defs>
        <linearGradient id="executiveTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3E2723" />
          <stop offset="50%" stopColor="#4E342E" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
      </defs>
      <rect x="20" y="45" width="500" height="24" rx="4" fill="url(#executiveTop)" stroke="#271406" strokeWidth="2" />
      <rect x="22" y="69" width="496" height="5" fill="#271406" />
      <rect x="135" y="74" width="270" height="90" fill="#2E1C14" opacity="0.8" />
      <rect x="40" y="74" width="105" height="192" rx="3" fill="#3E2723" stroke="#271406" strokeWidth="2" />
      <rect x="46" y="80" width="93" height="42" rx="2" fill="#4E342E" stroke="#271406" strokeWidth="1" />
      <rect x="82" y="98" width="22" height="4" rx="2" fill="#D1D5DB" />
      <rect x="46" y="128" width="93" height="42" rx="2" fill="#4E342E" stroke="#271406" strokeWidth="1" />
      <rect x="82" y="146" width="22" height="4" rx="2" fill="#D1D5DB" />
      <rect x="46" y="176" width="93" height="84" rx="2" fill="#4E342E" stroke="#271406" strokeWidth="1" />
      <rect x="82" y="214" width="22" height="4" rx="2" fill="#D1D5DB" />
      <rect x="395" y="74" width="105" height="192" rx="3" fill="#3E2723" stroke="#271406" strokeWidth="2" />
      <rect x="401" y="80" width="93" height="42" rx="2" fill="#4E342E" stroke="#271406" strokeWidth="1" />
      <rect x="437" y="98" width="22" height="4" rx="2" fill="#D1D5DB" />
      <rect x="401" y="128" width="93" height="42" rx="2" fill="#4E342E" stroke="#271406" strokeWidth="1" />
      <rect x="437" y="146" width="22" height="4" rx="2" fill="#D1D5DB" />
      <rect x="401" y="176" width="93" height="84" rx="2" fill="#4E342E" stroke="#271406" strokeWidth="1" />
      <rect x="437" y="214" width="22" height="4" rx="2" fill="#D1D5DB" />
      <rect x="36" y="266" width="113" height="5" rx="1" fill="#1C1008" />
      <rect x="391" y="266" width="113" height="5" rx="1" fill="#1C1008" />
    </svg>
  );
};
