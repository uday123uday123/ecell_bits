import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Mail, Github, Sparkles } from 'lucide-react';
import { INITIAL_TEAM } from '../lib/mockData';

export const TeamPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = [
    'All',
    'Core Executive Council',
    'Operations',
    'Finance',
    'Marketing',
    'Web & Tech',
    'Design & Media',
    'Content & Media',
    'Startup & Innovation',
    'Events & PR',
    'Research',
    'Corporate Relations',
  ];

  const filteredTeam = INITIAL_TEAM.filter((member) => {
    if (selectedDept === 'All') return true;
    return member.department === selectedDept;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <Users className="w-4 h-4" />
          <span>EXECUTIVE BOARD & LEADS</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          The Minds Behind <span className="text-cyan-glow">BITS Vizag E-Cell</span>
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          A passionate team of student leaders, engineers, designers, and corporate liaisons building the entrepreneurship ecosystem.
        </p>
      </div>

      {/* Department Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedDept === dept
                ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-cyan-glow'
                : 'bg-navy-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Team Roster Grid with 3D Hover & Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTeam.map((member) => (
          <motion.div
            key={member.id}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-panel p-5 rounded-3xl border border-cyan-glow/20 hover:border-cyan-glow/50 transition duration-300 space-y-4 group relative overflow-hidden"
          >
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-navy-700">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-glow transition">
                {member.name}
              </h3>
              <p className="text-xs font-mono text-cyan-accent">{member.position}</p>
              <p className="text-[10px] text-slate-400 font-mono">{member.department}</p>
            </div>

            {(member.linkedin || member.email || member.github) && (
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex gap-2">
                {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-400 hover:text-cyan-glow transition"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                )}
                {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-400 hover:text-cyan-glow transition"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-400 hover:text-cyan-glow transition"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
