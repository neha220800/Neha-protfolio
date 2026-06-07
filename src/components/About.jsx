import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, GraduationCap, Briefcase, Sparkles, Star, Zap, Trophy } from 'lucide-react';

const stats = [
  { label: 'Academic CGPA', value: 9.30, suffix: '', display: '9.30', icon: GraduationCap, color: '#D4AF37', accent: '#F3E5AB', emoji: '🎓' },
  { label: 'Projects Built', value: 3, suffix: '+', display: '3+', icon: Code2, color: '#06B6D4', accent: '#67E8F9', emoji: '💻' },
  { label: 'Certifications', value: 2, suffix: '', display: '2', icon: Award, color: '#8B5CF6', accent: '#C4B5FD', emoji: '📜' },
  { label: 'Leadership Roles', value: 3, suffix: '', display: '3', icon: Briefcase, color: '#EC4899', accent: '#F9A8D4', emoji: '🌟' },
];

// Animated counter hook
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isDecimal = target % 1 !== 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      const current = eased * target;
      setCount(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(stat.value, 2000, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl p-6 cursor-default"
      style={{
        background: `linear-gradient(135deg, ${stat.color}10, ${stat.color}05)`,
        border: `1px solid ${stat.color}25`,
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Background decorative icon */}
      <Icon
        className="absolute right-3 bottom-3 transition-all duration-500"
        size={64}
        style={{ color: stat.color, opacity: 0.07 }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-2xl animate-shimmer pointer-events-none" />

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
        >
          <Icon size={18} style={{ color: stat.color }} />
        </div>
        <span className="text-xl">{stat.emoji}</span>
      </div>

      {/* Counter */}
      <div className="mb-2">
        <span
          className="text-4xl font-extrabold tracking-tight"
          style={{
            background: `linear-gradient(135deg, ${stat.color}, ${stat.accent})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {stat.value % 1 !== 0 ? Number(count).toFixed(2) : Math.floor(Number(count))}{stat.suffix}
        </span>
      </div>

      <span className="block text-xs uppercase tracking-widest text-slate-400 font-semibold">
        {stat.label}
      </span>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
        className="mt-3 h-[2px] rounded-full origin-left"
        style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
      />
    </motion.div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 navy-glow-spot rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-60 h-60 gold-glow-spot rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-3" style={{ color: '#D4AF37' }}>
            01. Discovery
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #F8F9FA, #CCD6F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Me
          </h2>
          <div className="w-20 h-[2px]" style={{ background: 'linear-gradient(90deg, #D4AF37, #8B5CF6)' }} />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Text Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Passionate software developer focusing on{' '}
                <span style={{ color: '#D4AF37' }}>clean code</span>,{' '}
                <span style={{ color: '#06B6D4' }}>responsive design</span>, and{' '}
                <span style={{ color: '#8B5CF6' }}>scalable architecture</span>.
              </h3>
            </motion.div>

            {[
              "Currently pursuing a Bachelor of Computer Applications (BCA) at Sarala Birla University, Ranchi. With an academic record of 9.30 CGPA and Class 12 score of 90.8%, I have built a strong foundation in computer science, logic, and mathematics.",
              "My technical journey spans building front-end applications like my React-based Weather App to back-end services like Royatra, a Node.js travel portal. Each project has deepened my skills in modern web development.",
              "Beyond code, my roles as an Internshala Student Partner and Class Representative have cultivated essential soft skills: public speaking, team coordination, and strategic thinking. I am driven by curiosity to build solutions that make an impact."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="text-slate-400 leading-relaxed mb-5 text-sm md:text-base"
              >
                {text}
              </motion.p>
            ))}

            {/* Quick info badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {[
                { icon: '📍', text: 'Ranchi, Jharkhand' },
                { icon: '🎓', text: 'BCA Student' },
                { icon: '💼', text: 'Open to Internships' },
                { icon: '⚡', text: 'Fast Learner' },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(212, 175, 55, 0.07)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    color: '#CCD6F6',
                  }}
                >
                  <span>{icon}</span>
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
