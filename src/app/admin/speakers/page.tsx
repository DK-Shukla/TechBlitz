import GenericFormModal from "@/components/admin/modals/GenericFormModal";
import PageHeader from "@/components/admin/PageHeader";
import dbConnect from "@/lib/db";
import Speaker from "@/models/Speaker";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function SpeakersPage() {
  await dbConnect();
  
  const db = await dbConnect();
  let rawSpeakers: any[] = [];
  if (db) { try { rawSpeakers = await Speaker.find({}).sort({ name: 1 }).lean(); } catch(e) { console.error(e); } }
  
  const speakers = rawSpeakers.map((s: any) => ({
    ...s,
    _id: s._id.toString()
  }));

  return (
    <div>
      <PageHeader 
        title="Speakers" 
        description="Manage event speakers." 
        action={
          <GenericFormModal title="Add Speaker" buttonText="Add New" modelName="Speaker" fields={[{"name":"name","label":"Speaker Name","type":"text","required":true},{"name":"designation","label":"Designation","type":"text","required":true},{"name":"company","label":"Company","type":"text","required":true},{"name":"domain","label":"Domain","type":"text","required":true}]} />
        }
      />
      
      <div className="bg-secondary-black border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-secondary-text">
            <thead className="bg-[#111] border-b border-border text-white">
              <tr>
                <th className="px-6 py-4 font-medium">Speaker</th>
                <th className="px-6 py-4 font-medium">Designation</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Domain</th>
                <th className="px-6 py-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {speakers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    No speakers found.
                  </td>
                </tr>
              ) : (
                speakers.map((speaker) => (
                  <tr key={speaker._id} className="hover:bg-[#151515] transition-colors">
                    <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-border overflow-hidden relative">
                        {speaker.image ? (
                          <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs">IMG</div>
                        )}
                      </div>
                      {speaker.name}
                    </td>
                    <td className="px-6 py-4">{speaker.designation}</td>
                    <td className="px-6 py-4">{speaker.company}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-primary-black border border-border rounded-md text-xs">
                        {speaker.domain}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {speaker.active !== false ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500/10 text-gray-500">
                          Inactive
                        </span>
                      )}
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
