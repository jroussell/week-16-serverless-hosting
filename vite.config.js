import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  base: "/week-16-serverless-hosting/",
  plugins: [react()],
})
