
import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Star } from 'lucide-react';

const certificationsData = [
  {
    title: 'Web Development Course',
    issuer: 'Apna College',
    date: '2025',
    color: '#06B6D4',
    emoji: '🌐',
    badge: '🎖️',
    image: '/certificates/image-1780813592843.png',
    details: [
      'Comprehensive full-stack developer training covering frontend and backend technologies.',
      'Hands-on training in JavaScript (ES6+), React.js, Node.js, Express, and database models.',
      'Developed multiple production-style web services and RESTful APIs.',
    ],
    link: '/certificates/image-1780813592843.png',
    skills: ['JavaScript', 'React.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage (AWS)',
    date: '2025',
    color: '#EC4899',
    emoji: '☁️',
    badge: '🏆',
    image: '/certificates/image-1780813679179.png',
    details: [
      'Completed a virtual job simulation modeling cloud architect roles at AWS.',
      'Designed cloud solutions incorporating Amazon EC2, VPC, RDS, S3, and IAM.',
      'Optimized application architectures for performance, high availability, and cost efficiency.',
    ],
    link: '/certificates/image-1780813679179.png',
    skills: ['AWS EC2', 'S3', 'VPC', 'IAM', 'RDS'],
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 cyan-glow-spot rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 gold-glow-spot rounded-full blur-3xl pointer-events-none opacity-50" />

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
            06. Verification
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
            Certifications
          </h2>
          <div className="w-20 h-[2px]" style={{ background: 'linear-gradient(90deg, #D4AF37, #EC4899)' }} />
        </motion.div>

        {/* Cert Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl flex flex-col"
              style={{
                background: `linear-gradient(135deg, ${cert.color}08, rgba(17, 34, 64, 0.8))`,
                border: `1px solid ${cert.color}20`,
                backdropFilter: 'blur(16px)',
              }}
              whileHover={{
                y: -6,
                borderColor: `${cert.color}50`,
                boxShadow: `0 25px 70px rgba(0,0,0,0.4), 0 0 25px ${cert.color}15`,
              }}
            >
              {/* Top bar */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

              <div className="p-7 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                    >
                      {cert.emoji}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] block" style={{ color: cert.color }}>
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-slate-500">{cert.date}</span>
                    </div>
                  </div>
                  <span className="text-2xl">{cert.badge}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {cert.title}
                </h3>

                {/* Certificate Image */}
                {cert.image && (
                  <div className="mb-5 overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-48 object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                )}

                {/* Details */}
                <ul className="space-y-2.5 mb-5 flex-1">
                  {cert.details.map((detail, idx) => (
                    <li key={idx} className="text-slate-400 text-xs md:text-sm flex items-start gap-2.5">
                      <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: cert.color }} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${cert.color}12`,
                        border: `1px solid ${cert.color}25`,
                        color: cert.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify link */}
                <a
                  href={cert.link}
                  target={cert.link !== '#' ? '_blank' : undefined}
                  rel={cert.link !== '#' ? 'noopener noreferrer' : undefined}
                  onClick={(e) => { if (cert.link === '#') { e.preventDefault(); alert('Verify certificate online'); } }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                  style={{ color: cert.color }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <ShieldCheck size={13} />
                  Verify Credential
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
