import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechBlitz 2026 — 2-Week Online Technical Workshop Series",
  description:
    "TechBlitz 2026 is a 2-week online technical workshop series organized by COSMOS — The Science & Tech Community, Jabalpur Engineering College. Featuring 11+ expert speakers across multiple technology domains.",
  keywords: [
    "TechBlitz",
    "TechBlitz 2026",
    "COSMOS",
    "Jabalpur Engineering College",
    "JEC",
    "technical workshops",
    "online workshops",
    "technology conference",
  ],
  openGraph: {
    title: "TechBlitz 2026",
    description:
      "2-Week Online Technical Workshop Series — 5 Oct to 20 Oct 2026",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

import { getActiveTheme, generateThemeCSS } from '@/lib/theme';

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const activeTheme = await getActiveTheme();
  const themeCSS = generateThemeCSS(activeTheme);
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-black text-white">
        {themeCSS && <style dangerouslySetInnerHTML={{ __html: themeCSS }} />}
        {children}
      </body>
    </html>
  );
}
