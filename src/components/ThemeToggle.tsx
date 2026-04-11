'use client';

import { useTheme } from 'next-themes';

/**
 * Fixed-position theme toggle.
 * - Top-right on desktop, bottom-right on mobile (thumb-reach zone)
 * - 44px min tap target (WCAG 2.5.5)
 * - resolvedTheme undefined guard handles SSR hydration mismatch
 * - Animated icon swap with CSS transition
 */
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  // undefined before hydration — render empty placeholder to prevent layout shift
  if (!resolvedTheme) {
    return (
      <div
        className="fixed z-50 bottom-6 right-6 md:bottom-auto md:top-6 md:right-6 w-11 h-11 rounded-full"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="
        fixed z-50
        bottom-6 right-6
        md:bottom-auto md:top-6 md:right-6

        w-11 h-11
        flex items-center justify-center
        rounded-full

        border border-(--border-default)
        bg-(--bg-surface)
        text-(--text-primary)

        shadow-(--shadow-md)
        backdrop-blur-sm

        hover:border-(--border-strong)
        hover:bg-(--bg-elevated)
        hover:scale-105

        active:scale-95

        transition-all duration-200 ease-out
        cursor-pointer
      "
    >
      {/* Sun icon — shown in dark mode (click → go light) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          w-5 h-5 absolute
          transition-all duration-300 ease-out
          ${isDark
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-75 pointer-events-none'
          }
        `}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2"  x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="2"  y1="12" x2="4"  y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
      </svg>

      {/* Moon icon — shown in light mode (click → go dark) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          w-5 h-5 absolute
          transition-all duration-300 ease-out
          ${!isDark
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 rotate-90 scale-75 pointer-events-none'
          }
        `}
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}