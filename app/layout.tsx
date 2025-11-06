// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { initStoryblokServer } from "@/lib/storyblok";

export const metadata: Metadata = {
  title: "The Westley Chronicles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Server-safe init; no tokens => no-op (still compiles)
  initStoryblokServer();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
