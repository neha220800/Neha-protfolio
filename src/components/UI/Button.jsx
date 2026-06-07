import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  download,
  className = "", 
  icon: Icon
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm tracking-wider uppercase transition-all duration-300 select-none cursor-pointer focus:outline-none";
  
  const variants = {
    primary: "bg-gold-primary text-navy-deep hover:bg-gold-light shadow-gold-glow hover:shadow-gold-glow-hover border border-gold-primary text-glow-gold",
    secondary: "border border-gold-primary text-gold-primary hover:bg-gold-primary/10 hover:shadow-gold-glow",
    text: "text-slate-light hover:text-gold-primary transition-colors"
  };

  const content = (
    <>
      {children}
      {Icon && <Icon size={18} className="transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyle} ${variants[variant]} ${className} group`}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className} group`}
    >
      {content}
    </motion.button>
  );
};
