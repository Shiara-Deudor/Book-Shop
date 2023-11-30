import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT)
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
