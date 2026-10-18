import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Ticket, Clock, Award, Users, CheckCircle2, Search } from 'lucide-react';
import { INITIAL_EVENTS } from '../lib/mockData';
import { EventItem } from '../lib/types';

interface EventsPageProps {
  onSelectEvent: (event: EventItem) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onSelectEvent }) => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Past'>('All');
  const [selectedEventDetails, setSelectedEventDetails] = useState<EventItem | null>(null);

  const filteredEvents = INITIAL_EVENTS.filter((e) => {
    if (filter === 'Upcoming') return e.status === 'Upcoming';
    if (filter === 'Past') return e.status === 'Past';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <Calendar className="w-4 h-4" />
          <span>EVENTS & CONCLAVES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Where Innovators <span className="text-cyan-glow">Convene</span>
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          From high-stakes pitch arenas and 36-hour hackathons to unicorn fireside talks and investor conclaves.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex bg-navy-900 p-1 rounded-2xl border border-cyan-glow/20 backdrop-blur-md">
          {(['All', 'Upcoming', 'Past'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                filter === tab
                  ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>
      </div>

      {/* Timeline of Events */}
      <div className="relative border-l-2 border-cyan-glow/20 ml-4 md:ml-12 lg:ml-24 space-y-12 py-8">
        {filteredEvents.map((evt, index) => (
          <motion.div
            key={evt.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Glowing Node */}
            <div className="absolute -left-[11px] top-8 w-5 h-5 rounded-full bg-navy-950 border-[3px] border-cyan-glow group-hover:scale-125 group-hover:bg-cyan-glow transition duration-300 shadow-[0_0_15px_#00F0FF]" />

            <div className="glass-panel rounded-3xl overflow-hidden border border-cyan-glow/20 hover:border-cyan-glow/50 transition duration-300 flex flex-col md:flex-row group-hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              {/* Image Section */}
              <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-navy-950/80 border border-cyan-glow/40 text-cyan-glow text-[10px] font-mono font-bold backdrop-blur-md">
                    {evt.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold ${
                      evt.status === 'Upcoming'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                        : 'bg-slate-700/60 text-slate-300 border border-slate-600'
                    }`}
                  >
                    {evt.status}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-cyan-accent text-xs font-mono mb-2">
                      <div className="flex items-center gap-1.5 bg-cyan-glow/10 px-2.5 py-1 rounded-md border border-cyan-glow/20">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-cyan-glow/10 px-2.5 py-1 rounded-md border border-cyan-glow/20">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{evt.time}</span>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white leading-tight group-hover:text-cyan-glow transition">{evt.title}</h3>
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-2 md:line-clamp-3">
                    {evt.description}
                  </p>

                  <div className="flex items-center gap-2 text-slate-400 text-xs bg-navy-900/50 p-2.5 rounded-xl border border-slate-800 w-fit">
                    <MapPin className="w-4 h-4 text-cyan-glow" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex gap-3">
                  <button
                    onClick={() => setSelectedEventDetails(evt)}
                    className="px-6 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-glow/40 transition cursor-pointer"
                  >
                    View Details
                  </button>

                  {evt.status === 'Upcoming' && (
                    <button
                      onClick={() => onSelectEvent(evt)}
                      className="flex-1 max-w-[200px] py-2.5 rounded-xl bg-gradient-to-r from-cyan-glow to-cyan-deep text-navy-950 text-xs font-bold shadow-cyan-glow hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Get Event Pass</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Event Details Drawer Modal */}
      <AnimatePresence>
        {selectedEventDetails && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-navy-900 border border-cyan-glow/40 rounded-3xl p-6 md:p-8 shadow-cyan-glow-lg relative max-h-[85vh] overflow-y-auto space-y-6"
            >
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
                  {selectedEventDetails.category} • {selectedEventDetails.status}
                </span>
                <h3 className="text-2xl font-bold font-display text-white">{selectedEventDetails.title}</h3>
                <p className="text-xs font-mono text-cyan-accent">{selectedEventDetails.date} ({selectedEventDetails.time})</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedEventDetails.fullDetails || selectedEventDetails.description}
              </p>

              {selectedEventDetails.speakers && selectedEventDetails.speakers.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-navy-800">
                  <h4 className="text-xs font-mono font-bold text-cyan-accent uppercase tracking-wider">Featured Speakers</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedEventDetails.speakers.map((spk, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-navy-950 border border-slate-800">
                        <img src={spk.avatar} alt={spk.name} className="w-10 h-10 rounded-full object-cover border border-cyan-glow/30" />
                        <div>
                          <div className="text-xs font-bold text-white">{spk.name}</div>
                          <div className="text-[10px] text-cyan-accent font-mono">{spk.role}, {spk.company}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex gap-3">
                {selectedEventDetails.status === 'Upcoming' && (
                  <button
                    onClick={() => {
                      const evt = selectedEventDetails;
                      setSelectedEventDetails(null);
                      onSelectEvent(evt);
                    }}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-glow to-cyan-deep text-navy-950 font-bold text-xs shadow-cyan-glow hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Get Event Pass</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedEventDetails(null)}
                  className="px-5 py-3 rounded-xl bg-navy-950 border border-slate-700 text-slate-300 text-xs font-medium hover:border-slate-500 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
