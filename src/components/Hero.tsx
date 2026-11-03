import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowDown, MapPin, Phone, Building2, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#faf5ff] via-[#f5edfd] to-[#faf7fd]">
      {/* Pastel decorative glow orbs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-purple-200/45 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-indigo-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Core Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Location & Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-900 text-xs font-semibold mb-6 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="flex items-center gap-1 text-slate-700">
              <MapPin className="w-3 h-3 text-purple-600" />
              {personalInfo.location}
            </span>
            <span className="text-purple-300">•</span>
            <span className="text-purple-700 font-medium">Available for Opportunities</span>
          </div>

          {/* Main Title / Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-4">
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle / Roles */}
          <p className="text-lg sm:text-xl font-medium text-purple-900/90 mb-5 leading-relaxed">
            {personalInfo.title}
            <span className="block text-sm sm:text-base font-normal text-slate-600 mt-1">
              Registered Midwife with 3+ years in administrative operations, virtual assistance & real estate support.
            </span>
          </p>

          {/* Verified Resume Summary */}
          <div className="relative p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-purple-100/80 shadow-xs mb-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p className="italic text-slate-700">
              "{personalInfo.summary}"
            </p>
          </div>

          {/* Contact Micro-Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-medium text-slate-600">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-purple-100 text-slate-700 hover:text-purple-700 hover:border-purple-300 transition-colors shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-purple-600" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-purple-100 text-slate-700 hover:text-purple-700 hover:border-purple-300 transition-colors shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-purple-600" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#contact"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Connect with Me</span>
            </a>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-purple-900 bg-purple-100/90 hover:bg-purple-200/90 border border-purple-200 shadow-2xs transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-purple-700" />
              <span>Preview Original CV</span>
            </button>

            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-sm font-medium text-slate-600 hover:text-purple-800 transition-colors cursor-pointer"
            >
              <span>Work History</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Picture with Pastel Aesthetic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Framed Profile Card */}
          <div className="relative w-72 sm:w-80 md:w-88">
            {/* Soft decorative background layers */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/60 via-purple-100/50 to-pink-200/50 rounded-3xl blur-xl -z-10" />
            <div className="absolute inset-0 bg-white/40 rounded-3xl border-2 border-purple-200/60 -z-5 rotate-2 transform" />

            {/* Main Portrait Frame */}
            <div className="relative bg-gradient-to-b from-purple-50 to-white p-3 rounded-3xl border border-purple-200/80 shadow-xl shadow-purple-900/10 overflow-hidden">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-purple-100 relative group">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Subtitle overlay inside photo */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xs">
                  <div className="text-xs font-bold text-slate-900">Ma. Francine Paula Javier</div>
                  <div className="text-[11px] text-purple-700 font-medium">Healthcare & Admin Professional</div>
                </div>
              </div>
            </div>

            {/* Floating genuine capability pills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-purple-100 shadow-md shadow-purple-900/5 flex items-center gap-2.5"
            >
              <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold text-slate-900">Real Estate Support</div>
                <div className="text-[10px] text-slate-500">Deeds & County Recording</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-purple-100 shadow-md shadow-purple-900/5 flex items-center gap-2.5"
            >
              <div className="p-1.5 rounded-lg bg-pink-100 text-pink-700">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold text-slate-900">Registered Midwife</div>
                <div className="text-[10px] text-slate-500">6 Yrs Fabella Hospital</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
