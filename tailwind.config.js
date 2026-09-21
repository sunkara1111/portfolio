/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#07060c',
        text: '#f2f6ff',
        muted: '#8b93a7',
        series: '#E50914',
        'series-hot': '#ff2a2a',
        royal: '#5b21b6',
        vibranium: '#a855f7',
        magenta: '#c026d3',
        'neon-cyan': '#E50914',
        'neon-blue': '#5b21b6',
        'neon-purple': '#a855f7',
        'neon-pink': '#c026d3',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(229, 9, 20, 0.22)',
        'glow-lg': '0 0 80px rgba(168, 85, 247, 0.28)',
      },
      keyframes: {
        'core-pulse': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        'ring-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        'ring-spin-rev': {
          to: { transform: 'rotate(-360deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'core-pulse': 'core-pulse 3.2s ease-in-out infinite',
        'ring-spin': 'ring-spin 28s linear infinite',
        'ring-spin-rev': 'ring-spin-rev 40s linear infinite',
        scan: 'scan 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
