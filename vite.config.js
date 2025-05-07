import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/assets/scss/_variables.scss";',
  //     }
  //   }
  // },
  server: {
    port: 3000,
    host: '192.168.100.148',
    // host: '192.168.81.189'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
