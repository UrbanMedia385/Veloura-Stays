import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    svgr()
  ],
  server: {
    proxy: {
      '/send-email': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
  