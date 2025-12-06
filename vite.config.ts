// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/2025-ts-task-2/', // Github Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 這行很重要
    },
  },
})
