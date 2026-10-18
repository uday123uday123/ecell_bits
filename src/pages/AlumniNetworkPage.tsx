import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Search, Linkedin, GraduationCap } from 'lucide-react';
import { INITIAL_ALUMNI } from '../lib/mockData';

export const AlumniNetworkPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlumni = INITIAL_ALUMNI.filter(alumni => 
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.currentCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <Globe className="w-4 h-4" />
          <span>GLOBAL NETWORK</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          BITS Vizag <span className="text-cyan-glow">Alumni Syndicate</span>
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Connect with our illustrious alumni who are building, operating, and investing in world-class ventures across the globe.
        </p>

        {/* Global Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-4">
          <div className="px-4 py-2 rounded-2xl bg-navy-900 border border-slate-800 text-center">
            <div className="text-2xl font-black text-cyan-glow">500+</div>
            <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">Alumni Base</div>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-navy-900 border border-slate-800 text-center">
            <div className="text-2xl font-black text-cyan-glow">₹50Cr+</div>
            <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">Funds Raised</div>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-navy-900 border border-slate-800 text-center">
            <div className="text-2xl font-black text-cyan-glow">12</div>
            <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">Countries</div>
          </div>
        </div>
      </div>

      {/* Directory Search */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search alumni by name, company, or city..."
          className="w-full bg-navy-900/50 border border-cyan-glow/30 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition backdrop-blur-md"
        />
      </div>

      {/* Map Graphic (Placeholder for real Mapbox/Leaflet integration later) */}
      <div className="w-full h-48 md:h-64 rounded-3xl bg-navy-900/50 border border-slate-800 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-cover opacity-20 filter invert" />
        <div className="relative z-10 text-center space-y-2">
          <MapPin className="w-8 h-8 text-cyan-glow mx-auto animate-bounce" />
          <div className="text-sm font-bold text-white font-mono tracking-widest">INTERACTIVE MAP COMING SOON</div>
          <div className="text-xs text-slate-400">Powered by Mapbox API in V2</div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAlumni.map((alumni) => (
          <motion.div
            key={alumni.id}
            whileHover={{ y: -6 }}
            className="glass-panel p-5 rounded-3xl border border-cyan-glow/10 hover:border-cyan-glow/40 transition duration-300 group"
          >
            <div className="flex items-center gap-4 border-b border-slate-800 pb-4 mb-4">
              <img
                src={alumni.photo}
                alt={alumni.name}
                className="w-14 h-14 rounded-full object-cover border border-cyan-glow/30"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-glow transition">{alumni.name}</h3>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{alumni.location}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-[10px] text-cyan-accent font-mono uppercase tracking-wider">Current Role</div>
                <div className="text-sm font-semibold text-white">{alumni.currentRole}</div>
                <div className="text-xs text-slate-400">{alumni.currentCompany}</div>
              </div>
              
              <div>
                <div className="text-[10px] text-cyan-accent font-mono uppercase tracking-wider">Graduation</div>
                <div className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{alumni.degree}, Class of {alumni.graduationYear}</span>
                </div>
              </div>

              {alumni.startupFounded && (
                <div className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider mb-0.5">Startup Founded</div>
                  <div className="text-xs text-white font-semibold">{alumni.startupFounded}</div>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <a
                href={alumni.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-glow/50 text-xs font-bold transition flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
