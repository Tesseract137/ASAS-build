import React from 'react';
import { motion } from 'framer-motion';

const ProcessFlow: React.FC = () => {
  return (
    <section id="analytics" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tech-font tracking-tight">
            From Raw Data to <span className="text-cyan-400">Strategic and Operational Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
            The sheer volume and diversity of this data would be operationally useless—mere noise—without the powerful analytical engine that transforms it into strategic intelligence.
          </p>
        </div>

        {/* Visualization Area */}
        <div className="relative w-full h-[400px] mb-12 flex items-center justify-center">
          
          {/* SVG Container for Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
             <defs>
                <linearGradient id="noiseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#475569" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
             </defs>

             {/* Raw Noise Lines (Left) */}
             {Array.from({ length: 30 }).map((_, i) => {
                 const yStart = 50 + (i * 10) + (Math.random() * 20 - 10);
                 const yEnd = 200; // Center of engine
                 const controlX1 = 100 + Math.random() * 100;
                 const controlY1 = yStart + (Math.random() * 50 - 25);
                 const controlX2 = 300;
                 const controlY2 = 200;
                 
                 return (
                    <motion.path
                        key={i}
                        d={`M 0 ${yStart} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, 450 200`} // Adjust end point to hit left of box (approx 450px on desktop)
                        fill="none"
                        stroke="url(#noiseGradient)"
                        strokeWidth={Math.random() * 1.5 + 0.5}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 2, delay: i * 0.05, ease: "easeInOut" }}
                        className="hidden md:block" // Hide complex SVG on mobile for performance/layout simplicity
                    />
                 );
             })}
             
             {/* Output Beam (Right) */}
             <motion.line 
                x1="650" y1="200" x2="100%" y2="200" 
                stroke="#06b6d4" 
                strokeWidth="4"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="hidden md:block"
             />
             <motion.line 
                x1="650" y1="200" x2="100%" y2="200" 
                stroke="white" 
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="hidden md:block"
             />
          </svg>

          {/* Labels and Box Container */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full relative z-10 px-4 md:px-0 max-w-6xl mx-auto">
              
              {/* Left Label */}
              <div className="md:w-1/3 text-left mb-8 md:mb-0 relative">
                  <div className="text-slate-300 text-lg uppercase tracking-wider font-bold mb-2">20 Million Data Points / Noise</div>
                  <div className="h-px w-full bg-slate-700 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/2 bg-slate-500 animate-pulse"></div>
                  </div>
                  {/* Mobile-only noise representation */}
                  <div className="md:hidden mt-4 h-24 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0wIDUwIFEgMjUgMjUgNTAgNTAgVCAxMDAgNTAiIHN0cm9rZT0iIzQ3NTU2OSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-30"></div>
              </div>

              {/* The Engine Box */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-64 h-32 md:w-80 md:h-40 bg-slate-900 border border-slate-700 shadow-[0_0_50px_rgba(6,182,212,0.15)] rounded-lg flex items-center justify-center group"
              >
                  {/* 3D Box Effect Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 rounded-lg"></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-cyan-500/50 shadow-[0_0_10px_#06b6d4]"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-slate-950"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <span className="text-cyan-400 tech-font text-xl font-bold tracking-widest uppercase block mb-1">
                        ASAS
                    </span>
                    <span className="text-slate-400 text-xs uppercase tracking-widest">
                        Analytical Engine
                    </span>
                  </div>

                  {/* Connecting Arrows (Visual Only) */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                  </div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                  </div>
              </motion.div>

              {/* Right Label */}
              <div className="md:w-1/3 text-right mt-8 md:mt-0 relative">
                   <div className="text-white text-lg uppercase tracking-wider font-bold mb-2">Actionable Intelligence</div>
                   <div className="h-px w-full bg-cyan-900/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 h-full w-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
                   </div>
                   <div className="absolute -right-2 -top-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
              </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center border-t border-slate-800 pt-8 mt-12">
            <p className="text-slate-400 text-lg leading-relaxed font-light">
                The ASAS analytical engine is a complex, proprietary framework. It cannot be replicated by simply monitoring social media or scraping thousands of social media accounts.
            </p>
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;