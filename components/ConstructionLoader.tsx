import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ConstructionLoaderProps {
  onFinished: () => void;
}

const ConstructionLoader: React.FC<ConstructionLoaderProps> = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(onFinished, 3500);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#C6C6C5]"
      exit={{ y: '-100%', transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } }}
    >
      <div className="relative w-40 h-40 mb-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M20 80 L50 95 L80 80 L50 65 Z"
            fill="none"
            stroke="#535150"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.path
            d="M20 80 L20 40 L50 55 L50 95"
            fill="none"
            stroke="#6C5A4C"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          <motion.path
            d="M80 80 L80 40 L50 55"
            fill="none"
            stroke="#6C5A4C"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
          <motion.path
            d="M20 40 L50 25 L80 40 L50 55 Z"
            fill="none"
            stroke="#A07457"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center"
      >
        <span className="font-architectural text-[0.6rem] tracking-[1em] text-[#535150] uppercase block mb-2">Construction in progress</span>
        <span className="font-body text-[0.65rem] text-[#535150]/60 uppercase tracking-[0.2em]">The Paradigm Architects</span>
      </motion.div>
    </motion.div>
  );
};

export default ConstructionLoader;