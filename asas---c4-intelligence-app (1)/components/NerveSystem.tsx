import React from 'react';
import { NERVE_SYSTEM_DATA } from '../constants';
import { motion } from 'framer-motion';

const NerveSystem: React.FC = () => {
  return (
    <section id="nerve-system" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tech-font uppercase">
            The National Nerve System
          </h2>
          <p className="text-lg md:text-xl text-cyan-500 tech-font uppercase tracking-wide max-w-4xl mx-auto font-bold">
            20 million intelligence data points, analyzed and verified at the speed of social media posts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {NERVE_SYSTEM_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-8 border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/10 group-hover:border-cyan-500/40 transition-colors rounded-tr-3xl" />
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-700 group-hover:border-cyan-500/30 transition-colors" />
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-slate-950 border border-cyan-900 rounded-lg group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-shadow">
                  <item.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tech-font uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NerveSystem;