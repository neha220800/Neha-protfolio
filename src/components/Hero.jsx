import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, Mail, ArrowRight, Github, Linkedin, Code2, Database, Globe, Cpu, Layers, Terminal } from 'lucide-react';

const roles = [
  "Software Developer",
  "Frontend Engineer",
  "React Developer",
  "Full Stack Developer",
  
];

const techIcons = [
  { Icon: Code2, color: '#06B6D4', label: 'React' },
  { Icon: Database, color: '#8B5CF6', label: 'MongoDB' },
  { Icon: Globe, color: '#D4AF37', label: 'Web' },
  { Icon: Cpu, color: '#EC4899', label: 'Node.js' },
  { Icon: Layers, color: '#2563EB', label: 'Full Stack' },
  { Icon: Terminal, color: '#10B981', label: 'CLI' },
];

// Orbit tech icon at a given angle radius
const OrbitIcon = ({ icon: { Icon, color, label }, index, total, orbitRadius = 160, duration = 18 }) => {
  const angle = (index / total) * 360;
  return (
    <motion.div
      className="absolute"
      style={{
        width: 40,
        height: 40,
        top: '50%',
        left: '50%',
        marginTop: -20,
        marginLeft: -20,
        '--start-angle': `${angle}deg`,
        '--orbit-radius': `${orbitRadius}px`,
      }}
      animate={{
        rotate: [angle, angle + 360],
      }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay: 0 }}
    >
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="w-10 h-10 rounded-full flex items-center justify-center border"
        style={{
          backgroundColor: `${color}15`,
          borderColor: `${color}40`,
          boxShadow: `0 0 10px ${color}30`,
          transform: `translateX(${orbitRadius}px)`,
        }}
        title={label}
      >
        <Icon size={16} style={{ color }} />
      </motion.div>
    </motion.div>
  );
};

