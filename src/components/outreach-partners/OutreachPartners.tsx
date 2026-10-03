'use client';

import React from 'react';
import { outreachPartners } from '@/data/outreachPartners';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

export default function OutreachPartners({ outreachPartners }: { outreachPartners: any[] }) {
  // Duplicate the partners array for seamless looping
  const partners = [...outreachPartners, ...outreachPartners];

  return (
    <SectionWrapper id="partners">
      <SectionHeading title="OUTREACH" subtitle="Our Outreach Partners" />
      
      <div className="relative overflow-hidden w-full group py-8">
        <div 
          className="flex gap-4 md:gap-6 items-center animate-slide-left hover:[animation-play-state:paused] w-max"
          style={{ animationDuration: '40s' }}
        >
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-4 md:p-6 w-56 md:w-64 flex-shrink-0 transition-all duration-300 hover:border-primary-red/30 hover:scale-[1.02]"
            >
              <img
                src={partner.logo}
                alt={partner.name || 'Outreach Partner'}
                className="h-12 object-contain mx-auto mb-3"
              />
              <p className="text-sm text-center text-secondary-text">
                {partner.name || 'Partner Name'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
