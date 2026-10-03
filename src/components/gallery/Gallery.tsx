'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

export default function Gallery({ galleryItems }: { galleryItems: any[] }) {
  const teamItems = galleryItems.filter((item) => item.category === 'team');
  const inaugurationItems = galleryItems.filter((item) => item.category === 'inauguration');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SectionWrapper id="gallery">
      <SectionHeading title="GALLERY" subtitle="Moments" />
      
      <div className="mt-12 w-full max-w-5xl mx-auto">
        {/* Team Section */}
        {teamItems.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="mb-12"
          >
            <motion.h3 
              variants={itemVariants}
              className="uppercase tracking-wider text-xs text-secondary-text mb-4 text-center sm:text-left max-w-4xl mx-auto"
            >
              TEAM
            </motion.h3>
            <div className="max-w-4xl mx-auto">
              {teamItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className="relative aspect-[12/5] border border-border rounded-lg overflow-hidden group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Inauguration Section */}
        {inaugurationItems.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="mt-12"
          >
            <motion.h3 
              variants={itemVariants}
              className="uppercase tracking-wider text-xs text-secondary-text mb-4 text-center sm:text-left"
            >
              INAUGURATION
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {inaugurationItems.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className="relative aspect-[4/3] border border-border rounded-lg overflow-hidden group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
