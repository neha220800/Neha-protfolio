import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Database, Terminal, Users, Sparkles, Globe, Cpu } from 'lucide-react';

const skillCategories = [
  { id: 'all', name: 'All Skills', color: '#D4AF37' },
  { id: 'frontend', name: 'Frontend', icon: Globe, color: '#06B6D4' },
  { id: 'backend', name: 'Backend & DB', icon: Database, color: '#8B5CF6' },
  { id: 'programming', name: 'Core CS', icon: Terminal, color: '#D4AF37' },
  { id: 'professional', name: 'Professional', icon: Users, color: '#EC4899' },
];

const skillsData = [
  // Frontend
  { name: 'React.js', level: 90, category: 'frontend', icon: '⚛️', progressClass: 'progress-frontend' },
  { name: 'HTML5 / CSS3', level: 92, category: 'frontend', icon: '🌐', progressClass: 'progress-frontend' },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: '🎨', progressClass: 'progress-frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend', icon: '🟨', progressClass: 'progress-frontend' },

  // Backend & Database
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢', progressClass: 'progress-backend' },
  { name: 'Express.js', level: 80, category: 'backend', icon: '🚂', progressClass: 'progress-backend' },
  { name: 'MongoDB', level: 85, category: 'backend', icon: '🍃', progressClass: 'progress-backend' },
  { name: 'SQL', level: 75, category: 'backend', icon: '🗄️', progressClass: 'progress-backend' },

  // Programming & CS
  { name: 'C++', level: 80, category: 'programming', icon: '⚙️', progressClass: 'progress-programming' },
  { name: 'OOPs Concepts', level: 88, category: 'programming', icon: '🧠', progressClass: 'progress-programming' },
  { name: 'Data Structures', level: 78, category: 'programming', icon: '🔷', progressClass: 'progress-programming' },

  // Professional
  { name: 'Leadership', level: 92, category: 'professional', icon: '🌟', progressClass: 'progress-professional' },
  { name: 'Communication', level: 95, category: 'professional', icon: '💬', progressClass: 'progress-professional' },
  { name: 'Teamwork', level: 90, category: 'professional', icon: '🤝', progressClass: 'progress-professional' },
];

const categoryBadgeClass = {
  frontend: 'badge-frontend',
  backend: 'badge-backend',
  programming: 'badge-programming',
  professional: 'badge-professional',
};

const categoryLabel = {
  frontend: 'Frontend',
  backend: 'Backend & DB',
  programming: 'Core CS',
  professional: 'Professional',
};

// 3D Tilt Card
const TiltCard = ({ children, className, style }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const activeColor = skillCategories.find(c => c.id === activeCategory)?.color || '#D4AF37';

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 purple-glow-spot rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 cyan-glow-spot rounded-full blur-3xl pointer-events-none" />

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
            03. Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #F8F9FA, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Technical Skills
          </h2>
          <div className="w-20 h-[2px]" style={{ background: 'linear-gradient(90deg, #D4AF37, #8B5CF6)' }} />
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border focus:outline-none cursor-pointer"
                style={{
                  backgroundColor: isActive ? cat.color : 'transparent',
                  borderColor: isActive ? cat.color : `${cat.color}30`,
                  color: isActive ? '#020C1B' : cat.color,
                  boxShadow: isActive ? `0 0 20px ${cat.color}40` : 'none',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icon && <Icon size={13} />}
                {cat.name}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <TiltCard
                className="h-full glass-card rounded-xl p-5 flex flex-col justify-between cursor-default"
              >
                {/* Icon + Name + Level */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-bold text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold" style={{ color: activeColor }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Category badge */}
                  <span className={`inline-block text-[10px] uppercase font-bold tracking-widest mb-4 px-2 py-0.5 rounded border ${categoryBadgeClass[skill.category]}`}>
                    {categoryLabel[skill.category]}
                  </span>
                </div>

                {/* Animated progress bar */}
                <div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
                      className={`h-full rounded-full ${skill.progressClass}`}
                      style={{ boxShadow: `0 0 8px currentColor` }}
                    />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Recruiter Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-5 rounded-xl flex items-center gap-3 max-w-2xl"
          style={{
            background: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
          }}
        >
          <Sparkles className="shrink-0" size={18} style={{ color: '#D4AF37' }} />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-yellow-400">Recruiter Insight:</strong> Neha combines robust backend development (Node.js, Express, MongoDB) with interactive React.js expertise and proven leadership as Class Representative.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
