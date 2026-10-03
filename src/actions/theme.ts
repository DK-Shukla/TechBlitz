'use server';

import dbConnect from '@/lib/db';
import Theme from "@/models/Theme";
import { revalidatePath } from 'next/cache';

export async function saveThemeAction(formData: FormData) {
  try {
    const db = await dbConnect();
  if (!db) return null;
    
    const themeData = {
      primaryBackground: formData.get('primaryBackground') as string,
      secondaryBackground: formData.get('secondaryBackground') as string,
      cardBackground: formData.get('cardBackground') as string,
      primaryText: formData.get('primaryText') as string,
      secondaryText: formData.get('secondaryText') as string,
      border: formData.get('border') as string,
      primaryAccent: formData.get('primaryAccent') as string,
      secondaryAccent: formData.get('secondaryAccent') as string,
      active: true,
    };

    // Deactivate existing themes
    await Theme.updateMany({}, { active: false });

    // Try to update existing active or create new
    await Theme.create(themeData);
    
    // Revalidate global layout
    revalidatePath('/', 'layout');
    
    return { success: true };
  } catch (error) {
    console.error('Failed to save theme:', error);
    return { success: false, error: 'Failed to save theme' };
  }
}

export async function getAdminTheme() {
  const db = await dbConnect();
  if (!db) return null;
  const theme = await Theme.findOne({ active: true }).lean();
  if (theme) {
    // Convert ObjectId to string for client component serialization
    theme._id = theme._id.toString() as any;
  }
  return theme;
}
