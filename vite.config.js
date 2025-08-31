import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for Netlify deploy
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
})
