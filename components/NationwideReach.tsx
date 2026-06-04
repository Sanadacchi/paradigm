import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const locations = [
    { city: "Lagos", project: "Eko Atlantic Tower", type: "Commercial" },
    { city: "Abuja", project: "Centenary City Complex", type: "Mixed Use" },
    { city: "Port Harcourt", project: "Marina Quays", type: "Residential" },
    { city: "Kano", project: "Heritage Mall", type: "Retail" },
    { city: "Enugu", project: "Coal City Estate", type: "Residential" },
    { city: "Ibadan", project: "Cocoa House Renovation", type: "Restoration" },
];

const NationwideReach: React.FC = () => {
    return (
        <section className="bg-[#3d3d3d] text-[#F5F5F0] py-16 sm:py-24 px-5 sm:px-8 md:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h4 className="font-architectural text-xs tracking-[0.2em] text-[#A07457] uppercase mb-4">
                            National Presence
                        </h4>
                        <h2 className="font-architectural text-3xl sm:text-4xl lg:text-6xl leading-tight">
                            Building Across <br />
                            <span className="text-[#A07457]">Borders</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full md:w-1/3 font-body text-base sm:text-lg opacity-80 leading-relaxed"
                    >
                        From the bustling commercial hubs to serene residential landscapes, our architectural footprint spans the entire nation, delivering excellence in every project.
                    </motion.p>
                </div>

                {/* Map/Grid Representation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#6c5a4c]/5 border border-[#F5F5F0]/10 p-6 sm:p-8 hover:bg-[#A07457] transition-colors duration-300 cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-6 sm:mb-8">
                                <MapPin className="text-[#A07457] group-hover:text-white transition-colors duration-300" size={28} strokeWidth={1.5} />
                                <ArrowUpRight className="text-[#F5F5F0]/30 group-hover:text-white transition-colors duration-300" size={20} />
                            </div>

                            <div>
                                <h3 className="font-architectural text-xl sm:text-2xl mb-2">{loc.city}</h3>
                                <p className="font-body text-sm font-bold text-[#A07457] group-hover:text-white/90 transition-colors uppercase tracking-wider mb-1">
                                    {loc.project}
                                </p>
                                <p className="font-body text-xs opacity-60 group-hover:opacity-80 transition-opacity">
                                    {loc.type}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default NationwideReach;
