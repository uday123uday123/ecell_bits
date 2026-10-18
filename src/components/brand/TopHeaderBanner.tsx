import React from 'react';
import { Logo } from './Logo';

interface TopHeaderBannerProps {
  className?: string;
  variant?: 'standalone' | 'header';
}

export const TopHeaderBanner: React.FC<TopHeaderBannerProps> = ({
  className = '',
  variant = 'standalone',
}) => {
  return (
    <div
      className={`w-full bg-black border-b border-white/10 py-2.5 px-4 md:px-8 relative overflow-hidden ${className}`}
    >
      {/* Subtle animated background shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-glow/5 to-transparent animate-pulse-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* LEFT LOGO: BITS Vizag E-Cell Logo */}
        <div className="flex items-center group transition duration-300 hover:scale-105 cursor-pointer">
          <Logo size="sm" />
        </div>

        {/* CENTER LOGO: BITS Vizag College Emblem & Name (Matching Turn 1 Image 2) */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm transition hover:shadow-md">
          {/* Left: BITS VIZAG Logo blocks */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 font-black text-sm">
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded bg-[#E91E63] text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)]">B</span>
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded bg-[#8BC34A] text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)]">I</span>
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded bg-[#FFC107] text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)]">T</span>
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded bg-[#03A9F4] text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)]">S</span>
            </div>
            <div className="text-[12px] font-black tracking-widest text-[#558B2F] uppercase mt-1 leading-none">
              VIZAG
            </div>
          </div>
          
          {/* Right: College Name & Subtext */}
          <div className="flex flex-col justify-center border-l-2 border-slate-200 pl-3.5">
            <div className="text-[#0B172A] font-black text-sm md:text-[17px] leading-tight tracking-tight uppercase font-sans">
              BABA INSTITUTE OF TECHNOLOGY AND SCIENCES
            </div>
            <div className="text-[#1E3A5F] font-bold text-[8.5px] md:text-[10.5px] tracking-wide mt-0.5">
              Affiliated to JNTU-GV • AICTE Approved • Excellence in Engineering Education
            </div>
          </div>
        </div>

        {/* RIGHT LOGO: Institution's Innovation Council (IIC Ministry of HRD Initiative - Turn 1 Image 3) */}
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-xl bg-navy-950/80 border border-slate-800 hover:border-cyan-glow/30 transition">
          {/* IIC Joined Figures Icon */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500/20 via-blue-600/20 to-red-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-amber-400" viewBox="0 0 100 100" fill="none">
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
    </div>
  );
};
