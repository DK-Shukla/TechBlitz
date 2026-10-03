'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Inauguration() {
  return (
    <SectionWrapper id="inauguration" grid>
      <SectionHeading title="INAUGURATION" subtitle="28 September 2026" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12 px-4 md:px-0 text-center"
      >
        <p className="text-secondary-text text-base md:text-lg leading-relaxed">
          TechBlitz 2026 was inaugurated on 28 September 2026. Detailed inauguration highlights will be added here.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="px-4 md:px-0"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-6">
          <div className="relative w-full rounded-lg overflow-hidden border border-border bg-card group">
            <img 
              src="/images/main.png" 
              alt="Inauguration Main" 
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[2, 3, 4].map((num) => (
            <motion.div key={num} variants={itemVariants}>
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-border bg-card group">
                <img 
                  src={`/images/placeholder-inauguration-${num}.jpg`} 
                  alt={`Inauguration Photo ${num}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