// Magnetic button wrapper
const MagneticButton = ({ children, onClick, href, download, className, style }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx * 0.3);
    y.set(dy * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Tag
        href={href}
        download={download}
        onClick={onClick}
        className={className}
        style={style}
        target={href && !download ? '_blank' : undefined}
        rel={href && !download ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

// Floating geometric shapes
const FloatingShape = ({ shape, size, color, style, animDuration = 6, delay = 0 }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={style}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 15, 0, -15, 0],
      opacity: [0.15, 0.25, 0.15],
    }}
    transition={{ duration: animDuration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {shape === 'square' && (
      <div style={{ width: size, height: size, border: `1px solid ${color}`, borderRadius: 4 }} />
    )}
    {shape === 'triangle' && (
      <div style={{
        width: 0, height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        opacity: 0.5,
      }} />
    )}
    {shape === 'circle' && (
      <div style={{ width: size, height: size, border: `1px solid ${color}`, borderRadius: '50%' }} />
    )}
    {shape === 'diamond' && (
      <div style={{
        width: size,
        height: size,
        border: `1px solid ${color}`,
        transform: 'rotate(45deg)',
        borderRadius: 2,
      }} />
    )}
  </motion.div>
);

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  // Hero floating particles
  const heroParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: (Math.random() - 0.5) * 300,
    y: (Math.random() - 0.5) * 300,
    color: ['#D4AF37', '#8B5CF6', '#06B6D4', '#EC4899'][i % 4],
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Section background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] gold-glow-spot rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] purple-glow-spot rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute top-0 right-1/3 w-[300px] h-[300px] cyan-glow-spot rounded-full blur-3xl pointer-events-none" />

      {/* Floating geometric shapes */}
      <FloatingShape shape="square" size={40} color="#D4AF37" style={{ top: '15%', left: '5%' }} animDuration={7} delay={0} />
      <FloatingShape shape="diamond" size={30} color="#8B5CF6" style={{ top: '70%', left: '8%' }} animDuration={5} delay={1} />
      <FloatingShape shape="circle" size={50} color="#06B6D4" style={{ top: '20%', right: '5%' }} animDuration={8} delay={0.5} />
      <FloatingShape shape="triangle" size={35} color="#EC4899" style={{ bottom: '25%', right: '8%' }} animDuration={6} delay={2} />
      <FloatingShape shape="square" size={25} color="#2563EB" style={{ bottom: '15%', left: '15%' }} animDuration={9} delay={1.5} />
      <FloatingShape shape="diamond" size={20} color="#D4AF37" style={{ top: '50%', right: '12%' }} animDuration={4} delay={3} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10 relative">

        {/* ===== TEXT CONTENT ===== */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px]" style={{ background: 'linear-gradient(90deg, #D4AF37, #8B5CF6)' }} />
            <span className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: '#D4AF37' }}>
              Hello, I am
            </span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
              className="text-xl"
            >
              👋
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #F8F9FA 0%, #CCD6F6 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Neha Kumari
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-12 md:h-14 flex items-center mb-6"
          >
            <span className="text-xl md:text-2xl font-medium text-slate-400">I am a </span>
            <span
              className="text-xl md:text-2xl font-bold ml-2"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
              }}
            >
              {currentText}
            </span>
            <span className="typewriter-cursor text-xl md:text-2xl ml-0.5" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-8"
          >
            Detail-oriented and passionate Software Developer seeking internships and junior SDE roles. Experienced in building responsive web applications with{' '}
            <span className="text-cyan-400 font-semibold">React.js</span>,{' '}
            <span className="text-purple-400 font-semibold">Node.js</span>, and{' '}
            <span className="text-yellow-400 font-semibold">MongoDB</span>, backed by a solid foundation in OOPs, C++, and SQL databases.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            {/* Primary */}
            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #AA7C11)',
                color: '#020C1B',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
              }}
            >
              Contact Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            {/* Secondary */}
            <MagneticButton
              href="/neharesume.pdf"
              download="Neha_Kumari_Resume.pdf"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
              style={{
                background: 'transparent',
                color: '#D4AF37',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <FileText size={16} />
              Download CV
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500">Find me on</span>
            <div className="flex gap-3">
              {[
                { href: 'https://linkedin.com/in/neha-kumari-5bb2aa326', Icon: Linkedin, color: '#2563EB', label: 'LinkedIn' },
                { href: 'https://github.com/neha220800', Icon: Github, color: '#8B5CF6', label: 'GitHub' },
                { href: 'mailto:adhyagupta28@gmail.com', Icon: Mail, color: '#06B6D4', label: 'Email' },
              ].map(({ href, Icon, color, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: `${color}30`,
                    backgroundColor: `${color}10`,
                  }}
                  whileHover={{
                    scale: 1.2,
                    borderColor: color,
                    backgroundColor: `${color}20`,
                    boxShadow: `0 0 15px ${color}40`,
                  }}
                  title={label}
                >
                  <Icon size={18} style={{ color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== PROFILE IMAGE WITH ORBITING ICONS ===== */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 80, delay: 0.2 }}
            className="relative flex items-center justify-center"
            style={{ width: 380, height: 380 }}
          >

            {/* Orbiting tech icons */}
            {techIcons.map((iconData, i) => (
              <OrbitIcon
                key={iconData.label}
                icon={iconData}
                index={i}
                total={techIcons.length}
                orbitRadius={165}
                duration={20 + i * 1.5}
              />
            ))}

            {/* Expanding ring animations */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-yellow-400/20"
                style={{ inset: -i * 15 }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.05, 0.3] }}
                transition={{ duration: 2 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
              />
            ))}

            {/* Outer decorative ring - spinning */}
            <motion.div
              className="absolute rounded-full border border-dashed border-yellow-400/20"
              style={{ inset: -10 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute rounded-full border border-dashed border-purple-500/15"
              style={{ inset: -25 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Golden glow background */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
              }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Profile Picture Container */}
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden flex items-center justify-center"
              style={{
                border: '3px solid rgba(212, 175, 55, 0.6)',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 0 80px rgba(212, 175, 55, 0.15), inset 0 0 20px rgba(212, 175, 55, 0.05)',
              }}
            >
              {/* Fallback monogram */}
              <div className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0A192F, #112240)' }}
              >
                <span className="font-bold text-yellow-400 select-none"
                  style={{ fontSize: '5rem', fontFamily: "'Playfair Display', serif" }}>
                  NK
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-1">Software Dev</span>
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />
              </div>

              {/* Actual profile image */}
              <img
                src="/profile.png"
                alt="Neha Kumari"
                className="w-full h-full object-cover z-10 relative"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Floating particles around image */}
            {heroParticles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                  left: '50%',
                  top: '50%',
                  marginLeft: -p.size / 2,
                  marginTop: -p.size / 2,
                }}
                animate={{
                  x: [p.x * 0.3, p.x, p.x * 0.7, p.x * 0.3],
                  y: [p.y * 0.3, p.y * 0.5, p.y, p.y * 0.3],
                  opacity: [0, 0.8, 0.4, 0],
                  scale: [0, 1, 0.8, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -bottom-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold"
              style={{
                background: 'rgba(17, 34, 64, 0.9)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
             
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-slate-500">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-yellow-400 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};
