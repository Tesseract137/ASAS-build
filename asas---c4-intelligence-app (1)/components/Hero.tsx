import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950 grid-bg z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/50 to-slate-950 z-10 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 text-xs uppercase tracking-widest font-bold">System Live</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tech-font tracking-tighter glow-text">
            ASAS
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-slate-300 mb-8 tech-font tracking-widest uppercase border-b border-cyan-500/30 inline-block pb-2">
            Alert Safe Analytics System
          </h2>

          <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600 mb-12 tech-font uppercase">
            Live - On Demand National Security Management
          </p>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-slate-400 text-lg mb-6 leading-relaxed font-light">
              A System Developed by C4 Intelligence for the Republic of South Africa.
            </p>
            
            <div className="max-w-2xl mx-auto border-t border-slate-900 pt-6">
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-bold mb-4">
                The System was made available to SAPS during the July 2021 unrest. The speed, accuracy and scale of the data ensured that the unrest was contained mainly to 2 provinces. Testimony regarding the available Intelligence during the July unrest was given in camera at the Human Rights enquiry and a seven page recommendation document was supplied.
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-bold">
                Critical High Risk Intelligence is shared immediately with the NATJOINTS- National Joint Operational and Intelligence Structure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative scanning line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20 animate-scan" />
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .clip-path-slant {
          clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
        }
      `}</style>
    </section>
  );
};

export default Hero;