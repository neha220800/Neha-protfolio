import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/UI/LoadingScreen';
import { BackgroundEffects } from './components/UI/BackgroundEffects';
import { ScrollProgress } from './components/UI/ScrollProgress';
import { BackToTop } from './components/UI/BackToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Reveal } from './components/UI/Reveal';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen font-sans">
          {/* Global Background: aurora + particles + cursor glow */}
          <BackgroundEffects />

          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero />

            <Reveal delay={0.05}>
              <About />
            </Reveal>

            <div className="section-divider mx-6 md:mx-12" />

            <Reveal delay={0.05}>
              <Education />
            </Reveal>

            <div className="section-divider mx-6 md:mx-12" />

            <Reveal delay={0.05}>
              <Skills />
            </Reveal>

            <div className="section-divider mx-6 md:mx-12" />

            <Reveal delay={0.05}>
              <Experience />
            </Reveal>

            <div className="section-divider mx-6 md:mx-12" />

            <Reveal delay={0.05}>
              <Projects />
            </Reveal>

            <div className="section-divider mx-6 md:mx-12" />

            <Reveal delay={0.05}>
              <Certifications />
            </Reveal>

            <div className="section-divider mx-6 md:mx-12" />

            <Reveal delay={0.05}>
              <Contact />
            </Reveal>
          </main>

          <Footer />

          {/* Floating Back-to-top rocket */}
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
