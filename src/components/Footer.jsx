import React, { useState, useEffect } from 'react';
import { ChevronUp, Linkedin, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep border-t border-gold-primary/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Credits */}
        <div className="text-center md:text-left">
          <span className="font-serif text-lg font-bold text-slate-bright tracking-widest">
            NEHA<span className="text-gold-primary">.K</span>
          </span>
          <p className="text-xs text-slate-muted mt-2">
            Designed & Built with React & Tailwind CSS.
          </p>
          <p className="text-xs text-slate-muted mt-1">
            &copy; {currentYear} Neha Kumari. All rights reserved.
          </p>
        </div>

        {/* Social Quick-connect */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/neha-kumari-5bb2aa326"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-gold-primary transition-colors duration-300"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/neha220800"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-gold-primary transition-colors duration-300"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:adhyagupta28@gmail.com"
            className="text-slate-muted hover:text-gold-primary transition-colors duration-300"
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gold-primary text-navy-deep hover:bg-gold-light shadow-gold-glow hover:shadow-gold-glow-hover transition-all duration-300 border border-gold-primary cursor-pointer focus:outline-none"
            title="Back to Top"
          >
            <ChevronUp size={20} className="stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
