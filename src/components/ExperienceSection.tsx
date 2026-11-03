import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Building, ChevronRight, CheckCircle } from 'lucide-react';
import { experienceData, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Roles' },
    { id: 'real-estate', label: 'Real Estate & Legal' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'lead-gen', label: 'Lead Generation' },
    { id: 'healthcare', label: 'Clinical Healthcare' },
  ];

  const filteredExperiences = selectedCategory === 'all'
    ? experienceData
    : experienceData.filter((item) => item.category === selectedCategory);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#faf7fd] via-[#f7f0fc] to-[#faf7fd] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-800 text-xs font-semibold mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Work Experience & Key Contributions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A comprehensive record of responsibilities and achievements across legal document disposition, audience expansion, lead pipelines, and hospital operations.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-purple-700 text-white shadow-sm shadow-purple-600/25 scale-105'
                    : 'bg-white/80 text-slate-600 hover:text-purple-700 hover:bg-purple-100/60 border border-purple-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-purple-100 hover:border-purple-200 shadow-xs hover:shadow-md hover:shadow-purple-900/5 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 pb-5 border-b border-purple-50">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <h3 className="text-xl font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-purple-100 text-purple-800 border border-purple-200/60">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <Building className="w-3.5 h-3.5 text-purple-600" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 text-xs font-semibold self-start md:self-auto border border-purple-100">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Verbatim Bullet Points from CV */}
                  <div className="space-y-3 mb-6">
                    {exp.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Competency Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[11px] font-semibold text-slate-400 mr-1">Focus Areas:</span>
                    {exp.keyCompetencies.map((comp) => (
                      <span
                        key={comp}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-purple-50/90 text-purple-700 border border-purple-100"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
