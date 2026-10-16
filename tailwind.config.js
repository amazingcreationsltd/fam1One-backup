/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--bg-primary-rgb) / <alpha-value>)',
        surface: 'rgb(var(--bg-surface-rgb) / <alpha-value>)',
        'surface-subtle': 'rgb(var(--bg-surface-subtle-rgb) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--bg-surface-elevated-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        'accent-btn': 'var(--accent-btn)',
        'accent-hover': 'var(--accent-hover)',
        'accent-ink': '#06080C',
        'pure-white': '#ffffff',
        'pure-black': '#000000',
        dark: '#ffffff',
        muted: 'rgb(var(--text-muted-rgb) / <alpha-value>)',
        white: 'rgb(var(--text-primary-rgb) / <alpha-value>)',
        gray: {
          100: 'rgb(var(--text-primary-rgb) / <alpha-value>)',
          200: 'rgb(var(--text-muted-rgb) / <alpha-value>)',
          300: 'rgb(var(--text-muted-rgb) / <alpha-value>)',
          400: 'rgb(var(--text-muted-rgb) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['"Formula Condensed"', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['"Formula Condensed"', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
