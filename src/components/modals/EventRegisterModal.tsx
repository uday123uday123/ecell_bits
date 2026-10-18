import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Ticket, CheckCircle2, QrCode, Download, Share2 } from 'lucide-react';
import { EventItem } from '../../lib/types';
import confetti from 'canvas-confetti';
import QRCode from 'react-qr-code';

interface EventRegisterModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventRegisterModal: React.FC<EventRegisterModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: 'BITS Vizag',
    rollNumber: '',
  });

  if (!event) return null;

  const passId = `EVT-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
    });
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
            className="absolute top-5 right-5 p-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {registered ? (
            <div className="space-y-6 text-center">
              <div className="w-12 h-12 bg-cyan-glow/20 border border-cyan-glow rounded-full flex items-center justify-center mx-auto text-cyan-glow">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">Registration Confirmed!</h3>
                <p className="text-xs text-slate-400">Here is your digital entry pass for {event.title}</p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border border-cyan-glow/40 shadow-cyan-glow text-left space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-glow text-navy-950 text-[10px] font-mono font-bold rounded-bl-xl">
                  VALID PASS
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center text-cyan-glow font-bold text-sm">
                    BITS
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">{event.title}</h4>
                    <p className="text-[10px] text-cyan-accent font-mono">{event.date} • {event.time}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">ATTENDEE</span>
                    <span className="text-white font-bold">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">PASS ID</span>
                    <span className="text-cyan-glow font-mono font-bold">{passId}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    {/* Real QR Code */}
                    <div className="w-14 h-14 bg-white p-1 rounded-lg flex items-center justify-center">
                      <QRCode value={`bitsvizag-ecell-pass-${passId}`} size={48} className="text-navy-950" />
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono leading-tight">
                      Scan at entry gate<br />BITS Vizag Auditorium
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Pass ${passId} saved to downloads!`)}
                    className="p-2.5 rounded-xl bg-cyan-glow/20 border border-cyan-glow text-cyan-glow text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-glow hover:text-navy-950 transition cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Pass</span>
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-slate-300 font-bold text-xs hover:border-cyan-glow transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-[11px] font-mono font-bold">
                  <Ticket className="w-3.5 h-3.5" />
                  <span>EVENT REGISTRATION</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">{event.title}</h3>
                <div className="flex items-center gap-3 text-xs text-cyan-accent">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{event.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@bitsvizag.ac.in"
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Institution</label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="BITS Vizag"
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Roll / ID Number</label>
                    <input
                      type="text"
                      required
                      value={formData.rollNumber}
                      onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                      placeholder="21BITS042"
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                    />
                  </div>
                </div>

                {event.prizePool && (
                  <div className="p-2.5 rounded-xl bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs flex items-center justify-between font-mono">
                    <span>Prize Pool:</span>
                    <span className="font-bold">{event.prizePool}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep text-navy-950 font-bold text-xs flex items-center justify-center gap-2 shadow-cyan-glow hover:opacity-95 transition cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Confirm Free Pass & Generate Ticket</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
