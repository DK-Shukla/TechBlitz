import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { getPublicSiteSettings } from '@/lib/data';
import { Instagram, Linkedin, Github } from '@/components/ui/Icons';
import { Mail } from 'lucide-react';

/** Clean informational closing section — no registration button */
export default async function FinalInfo() {
  const settings = await getPublicSiteSettings();
  return (
    <SectionWrapper className="text-center" noise>
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] text-primary-red uppercase mb-6">
          {settings.heroDates}
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {settings.eventName}
        </h2>

        <p className="text-base md:text-lg text-secondary-text leading-relaxed mb-6">
          {settings.heroSubtitle}
        </p>

        <div className="h-px w-16 bg-border mx-auto mb-12" aria-hidden="true" />

        <div className="bg-secondary-black/50 border border-border rounded-xl p-8 max-w-md mx-auto mb-8">
          <h3 className="text-xl font-medium text-white mb-2">Have a question?</h3>
          <p className="text-secondary-text mb-4">Contact the TechBlitz team at:</p>
          <a href={`mailto:${settings.contactEmail}`} className="inline-flex items-center gap-2 text-primary-red hover:text-bright-red transition-colors font-mono">
            <Mail size={16} />
            {settings.contactEmail}
          </a>
          
          <div className="mt-8 pt-6 border-t border-border flex justify-center gap-6">
            <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={settings.github} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-white transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </div>

        <p className="text-sm text-secondary-text">
          {settings.organizer}
        </p>
        <p className="text-sm text-secondary-text mt-1">
          {settings.guidance}
        </p>
      </div>
    </SectionWrapper>
  );
}
