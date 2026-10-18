import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../brand/Logo';
import { 
  Menu, X, Search, Sparkles, User, Shield, Compass, Calendar, 
  Users, Rocket, Image as ImageIcon, BookOpen, Mail, Home
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenJoinModal: () => void;
  onOpenSearchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenJoinModal,
  onOpenSearchModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Compass },
    { id: 'initiatives', label: 'Initiatives', icon: Sparkles },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'startups', label: 'Startups', icon: Rocket },
    { id: 'mentorship', label: 'Mentors', icon: User },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'blogs', label: 'Blogs', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 px-4 lg:px-8 py-3 ${
        scrolled
          ? 'bg-black border-b border-white/10 shadow-2xl py-2.5'
          : 'bg-black py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="focus:outline-none flex items-center justify-start group text-left cursor-pointer -ml-2 h-14"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-cyan-glow/15 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-cyan-glow font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-glow' : 'text-slate-400'}`} />
                <span>{item.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-cyan-glow/10 border border-cyan-glow/40 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearchModal}
            className="p-2 rounded-xl bg-zinc-900/80 border border-white/20 text-zinc-300 hover:text-white hover:border-white/50 transition cursor-pointer flex items-center gap-2 text-xs font-mono"
            title="Search Site (Cmd + K)"
          >
            <Search className="w-4 h-4 text-white" />
            <span className="hidden lg:inline text-[11px] opacity-75">Search...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-black border border-zinc-700 rounded text-zinc-400 font-mono">⌘K</kbd>
          </button>

          {/* Join E-Cell CTA */}
          <button
            onClick={onOpenJoinModal}
            className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join E-Cell</span>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={onOpenSearchModal}
            className="p-2 rounded-xl bg-navy-900 border border-cyan-glow/20 text-cyan-glow cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-navy-900 border border-cyan-glow/30 text-slate-100 hover:text-cyan-glow focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden mt-3 bg-navy-950/95 border-b border-cyan-glow/30 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl p-4"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl text-xs font-medium text-left transition ${
                      isActive
                        ? 'bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/40 font-bold'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-glow" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-glow to-cyan-deep text-navy-950 font-bold text-xs flex items-center justify-center gap-2 shadow-cyan-glow"
              >
                <Sparkles className="w-4 h-4" />
                <span>Join E-Cell BITS Vizag</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
