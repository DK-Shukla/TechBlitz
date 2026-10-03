'use client';

import { useState } from 'react';
import AdminModal from './AdminModal';
import { useRouter } from 'next/navigation';
import { createDocument } from '@/actions/crud';

interface Field {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

interface GenericFormModalProps {
  title: string;
  buttonText: string;
  modelName: string;
  fields: Field[];
}

export default function GenericFormModal({ title, buttonText, modelName, fields }: GenericFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    
    fields.forEach(f => {
      if (f.type === 'boolean') {
        data[f.name] = formData.get(f.name) === 'on';
      } else {
        data[f.name] = formData.get(f.name);
      }
    });

    const res = await createDocument(modelName, data);
    
    setIsSubmitting(false);
    
    if (res.success) {
      setIsOpen(false);
      router.refresh();
    } else {
      setError(res.error || 'Failed to save.');
    }
  };

  return (
    <>
      <button 
        onClick={() => { setIsOpen(true); setError(''); }}
        className="bg-[#E50914] hover:bg-[#FF1E2D] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        {buttonText}
      </button>
      
      <AdminModal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-[#E50914]/10 border border-[#E50914] text-white p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm text-[#A3A3A3] mb-1 capitalize">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea 
                  name={field.name}
                  required={field.required}
                  className="w-full bg-[#151515] border border-[#292929] rounded-lg p-2.5 text-white text-sm focus:border-[#E50914] focus:outline-none min-h-[100px]" 
                />
              ) : field.type === 'boolean' ? (
                <input 
                  type="checkbox" 
                  name={field.name}
                  className="w-4 h-4 rounded border-[#292929] bg-[#151515] text-[#E50914]" 
                />
              ) : (
                <input 
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  className="w-full bg-[#151515] border border-[#292929] rounded-lg p-2.5 text-white text-sm focus:border-[#E50914] focus:outline-none" 
                />
              )}
            </div>
          ))}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#E50914] text-white p-2.5 rounded-lg text-sm font-medium hover:bg-[#FF1E2D] transition-colors mt-4 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </form>
      </AdminModal>
    </>
  );
}
