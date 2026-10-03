import GenericFormModal from "@/components/admin/modals/GenericFormModal";
import PageHeader from "@/components/admin/PageHeader";

export default function SponsorsPage() {
  return (
    <div>
      <PageHeader 
        title="Sponsors" 
        description="Manage event sponsors." 
        action={
          <GenericFormModal title="Add Sponsor" buttonText="Add New" modelName="Sponsor" fields={[{"name":"name","label":"Sponsor Name","type":"text","required":true},{"name":"tier","label":"Tier","type":"text","required":true}]} />
        }
      />
      <div className="bg-secondary-black border border-border rounded-xl p-8 text-center text-secondary-text">
        <p>This module is currently being built. Data connection to MongoDB coming shortly.</p>
      </div>
    </div>
  );
}
