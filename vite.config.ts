import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['ant-design-vue/es/locale/zh_CN'],
  },
  preview: {
    port: 8080,
  },
  server: {
    port: 8080,
  },
})
