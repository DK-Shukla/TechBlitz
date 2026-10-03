'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const regSection = document.getElementById('registration');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-black">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 noise-overlay opacity-20 z-0 pointer-events-none"></div>
      
      {/* Subtle Red Radial Gradient at top center */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-red rounded-full blur-[150px] opacity-[0.06] z-0 pointer-events-none"></div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-4 pb-12 flex flex-col items-center text-center mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto flex justify-center items-center -mt-8 sm:-mt-12 md:-mt-20 lg:-mt-28 xl:-mt-36 -mb-8 sm:-mb-16 md:-mb-24 lg:-mb-32 xl:-mb-40"
        >
          {/* Main Logo */}
          <img 
            src="/images/logo.png" 
            alt="TechBlitz Logo" 
            className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl tracking-widest uppercase font-light text-secondary-text mb-6 max-w-2xl"
        >
          2-Week Online<br />Technical Workshop Series
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="font-mono text-sm tracking-[0.3em] text-white mb-12"
        >
          07 — 24 OCTOBER 2026
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center space-y-6 mb-12"
        >
          <p className="text-sm tracking-wide text-secondary-text">
            COSMOS — The Science & Tech Community
          </p>
          <div className="flex flex-col items-center space-y-1 opacity-60">
            <p className="text-xs text-secondary-text">Under the Guidance of</p>
            <p className="text-xs text-secondary-text">Department of Computer Science & Engineering</p>
            <p className="text-xs text-secondary-text">Jabalpur Engineering College</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center space-y-4"
        >
          <button
            onClick={scrollToRegistration}
            className="group flex items-center space-x-2 bg-primary-red hover:bg-bright-red text-white px-8 py-4 rounded-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(229,9,20,0.2)]"
          >
            <span className="font-mono uppercase tracking-wider text-sm font-medium">Register Now</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <p className="text-xs text-secondary-text tracking-wide">
            Registration closes · 7 October 2026 Evening
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
