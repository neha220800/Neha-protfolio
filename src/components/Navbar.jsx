import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(l => document.getElementById(l.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark/light mode on document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Toggle root classes so CSS rules in `index.css` apply
      document.documentElement.classList.toggle('light-mode', !darkMode);
      document.documentElement.classList.toggle('dark', darkMode);

      // Inline fallbacks for environments/styles that rely on body styles
      document.body.style.backgroundColor = darkMode ? '#020C1B' : '#F0F4FF';
      document.body.style.color = darkMode ? '#CCD6F6' : '#1a2036';
    }
  }, [darkMode]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
        style={scrolled ? {
          background: 'rgba(2, 12, 27, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        } : {}}
      >
        {/* Scroll progress line inside navbar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, #D4AF37, #8B5CF6, #06B6D4)',
            scaleX: scrolled ? 1 : 0,
            transformOrigin: 'left',
          }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles size={22} style={{ color: '#D4AF37' }} />
            </motion.div>
            <span
              className="text-xl md:text-2xl font-bold tracking-widest transition-all duration-300"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #F8F9FA, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              NEHA<span style={{ color: '#D4AF37', WebkitTextFillColor: '#D4AF37' }}>.K</span>
            </span>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="relative px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none cursor-pointer rounded-lg"
                  style={{
                    color: isActive ? '#D4AF37' : '#8892B0',
                  }}
                  whileHover={{ color: '#D4AF37' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{
                        background: 'rgba(212, 175, 55, 0.08)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {/* Underline hover effect */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-4/5" />
                </motion.button>
              );
            })}

            {/* Dark/Light mode toggle */}
            <motion.button
              onClick={() => setDarkMode(d => !d)}
              className="ml-4 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer focus:outline-none"
              style={{
                borderColor: 'rgba(212, 175, 55, 0.3)',
                backgroundColor: 'rgba(212, 175, 55, 0.07)',
              }}
              whileHover={{ scale: 1.1, borderColor: '#D4AF37' }}
              whileTap={{ scale: 0.9 }}
              title="Toggle dark/light mode"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={15} style={{ color: '#D4AF37' }} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={15} style={{ color: '#8B5CF6' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mode toggle mobile */}
            <motion.button
              onClick={() => setDarkMode(d => !d)}
              className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer focus:outline-none"
              style={{ borderColor: 'rgba(212, 175, 55, 0.3)', backgroundColor: 'rgba(212, 175, 55, 0.07)' }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={14} style={{ color: '#D4AF37' }} /> : <Moon size={14} style={{ color: '#8B5CF6' }} />}
            </motion.button>

            {/* Hamburger */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-yellow-400 transition-colors focus:outline-none cursor-pointer"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-0 right-0 w-72 h-screen z-40 flex flex-col pt-24 pb-12 px-8"
            style={{
              background: 'rgba(2, 12, 27, 0.97)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(212, 175, 55, 0.1)',
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-yellow-400 transition-colors focus:outline-none"
            >
              <X size={24} />
            </button>

            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-2">
              <Sparkles size={20} style={{ color: '#D4AF37' }} />
              <span className="text-lg font-bold text-white tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
                NEHA.K
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none cursor-pointer"
                  style={{
                    color: activeSection === link.id ? '#D4AF37' : '#8892B0',
                    backgroundColor: activeSection === link.id ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
                    borderLeft: activeSection === link.id ? '2px solid #D4AF37' : '2px solid transparent',
                  }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 5, color: '#D4AF37' }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile socials */}
            <div className="mt-auto pt-8 border-t border-white/5">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Connect</p>
              <div className="flex gap-3">
                {['GitHub', 'LinkedIn', 'Email'].map((s) => (
                  <div key={s} className="px-3 py-1.5 rounded text-xs text-slate-400 border border-white/10">{s}</div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
