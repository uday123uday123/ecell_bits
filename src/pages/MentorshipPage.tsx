import React from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Mail, Phone, Briefcase, Crown, BookOpen, GraduationCap, User } from 'lucide-react';
import { INITIAL_MENTORS } from '../lib/mockData';
import { MentorItem } from '../lib/types';

const CATEGORIES = [
  {
    key: 'Patronage & Institutional Leadership' as const,
    title: 'Patronage & Institutional Leadership',
    subtitle: 'The visionary leaders steering the institution and fostering a culture of entrepreneurship.',
    icon: Crown,
  },
  {
    key: 'Advisory Board' as const,
    title: 'Advisory Board — Heads of Departments',
    subtitle: 'Department heads providing academic guidance, infrastructure support, and cross-disciplinary mentorship.',
    icon: BookOpen,
  },
  {
    key: 'Advisory Panel' as const,
    title: 'Advisory Panel — Faculty Mentors',
    subtitle: 'Dedicated professors and faculty members guiding student ventures with hands-on expertise.',
    icon: GraduationCap,
  },
];

const MentorCard: React.FC<{ mentor: MentorItem }> = ({ mentor }) => {
  const hasContact = mentor.linkedin || mentor.email || mentor.phone;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-panel p-5 rounded-3xl border border-cyan-glow/20 hover:border-cyan-glow/50 transition duration-300 space-y-4 flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          {mentor.photo ? (
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-glow/30 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-navy-800 border-2 border-cyan-glow/20 flex items-center justify-center flex-shrink-0">
              <User className="w-7 h-7 text-slate-500" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold text-white leading-tight">{mentor.name}</h3>
            <div className="flex items-center gap-1.5 text-xs text-cyan-accent font-mono mt-1">
              <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{mentor.role}</span>
            </div>
            {mentor.company && (
              <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">{mentor.company}</p>
            )}
          </div>
        </div>
      </div>

      {hasContact && (
        <div className="flex gap-2 pt-3 border-t border-slate-800">
          {mentor.linkedin && (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-navy-950 border border-slate-700 text-slate-400 hover:text-cyan-glow transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {mentor.email && (
            <a
              href={`mailto:${mentor.email}`}
              className="p-2.5 rounded-xl bg-navy-950 border border-slate-700 text-slate-400 hover:text-cyan-glow transition"
              title={mentor.email}
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          {mentor.phone && (
            <a
              href={`tel:+91${mentor.phone}`}
              className="p-2.5 rounded-xl bg-navy-950 border border-slate-700 text-slate-400 hover:text-cyan-glow transition"
              title={mentor.phone}
            >
              <Phone className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export const MentorshipPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <Users className="w-4 h-4" />
          <span>MENTORS & ADVISORS</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Guided By The <span className="text-cyan-glow">Best</span>
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Our mentors and advisors from the institution's leadership, department heads, and dedicated faculty members power the E-Cell ecosystem.
        </p>
      </div>

      {/* Category Sections */}
      {CATEGORIES.map((cat) => {
        const mentors = INITIAL_MENTORS.filter((m) => m.category === cat.key);
        if (mentors.length === 0) return null;

        const IconComp = cat.icon;

        return (
          <section key={cat.key} className="space-y-6">
            {/* Section Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-glow/10 border border-cyan-glow/30">
                  <IconComp className="w-5 h-5 text-cyan-glow" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {cat.title}
                </h2>
              </div>
              <p className="text-sm text-slate-400 ml-12">{cat.subtitle}</p>
            </div>

            {/* Mentor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
