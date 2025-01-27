import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend address
        changeOrigin: true, // Adjust the origin of the request to match the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove `/api` prefix if not used on the backend
      },
    },
  },
})
