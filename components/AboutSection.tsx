import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Home,
  DraftingCompass,
  Factory,
  FileText,
  Trees,
  Box,
  HardHat,
  Grid
} from 'lucide-react';

const services = [
  { icon: Building2, label: "Infrastructure Construction" },
  { icon: Home, label: "Residential Construction" },
  { icon: DraftingCompass, label: "Civil Engineering" },
  { icon: Factory, label: "Commercial Construction" },
  { icon: FileText, label: "Pre-Construction" },
  { icon: Trees, label: "Landscape Construction" },
  { icon: Box, label: "Special Projects" },
  { icon: HardHat, label: "Site Management" },
  { icon: Grid, label: "Prefabricated Construction" },
];

const AboutSection: React.FC = () => (
  <section id="about" className="py-16 sm:py-24 px-5 sm:px-8 md:px-24 bg-[#3d3d3d] text-[#C6C6C5]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row border-t border-[#C6C6C5]/20">

      {/* Left Text Column */}
      <div className="md:w-1/4 py-10 md:py-12 md:pr-12 md:border-r border-[#C6C6C5]/20 flex flex-col">
        <div className="md:sticky md:top-32">
          <h4 className="font-architectural text-xs tracking-[0.2em] text-[#A07457] uppercase mb-6">Services</h4>
          <h2 className="font-body text-2xl sm:text-3xl font-light leading-tight">
            We Provide a<br />
            <span className="text-[#A07457] font-normal">Variety of Solutions</span>
          </h2>
        </div>
      </div>

      {/* Right Grid Column */}
      <div className="md:w-3/4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`
                group relative p-6 sm:p-8 md:p-12 hover:bg-[#A07457]/5 transition-colors duration-300 flex flex-col justify-between
                min-h-[10rem] sm:min-h-[12rem] md:aspect-square
                border-b border-[#C6C6C5]/20
                ${(index + 1) % 3 !== 0 ? 'md:border-r' : ''}
                ${index % 2 === 0 ? 'sm:border-r md:border-r-0' : ''}
                ${(index + 1) % 2 !== 0 ? 'border-r border-[#C6C6C5]/20 sm:border-r-0' : ''}
              `}
            >
              <service.icon
                strokeWidth={1}
                size={36}
                className="text-[#A07457] mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500"
              />

              <h3 className="font-body text-sm sm:text-base font-light tracking-wide leading-snug">
                {service.label.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default AboutSection;