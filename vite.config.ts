import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/2025-ts-task-2/', // Github Pages 子路徑
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ -> src
    },
  },
})
