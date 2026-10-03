'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, CalendarDays, Globe, Handshake, Star, Image as ImageIcon, MessageCircleQuestion, Settings, Palette, UsersIcon, LogOut } from 'lucide-react';

const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/registrations', label: 'Registrations', icon: UsersIcon },
  { href: '/admin/speakers', label: 'Speakers', icon: Users },
  { href: '/admin/sessions', label: 'Sessions', icon: CalendarDays },
  { href: '/admin/domains', label: 'Domains', icon: Globe },
  { href: '/admin/partners', label: 'Partners', icon: Handshake },
  { href: '/admin/sponsors', label: 'Sponsors', icon: Star },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/faq', label: 'FAQ', icon: MessageCircleQuestion },
  { href: '/admin/appearance', label: 'Appearance', icon: Palette },
  { href: '/admin/settings', label: 'Site Settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0D0D0D] border-r border-[#292929] h-screen fixed left-0 top-0 flex flex-col hidden md:flex">
      <div className="p-6 border-b border-[#292929]">
        <h1 className="text-xl font-bold tracking-wider text-white">TECHBLITZ</h1>
        <span className="text-xs text-[#E50914] uppercase tracking-widest font-semibold">Admin Panel</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-[#E50914]/10 text-[#E50914] font-medium' 
                  : 'text-[#A3A3A3] hover:bg-[#151515] hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#292929]">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#A3A3A3] hover:bg-[#151515] hover:text-white transition-colors w-full text-left">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
