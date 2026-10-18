import React from 'react';

export const BITSBadges: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 py-2">
      {/* 1. BITS Vizag E-Cell Credential (Framed Box like Reference) */}
      <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-navy-950/90 border border-cyan-glow/30 shadow-[0_0_12px_rgba(0,240,255,0.2)] hover:border-cyan-glow transition">
        <svg width="30" height="30" viewBox="0 0 200 200" fill="none">
          <rect x="35" y="52" width="45" height="14" rx="7" fill="#00D2D3" />
          <rect x="35" y="93" width="45" height="14" rx="7" fill="#00D2D3" />
          <rect x="35" y="134" width="45" height="14" rx="7" fill="#00D2D3" />
          <path d="M 140,55 A 60,60 0 1,0 140,145" fill="none" stroke="#0B172A" strokeWidth="24" strokeLinecap="round" />
          <path d="M 100 80 L 125 80 L 140 68 L 165 68" stroke="#00F0FF" strokeWidth="4" />
          <circle cx="165" cy="68" r="6" fill="#00F0FF" />
          <path d="M 95 100 L 130 100 L 145 92 L 155 92" stroke="#00D2D3" strokeWidth="4" />
          <circle cx="155" cy="92" r="5" fill="#00D2D3" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-white font-display">E-CELL</span>
          <span className="text-[9px] text-cyan-glow font-mono tracking-wider font-bold">BITS VIZAG</span>
        </div>
      </div>

      {/* 2. BITS Vizag Autonomous College Emblem */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-navy-950/90 border border-slate-800 hover:border-cyan-glow/40 transition">
        <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-[10px] font-mono">
          BITS
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1 font-black text-xs">
            <span className="px-1.5 py-0.5 rounded bg-[#E91E63] text-white">B</span>
            <span className="px-1.5 py-0.5 rounded bg-[#8BC34A] text-white">I</span>
            <span className="px-1.5 py-0.5 rounded bg-[#FFC107] text-navy-950 font-bold">T</span>
            <span className="px-1.5 py-0.5 rounded bg-[#03A9F4] text-white">S</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-wider">
            VIZAG (Autonomous)
          </span>
        </div>
      </div>

      {/* 3. Institution's Innovation Council (IIC) */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-navy-950/90 border border-slate-800 hover:border-cyan-glow/40 transition">
        <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-400/40 flex items-center justify-center text-blue-400">
          <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
            <circle cx="35" cy="25" r="10" fill="#FFC107" />
            <circle cx="65" cy="25" r="10" fill="#3F51B5" />
            <path d="M 35 40 Q 50 65 25 85 C 45 95 65 85 65 40 Z" fill="#3F51B5" />
            <path d="M 35 40 Q 20 70 45 90 C 25 80 15 65 35 40 Z" fill="#E53935" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-slate-100 tracking-wide font-display">
            INSTITUTION'S INNOVATION COUNCIL
          </span>
          <span className="text-[10px] text-cyan-accent font-mono">
            (Ministry of HRD Initiative)
          </span>
        </div>
      </div>
    </div>
  );
};
