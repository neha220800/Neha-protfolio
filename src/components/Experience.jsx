import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Zap } from 'lucide-react';

const experienceData = [
  {
    role: 'Software Engineer (Intern)',
    company: 'Yuga Yatra',
    period: '2026 – Present',
    location: 'Remote (Online)',
    type: 'Internship',
    color: '#06B6D4',
    emoji: '💻',
    details: [
      'Designing and developing core features for web applications using modern JavaScript technologies.',
      'Building clean, reusable component libraries and integrating responsive layouts.',
      'Collaborating remotely with cross-functional teams following Agile methodologies.',
      'Writing efficient, developer-friendly documentation for API models and system flows.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'API Integration'],
    current: true,
  },
  {
    role: 'Internshala Student Partner (ISP)',
    company: 'Internshala',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'Student Leadership',
    color: '#EC4899',
    emoji: '🌟',
    details: [
      'Promoting valuable internship and career development opportunities to fellow university students.',
      'Helping peers navigate job resources, application strategies, and resume optimization.',
      'Refining key professional soft skills including digital marketing, outreach, and public speaking.',
    ],
    skills: ['Communication', 'Marketing', 'Networking', 'Leadership'],
    current: true,
  },
  {
    role: 'Class Representative',
    company: 'Sarala Birla University',
    period: '2024 – Present',
    location: 'SBU, Ranchi',
    type: 'University Leadership',
    color: '#8B5CF6',
    emoji: '🎓',
    details: [
      'Serving as the primary liaison between students and academic faculty in coordination discussions.',
      'Organizing and managing class schedules, internal activities, and information broadcasts.',
      'Spearheading academic study groups and supporting extracurricular student initiatives.',
    ],
    skills: ['Team Coordination', 'Organization', 'Conflict Resolution', 'Teamwork'],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 gold-glow-spot rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 purple-glow-spot rounded-full blur-3xl pointer-events-none opacity-50" />

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
            04. Journey
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
            Experience & Leadership
          </h2>
          <div className="w-20 h-[2px]" style={{ background: 'linear-gradient(90deg, #D4AF37, #EC4899)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Gradient Timeline Line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-[2px] hidden md:block"
            style={{
              background: 'linear-gradient(180deg, #D4AF37 0%, #EC4899 50%, #8B5CF6 100%)',
              opacity: 0.4,
            }}
          />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-0 md:pl-24 mb-8 last:mb-0"
            >
              {/* Timeline Node */}
              <div
                className="hidden md:flex absolute left-8 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10 text-xl border-2"
                style={{
                  backgroundColor: `${exp.color}15`,
                  borderColor: exp.color,
                  boxShadow: exp.current ? `0 0 20px ${exp.color}50` : 'none',
                }}
              >
                <span>{exp.emoji}</span>
                {/* Pulse for current */}
                {exp.current && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: exp.color }}
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
              </div>

              {/* Card */}
              <motion.div
                className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${exp.color}08, rgba(17, 34, 64, 0.7))`,
                  border: `1px solid ${exp.color}20`,
                  backdropFilter: 'blur(16px)',
                  borderLeft: `3px solid ${exp.color}`,
                }}
                whileHover={{
                  borderLeftColor: exp.color,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 20px ${exp.color}15`,
                  y: -3,
                }}
              >
                {/* Decorative bg emoji */}
                <span
                  className="absolute right-4 bottom-4 text-6xl pointer-events-none select-none opacity-5"
                >
                  {exp.emoji}
                </span>

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {exp.role}
                      </span>
                      {exp.current && (
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1"
                          style={{
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}40`,
                            color: exp.color,
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: exp.color }} />
                          Active
                        </span>
                      )}
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#8892B0',
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <span className="font-semibold" style={{ color: exp.color }}>{exp.company}</span>
                  </div>

                  <div className="flex flex-col gap-2 text-xs text-slate-400 lg:text-right shrink-0">
                    <div className="flex items-center gap-1.5 lg:justify-end">
                      <Calendar size={12} style={{ color: exp.color }} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 lg:justify-end">
                      <MapPin size={12} style={{ color: exp.color }} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <ul className="space-y-2.5 mb-5">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: exp.color }} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: `${exp.color}10`,
                        border: `1px solid ${exp.color}25`,
                        color: exp.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
