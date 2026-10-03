
"use client";

import { useState } from "react";
import AdminModal from "./AdminModal";
import { useRouter } from "next/navigation";

export default function SpeakerFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Implementation to save would go here
    setIsOpen(false);
    router.refresh();
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#E50914] hover:bg-[#FF1E2D] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Add Speaker
      </button>
      
      <AdminModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add New Speaker">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#A3A3A3] mb-1">Name</label>
            <input required type="text" className="w-full bg-[#151515] border border-[#292929] rounded-lg p-2.5 text-white text-sm focus:border-[#E50914] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-[#A3A3A3] mb-1">Designation</label>
            <input required type="text" className="w-full bg-[#151515] border border-[#292929] rounded-lg p-2.5 text-white text-sm focus:border-[#E50914] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-[#A3A3A3] mb-1">Company</label>
            <input required type="text" className="w-full bg-[#151515] border border-[#292929] rounded-lg p-2.5 text-white text-sm focus:border-[#E50914] focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-[#E50914] text-white p-2.5 rounded-lg text-sm font-medium hover:bg-[#FF1E2D] transition-colors mt-4">
            Save Speaker
          </button>
        </form>
      </AdminModal>
    </>
  );
}

