import GenericFormModal from "@/components/admin/modals/GenericFormModal";
import PageHeader from "@/components/admin/PageHeader";

export default function FAQPage() {
  return (
    <div>
      <PageHeader 
        title="FAQ" 
        description="Manage frequently asked questions." 
        action={
          <GenericFormModal title="Add Faq" buttonText="Add New" modelName="Faq" fields={[{"name":"question","label":"Question","type":"text","required":true},{"name":"answer","label":"Answer","type":"textarea","required":true}]} />
        }
      />
      <div className="bg-secondary-black border border-border rounded-xl p-8 text-center text-secondary-text">
        <p>This module is currently being built. Data connection to MongoDB coming shortly.</p>
      </div>
    </div>
  );
}
