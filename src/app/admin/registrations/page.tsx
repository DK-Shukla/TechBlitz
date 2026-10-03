import PageHeader from "@/components/admin/PageHeader";
import dbConnect from "@/lib/db";
import Registration from "@/models/Registration";

export const dynamic = 'force-dynamic';

export default async function RegistrationsPage() {
  await dbConnect();
  
  // Fetch registrations from MongoDB
  const db = await dbConnect();
  let rawRegistrations: any[] = [];
  if (db) { try { rawRegistrations = await Registration.find({}).sort({ createdAt: -1 }).lean(); } catch(e) { console.error(e); } }
  
  // Clean ObjectId for Client Components (even though we're rendering Server Side, good practice)
  const registrations = rawRegistrations.map((r: any) => ({
    ...r,
    _id: r._id.toString(),
    createdAt: r.createdAt ? new Date(r.createdAt).toLocaleDateString() : 'N/A'
  }));

  return (
    <div>
      <PageHeader 
        title="Registrations" 
        description="Manage event registrations." 
        action={
          <button className="bg-primary-red hover:bg-bright-red text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Export CSV
          </button>
        }
      />
      
      <div className="bg-secondary-black border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-secondary-text">
            <thead className="bg-[#111] border-b border-border text-white">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">College</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Year</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    No registrations found.
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg._id} className="hover:bg-[#151515] transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{reg.fullName}</td>
                    <td className="px-6 py-4">{reg.collegeName}</td>
                    <td className="px-6 py-4">{reg.email}</td>
                    <td className="px-6 py-4">{reg.year}</td>
                    <td className="px-6 py-4">{reg.createdAt}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                        {reg.status || 'Registered'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
