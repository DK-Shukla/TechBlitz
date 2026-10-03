import GenericFormModal from "@/components/admin/modals/GenericFormModal";
import PageHeader from "@/components/admin/PageHeader";

export default function DomainsPage() {
  return (
    <div>
      <PageHeader 
        title="Domains" 
        description="Manage technology domains." 
        action={
          <GenericFormModal title="Add Domain" buttonText="Add New" modelName="Domain" fields={[{"name":"title","label":"Domain Title","type":"text","required":true},{"name":"description","label":"Description","type":"textarea","required":true}]} />
        }
      />
      <div className="bg-secondary-black border border-border rounded-xl p-8 text-center text-secondary-text">
        <p>This module is currently being built. Data connection to MongoDB coming shortly.</p>
      </div>
    </div>
  );
}
