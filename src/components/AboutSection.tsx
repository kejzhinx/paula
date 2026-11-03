import React from 'react';
import { motion } from 'motion/react';
import { FileSpreadsheet, ShieldAlert, Users, HeartPulse, CheckCircle2, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "Real Estate Disposition & Legal Filing",
      icon: FileSpreadsheet,
      badge: "Good Neighbor Solutions LLC",
      desc: "Formulating, formatting, and tracking legal deeds, memorandums, and lien releases. Direct coordination with county recorders and title departments to resolve filing rejections and verify recording fees.",
      tag: "Property Deals & Title Support"
    },
    {
      title: "Strict Confidentiality & Precision",
      icon: ShieldAlert,
      badge: "Clinical & Legal Compliance",
      desc: "Rooted in maternal healthcare and RA 7392 compliance, handling sensitive patient and client records with meticulous accuracy, data integrity, and strict adherence to protocols.",
      tag: "Data Integrity & Record Keeping"
    },
    {
      title: "Virtual Operations & Scheduling",
      icon: Clock,
      badge: "Administrative Mastery",
      desc: "Managing high-volume communications, active buyer & broker outreach, calendar organization, email workflows, and multi-platform property listings.",
      tag: "Workflow & Calendar Coordination"
    },
    {
      title: "Growth, Outreach & Social Media",
      icon: Users,
      badge: "Audience & Lead Expansion",
      desc: "Driving 30% social media engagement increases (Your Eden Agency) and 20% lead quality enhancements (ESP Solutions LLC) across email, SMS, and LinkedIn.",
      tag: "B2B Outreach & Brand Consistency"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#faf7fd] relative overflow-hidden">
      {/* Background soft pastel ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200/70 text-purple-800 text-xs font-semibold mb-3">
            Professional Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Where Healthcare Rigor Meets{' '}
            <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
              Virtual Operations
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Starting as a Registered Midwife II at the Philippines' premier maternity hospital, Francine developed an unshakeable foundation in time management, high-stress problem solving, and strict documentation. Today, she applies this exact precision to real estate disposition, virtual administration, and client relations.
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 sm:p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100/80 hover:border-purple-200 shadow-sm shadow-purple-900/5 hover:shadow-md hover:shadow-purple-900/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-700 group-hover:bg-purple-100/80 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-purple-700 bg-purple-100/60 px-2.5 py-1 rounded-full border border-purple-200/50">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {pillar.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-800/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>{pillar.tag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick highlight banner from CV */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg shadow-purple-950/15 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left max-w-xl">
            <span className="text-xs uppercase tracking-wider text-purple-200 font-semibold">
              Proven Track Record
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Prepared for high-volume, accuracy-critical roles
            </h4>
            <p className="text-purple-200/90 text-sm mt-2 leading-relaxed">
              Equipped with deep domain familiarity across legal documentation, county recording compliance, social engagement strategies, and enterprise calendar/task management.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-purple-950 bg-purple-100 hover:bg-white transition-all shadow-xs"
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
