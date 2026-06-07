import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setLaunching(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setLaunching(false), 800);
    }, 300);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={handleClick}
          className="rocket-btn group"
          title="Back to top"
          aria-label="Back to top"
          style={{ zIndex: 1000 }}
        >
          <motion.div
            className="relative w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(139, 92, 246, 0.2))',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
            }}
            animate={launching
              ? { y: -80, opacity: 0 }
              : { y: [0, -4, 0] }
            }
            transition={launching
              ? { duration: 0.4, ease: 'easeIn' }
              : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            }
            whileHover={{ scale: 1.2 }}
          >
            {/* Rocket body */}
            <span className="text-2xl select-none">🚀</span>

            {/* Flame trail */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2"
              animate={{ scaleY: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              <div className="w-2 h-4 rounded-b-full"
                style={{ background: 'linear-gradient(180deg, #F59E0B, #EF4444, transparent)' }}
              />
            </motion.div>
          </motion.div>

          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 text-xs font-bold text-yellow-400 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none bg-navy-deep px-2 py-1 rounded border border-yellow-400/20">
            LAUNCH ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
