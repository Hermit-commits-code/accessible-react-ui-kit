import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/accessible-react-ui-kit/demo/',
  plugins: [react()],
})
