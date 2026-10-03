'use client';

import { useState } from 'react';
import { saveThemeAction } from '@/actions/theme';
import { useRouter } from 'next/navigation';

export default function ThemeForm({ initialTheme }: { initialTheme: any }) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [theme, setTheme] = useState({
    primaryBackground: initialTheme?.primaryBackground || '#050505',
    secondaryBackground: initialTheme?.secondaryBackground || '#0D0D0D',
    cardBackground: initialTheme?.cardBackground || '#151515',
    border: initialTheme?.border || '#292929',
    primaryText: initialTheme?.primaryText || '#FFFFFF',
    secondaryText: initialTheme?.secondaryText || '#A3A3A3',
    primaryAccent: initialTheme?.primaryAccent || '#E50914',
    secondaryAccent: initialTheme?.secondaryAccent || '#FF1E2D',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const applyPreset = (preset: Partial<typeof theme>) => {
    setTheme(prev => ({ ...prev, ...preset }));
  };

  const presets = {
    'TechBlitz Red': { primaryBackground: '#050505', primaryAccent: '#E50914', secondaryAccent: '#FF1E2D' },
    'Electric Blue': { primaryBackground: '#050505', primaryAccent: '#2563EB', secondaryAccent: '#3B82F6' },
    'Cyber Purple': { primaryBackground: '#0B0914', primaryAccent: '#9333EA', secondaryAccent: '#A855F7' },
    'Emerald Tech': { primaryBackground: '#02120A', primaryAccent: '#10B981', secondaryAccent: '#34D399' },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        
        {/* Presets */}
        <div className="bg-[#0D0D0D] border border-[#292929] rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Theme Presets</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(presets).map(([name, presetValues]) => (
              <button
                key={name}
                type="button"
                onClick={() => applyPreset(presetValues)}
                className="px-4 py-2 bg-[#151515] border border-[#292929] rounded-lg text-sm hover:border-white transition-colors flex items-center gap-2"
              >
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: presetValues.primaryAccent }}></span>
                {name}
              </button>
            ))}
          </div>
        </div>

        <form action={async (formData) => {
          setIsSaving(true);
          await saveThemeAction(formData);
          setIsSaving(false);
          router.refresh();
        }} className="bg-[#0D0D0D] border border-[#292929] rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Theme Colors</h2>
            <button 
              type="submit" 
              disabled={isSaving}
              className="px-4 py-2 bg-[#E50914] hover:bg-[#FF1E2D] text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Theme'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(theme).map(([key, value]) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-xs text-[#A3A3A3] uppercase tracking-wider capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                  />
                  <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    name={`${key}_text`}
                    // We sync it but the actual form data will use the hidden inputs or rely on the color picker.
                    // Wait, FormData will grab the color input if it has a name. We named the color input.
                    className="flex-1 bg-[#151515] border border-[#292929] rounded-lg px-3 py-2 text-sm focus:border-[#E50914] focus:outline-none uppercase font-mono text-[#A3A3A3]"
                    readOnly
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* Live Preview Card */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 bg-[#0D0D0D] border border-[#292929] rounded-xl overflow-hidden">
          <div className="p-4 border-b border-[#292929]">
            <h2 className="text-sm font-semibold text-white">Live Preview</h2>
          </div>
          <div 
            className="p-6 transition-colors duration-300" 
            style={{ backgroundColor: theme.primaryBackground, color: theme.primaryText }}
          >
            <div 
              className="border rounded-lg p-5 mb-4 transition-colors duration-300 shadow-xl"
              style={{ backgroundColor: theme.cardBackground, borderColor: theme.border }}
            >
              <h3 className="font-bold mb-2">Example Card</h3>
              <p className="text-sm mb-4" style={{ color: theme.secondaryText }}>
                This represents how your theme will look across the website.
              </p>
              <button 
                className="w-full py-2 rounded text-sm font-medium transition-colors duration-300"
                style={{ backgroundColor: theme.primaryAccent, color: '#fff' }}
              >
                Primary Action
              </button>
            </div>
            
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs rounded border transition-colors duration-300" style={{ backgroundColor: theme.secondaryBackground, borderColor: theme.border }}>
                Badge
              </span>
              <span className="px-2 py-1 text-xs rounded transition-colors duration-300" style={{ color: theme.primaryAccent }}>
                Link Text
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
