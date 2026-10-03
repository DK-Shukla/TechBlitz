import PageHeader from "@/components/admin/PageHeader";

export default function SiteSettingsPage() {
  return (
    <div>
      <PageHeader 
        title="Site Settings" 
        description="Manage global site configuration." 
        action={
          <button className="bg-primary-red hover:bg-bright-red text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add New
          </button>
        }
      />
      <div className="bg-secondary-black border border-border rounded-xl p-8 text-center text-secondary-text">
        <p>This module is currently being built. Data connection to MongoDB coming shortly.</p>
      </div>
    </div>
  );
}
