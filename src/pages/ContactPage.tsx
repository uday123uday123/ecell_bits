import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <Mail className="w-4 h-4" />
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Let's Build The <span className="text-cyan-glow">Future Together</span>
        </h1>
        <p className="text-sm text-slate-300">
          Have an inquiry, partnership proposal, or startup idea? Reach out to the BITS Vizag E-Cell team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Interactive Contact Form */}
        <div className="glass-panel p-8 rounded-3xl border border-cyan-glow/30 shadow-cyan-glow space-y-6">
          <h3 className="text-xl font-bold font-display text-white">Send Us a Direct Message</h3>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-cyan-glow mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-400">Our team will respond to {form.email} within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Sravan Kumar"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="sravan@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Sponsorship / Mentorship / General Query"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we assist your venture or organization?"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep text-navy-950 font-bold text-xs flex items-center justify-center gap-2 shadow-cyan-glow hover:opacity-95 transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message Now</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Google Map Canvas */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-cyan-glow/20 space-y-6">
            <h3 className="text-xl font-bold font-display text-white">Campus Location & Contacts</h3>

            <div className="space-y-4 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Baba Institute of Technology & Sciences</span>
                  <span>PM Palem, Visakhapatnam, Andhra Pradesh 530048</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                <span>ecell@bitsvizag.ac.in</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                <span>+91 (0891) 2569999 / +91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                <span>Maker Lab Working Hours: Mon &ndash; Sat (09:00 AM &ndash; 08:00 PM)</span>
              </div>
            </div>
          </div>

          {/* Styled Google Maps Interactive Iframe for BITS Vizag */}
          <div className="h-64 rounded-3xl overflow-hidden border border-cyan-glow/30 shadow-cyan-glow relative">
            <iframe
              title="BITS Vizag Location Map"
              src="https://maps.google.com/maps?q=Baba%20Institute%20of%20Technology%20and%20Sciences%20Visakhapatnam&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
