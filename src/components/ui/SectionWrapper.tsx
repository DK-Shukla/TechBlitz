'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Whether to add the grid background pattern */
  grid?: boolean;
  /** Whether to add noise overlay */
  noise?: boolean;
}

/** Reusable section wrapper with scroll-triggered fade-in animation */
export function SectionWrapper({
  children,
  id,
  className = '',
  grid = false,
  noise = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative section-padding py-20 md:py-28 lg:py-32 ${grid ? 'grid-bg' : ''} ${noise ? 'noise-overlay' : ''} ${className}`}
    >
      {children}
    </motion.section>
  );
}

/** Section heading with red accent line */
export function SectionHeading({
  title,
  subtitle,
  className = '',
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 md:mb-16 text-center ${className}`}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-8 bg-primary-red" aria-hidden="true" />
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary-red">
          {title}
        </span>
        <span className="h-px w-8 bg-primary-red" aria-hidden="true" />
      </div>
      {subtitle && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
