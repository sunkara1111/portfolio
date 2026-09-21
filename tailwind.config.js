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
        text: '#ffffff',
        muted: '#9a9a9a',
        series: '#e50914',
        'series-hot': '#ff2a2a',
      },
      fontFamily: {
        sans: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
        display: ['Bebas Neue', 'Oswald', 'Impact', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        series: '0 0 40px rgba(229, 9, 20, 0.45)',
        'series-lg': '0 0 80px rgba(229, 9, 20, 0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
