'use client';

import React from 'react';
import { companyLogos } from '@/data/gallery';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

export default function CompanySlider({ companyLogos }: { companyLogos: any[] }) {
  // Duplicate the logos array for seamless looping
  const logos = [...companyLogos, ...companyLogos];

  return (
    <SectionWrapper>
      <SectionHeading title="SPEAKERS FROM" subtitle="Industry Leaders" />
      
      <div className="relative overflow-hidden w-full group py-8">
        <div className="flex gap-12 md:gap-16 items-center animate-slide-left hover:[animation-play-state:paused] w-max">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.logo}
              alt={logo.name}
              className="w-24 md:w-32 h-12 md:h-16 object-contain opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
