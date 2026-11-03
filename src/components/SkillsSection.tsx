import React from 'react';
import { motion } from 'motion/react';
import {
  CalendarDays,
  ListTodo,
  FileCheck2,
  Clock4,
  MailCheck,
  Target,
  Home,
  Database,
  Archive,
  UserCheck
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  // Mapping each exact skill from the CV to an icon and practical domain context
  const skillDetails = [
    {
      name: "Calendar Management",
      icon: CalendarDays,
      category: "Administrative",
      description: "Coordinating executive agendas, scheduling multi-party calls, and preventing scheduling conflicts across time zones."
    },
    {
      name: "Task tracking",
      icon: ListTodo,
      category: "Operations",
      description: "Managing action items, monitoring deal milestones, and ensuring on-time delivery in high-pressure environments."
    },
    {
      name: "Document preparation",
      icon: FileCheck2,
      category: "Documentation",
      description: "Formulating legal deeds, memorandums, lien releases, and formatting records strictly for county filing compliance."
    },
    {
      name: "Scheduling",
      icon: Clock4,
      category: "Administrative",
      description: "Managing operational timelines, hospital shift protocols, buyer consultations, and filing deadlines."
    },
    {
      name: "Email Management",
      icon: MailCheck,
      category: "Communication",
      description: "Triage of high-volume inbox workflows, client communication, and stakeholder follow-ups with swift response times."
    },
    {
      name: "Lead Generation",
      icon: Target,
      category: "Growth & Outreach",
      description: "Identifying target decision-makers, database prospecting, and multi-channel outreach across LinkedIn, SMS, and email."
    },
    {
      name: "Real Estate Support",
      icon: Home,
      category: "Real Estate",
      description: "Drafting deal updates, listing across investment channels, and coordinating directly with title entities and county recorders."
    },
    {
      name: "Data Entry",
      icon: Database,
      category: "Data Integrity",
      description: "Fast, accurate input of transactional details, contact records, and clinical information with zero tolerance for errors."
    },
    {
      name: "Record keeping",
      icon: Archive,
      category: "Compliance",
      description: "Secure, confidential archiving of hospital medical records and real estate title deeds following strict legal protocols."
    },
    {
      name: "Client Coordination",
      icon: UserCheck,
      category: "Stakeholder Relations",
      description: "Active communication with individual buyers, corporate brokers, county officials, and healthcare teams from start to finish."
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-[#faf7fd] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-800 text-xs font-semibold mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Specialized Skills & Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The direct skill set documented in Francine’s CV, honed through years of hands-on real estate support, virtual administration, and hospital clinical practice.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillDetails.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white/85 backdrop-blur-sm border border-purple-100/90 hover:border-purple-200 shadow-2xs hover:shadow-md hover:shadow-purple-900/5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-purple-100/70 text-purple-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
                      {skill.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Badges List from CV */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-purple-50/70 border border-purple-100/80 text-center"
        >
          <span className="text-xs font-semibold text-purple-900 uppercase tracking-wider block mb-3">
            Quick Skill Summary (As Listed in CV)
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsList.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-purple-900 border border-purple-200/70 shadow-2xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
