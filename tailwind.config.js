/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Deep navy base (dark mode background / light mode text & accents)
        navy: {
          950: '#050B16',
          900: '#0A1628',
          800: '#101F38',
          700: '#16294A',
          600: '#1E3A5F',
        },
        // Light blue accents
        sky: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        // Soft light-mode surfaces
        mist: {
          50: '#F4F9FF',
          100: '#E8F1FA',
          200: '#D6E8F7',
        },
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        pulseNode: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.4)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseNode: 'pulseNode 3s ease-in-out infinite',
        dash: 'dash 2.4s linear forwards',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
