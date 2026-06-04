import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="vision" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#C6C6C5]">
      <motion.div style={{ y, opacity }} className="z-10 text-center px-4 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body text-[0.6rem] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.8em] text-[#535150] mb-6 sm:mb-8"
        >
          From Vision to Reality
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="font-body text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#535150] leading-none tracking-tighter"
        >
          STRUCTURAL<br />DYNAMICS
        </motion.h1>
      </motion.div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#535150]" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-[#535150]" />
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-[#535150]/30"
      >
        <LucideChevronDown size={30} />
      </motion.div>
    </section>
  );
};

export default Hero;