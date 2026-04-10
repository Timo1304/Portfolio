import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timothy Finomo - Frontend Engineer",
  description: "Frontend Engineer and Technical Support Specialist based in Lagos. Building SteadyLoop and architecting high-performance web tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Added h-full and scroll-smooth for better UX
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 selection:bg-zinc-500/30">
        {/* Main content spine */}
        <main className="grow">
          {children}
        </main>
        
        {/* Vercel Analytics telemetry */}
        <Analytics />
      </body>
    </html>
  );
}