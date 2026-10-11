import { FC } from 'react';

export interface StageChairProps {
  id: string;
  className?: string;
}

export const StageChairIllustration: FC<StageChairProps> = ({ id, className = '' }) => {
  if (id === 'chair-ergo-mesh') {
    return (
      <svg viewBox="0 0 240 310" fill="none" className={`w-full h-auto drop-shadow-lg ${className}`}>
        <defs>
          <linearGradient id="meshGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect x="92" y="16" width="56" height="24" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
        <rect x="98" y="20" width="44" height="16" rx="8" fill="url(#meshGradient)" />
        <rect x="114" y="40" width="12" height="18" fill="#0F172A" />
        <path
          d="M72 58 C72 54 80 54 120 54 C160 54 168 54 168 58 L162 168 C162 172 154 174 120 174 C86 174 78 172 78 168 Z"
          fill="#0F172A"
          stroke="#334155"
          strokeWidth="2.5"
        />
        <path
          d="M80 64 C80 60 86 60 120 60 C154 60 160 60 160 64 L156 164 C156 168 150 170 120 170 C90 170 84 168 84 164 Z"
          fill="url(#meshGradient)"
        />
        <line x1="84" y1="85" x2="156" y2="85" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="84" y1="105" x2="156" y2="105" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="84" y1="125" x2="156" y2="125" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="84" y1="145" x2="156" y2="145" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.4" />
        <rect x="88" y="136" width="64" height="18" rx="6" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
        <path d="M52 110 L52 166 L68 174" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M188 110 L188 166 L172 174" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="42" y="104" width="22" height="8" rx="4" fill="#334155" />
        <rect x="176" y="104" width="22" height="8" rx="4" fill="#334155" />
        <rect x="62" y="172" width="116" height="26" rx="10" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <rect x="68" y="176" width="104" height="16" rx="6" fill="#2563EB" />
        <rect x="114" y="198" width="12" height="52" fill="#475569" />
        <rect x="111" y="210" width="18" height="6" rx="2" fill="#1E293B" />
        <polygon points="120,250 56,282 66,288 120,258 174,288 184,282" fill="#0F172A" />
        <rect x="115" y="250" width="10" height="42" fill="#0F172A" />
        <circle cx="61" cy="286" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <circle cx="120" cy="294" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <circle cx="179" cy="286" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
      </svg>
    );
  }

  if (id === 'chair-rattan-lounge') {
    return (
      <svg viewBox="0 0 240 310" fill="none" className={`w-full h-auto drop-shadow-lg ${className}`}>
        <defs>
          <linearGradient id="rattanWeave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C4884D" />
            <stop offset="50%" stopColor="#DEAB6F" />
            <stop offset="100%" stopColor="#A16207" />
          </linearGradient>
        </defs>
        <path
          d="M62 178 C52 70 188 70 178 178 C174 192 160 196 120 196 C80 196 66 192 62 178 Z"
          fill="url(#rattanWeave)"
          stroke="#854D0E"
          strokeWidth="4"
        />
        <path
          d="M74 174 C68 88 172 88 166 174 Z"
          fill="#FEF3C7"
          stroke="#D97706"
          strokeWidth="2"
        />
        <path d="M82 108 L158 108 M78 124 L162 124 M76 140 L164 140 M76 156 L164 156" stroke="#D97706" strokeWidth="1.5" />
        <path d="M96 92 L96 172 M120 86 L120 174 M144 92 L144 172" stroke="#D97706" strokeWidth="1.5" />
        <ellipse cx="120" cy="182" rx="58" ry="18" fill="#FDFBF7" stroke="#DEAB6F" strokeWidth="3" />
        <ellipse cx="120" cy="180" rx="50" ry="13" fill="#F5EFE6" />
        <line x1="72" y1="196" x2="52" y2="294" stroke="#451A03" strokeWidth="6" strokeLinecap="round" />
        <line x1="168" y1="196" x2="188" y2="294" stroke="#451A03" strokeWidth="6" strokeLinecap="round" />
        <line x1="98" y1="198" x2="88" y2="284" stroke="#290E02" strokeWidth="5" strokeLinecap="round" />
        <line x1="142" y1="198" x2="152" y2="284" stroke="#290E02" strokeWidth="5" strokeLinecap="round" />
        <line x1="64" y1="246" x2="176" y2="246" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="52" cy="294" r="3" fill="#D97706" />
        <circle cx="188" cy="294" r="3" fill="#D97706" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 310" fill="none" className={`w-full h-auto drop-shadow-lg ${className}`}>
      <rect x="76" y="56" width="88" height="114" rx="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
      <rect x="84" y="64" width="72" height="98" rx="8" fill="#334155" />
      <line x1="84" y1="98" x2="156" y2="98" stroke="#475569" strokeWidth="2" />
      <line x1="84" y1="126" x2="156" y2="126" stroke="#475569" strokeWidth="2" />
      <path d="M54 116 L54 168 L68 174" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M186 116 L186 168 L172 174" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="46" y="112" width="18" height="6" rx="3" fill="#475569" />
      <rect x="176" y="112" width="18" height="6" rx="3" fill="#475569" />
      <rect x="66" y="172" width="108" height="24" rx="8" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
      <rect x="72" y="176" width="96" height="14" rx="5" fill="#334155" />
      <rect x="114" y="196" width="12" height="54" fill="#0F172A" />
      <polygon points="120,250 58,280 66,286 120,258 174,286 182,280" fill="#1E293B" />
      <rect x="115" y="250" width="10" height="42" fill="#1E293B" />
      <circle cx="62" cy="284" r="5.5" fill="#0F172A" />
      <circle cx="120" cy="292" r="5.5" fill="#0F172A" />
      <circle cx="178" cy="284" r="5.5" fill="#0F172A" />
    </svg>
  );
};
