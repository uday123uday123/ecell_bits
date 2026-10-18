import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Send, CheckCircle2, DollarSign, Globe, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StartupPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartupPitchModal: React.FC<StartupPitchModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    startupName: '',
    founderName: '',
    email: '',
    industry: 'DeepTech',
    pitchSummary: '',
    website: '',
    stage: 'Idea Phase',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-lg bg-navy-900 border border-cyan-glow/40 rounded-3xl p-6 md:p-8 shadow-cyan-glow-lg relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-glow/20 border border-cyan-glow rounded-full flex items-center justify-center mx-auto text-cyan-glow animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white">Startup Pitch Submitted!</h3>
              <p className="text-sm text-slate-300">
                Your venture pitch for <span className="text-cyan-glow font-bold">{formData.startupName}</span> has been routed to the BITS Vizag Incubation Evaluation Committee.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
                  <Rocket className="w-3.5 h-3.5" />
                  <span>INCUBATION PITCH</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">Pitch Your Startup</h3>
                <p className="text-xs text-slate-400">
                  Apply for seed grants up to ₹25 Lakhs, Maker Lab access, and VC office hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Startup / Project Name</label>
                    <input
                      type="text"
                      required
                      value={formData.startupName}
                      onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                      placeholder="e.g. AquaSense AI"
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Lead Founder Name</label>
                    <input
                      type="text"
                      required
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      placeholder="Sravan Kumar"
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Founder Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="founder@startup.com"
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Industry Sector</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                    >
                      <option value="DeepTech">DeepTech & Hardware</option>
                      <option value="AI & ML">AI & Machine Learning</option>
                      <option value="EdTech">EdTech & VR</option>
                      <option value="HealthTech">HealthTech & Bio</option>
                      <option value="Sustainability">Sustainability & EV</option>
                      <option value="FinTech">FinTech & Web3</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Current Stage</label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                  >
                    <option value="Idea Phase">Idea Phase (Concept / Wireframes)</option>
                    <option value="Incubated / Seed">MVP Ready / Early Beta Testing</option>
                    <option value="Pre-Series A">Revenue Generating / Seeking Scale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Elevator Pitch (2-3 Sentences)</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.pitchSummary}
                    onChange={(e) => setFormData({ ...formData, pitchSummary: e.target.value })}
                    placeholder="Describe the core problem, your proprietary solution, and key traction..."
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep text-navy-950 font-bold text-xs flex items-center justify-center gap-2 shadow-cyan-glow hover:opacity-95 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Pitch to Incubation Board</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
