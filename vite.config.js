// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // *** AÑADE ESTA LÍNEA ***
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    historyApiFallback: true,
    proxy: {
      // Configuración del proxy para el backend Flask
      // *** REVISA ESTO ***
      // Si tu backend FastAPI está en http://localhost:8000,
      // esta configuración de proxy actual para /api a 5000 no será usada
      // por las llamadas directas a http://localhost:8000/proveedores/login
      '/api': {
        target: 'http://localhost:5000',  // URL de tu backend Flask
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Connection', 'keep-alive')
          })
        }
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})