import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Hospital, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#faf7fd] via-[#f5edfd] to-[#faf7fd] relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-800 text-xs font-semibold mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Education & Clinical Formation
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Formal healthcare training that serves as the bedrock of Francine's work ethic, composure under pressure, and procedural accuracy.
          </p>
        </motion.div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-purple-100/90 shadow-xs hover:shadow-md hover:shadow-purple-900/5 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-500/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-purple-700">
                    <Hospital className="w-4 h-4" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold self-start sm:self-auto border border-purple-200/60">
                {edu.period}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pl-0 sm:pl-16 mb-4">
              Comprehensive clinical program training at the Philippines' premier maternity and pediatric tertiary hospital. Grounding in patient management, maternal and newborn care, high-pressure triage, and strict clinical documentation under DOH guidelines and RA 7392.
            </p>

            <div className="flex flex-wrap items-center gap-2 pl-0 sm:pl-16 pt-2 border-t border-purple-50 text-xs text-slate-600">
              <span className="flex items-center gap-1 text-purple-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                RA 7392 Standards
              </span>
              <span className="text-purple-300">•</span>
              <span className="flex items-center gap-1 text-purple-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                Clinical Documentation Integrity
              </span>
              <span className="text-purple-300">•</span>
              <span className="flex items-center gap-1 text-purple-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                Healthcare Protocols
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
