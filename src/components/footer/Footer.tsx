import React from 'react';
import { Mail } from 'lucide-react';
import { Instagram, Linkedin, Github } from '@/components/ui/Icons';
import { getPublicSiteSettings } from '@/lib/data';

export default async function Footer() {
  const settings = await getPublicSiteSettings();
  return (
    <footer className="bg-primary-black border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        
        {/* Top area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left column */}
          <div>
            <h2 className="text-xl font-bold tracking-wider text-white">{settings.eventName}</h2>
            <p className="text-sm text-secondary-text mt-2">
              {settings.organizer}
            </p>
            <p className="text-sm text-secondary-text">
              {settings.guidance}
            </p>
            <p className="text-xs text-secondary-text mt-1">
              {settings.department}
            </p>
          </div>
          
          {/* Right column */}
          <div className="flex flex-row gap-4">
            <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary-red transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red rounded-sm" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary-red transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red rounded-sm" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={settings.github} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary-red transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red rounded-sm" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={`mailto:${settings.contactEmail}`} className="text-secondary-text hover:text-primary-red transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red rounded-sm" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          
        </div>
        
        {/* Bottom area */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-text">
            © 2026 TechBlitz. All rights reserved.
          </p>
          <p className="text-xs text-secondary-text">
            Built by Techforge
          </p>
        </div>
        
      </div>
    </footer>
  );
}
