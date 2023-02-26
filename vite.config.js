import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  plugins: [laravel(["resources/styles/app.css", "resources/js/app.js"])],
  resolve: {
    alias: {
      "@": "/resources/js",
    },
  },
});
