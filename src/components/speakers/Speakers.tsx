'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { speakers } from '@/data/speakers';
import { Speaker } from '@/data/types';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Speakers({ speakers }: { speakers: any[] }) {
  return (
    <SectionWrapper id="speakers" className="max-w-6xl mx-auto">
      <SectionHeading title="SPEAKERS" subtitle="Expert-Led Sessions" />
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {speakers.map((speaker: Speaker) => (
          <motion.div 
            key={speaker.id}
            variants={cardVariants}
            className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:border-primary-red/30 group flex flex-col"
          >
            <div className="w-full aspect-square bg-secondary-black overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-base font-semibold text-white block">{speaker.name}</h3>
              <p className="text-sm text-secondary-text mt-1">{speaker.designation}</p>
              <p className="text-sm text-secondary-text">{speaker.company}</p>
              
              <div className="mt-3">
                <span className="inline-block text-xs uppercase tracking-wider bg-secondary-black border border-border px-3 py-1 rounded-full text-primary-red">
                  {speaker.domain}
                </span>
              </div>
              
              <div className="mt-auto pt-4 flex flex-col items-start gap-2">
                <p className="text-xs text-secondary-text">
                  {speaker.sessions} Session{speaker.sessions !== 1 ? 's' : ''}
                </p>
                {speaker.linkedin && (
                  <a 
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-red hover:text-bright-red flex items-center transition-colors mt-1"
                  >
                    LinkedIn <ArrowUpRight size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
