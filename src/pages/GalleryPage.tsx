import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { INITIAL_GALLERY } from '../lib/mockData';
import { GalleryItem } from '../lib/types';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'E-Summit Inaugural Ceremony', 'RTIH Visit'];

  const filteredGallery = INITIAL_GALLERY.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const currentItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <ImageIcon className="w-4 h-4" />
          <span>MEDIA & MEMORIES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Innovation In <span className="text-cyan-glow">Frames</span>
        </h1>
        <p className="text-sm text-slate-300">
          Relive moments from flagship summits, hackathon coding marathons, and pitch battles at BITS Vizag.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-cyan-glow'
                : 'bg-navy-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGallery.map((item, idx) => (
          <motion.div
            key={item.id}
            layout
            whileHover={{ scale: 1.03 }}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-3xl overflow-hidden border border-cyan-glow/20 cursor-pointer glass-panel aspect-[4/3]"
          >
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-90 transition duration-300 p-5 flex flex-col justify-between">
              <span className="self-end p-2 rounded-xl bg-cyan-glow text-navy-950 font-bold shadow-md">
                <ZoomIn className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-mono text-cyan-glow px-2 py-0.5 rounded-full bg-navy-900 border border-cyan-glow/40">
                  {item.category} • {item.date}
                </span>
                <h4 className="font-display text-base font-bold text-white mt-2">{item.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <div className="fixed inset-0 z-[999] bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-2xl bg-navy-900 border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={() => setLightboxIndex((lightboxIndex! - 1 + filteredGallery.length) % filteredGallery.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-navy-900 border border-slate-700 text-slate-300 hover:text-cyan-glow transition cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setLightboxIndex((lightboxIndex! + 1) % filteredGallery.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-navy-900 border border-slate-700 text-slate-300 hover:text-cyan-glow transition cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] space-y-4 text-center">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto mx-auto rounded-3xl border border-cyan-glow/40 shadow-cyan-glow-lg object-contain"
              />
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-accent">{currentItem.category} • {currentItem.date}</span>
                <h3 className="text-xl font-bold font-display text-white">{currentItem.title}</h3>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
