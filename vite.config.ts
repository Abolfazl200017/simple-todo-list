import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      layouts: "/src/layouts",
      pages: "/src/pages",
      utils: "/src/utils",
      config: "/src/config",
      navigation: "/src/navigation",
      styles: "src/styles",
      assets: "src/assets",
      services: "src/services",
      contexts: "src/contexts"
    },
  },
})
