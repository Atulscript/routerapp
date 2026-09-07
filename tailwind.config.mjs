/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a5f6',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        md: {
          primary: '#0284c7',
          'on-primary': '#FFFFFF',
          'primary-container': '#e0effe',
          'on-primary-container': '#0c4a6e',
          secondary: '#475569',
          'on-secondary': '#FFFFFF',
          'secondary-container': '#f1f5f9',
          'on-secondary-container': '#0f172a',
          surface: '#FFFFFF',
          'on-surface': '#0f172a',
          'surface-variant': '#f8fafc',
          'on-surface-variant': '#64748b',
          outline: '#cbd5e1',
          'outline-variant': '#e2e8f0',
          'surface-container-lowest': '#FFFFFF',
          'surface-container-low': '#f8fafc',
          'surface-container': '#f1f5f9',
          'surface-container-high': '#e2e8f0',
          'surface-container-highest': '#cbd5e1',
        }
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 10px 20px -5px rgba(15, 23, 42, 0.07), 0 6px 8px -4px rgba(15, 23, 42, 0.04)',
        'm3-1': '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'm3-2': '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'm3-3': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
      },
      borderRadius: {
        'm3-xs': '4px',
        'm3-sm': '8px',
        'm3-md': '12px',
        'm3-lg': '16px',
        'm3-xl': '24px',
        'm3-full': '9999px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15)' },
        },
        badgeFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'pulse-slow': 'pulseSlow 2.5s infinite ease-in-out',
        'badge-float': 'badgeFloat 3s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}
