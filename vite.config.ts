import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/CyberFeed/', // Assurez-vous que ce chemin correspond à votre repository
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
