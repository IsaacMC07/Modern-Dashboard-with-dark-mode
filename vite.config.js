import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Cambiar a rutas relativas en lugar de '/Dashboard/'
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Asegurar que los assets se generen con rutas relativas
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})