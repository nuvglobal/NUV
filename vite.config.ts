import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  define: {
    'import.meta.env.VITE_CONVEX_URL': JSON.stringify('https://lovely-dragon-907.convex.cloud'),
    'import.meta.env.VITE_VLY_APP_ID': JSON.stringify('fresh-comics-leave'),
    'import.meta.env.VITE_VLY_MONITORING_URL': JSON.stringify('https://runtime-monitoring.vly.ai/runtime-error'),
  },
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'convex/react'],
  },
});
