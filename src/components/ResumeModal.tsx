import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-purple-200 z-10"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-purple-50/90 border-b border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Ma. Francine Paula Javier – Official Resume
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Paula_CV__69d0a5a7.pdf
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.cvPdfPath}
                  download="Ma_Francine_Paula_Javier_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <a
                  href={personalInfo.cvPdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-slate-600 hover:text-purple-800 hover:bg-purple-100/60 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-purple-100/60 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewport */}
            <div className="flex-1 bg-slate-100 w-full h-full relative">
              <object
                data={personalInfo.cvPdfPath}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white">
                  <FileText className="w-12 h-12 text-purple-400 mb-3" />
                  <h4 className="text-base font-semibold text-slate-800 mb-2">
                    Unable to display PDF preview in this browser
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mb-4">
                    You can download the full PDF resume directly to view all credentials and work history.
                  </p>
                  <a
                    href={personalInfo.cvPdfPath}
                    download="Ma_Francine_Paula_Javier_CV.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV Document</span>
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
