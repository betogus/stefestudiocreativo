import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    pages(),
    sitemap({
      hostname: 'https://stefestudiocreativo.netlify.app',
    }),
  ],
})