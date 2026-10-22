/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // All colors reference CSS variables — auto-adapt to light/dark
        primary:  'rgb(var(--color-primary)  / <alpha-value>)',
        surface:  'rgb(var(--color-surface)  / <alpha-value>)',
        cyan:     'rgb(var(--color-cyan)     / <alpha-value>)',
        neutral:  'rgb(var(--color-neutral)  / <alpha-value>)',
        muted:    'rgb(var(--color-muted)    / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      fontSize: {
        hero: 'clamp(2.5rem, 5vw, 4rem)',
        h1: '2.25rem',
        h2: '1.5rem',
        body: '1rem',
        small: '0.875rem',
      },
      animation: {
        'blink':   'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.42s ease-out forwards',
        'fade-in': 'fadeIn 0.2s ease-out forwards',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        card:       '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 20px rgba(0,188,212,0.12)',
      },
      transitionProperty: {
        'colors-bg': 'color, background-color, border-color',
      },
    },
  },
  plugins: [],
}
