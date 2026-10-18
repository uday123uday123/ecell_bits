import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, User, Mail, Phone, BookOpen, CheckCircle2, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'Student' | 'Innovator' | 'Mentor' | 'Sponsor'>('Student');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    departmentOrCompany: '',
    interest: 'Incubation & Startup Pitching',
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
              <h3 className="text-2xl font-bold font-display text-white">Application Received!</h3>
              <p className="text-sm text-slate-300">
                Welcome to the BITS Vizag E-Cell Ecosystem. Our onboarding team will send your access code to <span className="text-cyan-glow font-bold">{formData.email}</span> shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>JOIN THE ECOSYSTEM</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">Join BITS Vizag E-Cell</h3>
                <p className="text-xs text-slate-400">
                  Connect with founders, investors, and fellow innovators at BITS Vizag.
                </p>
              </div>

              {/* Role Selector Tabs */}
              <div className="grid grid-cols-4 gap-2 bg-navy-950 p-1.5 rounded-xl border border-slate-800">
                {(['Student', 'Innovator', 'Mentor', 'Sponsor'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      role === r
                        ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              {/* Form Input Fields */}
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sravan Kumar"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sravan@bitsvizag.ac.in"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {role === 'Student' ? 'Department & Year' : 'Company / Organization'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.departmentOrCompany}
                    onChange={(e) => setFormData({ ...formData, departmentOrCompany: e.target.value })}
                    placeholder={role === 'Student' ? 'CSE - 3rd Year' : 'Vizag Angels / Startup Co.'}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Primary Area of Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                  >
                    <option value="Incubation & Startup Pitching">Incubation & Startup Pitching</option>
                    <option value="Hackathons & Technical Build">Hackathons & Technical Build</option>
                    <option value="Event Operations & PR">Event Operations & PR</option>
                    <option value="Angel Investing & Mentorship">Angel Investing & Mentorship</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep text-navy-950 font-bold text-sm flex items-center justify-center gap-2 shadow-cyan-glow hover:opacity-95 transition cursor-pointer"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Submit Membership Application</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
