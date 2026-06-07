import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100] scroll-progress-bar"
        style={{ scaleX }}
      />
      {/* Glow layer */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] origin-left z-[99] blur-sm opacity-60"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #D4AF37, #8B5CF6, #06B6D4, #EC4899)',
        }}
      />
    </>
  );
};
