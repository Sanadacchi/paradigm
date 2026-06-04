import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// Importing modular components
import ConstructionLoader from './components/ConstructionLoader.tsx';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import AboutSection from './components/AboutSection.tsx';
import LogoStory from './components/LogoStory.tsx';
import NationwideReach from './components/NationwideReach.tsx';
import ProjectsShowcase from './components/ProjectsShowcase.tsx';
import ContactFooter from './components/ContactFooter.tsx';

/**
 * App Component
 * 
 * Manages the high-level state (loading) and the main scroll progress indicator.
 * Orchestrates the architectural sections for The Paradigm Architects website.
 */
export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading && (
          <ConstructionLoader
            key="loader"
            onFinished={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <Navigation />
          <Hero />
          <AboutSection />
          <LogoStory />
          <NationwideReach />
          <ProjectsShowcase />
          <ContactFooter />

          {/* Global Scroll Progress Indicator */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 h-1 bg-[#A07457] z-[60] origin-left"
            style={{ scaleX }}
          />
        </motion.main>
      )}
    </div>
  );
}