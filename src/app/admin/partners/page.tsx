import GenericFormModal from "@/components/admin/modals/GenericFormModal";
import PageHeader from "@/components/admin/PageHeader";

export default function PartnersPage() {
  return (
    <div>
      <PageHeader 
        title="Partners" 
        description="Manage outreach partners." 
        action={
          <GenericFormModal title="Add OutreachPartner" buttonText="Add New" modelName="OutreachPartner" fields={[{"name":"name","label":"Partner Name","type":"text","required":true},{"name":"type","label":"Type (e.g. Club)","type":"text","required":true}]} />
        }
      />
      <div className="bg-secondary-black border border-border rounded-xl p-8 text-center text-secondary-text">
        <p>This module is currently being built. Data connection to MongoDB coming shortly.</p>
      </div>
    </div>
  );
}
