import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Clock, ArrowRight, X, User, FileText, Download } from 'lucide-react';
import { INITIAL_BLOGS, INITIAL_RESOURCES } from '../lib/mockData';
import { BlogItem, ResourceItem } from '../lib/types';

export const BlogsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [viewMode, setViewMode] = useState<'Blogs' | 'Resources'>('Blogs');

  const categories = ['All', 'Entrepreneurship', 'Founder Stories', 'Tech Trends'];

  const filteredBlogs = INITIAL_BLOGS.filter((b) => {
    const matchesCat = activeCategory === 'All' || b.category === activeCategory;
    const matchesQuery = b.title.toLowerCase().includes(query.toLowerCase()) || b.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <BookOpen className="w-4 h-4" />
          <span>INNOVATION KNOWLEDGE HUB</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Insights & <span className="text-cyan-glow">Founder Playbooks</span>
        </h1>
        <p className="text-sm text-slate-300">
          Articles, venture capital guides, and technical deep-dives authored by BITS Vizag alumni and mentor network.
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex bg-navy-900 p-1 rounded-2xl border border-cyan-glow/20 backdrop-blur-md">
          {(['Blogs', 'Resources'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setViewMode(tab)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                viewMode === tab
                  ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'Blogs' ? <BookOpen className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'Blogs' ? (
        <>
          {/* Search Bar & Category Filters */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-cyan-glow absolute left-4 top-3.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles by title, keyphrase, or topic..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-navy-900 border border-cyan-glow/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-glow transition shadow-cyan-glow"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-cyan-glow'
                      : 'bg-navy-900/60 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedBlog(blog)}
                className="glass-panel rounded-3xl overflow-hidden border border-cyan-glow/20 hover:border-cyan-glow/50 transition duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 border border-cyan-glow/40 text-cyan-glow text-xs font-mono font-bold backdrop-blur-md">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-6 pt-0 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span>{blog.publishedAt}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-cyan-glow" />{blog.readTime}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-glow transition">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <img src={blog.author.avatar} alt={blog.author.name} className="w-7 h-7 rounded-full object-cover border border-cyan-glow/30" />
                    <span className="text-white font-bold">{blog.author.name}</span>
                  </div>
                  <span className="text-cyan-glow font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INITIAL_RESOURCES.map((res) => (
            <motion.div
              key={res.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-navy-900 border border-slate-800 hover:border-cyan-glow/40 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-[10px] font-mono font-bold">
                    {res.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{res.dateAdded}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{res.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.description}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/50">
                <a
                  href={res.fileUrl}
                  className="w-full py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-slate-300 hover:text-cyan-glow hover:border-cyan-glow/50 text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download {res.fileType}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Blog Article Reader Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-3xl bg-navy-900 border border-cyan-glow/40 rounded-3xl p-6 md:p-10 shadow-cyan-glow-lg relative max-h-[85vh] overflow-y-auto space-y-6"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-cyan-glow/15 text-cyan-glow font-mono font-bold text-xs">
                  {selectedBlog.category} • {selectedBlog.readTime}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">{selectedBlog.title}</h2>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span>Written by {selectedBlog.author.name} ({selectedBlog.author.role})</span>
                  <span>•</span>
                  <span>{selectedBlog.publishedAt}</span>
                </div>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden border border-slate-800">
                <img src={selectedBlog.coverImage} alt={selectedBlog.title} className="w-full h-full object-cover" />
              </div>

              <div className="prose prose-invert max-w-none text-xs leading-relaxed text-slate-200 whitespace-pre-line font-sans">
                {selectedBlog.content}
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <div className="flex gap-2">
                  {selectedBlog.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-full bg-navy-950 text-cyan-accent text-[10px] font-mono border border-slate-800">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-glow text-navy-950 font-bold text-xs cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
