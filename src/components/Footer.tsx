import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#faf7fd] to-[#f2e7f9] border-t border-purple-100/80 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Info */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-pink-300 text-white font-semibold text-xs flex items-center justify-center">
              FP
            </div>
            <span className="text-base font-bold text-slate-900">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Disposition Assistant • Real Estate Operations • Registered Midwife • Virtual Assistance
          </p>
        </div>

        {/* Center: Contact Summary */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-purple-600" />
            {personalInfo.email}
          </span>
          <span className="text-purple-300">•</span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-purple-600" />
            {personalInfo.phone}
          </span>
          <span className="text-purple-300">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-purple-600" />
            San Pedro, Laguna PH
          </span>
        </div>

        {/* Right: Scroll to top */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-purple-800 bg-white hover:bg-purple-100/70 border border-purple-200 transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-purple-100/60 text-center text-[11px] text-slate-400">
        © {new Date().getFullYear()} {personalInfo.name}. All portfolio information verified directly from official resume credentials.
      </div>
    </footer>
  );
};
