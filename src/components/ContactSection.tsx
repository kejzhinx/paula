import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, Send, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto with user's inputted details
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#faf7fd] relative">
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
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let’s Connect for Your Team or Project
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Interested in hiring for disposition assistance, virtual operations, legal document coordination, or administrative support? Reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Primary Details Box */}
            <div className="p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-purple-100 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white text-purple-700 shadow-2xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-purple-900 hover:text-purple-700 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    title="Copy Email"
                    className="p-2 rounded-lg text-slate-400 hover:text-purple-700 hover:bg-white transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white text-purple-700 shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Phone & SMS
                      </div>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-purple-900 hover:text-purple-700 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    title="Copy Phone"
                    className="p-2 rounded-lg text-slate-400 hover:text-purple-700 hover:bg-white transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100/80">
                  <div className="p-2.5 rounded-lg bg-white text-purple-700 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-purple-900">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Access Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-purple-100/80 to-pink-50/60 border border-purple-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-purple-950 uppercase tracking-wider">
                  Original Document
                </span>
                <span className="text-[11px] text-purple-700 font-medium">PDF Format</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">
                Download Official Resume
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Need a copy of Francine’s original resume for internal team evaluation or ATS submission?
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.cvPdfPath}
                  download="Ma_Francine_Paula_Javier_CV.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors shadow-2xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="py-2.5 px-3 rounded-xl text-xs font-medium text-purple-800 bg-white hover:bg-purple-50 border border-purple-200 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-white/95 backdrop-blur-sm border border-purple-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Send an Inquiry or Job Invitation
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Messages will be addressed directly to Francine's primary inbox.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 text-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-purple-950 mb-1">
                  Thank you for reaching out!
                </h4>
                <p className="text-xs text-slate-600 mb-4">
                  Your email client has been prepared with your message, or you can contact directly via {personalInfo.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="text-xs font-semibold text-purple-700 hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200/80 bg-purple-50/30 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200/80 bg-purple-50/30 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-subject"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Subject or Role Opportunity
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Disposition Assistant / Virtual Operations Role"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200/80 bg-purple-50/30 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share requirements, role expectations, or ask a question..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200/80 bg-purple-50/30 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm shadow-purple-500/25 transition-all cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
