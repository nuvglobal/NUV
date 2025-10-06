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
  base: "/nuv/", // GitHub Pages subdirectory path
  define: {
    // Hardcode the Convex URL for GitHub Pages builds
    'import.meta.env.VITE_CONVEX_URL': JSON.stringify(
      process.env.VITE_CONVEX_URL || 'https://lovely-dragon-907.convex.cloud'
    ),
  },
});
