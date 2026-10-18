import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Clock, ShieldCheck, Cpu, Award, Linkedin, Mail } from 'lucide-react';
import { BITSBadges } from '../components/brand/BITSBadges';
import { INITIAL_FACULTY } from '../lib/mockData';

export const AboutPage: React.FC = () => {
  const timelineEvents = [
    {
      year: '2021',
      title: 'Founding of E-Cell BITS Vizag',
      description: 'Established under Baba Institute of Technology & Sciences with an initial cohort of 15 student innovators.',
    },
    {
      year: '2022',
      title: 'IIC Ministry Recognition',
      description: 'Received 4-star rating from Institution\'s Innovation Council (Ministry of Education, Govt of India).',
    },
    {
      year: '2023',
      title: 'Launch of Maker Lab Prototyping Facility',
      description: 'Inauguration of 24/7 hardware prototyping lab equipped with 3D printers, laser cutters, and IoT rigs.',
    },
    {
      year: '2024',
      title: 'First Unicorn Founder Summit',
      description: 'Hosted Vizag E-Summit with 1,800+ attendees and ₹25 Lakhs seed grant deployment.',
    },
    {
      year: '2025',
      title: 'Regional Incubation Hub Status',
      description: 'Empowered 25+ student ventures across Marine AI, EdTech VR, and CleanTech.',
    },
    {
      year: '2026',
      title: 'Autonomous Startup Accelerator',
      description: 'Pioneering student-led venture fund & venture speed dating in Coastal Andhra.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow text-xs font-mono font-bold">
          <Compass className="w-4 h-4" />
          <span>ABOUT BITS VIZAG E-CELL</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Fostering The Next Generation of <span className="text-cyan-glow">Tech Pioneers</span>
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          The Entrepreneurship Cell of Baba Institute of Technology and Sciences (BITS Vizag) is a non-profit student organization dedicated to instilling an entrepreneurial mindset and cultivating high-impact startups.
        </p>

        <div className="pt-2">
          <BITSBadges />
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-none space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/20 flex items-center justify-center text-white">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-sm font-bold text-white leading-relaxed">
            To equip students with practical skills, meaningful opportunities, and genuine support, enabling them to transform ideas into impactful ventures.
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            For us, entrepreneurship goes beyond organizing events. We are committed to providing hands-on learning, mentorship, industry exposure, and a strong community that supports every step of the entrepreneurial journey—from a simple idea to a successful venture.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-none space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/20 flex items-center justify-center text-white">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-sm font-bold text-white leading-relaxed">
            To be the spark that transforms curious minds into confident builders, making BITS Vizag a campus where every student believes their idea is worth pursuing.
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            We envision a campus where students stop waiting for the perfect moment and start building. A place where ideas are encouraged, experimentation is celebrated, and learning happens through action. Our goal is to create an entrepreneurial culture that empowers students to become innovators, problem-solvers, and job creators.
          </p>
        </div>
      </div>

      {/* Founding Story */}
      <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-none space-y-4 text-center max-w-4xl mx-auto">
        <h3 className="font-display text-2xl font-bold text-white">Our Founding Story</h3>
        <p className="text-sm text-zinc-300 leading-relaxed">
          As a founding team, we built projects from the ground up. Along the way, we discovered that real innovation doesn't come from pressure—it comes from understanding real problems, validating ideas, and building solutions that create genuine value.
        </p>
      </div>

      {/* Interactive Timeline with Animated Reveal */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-mono text-cyan-glow tracking-widest uppercase">Chronology of Excellence</h2>
          <h3 className="font-display text-3xl font-bold text-white">Our Journey (2021 &ndash; 2026)</h3>
        </div>

        <div className="relative border-l-2 border-cyan-glow/30 ml-4 md:ml-32 space-y-10 py-4">
          {timelineEvents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 border-cyan-glow group-hover:scale-125 group-hover:bg-cyan-glow transition duration-300 shadow-[0_0_10px_#00F0FF]" />

              <div className="glass-panel p-6 rounded-2xl border border-cyan-glow/20 hover:border-cyan-glow/50 transition duration-300 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-glow/15 text-cyan-glow font-mono font-bold text-xs">
                  {item.year}
                </span>
                <h4 className="font-display text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Innovation Ecosystem Breakdown */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-cyan-glow/30 shadow-cyan-glow text-center space-y-6">
        <h3 className="font-display text-3xl font-bold text-white">The BITS Vizag Innovation Ecosystem</h3>
        <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Integrated with government schemes, patent attorney networks, and Vizag industrial clusters to ensure seamless growth for every founder.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-4">
          {[
            { title: 'Maker Lab', desc: '3D Printers, Laser Cutters, Oscilloscopes' },
            { title: 'Cloud Credits', desc: 'OpenAI, AWS, Anthropic & Vercel Perks' },
            { title: 'IP & Patent Desk', desc: 'Free legal patent filing support' },
            { title: 'VC Speed Dating', desc: 'Closed-door term sheet pitches' },
          ].map((box, i) => (
            <div key={i} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-cyan-glow font-mono">{box.title}</div>
              <div className="text-[11px] text-slate-400 leading-snug">{box.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Faculty Advisors */}
      <div className="space-y-10 pt-8 border-t border-slate-800">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-mono text-cyan-glow tracking-widest uppercase">Guided By Experience</h2>
          <h3 className="font-display text-3xl font-bold text-white">Our Faculty Advisors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {INITIAL_FACULTY.map((faculty) => (
            <motion.div
              key={faculty.id}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-3xl border border-cyan-glow/20 hover:border-cyan-glow/50 transition duration-300 flex flex-col md:flex-row gap-6"
            >
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-24 h-24 rounded-2xl object-cover border-2 border-cyan-glow/30 shadow-cyan-glow mx-auto md:mx-0"
              />
              <div className="space-y-3 text-center md:text-left flex-1">
                <div>
                  <h4 className="font-display text-xl font-bold text-white">{faculty.name}</h4>
                  <p className="text-xs text-cyan-accent font-mono mt-1">{faculty.role}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{faculty.department}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {faculty.bio}
                </p>
                <div className="flex justify-center md:justify-start gap-2 pt-2">
                  {faculty.linkedin && (
                    <a href={faculty.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-navy-900 border border-slate-700 text-slate-400 hover:text-cyan-glow transition">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a href={`mailto:${faculty.email}`} className="p-2 rounded-lg bg-navy-900 border border-slate-700 text-slate-400 hover:text-cyan-glow transition">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
