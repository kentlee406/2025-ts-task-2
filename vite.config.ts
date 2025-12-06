import { fileURLToPath, resolve, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/2025-ts-task-2/', // ← 注意這裡
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist', // 專案根目錄下
    emptyOutDir: true, // build 前清空 dist
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        dir: resolve(__dirname, 'dist'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['mixed-decls', 'import', 'color-functions', 'global-builtin'],
        verbose: false,
      },
    },
  },
})
