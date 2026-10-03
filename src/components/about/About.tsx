'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { useCounter } from '@/lib/hooks';

function StatNumber({ end, suffix }: { end: number; suffix?: string }) {
  const { count, ref } = useCounter(end, 2000);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
      {count}
      {suffix && (
        <span className={suffix === '+' ? 'text-primary-red' : 'text-white'}>
          {suffix}
        </span>
      )}
    </div>
  );
}

function Stat({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <StatNumber end={value} suffix={suffix} />
      <div className="text-sm uppercase tracking-wider text-secondary-text">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="ABOUT" subtitle="TechBlitz 2026" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-16 px-4 md:px-0"
      >
        <p className="text-secondary-text text-base md:text-lg leading-relaxed text-center">
          TechBlitz 2026 is a two-week online technical workshop series designed
          to provide students with exposure to modern technologies, industry
          knowledge, practical learning, and expert-led sessions. Organized by
          COSMOS — The Science & Tech Community at Jabalpur Engineering College,
          under the guidance of the Department of Computer Science & Engineering.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4 md:px-0"
      >
        <Stat value={11} suffix="+" label="Speakers" />
        <Stat value={2} label="Weeks" />
        <Stat value={9} suffix="+" label="Domains" />
        <Stat value={380} suffix="+" label="Students" />
      </motion.div>
    </SectionWrapper>
  );
}
