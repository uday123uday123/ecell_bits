import React from 'react';
import { Instagram, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingSocialBar: React.FC = () => {
  const socialLinks = [
    {
      name: 'Google Maps',
      icon: <MapPin className="w-5 h-5" fill="#4285F4" color="white" />,
      url: 'https://maps.app.goo.gl/9wsVeDnRd6WfuqRf7',
      bgColor: 'bg-slate-800',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5 text-white" />,
      url: 'https://www.instagram.com/ecell.bitsvizag?xtok=MTc4ajJhcmZmdDU5bg==',
      bgColor: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
      hoverColor: 'hover:opacity-80',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 text-white" fill="currentColor" />,
      url: 'https://www.linkedin.com/company/entrepreneurship-cell-bits-vizag/',
      bgColor: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#004182]',
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-3 p-2 rounded-full bg-navy-950/40 backdrop-blur-md border border-white/10 shadow-xl">
      {socialLinks.map((link, idx) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * idx }}
          whileHover={{ scale: 1.15, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${link.bgColor} ${link.hoverColor}`}
          title={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};
