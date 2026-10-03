import Theme from "@/models/Theme";
import dbConnect from '@/lib/db';

export async function getActiveTheme() {
  try {
    const db = await dbConnect();
    if (!db) return null;
    const activeTheme = await Theme.findOne({ active: true }).lean();
    return activeTheme;
  } catch (error) {
    console.error('Failed to fetch active theme:', error);
    return null;
  }
}

export function generateThemeCSS(theme: any) {
  if (!theme) return '';
  return `
    :root {
      ${theme.primaryBackground ? `--theme-bg: ${theme.primaryBackground};` : ''}
      ${theme.secondaryBackground ? `--theme-bg-secondary: ${theme.secondaryBackground};` : ''}
      ${theme.cardBackground ? `--theme-card: ${theme.cardBackground};` : ''}
      ${theme.border ? `--theme-border: ${theme.border};` : ''}
      ${theme.primaryText ? `--theme-text-primary: ${theme.primaryText};` : ''}
      ${theme.secondaryText ? `--theme-text-secondary: ${theme.secondaryText};` : ''}
      ${theme.primaryAccent ? `--theme-accent: ${theme.primaryAccent};` : ''}
      ${theme.secondaryAccent ? `--theme-accent-bright: ${theme.secondaryAccent};` : ''}
    }
  `;
}
