'use client';

import { motion } from 'framer-motion';
import { sessions } from '@/data/sessions';
import { Session } from '@/data/types';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function WorkshopSeries({ sessions }: { sessions: any[] }) {
  return (
    <SectionWrapper id="workshops">
      <SectionHeading title="WORKSHOP SERIES" subtitle="2-Week Technical Workshops" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-soft-white">
          07 OCTOBER — 24 OCTOBER 2026
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-soft-white">
          <span className="w-2 h-2 rounded-full bg-primary-red mr-2 animate-pulse"></span>
          Completely Online
        </div>
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"></div>

        <div className="flex flex-col gap-6 md:gap-8">
          {sessions.map((session: Session, index: number) => {
            const hasData = session.speakerName || session.domain;
            return (
              <motion.div key={session.id || index} variants={itemVariants} className="relative pl-12 md:pl-16">
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-4 md:left-6 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary-black z-10 ${
                    hasData ? 'bg-primary-red' : 'bg-border'
                  }`}
                ></div>

                {/* Session Card */}
                <div className="group bg-card border border-border rounded-lg p-5 md:p-6 transition-all duration-300 hover:border-primary-red hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary-red font-bold">#{session.number || index + 1}</span>
                      <h3 className="text-lg md:text-xl font-semibold text-soft-white">{session.title || session.topic || 'To be announced'}</h3>
                    </div>
                    {session.domain && (
                      <span className="inline-block px-2.5 py-1 text-xs font-medium bg-secondary-black border border-border rounded text-secondary-text whitespace-nowrap">
                        {session.domain}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-secondary-text mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {session.date || 'TBA'} {session.time ? `• ${session.time}` : ''}
                    </div>
                    {session.speakerName && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        {session.speakerName}
                      </div>
                    )}
                  </div>
                  
                  {session.description && (
                    <p className="text-secondary-text text-sm leading-relaxed mb-4">
                      {session.description}
                    </p>
                  )}

                  {session.gmeetLink && (
                    <div className="pt-2">
                      <a 
                        href={session.gmeetLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-black border border-border text-soft-white rounded-lg text-sm font-medium hover:border-primary-red transition-colors"
                      >
                        <svg className="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Join via Google Meet
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
