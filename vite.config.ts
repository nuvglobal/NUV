import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/", // Root path for Render.com and Fleek.co
  define: {
    'import.meta.env.VITE_CONVEX_URL': JSON.stringify('https://lovely-dragon-907.convex.cloud'),
    'import.meta.env.VITE_VLY_APP_ID': JSON.stringify('fresh-comics-leave'),
    'import.meta.env.VITE_VLY_MONITORING_URL': JSON.stringify('https://runtime-monitoring.vly.ai/runtime-error'),
  },
});