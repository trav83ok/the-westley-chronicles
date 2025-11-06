// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { initStoryblok } from '@/lib/storyblok';

export const metadata: Metadata = { title: 'My Site' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Expose the correct token to the client (for bridge/visual editor) via NEXT_PUBLIC_*
  if (typeof window !== 'undefined') {
    (window as any).NEXT_PUBLIC_STORYBLOK_TOKEN =
      process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;
  }
  initStoryblok();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
