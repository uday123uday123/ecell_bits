import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'drawing' | 'assembling' | 'glowing' | 'done'>('drawing');

  useEffect(() => {
    // 60FPS counter simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 30 && progress <= 70) {
      setStage('assembling');
    } else if (progress > 70) {
      setStage('glowing');
    }
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-navy-950 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Animated Canvas Particle Circuit Grid */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      
      {/* Glowing Mesh Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-glow/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

      {/* SVG Circuit Lines Assembly Animation */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Circuit Tracks */}
          <motion.circle
            cx="150"
            cy="150"
            r="135"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="8 6"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />

          <motion.circle
            cx="150"
            cy="150"
            r="120"
            stroke="#00A8CC"
            strokeWidth="2"
            strokeDasharray="400"
            initial={{ strokeDashoffset: 400 }}
            animate={{ strokeDashoffset: 400 - (progress / 100) * 400 }}
            transition={{ duration: 0.1 }}
          />

          {/* Light trails pulsing outwards */}
          <line x1="150" y1="15" x2="150" y2="40" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <line x1="285" y1="150" x2="260" y2="150" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <line x1="150" y1="285" x2="150" y2="260" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="150" x2="40" y2="150" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />

          {/* Glowing Animated Circuit Paths */}
          <path
            d="M 60 150 H 110 L 130 110 H 170 L 190 150 H 240"
            stroke="#00F0FF"
            strokeWidth="3"
            fill="none"
            strokeDasharray="300"
            strokeDashoffset={300 - (progress / 100) * 300}
          />
          <path
            d="M 60 150 H 110 L 130 190 H 170 L 190 150 H 240"
            stroke="#00D2D3"
            strokeWidth="3"
            fill="none"
            strokeDasharray="300"
            strokeDashoffset={300 - (progress / 100) * 300}
          />
        </svg>

        {/* Center Glowing Logo Reveal */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: stage === 'glowing' ? 1.05 : 1,
            opacity: progress > 15 ? 1 : progress / 15,
          }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center justify-center text-center p-6 glass-panel rounded-3xl border border-cyan-glow/40 shadow-cyan-glow-lg"
        >
          {/* ECELL Logo Icon */}
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-navy-900 border border-cyan-glow/30 flex items-center justify-center shadow-inner">
              <svg className="w-14 h-14" viewBox="0 0 200 200" fill="none">
                <rect x="35" y="52" width="45" height="14" rx="7" fill="#00D2D3" />
                <rect x="35" y="93" width="45" height="14" rx="7" fill="#00D2D3" />
                <rect x="35" y="134" width="45" height="14" rx="7" fill="#00D2D3" />
                <path d="M 140,55 A 60,60 0 1,0 140,145" fill="none" stroke="#0B172A" strokeWidth="24" strokeLinecap="round" />
                <path d="M 100 80 L 125 80 L 140 68 L 165 68" stroke="#00F0FF" strokeWidth="4" />
                <circle cx="165" cy="68" r="6" fill="#00F0FF" />
                <path d="M 95 100 L 130 100 L 145 92 L 155 92" stroke="#00D2D3" strokeWidth="4" />
                <circle cx="155" cy="92" r="5" fill="#00D2D3" />
                <path d="M 100 120 L 125 120 L 138 132 L 170 132" stroke="#00F0FF" strokeWidth="4" />
                <circle cx="170" cy="132" r="6" fill="#00F0FF" />
              </svg>
            </div>
            {/* Soft Particles pulsing around logo */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-glow rounded-full animate-ping opacity-75" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-display text-xl md:text-2xl font-bold tracking-widest text-white"
          >
            BITS VIZAG <span className="text-cyan-glow">E-CELL</span>
          </motion.h1>

          <p className="mt-1 text-xs font-mono text-cyan-accent tracking-widest">
            {stage === 'drawing' && 'INITIALIZING CIRCUITS...'}
            {stage === 'assembling' && 'ASSEMBLING ECOSYSTEM...'}
            {stage === 'glowing' && 'IGNITING INNOVATION...'}
            {stage === 'done' && 'WELCOME'}
          </p>
        </motion.div>
      </div>

      {/* Progress Bar & Percentage */}
      <div className="mt-8 w-64 md:w-80 flex flex-col items-center gap-2">
        <div className="w-full h-1.5 bg-navy-900 rounded-full overflow-hidden border border-cyan-glow/20">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-deep via-cyan-glow to-white shadow-[0_0_12px_#00F0FF]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between w-full text-xs font-mono text-slate-400">
          <span>SYSTEM_READY</span>
          <span className="text-cyan-glow font-bold">{progress}%</span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="mt-6 text-xs font-mono text-slate-400 hover:text-cyan-glow underline underline-offset-4 transition cursor-pointer"
      >
        Skip Intro &rarr;
      </button>
    </motion.div>
  );
};
