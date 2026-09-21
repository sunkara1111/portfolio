import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site. Keep this path so https://sunkara1111.github.io/portfolio/ loads.
  // After portfolio.sunkaraops.com DNS + HTTPS are live and Pages serves at domain root, change to '/'.
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
