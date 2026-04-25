import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Absolute subdirectory base so asset URLs are always correct regardless of
  // which client-side route the SPA rewrite rule serves index.html for.
  base: '/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',       // all hashed assets go into dist/assets/
    emptyOutDir: true,         // clean dist/ before every build
    chunkSizeWarningLimit: 800, // suppress warning from the large video asset
  },

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})