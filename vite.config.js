import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site. Keep /portfolio/ so https://sunkara1111.github.io/portfolio/ loads.
  // Do not publish a CNAME file; it 301s github.io to the custom domain.
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
