'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Instagram } from '@/components/ui/Icons';
import { sponsors } from '@/data/sponsors';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

export default function Sponsors({ sponsors }: { sponsors: any[] }) {
  return (
    <SectionWrapper>
      <SectionHeading title="SPONSORS" subtitle="Our Sponsors" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto py-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-secondary-black border border-border rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary-red/30 hover:-translate-y-1"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-16 md:h-20 object-contain mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-white">
              {sponsor.name}
            </h3>
            {sponsor.description && (
              <p className="text-sm text-secondary-text mt-2">
                {sponsor.description}
              </p>
            )}
            
            <div className="flex justify-center gap-4 mt-6">
              {sponsor.instagram && (
                <a 
                  href={sponsor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-primary-red transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {sponsor.website && (
                <a 
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-primary-red transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="sr-only">Website</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
