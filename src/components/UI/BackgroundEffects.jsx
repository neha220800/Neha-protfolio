import React, { useEffect, useRef } from 'react';

// Mouse-following cursor glow + animated background particles + aurora + light streaks
export const BackgroundEffects = () => {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: -999, y: -999 });
  const cursorPos = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Smooth lerp
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.08;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Generate particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 200,
    color: ['#D4AF37', '#8B5CF6', '#06B6D4', '#EC4899', '#2563EB'][Math.floor(Math.random() * 5)],
    opacity: Math.random() * 0.5 + 0.2,
  }));

  // Light streaks
  const streaks = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    width: Math.random() * 300 + 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 10,
    driftY: (Math.random() - 0.5) * 100,
  }));

  // Stars
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1.5,
  }));

  return (
    <>
      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="cursor-glow"
        style={{ left: -999, top: -999 }}
        aria-hidden="true"
      />

      {/* Fixed aurora background */}
      <div className="aurora-bg" aria-hidden="true">
        {/* Aurora orbs */}
        <div
          className="aurora-orb"
          style={{
            width: '600px',
            height: '600px',
            top: '-10%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent 70%)',
            animationDuration: '10s',
          }}
        />
        <div
          className="aurora-orb"
          style={{
            width: '700px',
            height: '700px',
            bottom: '-15%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent 70%)',
            animationDuration: '13s',
            animationDelay: '-4s',
          }}
        />
        <div
          className="aurora-orb"
          style={{
            width: '500px',
            height: '500px',
            top: '40%',
            left: '40%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06), transparent 70%)',
            animationDuration: '8s',
            animationDelay: '-2s',
          }}
        />
        <div
          className="aurora-orb"
          style={{
            width: '400px',
            height: '400px',
            top: '20%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.07), transparent 70%)',
            animationDuration: '11s',
            animationDelay: '-6s',
          }}
        />

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 gradient-mesh" />
      </div>

      {/* Floating particles layer (absolute to document flow) */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              bottom: '-10px',
              backgroundColor: p.color,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
          />
        ))}

        {/* Light streaks */}
        {streaks.map((s) => (
          <div
            key={s.id}
            className="light-streak"
            style={{
              top: `${s.top}%`,
              width: `${s.width}px`,
              left: '-200px',
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              '--drift-y': `${s.driftY}px`,
              opacity: 0.4,
            }}
          />
        ))}

        {/* Stars / Dots */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};
