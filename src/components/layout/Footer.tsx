import React from 'react';
import { Logo } from '../brand/Logo';
import { BITSBadges } from '../brand/BITSBadges';
import { 
  ArrowUp, Mail, MapPin, Phone, Linkedin, Instagram, 
  Twitter, Youtube, Github, Send, Heart, ExternalLink 
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenJoinModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-cyan-glow/20 pt-16 pb-8 overflow-hidden text-slate-300">
      {/* Background Circuit Grid & Glow */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              The official Entrepreneurship Cell of Baba Institute of Technology & Sciences (BITS Vizag). Fostering innovation, incubating student startups, and building the future tech ecosystem of Coastal Andhra Pradesh.
            </p>

            <div className="pt-2">
              <BITSBadges />
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com', label: 'X' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-400 hover:text-cyan-glow hover:border-cyan-glow/40 transition hover:-translate-y-0.5"
                    title={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider text-cyan-accent">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About E-Cell' },
                { id: 'initiatives', label: 'Our Initiatives' },
                { id: 'events', label: 'Upcoming Events' },
                { id: 'team', label: 'Executive Team' },
                { id: 'startups', label: 'Startup Incubator' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-cyan-glow transition hover:translate-x-1 inline-block text-slate-400 cursor-pointer"
                  >
                    &rarr; {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem & Media */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider text-cyan-accent">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'gallery', label: 'Media Gallery' },
                { id: 'blogs', label: 'Blogs & Guides' },
                { id: 'contact', label: 'Contact Us' },
                { id: 'admin', label: 'Admin Portal' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-cyan-glow transition hover:translate-x-1 inline-block text-slate-400 cursor-pointer"
                  >
                    &rarr; {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenJoinModal}
                  className="text-cyan-glow font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <ExternalLink className="w-3 h-3" /> Become a Mentor / Founder
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider text-cyan-accent">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to the BITS Vizag Innovation Digest for upcoming hackathons, VC pitch calls, and masterclasses.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to BITS Vizag E-Cell newsletter!');
              }}
              className="flex flex-col gap-2 pt-1"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-xl bg-navy-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-glow transition"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-glow to-cyan-deep text-navy-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-cyan-glow hover:opacity-95 transition cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span>&copy; {new Date().getFullYear()} BITS Vizag E-Cell. All Rights Reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="text-cyan-accent flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 fill-cyan-glow text-cyan-glow inline" /> at BITS Vizag Campus
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-navy-900 border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/15 transition cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
