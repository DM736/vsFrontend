import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: `autoUpdate`,
    devOptions:{
      enabled: true,
    },
    manifest: {
      name: 'Tushop App',
      short_name: 'MiPWA',
      description: 'Tushop tienda virtual',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icon192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }) 
  ],
})
