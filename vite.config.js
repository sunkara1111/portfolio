import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs keep https://sunkara1111.github.io/portfolio/ working.
  // When portfolio.sunkaraops.com DNS exists, copy docs/CNAME.example to CNAME
  // and public/CNAME — the same build will also work at the custom-domain root.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
