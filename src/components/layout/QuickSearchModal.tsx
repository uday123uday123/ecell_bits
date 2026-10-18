import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Calendar, Users, Rocket, BookOpen, ArrowRight } from 'lucide-react';
import { INITIAL_EVENTS, INITIAL_TEAM, INITIAL_STARTUPS, INITIAL_BLOGS } from '../../lib/mockData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredEvents = INITIAL_EVENTS.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTeam = INITIAL_TEAM.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.position.toLowerCase().includes(query.toLowerCase()) ||
    t.department.toLowerCase().includes(query.toLowerCase())
  );

  const filteredStartups = INITIAL_STARTUPS.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.industry.toLowerCase().includes(query.toLowerCase()) ||
    s.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = INITIAL_BLOGS.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelect = (tab: string) => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4 bg-navy-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl bg-navy-900 border border-cyan-glow/40 rounded-2xl shadow-cyan-glow-lg overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Search Header Input */}
          <div className="p-4 border-b border-navy-800 flex items-center gap-3">
            <Search className="w-5 h-5 text-cyan-glow" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search events, team, startups, or blogs..."
              className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="p-4 overflow-y-auto space-y-6 divide-y divide-navy-800">
            {/* Events Category */}
            {filteredEvents.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent uppercase tracking-wider mb-3">
                  <Calendar className="w-4 h-4 text-cyan-glow" />
                  <span>Events ({filteredEvents.length})</span>
                </div>
                <div className="space-y-2">
                  {filteredEvents.map((evt) => (
                    <button
                      key={evt.id}
                      onClick={() => handleSelect('events')}
                      className="w-full p-2.5 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-cyan-glow/30 flex items-center justify-between text-left transition group"
                    >
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-glow">{evt.title}</div>
                        <div className="text-[11px] text-slate-400">{evt.date} • {evt.location}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-glow group-hover:translate-x-1 transition" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Startups Category */}
            {filteredStartups.length > 0 && (
              <div className="pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent uppercase tracking-wider mb-3">
                  <Rocket className="w-4 h-4 text-cyan-glow" />
                  <span>Incubated Startups ({filteredStartups.length})</span>
                </div>
                <div className="space-y-2">
                  {filteredStartups.map((stp) => (
                    <button
                      key={stp.id}
                      onClick={() => handleSelect('startups')}
                      className="w-full p-2.5 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-cyan-glow/30 flex items-center justify-between text-left transition group"
                    >
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-glow">{stp.name}</div>
                        <div className="text-[11px] text-slate-400">{stp.industry} • {stp.tagline}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-glow group-hover:translate-x-1 transition" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Team Category */}
            {filteredTeam.length > 0 && (
              <div className="pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent uppercase tracking-wider mb-3">
                  <Users className="w-4 h-4 text-cyan-glow" />
                  <span>Team Roster ({filteredTeam.length})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {filteredTeam.map((tm) => (
                    <button
                      key={tm.id}
                      onClick={() => handleSelect('team')}
                      className="p-2 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-cyan-glow/30 flex items-center gap-2.5 text-left transition group"
                    >
                      <img src={tm.photo} alt={tm.name} className="w-8 h-8 rounded-full object-cover border border-cyan-glow/30" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-glow">{tm.name}</div>
                        <div className="text-[10px] text-slate-400">{tm.position}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Blogs Category */}
            {filteredBlogs.length > 0 && (
              <div className="pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent uppercase tracking-wider mb-3">
                  <BookOpen className="w-4 h-4 text-cyan-glow" />
                  <span>Blogs & Articles ({filteredBlogs.length})</span>
                </div>
                <div className="space-y-2">
                  {filteredBlogs.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => handleSelect('blogs')}
                      className="w-full p-2.5 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-cyan-glow/30 flex items-center justify-between text-left transition group"
                    >
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-glow">{b.title}</div>
                        <div className="text-[11px] text-slate-400">{b.category} • {b.readTime}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-glow group-hover:translate-x-1 transition" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredEvents.length === 0 && filteredStartups.length === 0 && filteredTeam.length === 0 && filteredBlogs.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-xs font-mono">
                No matching results found for "{query}". Try another query!
              </div>
            )}
          </div>

          <div className="p-3 bg-navy-950 border-t border-navy-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>Use ↑ ↓ to navigate</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
