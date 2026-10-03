'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faq';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

export default function FAQ({ faqs }: { faqs: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq">
      <SectionHeading title="FAQ" subtitle="Frequently Asked Questions" />
      
      <div className="mt-12 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red rounded-sm"
              >
                <span className="text-base md:text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-secondary-text flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    role="region"
                  >
                    <p className="text-sm md:text-base text-secondary-text leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
