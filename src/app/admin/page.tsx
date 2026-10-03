import PageHeader from '@/components/admin/PageHeader';
import { Users, CalendarDays, UsersIcon } from 'lucide-react';

function StatCard({ title, value, icon: Icon, color }: { title: string, value: string, icon: any, color: string }) {
  return (
    <div className="bg-[#0D0D0D] border border-[#292929] rounded-xl p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#A3A3A3] text-sm font-medium mb-2">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div>
      <PageHeader 
        title="Dashboard" 
        description="Overview of TechBlitz 2026 event statistics." 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Registrations" 
          value="0" 
          icon={UsersIcon} 
          color="bg-blue-500/10 text-blue-500" 
        />
        <StatCard 
          title="Speakers" 
          value="0" 
          icon={Users} 
          color="bg-[#E50914]/10 text-[#E50914]" 
        />
        <StatCard 
          title="Sessions" 
          value="0" 
          icon={CalendarDays} 
          color="bg-green-500/10 text-green-500" 
        />
      </div>
      
      <div className="bg-[#0D0D0D] border border-[#292929] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Registrations</h2>
        <div className="text-center py-12 text-[#A3A3A3] text-sm">
          No registrations yet.
        </div>
      </div>
    </div>
  );
}
