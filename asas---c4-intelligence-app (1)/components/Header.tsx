import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-cyan-900/50 py-2'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Text - Stacked Vertically */}
        <div className="flex flex-col justify-center group cursor-pointer">
          <span className="text-2xl md:text-3xl text-cyan-400 uppercase tracking-[0.15em] leading-none font-bold mb-1">
            C4 Intelligence
          </span>
          <span className="text-[0.6rem] md:text-[0.7rem] text-slate-300 uppercase tracking-[0.3em] leading-none font-bold pl-1 opacity-90">
            We See, We Hear, We Know
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors tech-font font-semibold whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <div className="px-2 py-1 border border-cyan-500/50 bg-cyan-950/30 text-cyan-400 text-[0.6rem] uppercase tracking-wider font-bold whitespace-nowrap">
            Signal: C4Intelligence.137
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-cyan-900/50 p-6 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-wider text-slate-300 hover:text-cyan-400 tech-font"
            >
              {link.label}
            </a>
          ))}
           <div className="mt-4 px-4 py-3 border border-cyan-500/50 bg-cyan-950/30 text-cyan-400 text-sm uppercase tracking-widest font-bold text-center">
            Signal: C4Intelligence.137
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;