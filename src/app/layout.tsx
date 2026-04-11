import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import { ThemeToggle } from "@/components/ThemeToggle";

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
  description:
    "Frontend Engineer and Technical Support Specialist based in Lagos. Building SteadyLoop and architecting high-performance web tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * suppressHydrationWarning is required by next-themes.
     * next-themes injects a script that sets the class on <html> before React
     * hydrates, which would otherwise cause a mismatch warning. This suppresses
     * that single attribute warning without silencing anything else.
     */
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className="
          min-h-full flex flex-col
          bg-(--bg-base)
          text-(--text-primary)
          selection:bg-(--selection-bg)
        "
      >
        <Providers>
          {/* Fixed theme toggle — renders on every page */}
          <ThemeToggle />

          {/* Main content spine */}
          <main className="grow">
            {children}
          </main>

          {/* Vercel Analytics telemetry */}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
