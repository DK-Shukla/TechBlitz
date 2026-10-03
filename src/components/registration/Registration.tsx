'use client';

import { useState } from 'react';
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper';
import { submitRegistration } from '@/actions/register';

const domainsList = [
  'AI / Machine Learning',
  'Web Development',
  'App Development',
  'Cybersecurity',
  'Cloud & DevOps',
  'UI/UX',
  'VLSI',
  'Electronics & Robotics',
  'Data Science',
  'Other',
];

export default function Registration() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    collegeName: '',
    email: '',
    year: '1st Year',
    semester: '',
    rollNumber: '',
    domains: [] as string[],
  });

  const handleDomainChange = (domain: string) => {
    setFormData(prev => ({
      ...prev,
      domains: prev.domains.includes(domain)
        ? prev.domains.filter(d => d !== domain)
        : [...prev.domains, domain],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const res = await submitRegistration(formData);
    
    if (res.success) {
      setIsSuccess(true);
    } else {
      setError(res.error || 'Failed to register');
    }
    
    setIsSubmitting(false);
  };

  return (
    <SectionWrapper id="register" className="relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="relative z-10">
        <SectionHeading title="REGISTRATION" subtitle="Register for TechBlitz 2026" />

        <div className="max-w-2xl mx-auto">
          {isSuccess ? (
            <div className="bg-secondary-black border border-border rounded-xl p-8 md:p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mb-6 text-2xl">
                🎉
              </div>
              <h3 className="text-2xl font-semibold text-soft-white mb-2">Registration Successful!</h3>
              <p className="text-secondary-text mb-8">You're registered for TechBlitz 2026.</p>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Join WhatsApp Group for Updates
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-secondary-black border border-border rounded-xl p-6 md:p-10 space-y-6">
              {error && (
                <div className="bg-primary-red/10 border border-primary-red text-white p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm text-secondary-text mb-1.5">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-secondary-text/50 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="collegeName" className="block text-sm text-secondary-text mb-1.5">College Name *</label>
                    <input
                      id="collegeName"
                      type="text"
                      required
                      value={formData.collegeName}
                      onChange={(e) => setFormData(prev => ({ ...prev, collegeName: e.target.value }))}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-secondary-text/50 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                      placeholder="Enter your college"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-secondary-text mb-1.5">Email ID *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-secondary-text/50 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="year" className="block text-sm text-secondary-text mb-1.5">Year *</label>
                    <select
                      id="year"
                      required
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors appearance-none"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="semester" className="block text-sm text-secondary-text mb-1.5">Semester *</label>
                    <input
                      id="semester"
                      type="number"
                      required
                      min="1"
                      max="8"
                      value={formData.semester}
                      onChange={(e) => setFormData(prev => ({ ...prev, semester: e.target.value }))}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-secondary-text/50 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                      placeholder="e.g. 3"
                    />
                  </div>

                  <div>
                    <label htmlFor="rollNumber" className="block text-sm text-secondary-text mb-1.5">Roll Number (Optional)</label>
                    <input
                      id="rollNumber"
                      type="text"
                      value={formData.rollNumber}
                      onChange={(e) => setFormData(prev => ({ ...prev, rollNumber: e.target.value }))}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-secondary-text/50 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                      placeholder="Your roll number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-secondary-text mb-3">Domain(s) of Interest *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {domainsList.map((domain) => (
                      <label key={domain} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 rounded border border-border bg-card group-hover:border-primary-red transition-colors">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={formData.domains.includes(domain)}
                            onChange={() => handleDomainChange(domain)}
                          />
                          {formData.domains.includes(domain) && (
                            <svg className="w-3.5 h-3.5 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-soft-white select-none">{domain}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-red hover:bg-bright-red text-white font-medium py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2 focus:ring-offset-secondary-black disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Register Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
