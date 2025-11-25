import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RISK_DATA: Record<number, { label: string; description: string; color: string; borderColor: string; shadow: string }> = {
  1: { 
    label: "Minimal", 
    description: "Routine signals analysis. Baseline metrics nominal. No significant anomalies in the national noise floor.", 
    color: "text-blue-400", 
    borderColor: "border-blue-500/50",
    shadow: "shadow-blue-500/20"
  },
  2: { 
    label: "Low", 
    description: "Standard collection protocols active. Minor data fluctuations detected within acceptable variance parameters.", 
    color: "text-blue-300", 
    borderColor: "border-blue-400/50",
    shadow: "shadow-blue-400/20"
  },
  3: { 
    label: "Moderate", 
    description: "Correlation variances detected in sub-sectors. Watchlist activity showing statistical increase.", 
    color: "text-cyan-300", 
    borderColor: "border-cyan-400/50",
    shadow: "shadow-cyan-400/20"
  },
  4: { 
    label: "Elevated", 
    description: "Threat pattern recognition triggered. Elevated indicators observed. Sector-specific vigilance required.", 
    color: "text-cyan-400", 
    borderColor: "border-cyan-500/50",
    shadow: "shadow-cyan-500/20"
  },
  5: { 
    label: "Elevated", 
    description: "Converging risk indicators across multiple nodes. Resource pre-positioning and targeted analysis recommended.", 
    color: "text-yellow-400", 
    borderColor: "border-yellow-500/50",
    shadow: "shadow-yellow-500/20"
  },
  6: { 
    label: "High", 
    description: "Confirmed threat vectors identified. Active mitigation countermeasures and stakeholder alerts engaged.", 
    color: "text-orange-400", 
    borderColor: "border-orange-500/50",
    shadow: "shadow-orange-500/20"
  },
  7: { 
    label: "High", 
    description: "Regional destabilization warning. Escalating instability. Rapid response analytic teams on standby.", 
    color: "text-orange-500", 
    borderColor: "border-orange-600/50",
    shadow: "shadow-orange-600/20"
  },
  8: { 
    label: "Critical", 
    description: "Imminent breach likelihood. Intelligence suggests coordinated efforts. Strategic assets at risk.", 
    color: "text-red-500", 
    borderColor: "border-red-500/50",
    shadow: "shadow-red-500/20"
  },
  9: { 
    label: "Severe", 
    description: "System-wide red alert. Maximum defensive posture activated. Immediate intervention protocols in effect.", 
    color: "text-red-600", 
    borderColor: "border-red-600/50",
    shadow: "shadow-red-600/20"
  },
};

const RiskBarometer: React.FC = () => {
  const [currentRisk, setCurrentRisk] = useState(4);
  const data = RISK_DATA[currentRisk];

  // Calculate percentage for slider position (0-100)
  const percent = ((currentRisk - 1) / 8) * 100;

  // Clamped position for the floating card to keep it within bounds visually
  // We clamp the visual center between 25% and 75% of the container width
  const boxPosition = Math.min(Math.max(percent, 25), 75);

  return (
    <section id="risk" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tech-font uppercase">
                National Risk Barometer
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Continuous monitoring of the national "risk mood" quantified on a scale from 1 to 9.
            </p>
        </div>

        <div className="max-w-4xl mx-auto p-8 md:p-12 border border-slate-800 bg-slate-900/50 rounded-xl relative overflow-visible select-none">
            {/* Background Tech Details */}
            <div className="absolute top-4 left-4 text-[10px] text-cyan-900 font-mono hidden md:block">BAROMETER_V2.1</div>
            <div className="absolute bottom-4 right-4 text-[10px] text-red-900 font-mono hidden md:block">THREAT_VECTOR_ANALYSIS</div>

            {/* Scale Numbers */}
            <div className="relative z-20 mb-6">
                <div className="flex justify-between items-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button 
                            key={num} 
                            onClick={() => setCurrentRisk(num)}
                            className={`
                                relative w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center 
                                font-mono text-sm md:text-lg transition-all duration-300 focus:outline-none
                                ${num === currentRisk 
                                    ? `${RISK_DATA[num].color} font-bold bg-slate-800 scale-125 shadow-[0_0_20px_rgba(0,0,0,0.5)] ring-1 ring-white/10` 
                                    : 'text-slate-600 hover:text-slate-300 hover:bg-slate-800/50'
                                }
                            `}
                        >
                            {num}
                            {num === currentRisk && (
                                <span className={`absolute inset-0 rounded-full animate-ping opacity-20 ${RISK_DATA[num].color.replace('text', 'bg')}`}></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* The Bar Track */}
            {/* mx-4 (1rem) on md matches half width of w-10 (2.5rem) approx to align centers? 
                w-10 is 2.5rem (40px). Half is 1.25rem (20px).
                mx-4 is 16px. Close enough for visual alignment. 
            */}
            <div 
                className="h-4 md:h-6 w-auto mx-4 md:mx-5 rounded-full bg-slate-800 relative mb-12 cursor-pointer group"
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const p = Math.max(0, Math.min(1, x / rect.width));
                    const risk = Math.round(p * 8) + 1;
                    setCurrentRisk(risk);
                }}
            >
                {/* Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-cyan-700 to-red-600 opacity-50 rounded-full group-hover:opacity-70 transition-opacity" />
                
                {/* Active Slider Indicator */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-[0_0_15px_white] z-10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ left: `${percent}%` }}
                >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-8 md:h-10 bg-white border-2 border-slate-900 rounded shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                </div>
            </div>

            {/* Info Box Area */}
            <div className="relative md:h-32 mt-8 md:mt-0">
                
                {/* Connector Arrow (Desktop Only) */}
                 <div 
                    className={`hidden md:block absolute -top-4 w-4 h-4 bg-slate-950 border-t border-l ${data.borderColor} rotate-45 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-10`}
                    style={{ left: `calc(${percent}% - 9px)` }} 
                 />

                {/* Floating Card Wrapper */}
                <div 
                    className="w-full md:w-[28rem] md:absolute transition-all duration-500 ease-out md:-translate-x-1/2"
                    style={{ 
                        // On desktop, we position based on clamped percentage.
                        // On mobile, position is static (default) so left is ignored.
                        left: `${boxPosition}%` 
                    }}
                >
                    <div className={`bg-slate-950/90 backdrop-blur border ${data.borderColor} ${data.shadow} p-6 rounded shadow-lg transition-all duration-500 relative`}>
                         {/* Mobile Arrow (Absolute to card) */}
                         <div className={`md:hidden absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 border-t border-l ${data.borderColor} rotate-45`}></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentRisk}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h4 className={`${data.color} font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2`}>
                                    <span className="w-2 h-2 rounded-full bg-current animate-pulse"/>
                                    Current Level {currentRisk}: {data.label}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed font-light">
                                    {data.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 flex justify-between text-[10px] font-mono text-slate-700">
                <span>SIG: #0A2342</span>
                <span>SIG: #DC143C</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RiskBarometer;