import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ 
        y: -6, 
        borderColor: "rgba(212, 175, 55, 0.6)",
        boxShadow: "0 20px 40px -15px rgba(2, 12, 27, 0.8), 0 0 20px rgba(212, 175, 55, 0.25)"
      }}
      className={`glass-card p-6 rounded-xl transition-all duration-300 shadow-card-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};
