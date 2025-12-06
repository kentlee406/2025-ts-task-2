// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 這裡設定你的 GitHub Pages 子路徑
  base: '/2025-ts-task-2/',
  build: {
    // 不要額外修改 rollupOptions，避免錯誤
    outDir: 'dist', // 預設即可，或改成你想的資料夾
  },
})
