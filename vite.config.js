import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/accessible-react-ui-kit/',
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
  },
})
