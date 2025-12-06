// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/2025-ts-task-2/', // Github Pages
  build: {
    // 不要額外修改 rollupOptions，避免錯誤
    outDir: 'dist', // 預設即可，或改成你想的資料夾
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 這行很重要
    },
  },
})
