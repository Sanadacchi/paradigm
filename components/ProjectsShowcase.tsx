import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Importing images
import ArtDecoImg from './img/projects/Art Deco.jpg';
import BrutalismImg from './img/projects/Brutalism.jpg';

const projects = [
    {
        id: 1,
        title: "Art Deco Revival", // Kept for accessibility/metadata, though reference shows "Lorem ipsum" mainly
        description: "Lorem ipsum",
        image: ArtDecoImg
    },
    {
        id: 2,
        title: "Modern Brutalism",
        description: "Lorem ipsum",
        image: BrutalismImg
    }
];

const ProjectsShowcase: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextProject = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[currentIndex];

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '110%' : '-110%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '110%' : '-110%',
            opacity: 0,
        }),
    };

    return (
        <section className="relative w-full min-h-screen sm:min-h-[110vh] overflow-hidden flex flex-col pt-20 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-8 md:px-24 bg-[#C6C6C5]">

            {/* Dynamic Blurred Background (Subtle) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentProject.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full mix-blend-multiply"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-md"
                            style={{ backgroundImage: `url(${currentProject.image})` }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto flex flex-col">

                {/* Top Left Label */}
                <div className="flex justify-start items-start mb-10 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-architectural text-4xl sm:text-5xl md:text-7xl text-[#535150] uppercase tracking-wider relative"
                    >
                        Projects
                        <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-1/3 h-1 sm:h-1.5 bg-[#A07457]" />
                    </motion.h2>
                </div>

                {/* Main Content Area - Centered */}
                <div className="flex-1 flex flex-col justify-center items-center relative">

                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-xl aspect-square md:aspect-[4/3]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                whileHover={{ scale: 1.02 }}
                                className="absolute inset-0 cursor-pointer"
                            >
                                {/* Card Construct */}
                                <div className="relative w-full h-full">
                                    {/* Shadow Element (Offset Black) */}
                                    <div className="absolute inset-0 bg-black rounded-[2rem] sm:rounded-[3rem] translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 md:translate-x-8 md:translate-y-8" />

                                    {/* Image Element */}
                                    <div className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden z-10">
                                        <img
                                            src={currentProject.image}
                                            alt={currentProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Text Below Image */}
                                <div className="absolute top-[calc(100%+1.25rem)] sm:top-[calc(100%+2rem)] left-0">
                                    <p className="font-architectural text-base sm:text-lg md:text-xl text-[#535150] tracking-wide">
                                        {currentProject.description}
                                    </p>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Bottom Navigation - Right Aligned */}
                <div className="flex justify-end items-end gap-8 sm:gap-12 pt-20 sm:pt-0 pb-4 sm:pb-8">

                    <button
                        onClick={prevProject}
                        className="group flex items-center gap-4 text-[#535150] hover:text-[#A07457] transition-colors"
                        aria-label="Previous Project"
                    >
                        <motion.div
                            animate={{ x: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <ArrowLeft className="w-8 h-5 sm:w-12 sm:h-6 md:w-16 md:h-8 transition-transform group-hover:-translate-x-2" strokeWidth={1.5} />
                        </motion.div>
                    </button>

                    <button
                        onClick={nextProject}
                        className="group flex items-center gap-4 text-[#535150] hover:text-[#A07457] transition-colors"
                        aria-label="Next Project"
                    >
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <ArrowRight className="w-8 h-5 sm:w-12 sm:h-6 md:w-16 md:h-8 transition-transform group-hover:translate-x-2" strokeWidth={1.5} />
                        </motion.div>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default ProjectsShowcase;
