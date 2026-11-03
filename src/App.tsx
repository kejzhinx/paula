import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7fd] text-slate-800 antialiased selection:bg-purple-200 selection:text-purple-900 font-sans">
      {/* Navigation Header */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* About & Operational Foundation */}
        <AboutSection />

        {/* Work Experience */}
        <ExperienceSection />

        {/* Skills & Competencies */}
        <SkillsSection />

        {/* Education & Clinical Formation */}
        <EducationSection />

        {/* Contact & Inquiries */}
        <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Official Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
