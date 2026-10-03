'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Smartphone, Shield, Cloud, Palette, Cpu, Bot, BarChart3 } from 'lucide-react';
import { domains } from '@/data/domains';
import { Domain } from '@/data/types';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Brain, Globe, Smartphone, Shield, Cloud, Palette, Cpu, Bot, BarChart3,
};

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

export default function Domains({ domains }: { domains: any[] }) {
  return (
    <SectionWrapper id="domains" className="max-w-5xl mx-auto">
      <SectionHeading title="DOMAINS" subtitle="Explore Technology Domains" />
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {domains.map((domain: Domain) => {
          const Icon = iconMap[domain.icon];
          
          return (
            <motion.div 
              key={domain.id}
              variants={cardVariants}
              className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red group"
            >
              {Icon && (
                <Icon size={24} className="text-primary-red transition-colors duration-300 group-hover:brightness-125" />
              )}
              <h3 className="text-lg font-semibold text-white mt-4">{domain.name}</h3>
              <p className="text-sm text-secondary-text mt-2 leading-relaxed">{domain.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
