import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Briefcase, Handshake } from 'lucide-react';
import BricksImage from './img/k7mps01.svg';

const stats = [
  { icon: Target, value: "1986", label: "Year of Establishment" },
  { icon: Users, value: "150", label: "Professional Employees" },
  { icon: Briefcase, value: "282", label: "Completed Projects" },
  { icon: Handshake, value: "35", label: "Business Partners" },
];

const LogoStory: React.FC = () => (
  <section className="bg-[#C6C6C5] text-[#535150] overflow-hidden">

    {/* Part 1: About Us (Text + Bricks Placeholder) */}
    <div className="pt-16 sm:pt-24 pb-8 sm:pb-12 px-5 sm:px-8 md:px-24 border-t border-[#535150]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-16 items-center">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
          <h4 className="font-architectural text-xs tracking-[0.2em] text-[#A07457] uppercase">About Us</h4>
          <h2 className="font-architectural text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#535150]">
            Lorem ipsum
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed opacity-70">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="group flex items-center gap-3 px-8 py-3 border border-[#535150] rounded-full hover:bg-[#A07457] hover:border-[#A07457] hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer">
            <span className="uppercase text-xs tracking-widest">Read More</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Bricks Image Placeholder */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <img
            src={BricksImage}
            alt="Architectural Bricks Structure"
            className="w-full max-w-sm sm:max-w-md h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </div>

    {/* Part 2: By the Numbers (Stats Grid) */}
    <div className="pt-8 sm:pt-12 pb-16 sm:pb-24 px-5 sm:px-8 md:px-24">
      <div className="max-w-7xl mx-auto mb-10 sm:mb-16">
        <h4 className="font-architectural text-xs tracking-[0.2em] text-[#A07457] uppercase mb-4">By the Numbers</h4>
        <h2 className="font-architectural text-3xl sm:text-4xl leading-tight text-[#535150]">Proven Results, Solid Foundations</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 border-l border-t border-[#535150]/10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 sm:p-8 md:p-12 border-b border-r border-[#535150]/10 hover:bg-[#A07457]/5 transition-colors duration-300 flex flex-col justify-between min-h-[10rem] sm:min-h-[14rem] md:min-h-[16rem]"
          >
            <div className="flex justify-between items-start mb-4">
              <stat.icon size={20} strokeWidth={1} className="text-[#535150] opacity-50" />
            </div>

            <div>
              <h3 className="font-architectural text-3xl sm:text-4xl md:text-5xl text-[#535150] mb-2">{stat.value}</h3>
              <p className="font-body text-xs sm:text-sm font-light tracking-wide opacity-80">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  </section>
);

export default LogoStory;