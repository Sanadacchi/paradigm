import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#vision', label: 'Vision' },
  { href: '#about', label: 'About' },
  { href: '#philosophy', label: 'Story' },
  { href: '#contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 sm:px-8 py-6 sm:py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex flex-col">
          <span className="font-architectural text-lg sm:text-xl font-bold tracking-tighter">THE PARADIGM</span>
          <span className="font-body text-[0.5rem] tracking-[0.5em] uppercase opacity-70">Architects</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-12 font-body text-[0.6rem] uppercase tracking-[0.3em]">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-[#A07457] transition-all">{label}</a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-[#C6C6C5] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleLinkClick}
                className="font-architectural text-3xl text-[#535150] uppercase tracking-[0.2em] hover:text-[#A07457] transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default Navigation;