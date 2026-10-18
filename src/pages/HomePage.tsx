import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Rocket, Calendar, ArrowRight, Shield, Award, Users, 
  TrendingUp, Lightbulb, ChevronRight, MessageSquare, Quote, HelpCircle, ChevronDown, ExternalLink, Play
} from 'lucide-react';
import { BITSBadges } from '../components/brand/BITSBadges';
import { INITIAL_EVENTS, INITIAL_TEAM, INITIAL_STARTUPS, INITIAL_GALLERY, INITIAL_TESTIMONIALS } from '../lib/mockData';
import { TeamMember, EventItem } from '../lib/types';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenJoinModal: () => void;
  onOpenPitchModal: () => void;
  onSelectEvent: (event: EventItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenJoinModal,
  onOpenPitchModal,
  onSelectEvent,
}) => {
  // Counter animation values
  const [counts, setCounts] = useState({
    members: 0,
    events: 0,
    workshops: 0,
    startups: 0,
    mentors: 0,
    collaborations: 0,
  });

  useEffect(() => {
    const target = {
      members: 1500,
      events: 45,
      workshops: 30,
      startups: 25,
      mentors: 50,
      collaborations: 15,
    };

    let start = 0;
    const duration = 2000;
    const step = 30;

    const timer = setInterval(() => {
      start += step;
      const progress = Math.min(start / duration, 1);
      setCounts({
        members: Math.floor(target.members * progress),
        events: Math.floor(target.events * progress),
        workshops: Math.floor(target.workshops * progress),
        startups: Math.floor(target.startups * progress),
        mentors: Math.floor(target.mentors * progress),
        collaborations: Math.floor(target.collaborations * progress),
      });

      if (progress >= 1) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, []);

  // Team Swipe Carousel State
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const teamList = INITIAL_TEAM;

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can join BITS Vizag E-Cell?',
      a: 'E-Cell is open to all students across all engineering branches, polytechnic wings, faculty members, alumni founders, and regional innovators in Visakhapatnam.',
    },
    {
      q: 'How does E-Cell support early-stage student startups?',
      a: 'We provide non-dilutive grants (up to ₹25 Lakhs via government schemes), 24/7 Maker Lab prototyping facilities, cloud server credits, legal patenting assistance, and direct VC pitch sessions.',
    },
    {
      q: 'What is E-Summit Vizag?',
      a: 'E-Summit is our annual 3-day flagship entrepreneurship festival featuring keynote speakers from unicorn startups, hackathons, investor speed-dating, and live pitch competitions.',
    },
    {
      q: 'Do I need prior coding or business experience to participate?',
      a: 'Not at all! We host beginner-friendly ideathons, Startup School workshops, and multidisciplinary team building sessions so anyone with curiosity can build.',
    },
  ];

  return (
    <div className="space-y-24 pt-20 md:pt-28 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-cyan-glow/30 text-cyan-glow text-xs font-mono mb-6 backdrop-blur-md shadow-cyan-glow cursor-pointer hover:border-cyan-glow"
          onClick={() => setActiveTab('events')}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
          <span className="font-bold">E-SUMMIT VIZAG 2026</span>
          <span className="text-slate-400">| Early Bird Passes Open</span>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-glow" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.08]"
        >
          Ignite Ideas.{' '}
          <span className="bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            Create Impact.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
        >
          Empowering innovators, entrepreneurs, founders, creators, and future leaders at{' '}
          <span className="text-cyan-accent font-semibold">BITS Vizag</span> (Baba Institute of Technology & Sciences).
        </motion.p>

        {/* Institutional Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <BITSBadges />
        </motion.div>

        {/* 4 Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Join E-Cell */}
          <button
            onClick={onOpenJoinModal}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep text-navy-950 font-bold text-sm shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join E-Cell</span>
          </button>

          {/* Explore Events */}
          <button
            onClick={() => setActiveTab('events')}
            className="px-6 py-3.5 rounded-2xl bg-navy-900/80 border border-cyan-glow/30 text-slate-100 font-semibold text-sm hover:bg-cyan-glow/10 hover:border-cyan-glow transition duration-300 flex items-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-cyan-glow" />
            <span>Explore Events</span>
          </button>

          {/* Start Your Journey */}
          <button
            onClick={() => setActiveTab('initiatives')}
            className="px-6 py-3.5 rounded-2xl bg-navy-900/80 border border-cyan-glow/30 text-slate-100 font-semibold text-sm hover:bg-cyan-glow/10 hover:border-cyan-glow transition duration-300 flex items-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <Rocket className="w-4 h-4 text-cyan-glow" />
            <span>Start Your Journey</span>
          </button>

          {/* Become a Founder */}
          <button
            onClick={onOpenPitchModal}
            className="px-6 py-3.5 rounded-2xl bg-navy-900/80 border border-cyan-glow/30 text-cyan-glow font-semibold text-sm hover:bg-cyan-glow/20 hover:border-cyan-glow transition duration-300 flex items-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <Lightbulb className="w-4 h-4" />
            <span>Become a Founder</span>
          </button>
        </motion.div>
      </section>

      {/* ANIMATED COUNTERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 border border-cyan-glow/30 shadow-cyan-glow relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { label: 'Active Members', value: counts.members, suffix: '+' },
              { label: 'Events Hosted', value: counts.events, suffix: '+' },
              { label: 'Workshops', value: counts.workshops, suffix: '+' },
              { label: 'Startups Incubated', value: counts.startups, suffix: '+' },
              { label: 'Industry Mentors', value: counts.mentors, suffix: '+' },
              { label: 'Collaborations', value: counts.collaborations, suffix: '+' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-display text-3xl md:text-4xl font-black text-cyan-glow drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PILLARS GRID */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10"
      >
        <div className="text-center space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-zinc-400 tracking-widest uppercase"
          >
            Ecosystem Foundation
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-white"
          >
            Our Core Pillars
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Incubation & Acceleration',
              desc: 'From zero-to-one product sprints to market launches with BITS Vizag Maker Lab infrastructure.',
              icon: Rocket,
            },
            {
              title: 'Venture Capital & Funding',
              desc: 'Direct pitch access to Vizag Angels, government seed grants up to ₹25 Lakhs, and VC networks.',
              icon: TrendingUp,
            },
            {
              title: 'Mentorship & Network',
              desc: '1-on-1 advisory sessions with over 50+ alumni founders, domain architects, and IP attorneys.',
              icon: Users,
            },
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/40 transition-all duration-300 space-y-4 relative group"
              >
                <div className="w-12 h-12 rounded-2xl bg-black border border-white/20 flex items-center justify-center text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">{pillar.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* TEAM SWIPE CAROUSEL (Infinite drag, touch, glass cards, 3D hover tilt) */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-cyan-glow tracking-widest uppercase">Executive Leadership</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white">Meet The Innovators</h3>
          </div>
          <button
            onClick={() => setActiveTab('team')}
            className="text-xs font-bold text-cyan-glow hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View Full Roster ({INITIAL_TEAM.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Animated Swipe Carousel Wrapper */}
        <div className="relative overflow-hidden py-4">
          <motion.div
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing no-scrollbar"
          >
            {teamList.map((tm) => (
              <motion.div
                key={tm.id}
                whileHover={{ scale: 1.03, y: -5 }}
                className="w-72 md:w-80 flex-shrink-0 glass-panel rounded-3xl p-5 border border-cyan-glow/25 shadow-xl hover:border-cyan-glow transition duration-300 relative group overflow-hidden"
              >
                {/* Photo frame with glow */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 border border-navy-700">
                  <img
                    src={tm.photo}
                    alt={tm.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-glow/20 border border-cyan-glow text-cyan-glow backdrop-blur-md">
                    {tm.department}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-glow transition">
                    {tm.name}
                  </h4>
                  <p className="text-xs font-mono text-cyan-accent">{tm.position}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <a
                    href={tm.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-cyan-glow transition"
                  >
                    LinkedIn &rarr;
                  </a>
                  <a
                    href={`mailto:${tm.email}`}
                    className="text-slate-400 hover:text-cyan-glow transition"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STARTUP SHOWCASE CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-cyan-glow tracking-widest uppercase">Incubation Portfolio</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white">BITS Vizag Startups</h3>
          </div>
          <button
            onClick={() => setActiveTab('startups')}
            className="text-xs font-bold text-cyan-glow hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Explore All Ventures</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INITIAL_STARTUPS.slice(0, 2).map((stp, i) => (
            <motion.div
              key={stp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="glass-panel p-6 rounded-3xl border border-white/20 hover:border-white/50 transition duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={stp.logo} alt={stp.name} className="w-12 h-12 rounded-xl object-cover border border-white/30" />
                  <div>
                    <h4 className="font-display text-xl font-bold text-white">{stp.name}</h4>
                    <span className="text-[11px] font-mono text-zinc-400">{stp.industry} • {stp.fundingStage}</span>
                  </div>
                </div>
                {stp.valuationOrGrant && (
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/30 text-white text-xs font-mono font-bold">
                    {stp.valuationOrGrant}
                  </span>
                )}
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">{stp.description}</p>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Founder: {stp.founder}</span>
                <a
                  href={stp.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline flex items-center gap-1"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS AUTO-MARQUEE CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-mono text-cyan-glow tracking-widest uppercase">Endorsements</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">What Leaders Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-6 rounded-3xl border border-cyan-glow/20 space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-cyan-glow/30 absolute top-4 right-4" />
              <p className="text-xs text-slate-300 italic leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3 pt-2">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-cyan-glow/30" />
                <div>
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-[10px] text-cyan-accent font-mono">{t.role}, {t.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-mono text-cyan-glow tracking-widest uppercase">Got Questions?</h2>
          <h3 className="font-display text-3xl font-bold text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-panel rounded-2xl border border-cyan-glow/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                className="w-full p-5 text-left flex items-center justify-between font-display text-sm font-bold text-white hover:text-cyan-glow transition cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-glow transition-transform duration-300 ${
                    openFaqIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaqIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
