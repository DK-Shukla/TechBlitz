import PageHeader from '@/components/admin/PageHeader';
import ThemeForm from '@/components/admin/ThemeForm';
import { getAdminTheme } from '@/actions/theme';

export default async function AppearancePage() {
  const activeTheme = await getAdminTheme();
  
  return (
    <div>
      <PageHeader 
        title="Appearance" 
        description="Customize the look and feel of the TechBlitz website." 
      />
      <ThemeForm initialTheme={activeTheme} />
    </div>
  );
}
