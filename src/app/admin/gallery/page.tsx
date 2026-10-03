import GenericFormModal from "@/components/admin/modals/GenericFormModal";
import PageHeader from "@/components/admin/PageHeader";

export default function GalleryPage() {
  return (
    <div>
      <PageHeader 
        title="Gallery" 
        description="Manage event photos and gallery." 
        action={
          <GenericFormModal title="Add Gallery" buttonText="Add New" modelName="Gallery" fields={[{"name":"alt","label":"Description","type":"text","required":true},{"name":"category","label":"Category","type":"text","required":true}]} />
        }
      />
      <div className="bg-secondary-black border border-border rounded-xl p-8 text-center text-secondary-text">
        <p>This module is currently being built. Data connection to MongoDB coming shortly.</p>
      </div>
    </div>
  );
}
