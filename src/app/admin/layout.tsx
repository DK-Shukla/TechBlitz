import Sidebar from '@/components/admin/Sidebar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <div className="md:ml-64 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-[#292929] bg-[#0D0D0D]">
          <div>
            <h1 className="text-lg font-bold tracking-wider">TECHBLITZ</h1>
            <span className="text-[10px] text-[#E50914] uppercase tracking-widest font-semibold">Admin Panel</span>
          </div>
          <button className="p-2 text-[#A3A3A3] hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
