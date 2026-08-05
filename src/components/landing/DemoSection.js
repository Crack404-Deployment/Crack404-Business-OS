'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { demoCards } from '@/lib/landingData';

// Framer Motion Variants for Staggered Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20 } 
  },
};

// Card Component styling matched to the screenshot
const DemoCard = ({ card, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    className="group bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer"
  >
    {/* Padded Image Container */}
    <div className="p-3 pb-0">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/50">
        <Image 
          src={card.image} 
          alt={`${card.title} Interface`} 
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
      </div>
    </div>

    {/* Centered Title Bar */}
    <div className="p-6 text-center bg-white z-20">
      <h3 className="text-slate-800 font-bold text-lg tracking-wide group-hover:text-blue-600 transition-colors duration-300">
        {card.title}
      </h3>
    </div>
  </motion.div>
);

export default function DemoSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Header Section */}
        <div className="relative text-center mb-24 flex flex-col items-center justify-center">
          
          {/* Giant Background Number (10+) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute z-0 text-[10rem] sm:text-[14rem] md:text-[18rem] font-black leading-none text-orange-50 tracking-tighter select-none pointer-events-none -top-16 sm:-top-24 md:-top-32"
          >
            10+
          </motion.div>

          {/* Foreground Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base font-bold tracking-[0.2em] text-orange-600 mb-4 uppercase"
            >
              Core Architecture
            </motion.p>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
            >
              Explore Our Enterprise Solutions
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Explore our specialized enterprise solutions. Each module is fully integrated, backed by specialized AI models, and isolated by tenant ID for maximum security.
            </motion.p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {demoCards.map((card, index) => (
            <DemoCard key={index} card={card} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}