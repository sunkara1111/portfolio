import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs work at both:
  // - https://sunkara1111.github.io/portfolio/
  // - https://portfolio.sunkaraops.com/ (GitHub Pages custom domain, site root)
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
