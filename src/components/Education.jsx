import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Star, BookOpen } from 'lucide-react';

const educationData = [
  {
    institution: 'Sarala Birla University – Ranchi',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2024 – 2027',
    grade: '9.30 CGPA',
    color: '#D4AF37',
    emoji: '🎓',
    details: [
      'Focusing on Core CS principles, RDBMS, and Object-Oriented Programming.',
      'Active participant in academic events and university initiatives.',
      'Maintained top-tier academic standing with a 9.30 CGPA.',
    ],
    highlight: true,
  },
  {
    institution: 'Ursuline High School / Ursuline Inter College',
    degree: 'Class 12 – PCM with Computer Science',
    period: '2022 – 2024',
    grade: '90.8%',
    color: '#8B5CF6',
    emoji: '📚',
    details: [
      'Specialized in Physics, Chemistry, Mathematics, and Computer Science.',
      'Achieved distinction with an aggregate of 90.8% in board examinations.',
      'Developed early programming foundations in C++.',
    ],
    highlight: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 gold-glow-spot rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 purple-glow-spot rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-3" style={{ color: '#D4AF37' }}>
            02. Academics
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #F8F9FA, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Education
          </h2>
          <div className="w-20 h-[2px]" style={{ background: 'linear-gradient(90deg, #D4AF37, #8B5CF6)' }} />
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl p-7 cursor-default"
              style={{
                background: `linear-gradient(135deg, ${edu.color}08, rgba(17, 34, 64, 0.8))`,
                border: `1px solid ${edu.color}25`,
                backdropFilter: 'blur(16px)',
                borderTop: `3px solid ${edu.color}`,
                boxShadow: edu.highlight ? `0 0 40px ${edu.color}10` : 'none',
              }}
            >
              {/* Background emoji watermark */}
              <span className="absolute right-4 bottom-4 text-8xl opacity-5 select-none pointer-events-none">
                {edu.emoji}
              </span>

              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                  style={{
                    background: `${edu.color}15`,
                    border: `1px solid ${edu.color}30`,
                  }}
                >
                  {edu.emoji}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: `${edu.color}12`,
                    border: `1px solid ${edu.color}30`,
                    color: edu.color,
                  }}
                >
                  <Calendar size={11} />
                  {edu.period}
                </div>
              </div>

              {/* Institution & Degree */}
              <h3
                className="text-lg md:text-xl font-bold text-white mb-1.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {edu.institution}
              </h3>
              <p className="text-sm text-slate-400 mb-4">{edu.degree}</p>

              {/* Grade badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{
                  background: `${edu.color}15`,
                  border: `1px solid ${edu.color}40`,
                  color: edu.color,
                }}
              >
                <Star size={11} />
                {edu.grade}
              </div>

              {/* Details */}
              <ul className="space-y-2.5">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-slate-400 text-xs md:text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: edu.color }} />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Bottom gradient line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
                className="mt-5 h-[1px] rounded-full origin-left"
                style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
