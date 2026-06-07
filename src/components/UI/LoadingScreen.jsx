import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ['Initializing...', 'Loading Assets...', 'Almost Ready...', 'Welcome!'];

  useEffect(() => {
    const intervals = [
      setTimeout(() => { setProgress(30); setPhase(1); }, 400),
      setTimeout(() => { setProgress(65); setPhase(2); }, 900),
      setTimeout(() => { setProgress(90); setPhase(3); }, 1400),
      setTimeout(() => { setProgress(100); }, 1700),
      setTimeout(() => onComplete(), 2200),
    ];
    return () => intervals.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020C1B] overflow-hidden"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Animated bg orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          className="relative mb-8"
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-yellow-400/20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            style={{ margin: '-20px' }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-purple-500/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
            style={{ margin: '-30px' }}
          />

          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400/20 to-purple-600/20 border border-yellow-400/30 flex items-center justify-center neon-border-gold">
            <span
              className="font-bold text-5xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #D4AF37, #8B5CF6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              NK
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl font-bold text-white mb-2 tracking-widest"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          NEHA KUMARI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-yellow-400/70 mb-10"
        >
          Software Developer
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '220px' }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="relative"
        >
          <div className="w-[220px] h-[3px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #D4AF37, #8B5CF6, #06B6D4)',
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          {/* Phase text */}
          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-xs text-white/40 mt-3 tracking-widest"
          >
            {phases[phase]}
          </motion.p>
        </motion.div>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-yellow-400"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
