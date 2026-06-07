import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';

const projectsData = [
  {
    title: 'Royatra – Travel Website',
    type: 'Backend & API Project',
    emoji: '✈️',
    color: '#8B5CF6',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Git'],
    description: 'A comprehensive travel platform backend enabling search, booking queries, and user detail storage with a robust database schema and RESTful API design.',
    highlights: [
      'Implemented RESTful CRUD APIs using Node & Express routing templates.',
      'Configured database schemas and relations using MongoDB and Mongoose ODM models.',
      'Secured backend endpoints and handled input validation protocols.',
      'Managed codebase deployment steps and version tracking with Git/GitHub.',
    ],
    github: 'https://github.com/neha220800/Royatra',
    live: 'https://project-1-2-wn7w.onrender.com/',
  },
  {
    title: 'Weather App',
    type: 'Frontend React Project',
    emoji: '🌤️',
    color: '#06B6D4',
    tech: ['React.js', 'JavaScript', 'OpenWeather API', 'Material UI'],
    description: 'A dynamic, user-friendly meteorological dashboard that displays live weather forecasts for searched cities with real-time API integration.',
    highlights: [
      'Integrated OpenWeather API to retrieve live location details and temperature indices.',
      'Managed asynchronous fetching, input states, and side-effects using React hooks.',
      'Engineered structured user input verification and error reporting screens.',
      'Styled fluid responsive viewports using Material UI grid layouts.',
    ],
    github: 'https://github.com/neha220800/',
  },
  {
    title: 'AdhyaAura . Jewels',
    type: 'Frontend PureHTML Project',
    emoji: '💎',
    color: '#F59E0B',
    tech: ['HTML', 'PureCSS'],
    image: '/image-1780845046697.png',
    description: 'A polished static landing page built with PureCSS and HTML, showcasing jewellery branding and product sections.',
    highlights: [
      'Created a responsive layout using PureCSS utility classes and semantic HTML.',
      'Styled the landing page with an elegant jewellery brand theme and polished navigation.',
      'Optimized page structure for accessibility and fast load performance.',
      'Prepared the site for deployment as a static portfolio showcase.',
    ],
    live: 'https://enchanting-beignet-3f2b3a.netlify.app/',
  },
];

// 3D tilt hover card
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl h-full flex flex-col"
      style={{
        background: 'rgba(17, 34, 64, 0.6)',
        border: `1px solid ${project.color}20`,
        backdropFilter: 'blur(16px)',
      }}
      whileHover={{
        y: -8,
        borderColor: `${project.color}50`,
        boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 30px ${project.color}20`,
      }}
    >
      {/* Top color accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Hover shimmer overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 60%)`,
        }}
      />

      <div className="p-7 flex flex-col h-full">
        {project.image && (
          <div className="mb-5 overflow-hidden rounded-3xl h-52 relative">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        )}

        {/* Card Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.emoji}</span>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
            >
              <FolderGit2 size={18} style={{ color: project.color }} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-slate-400 hover:text-white transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                whileHover={{ scale: 1.15, borderColor: project.color, color: project.color }}
                title="GitHub"
              >
                <Github size={15} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-slate-400 hover:text-white transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                whileHover={{ scale: 1.15, borderColor: project.color, color: project.color }}
                title="Live Demo"
              >
                <ExternalLink size={15} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Title area */}
        <div className="mb-4">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] mb-2 block"
            style={{ color: project.color }}
          >
            {project.type}
          </span>
          <h3
            className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6 flex-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="text-slate-400 text-xs flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: project.color }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
                color: project.color,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300"
              style={{
                borderColor: `${project.color}30`,
                color: project.color,
                backgroundColor: `${project.color}08`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = `${project.color}15`;
                e.currentTarget.style.borderColor = project.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = `${project.color}08`;
                e.currentTarget.style.borderColor = `${project.color}30`;
              }}
            >
              <Github size={13} /> Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300"
              style={{
                borderColor: project.color,
                color: '#020C1B',
                backgroundColor: project.color,
              }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 purple-glow-spot rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 cyan-glow-spot rounded-full blur-3xl pointer-events-none opacity-50" />

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
            05. Creations
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
            Featured Projects
          </h2>
          <div className="w-20 h-[2px]" style={{ background: 'linear-gradient(90deg, #D4AF37, #06B6D4)' }} />
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* More projects hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/neha220800/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-yellow-400 transition-colors duration-300 border-b border-slate-600 hover:border-yellow-400 pb-1"
          >
            <Github size={16} />
            View more on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};
