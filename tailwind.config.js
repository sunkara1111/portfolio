/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#05050c',
        navy: '#0a1020',
        surface: '#0c1224',
        'surface-light': '#141a32',
        text: '#f4f7ff',
        muted: '#9aa4c7',
        cyan: '#00e5ff',
        'cyan-dim': '#67f0ff',
        purple: '#b56bff',
        magenta: '#ff3cac',
        primary: '#00e5ff',
        'primary-bright': '#67f0ff',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        heading: ['Cinzel', 'Georgia', 'serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        hud: ['Orbitron', 'Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 229, 255, 0.25)',
        'glow-lg': '0 0 48px rgba(0, 229, 255, 0.35)',
        'glow-purple': '0 0 32px rgba(181, 107, 255, 0.35)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
