import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Zap, Code, Lightbulb, GraduationCap, Mic, 
  TrendingUp, Award, Target, Users, ArrowRight, X, Check 
} from 'lucide-react';
import { INITIAL_INITIATIVES } from '../lib/mockData';
import { InitiativeItem } from '../lib/types';

interface InitiativesPageProps {
  onOpenJoinModal: () => void;
}

export const InitiativesPage: React.FC<InitiativesPageProps> = ({ onOpenJoinModal }) => {
  const [selectedInitiative, setSelectedInitiative] = useState<InitiativeItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket': return Sparkles;
      case 'Zap': return Zap;
      case 'Code': return Code;
      case 'Lightbulb': return Lightbulb;
      case 'GraduationCap': return GraduationCap;
      case 'Mic': return Mic;
      case 'TrendingUp': return TrendingUp;
      case 'Award': return Award;
      case 'Target': return Target;
      case 'Users': return Users;
      default: return Sparkles;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <Sparkles className="w-4 h-4" />
          <span>OUR 10 CORE INITIATIVES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Transforming Ideas Into <span className="text-cyan-glow">Venture Scale</span>
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Comprehensive flagship programs engineered to support student innovators at every stage of the startup journey.
        </p>
      </div>

      {/* Grid of 10 Initiative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_INITIATIVES.map((init) => {
          const IconComponent = getIcon(init.iconName);
          return (
            <motion.div
              key={init.id}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-panel p-6 rounded-3xl border border-cyan-glow/20 hover:border-cyan-glow/60 transition duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedInitiative(init)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 border border-cyan-glow/30 flex items-center justify-center text-cyan-glow group-hover:shadow-cyan-glow transition">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-[10px] font-mono font-bold">
                    {init.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-glow transition">
                  {init.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {init.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-accent font-bold">{init.metrics}</span>
                <span className="text-slate-400 group-hover:text-cyan-glow flex items-center gap-1 transition">
                  Details &rarr;
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Initiative Details Modal */}
      <AnimatePresence>
        {selectedInitiative && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-navy-900 border border-cyan-glow/40 rounded-3xl p-6 md:p-8 shadow-cyan-glow-lg relative max-h-[85vh] overflow-y-auto space-y-6"
            >
              <button
                onClick={() => setSelectedInitiative(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-cyan-glow/15 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
                  {selectedInitiative.badge}
                </span>
                <h3 className="text-2xl font-bold font-display text-white">{selectedInitiative.title}</h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedInitiative.fullDesc}
              </p>

              <div className="space-y-3 pt-2 border-t border-navy-800">
                <h4 className="text-xs font-mono font-bold text-cyan-accent uppercase tracking-wider">
                  Program Highlights & Perks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedInitiative.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-950 border border-slate-800 text-slate-200">
                      <Check className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setSelectedInitiative(null);
                    onOpenJoinModal();
                  }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-glow to-cyan-deep text-navy-950 font-bold text-xs shadow-cyan-glow hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply for Initiative</span>
                </button>
                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="px-5 py-3 rounded-xl bg-navy-950 border border-slate-700 text-slate-300 text-xs font-medium hover:border-slate-500 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
