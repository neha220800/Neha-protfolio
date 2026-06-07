import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, width = "w-full", delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`${width}`}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0.1, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
