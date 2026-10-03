
import GenericFormModal from "@/components/admin/modals/GenericFormModal";
import PageHeader from "@/components/admin/PageHeader";
import dbConnect from "@/lib/db";
import Session from "@/models/Session";

export const dynamic = "force-dynamic";

export default async function SessionsPage() {
  const db = await dbConnect();
  let rawSessions: any[] = [];
  if (db) {
    try {
      rawSessions = await Session.find({}).sort({ number: 1 }).lean();
    } catch (e) {
      console.error(e);
    }
  }

  const sessions = rawSessions.map((s: any) => ({
    ...s,
    _id: s._id.toString(),
  }));

  const formFields = [
    { name: "number", label: "Session Number (e.g. 1)", type: "number", required: true },
    { name: "title", label: "Session Title", type: "text", required: true },
    { name: "date", label: "Date (e.g. October 7, 2026)", type: "text", required: true },
    { name: "time", label: "Time (e.g. 10:00 AM)", type: "text", required: true },
    { name: "speakerName", label: "Speaker Name", type: "text", required: true },
    { name: "domain", label: "Domain (e.g. Web Dev)", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    { name: "gmeetLink", label: "Google Meet Link", type: "text", required: false },
  ];

  return (
    <div>
      <PageHeader 
        title="Sessions" 
        description="Manage workshop sessions." 
        action={
          <GenericFormModal title="Add Session" buttonText="Add New" modelName="Session" fields={formFields} />
        }
      />
      
      <div className="bg-secondary-black border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-secondary-text">
            <thead className="bg-[#111] border-b border-border text-white">
              <tr>
                <th className="px-6 py-4 font-medium">#</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Speaker</th>
                <th className="px-6 py-4 font-medium">Domain</th>
                <th className="px-6 py-4 font-medium">GMeet Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sessions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    No sessions found.
                  </td>
                </tr>
              ) : (
                sessions.map((session) => (
                  <tr key={session._id} className="hover:bg-[#151515] transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{session.number}</td>
                    <td className="px-6 py-4 font-medium text-white">{session.title}</td>
                    <td className="px-6 py-4">{session.speakerName}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-primary-black border border-border rounded-md text-xs">
                        {session.domain}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {session.gmeetLink ? (
                        <a href={session.gmeetLink} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Link</a>
                      ) : (
                        "-"
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

