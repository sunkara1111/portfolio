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
        surface: '#070814',
        text: '#f2f6ff',
        muted: '#8b93a7',
        'neon-cyan': '#00e5ff',
        'neon-blue': '#4d7cff',
        'neon-purple': '#9b6bff',
        'neon-pink': '#c084fc',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 229, 255, 0.18)',
        'glow-lg': '0 0 80px rgba(0, 229, 255, 0.22)',
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
