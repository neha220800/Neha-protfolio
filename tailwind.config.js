/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#020C1B",
          primary: "#0A192F",
          light: "#112240",
          lighter: "#233554",
        },
        gold: {
          primary: "#D4AF37",
          light: "#F3E5AB",
          dark: "#AA7C11",
        },
        slate: {
          light: "#CCD6F6",
          muted: "#8892B0",
          bright: "#F8F9FA",
        },
        // New accent colors
        royal: "#2563EB",
        purple: {
          accent: "#8B5CF6",
        },
        cyan: {
          accent: "#06B6D4",
        },
        pink: {
          accent: "#EC4899",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'pink-glow': '0 0 20px rgba(236, 72, 153, 0.3)',
        'card-shadow': '0 20px 60px -20px rgba(2, 12, 27, 0.8)',
        'card-hover': '0 30px 80px -20px rgba(2, 12, 27, 0.9)',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '60px',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #AA7C11)',
        'gradient-multi': 'linear-gradient(135deg, #D4AF37, #8B5CF6, #06B6D4)',
        'gradient-aurora': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #EC4899 100%)',
        'gradient-mesh': 'radial-gradient(ellipse at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)',
      },
      animation: {
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'float-medium': 'float-medium 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'aurora-float': 'aurora-float 8s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.7)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'aurora-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(5%, 3%) scale(1.05)' },
          '50%': { transform: 'translate(-3%, 5%) scale(0.97)' },
          '75%': { transform: 'translate(3%, -3%) scale(1.03)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
