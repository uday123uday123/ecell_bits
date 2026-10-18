import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ExternalLink, Award, CheckCircle2, X } from 'lucide-react';
import { INITIAL_STARTUPS } from '../lib/mockData';
import { StartupItem } from '../lib/types';

interface StartupsPageProps {
  onOpenPitchModal: () => void;
}

export const StartupsPage: React.FC<StartupsPageProps> = ({ onOpenPitchModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedStartupDetails, setSelectedStartupDetails] = useState<StartupItem | null>(null);

  const industries = ['All', 'DeepTech', 'EdTech', 'HealthTech', 'Sustainability'];

  const filteredStartups = INITIAL_STARTUPS.filter((stp) => {
    if (selectedIndustry === 'All') return true;
    return stp.industry === selectedIndustry;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
            <Rocket className="w-4 h-4" />
            <span>BITS VIZAG INCUBATOR PORTFOLIO</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
            Incubated <span className="text-cyan-glow">Startups</span>
          </h1>
          <p className="text-sm text-slate-300">
            Pioneering student and faculty ventures solving high-impact regional and global challenges.
          </p>
        </div>

        <button
          onClick={onOpenPitchModal}
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep text-navy-950 font-bold text-sm shadow-cyan-glow hover:shadow-cyan-glow-lg transition cursor-pointer flex items-center gap-2"
        >
          <Rocket className="w-4 h-4" />
          <span>Pitch Your Startup &rarr;</span>
        </button>
      </div>

      {/* Industry Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {industries.map((ind) => (
          <button
            key={ind}
            onClick={() => setSelectedIndustry(ind)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedIndustry === ind
                ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-cyan-glow'
                : 'bg-navy-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Grid of Startup Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStartups.map((stp) => (
          <motion.div
            key={stp.id}
            whileHover={{ y: -6 }}
            className="glass-panel p-6 rounded-3xl border border-cyan-glow/20 hover:border-cyan-glow/50 transition duration-300 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={stp.logo} alt={stp.name} className="w-12 h-12 rounded-2xl object-cover border border-cyan-glow/30" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{stp.name}</h3>
                    <span className="text-[11px] font-mono text-cyan-accent">{stp.industry} • {stp.fundingStage}</span>
                  </div>
                </div>
                {stp.valuationOrGrant && (
                  <span className="px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
                    {stp.valuationOrGrant}
                  </span>
                )}
              </div>

              <p className="text-xs font-medium text-cyan-glow italic">{stp.tagline}</p>

              <p className="text-xs text-slate-300 leading-relaxed">{stp.description}</p>

              {/* Key Achievements */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Traction & Milestones</span>
                <div className="space-y-1">
                  {stp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow flex-shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Founder: <strong className="text-white">{stp.founder}</strong></span>
              <a
                href={stp.website}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-glow hover:underline flex items-center gap-1 font-bold"
              >
                <span>Visit Startup</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
