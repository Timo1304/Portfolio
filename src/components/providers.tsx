'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

/**
 * Thin wrapper around next-themes ThemeProvider.
 * Kept separate so layout.tsx can remain a Server Component.
 *
 * attribute="class"  → adds class="dark" to <html>; aligns with Tailwind dark strategy
 * defaultTheme="dark" → portfolio defaults to dark (premium first impression)
 * enableSystem        → respects OS preference on first visit
 * disableTransitionOnChange → prevents FOUC flash on hard toggle
 */
export function Providers({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
