import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use './' so asset paths work seamlessly on both root custom domains and GitHub Pages subpaths
  base: './',
  plugins: [
    vue(),
    tailwindcss()
  ]
})