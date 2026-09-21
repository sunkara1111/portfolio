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
        surface: '#0a0a0a',
        text: '#f5f5f5',
        muted: '#9a9a9a',
        series: '#e50914',
        'series-hot': '#ff2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        series: '0 0 40px rgba(229, 9, 20, 0.35)',
        'series-lg': '0 0 80px rgba(229, 9, 20, 0.45)',
        portrait:
          '0 0 0 1px rgba(255,255,255,0.72), 0 0 0 7px rgba(229,9,20,0.38), 0 0 70px rgba(229,9,20,0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
