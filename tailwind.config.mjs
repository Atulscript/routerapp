/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Roboto Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        md: {
          primary: '#0061A4',
          'on-primary': '#FFFFFF',
          'primary-container': '#D1E4FF',
          'on-primary-container': '#001D36',
          secondary: '#535F70',
          'on-secondary': '#FFFFFF',
          'secondary-container': '#D7E3F7',
          'on-secondary-container': '#101C2B',
          tertiary: '#6B5778',
          'tertiary-container': '#F2DAFF',
          surface: '#FDFBFF',
          'on-surface': '#1A1C1E',
          'surface-variant': '#DFE2EB',
          'on-surface-variant': '#43474E',
          outline: '#73777F',
          'outline-variant': '#C3C7D0',
          'surface-container-lowest': '#FFFFFF',
          'surface-container-low': '#F7F9FE',
          'surface-container': '#F1F4F9',
          'surface-container-high': '#EBEFF4',
          'surface-container-highest': '#E2E8EE',
          error: '#BA1A1A',
          'error-container': '#FFDAD6',
        }
      },
      boxShadow: {
        'm3-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
        'm3-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
        'm3-3': '0px 4px 8px 3px rgba(0, 0, 0, 0.08), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        'm3-4': '0px 6px 10px 4px rgba(0, 0, 0, 0.08), 0px 2px 3px 0px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'm3-xs': '4px',
        'm3-sm': '8px',
        'm3-md': '12px',
        'm3-lg': '16px',
        'm3-xl': '28px',
        'm3-full': '9999px',
      }
    },
  },
  plugins: [],
}
