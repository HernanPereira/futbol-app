/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // permite usar describe/it/expect sin importarlos
    environment: 'jsdom',   // simula el navegador
    setupFiles: './src/setupTests.ts', // archivo de configuración global de tests
  },
})
