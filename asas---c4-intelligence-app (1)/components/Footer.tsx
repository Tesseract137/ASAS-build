import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-cyan-900/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-8 h-8 text-cyan-500"
                >
                    {/* Tesseract */}
                    <path d="M7 7 L 17 7 L 17 17 L 7 17 L 7 7" />
                    <path d="M7 7 L 4 4" />
                    <path d="M17 7 L 20 4" />
                    <path d="M17 17 L 20 20" />
                    <path d="M7 17 L 4 20" />
                    <path d="M4 4 L 20 4 L 20 20 L 4 20 L 4 4" />
                </svg>
                <span className="text-2xl font-bold text-white tech-font">C4 Intelligence</span>
             </div>
             <p className="text-slate-400 max-w-sm">
                Information and Intelligence Dominance
             </p>
          </div>

          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-6">
            
            <div className="flex flex-col items-center md:items-end">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Secure Contact</p>
                <div className="text-xl text-cyan-400 font-mono border border-cyan-900/50 bg-cyan-950/20 px-6 py-2 rounded">
                    Signal: C4Intelligence.137
                </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Secure Mail</p>
                <a href="mailto:C4Intelligence@Proton.me" className="text-lg text-cyan-400 font-mono border border-cyan-900/50 bg-cyan-950/20 px-6 py-2 rounded hover:bg-cyan-950/40 transition-colors block">
                    C4Intelligence@Proton.me
                </a>
            </div>

          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="font-bold text-slate-300">C4 Intelligence</span>
                <span className="w-px h-4 bg-slate-800"></span>
                <span className="italic font-bold text-slate-300">We See, We Hear, We Know</span>
            </div>
            <div className="text-xs text-slate-600 font-mono">
                System Version 2.4.1 | Authorized Personnel Only
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;