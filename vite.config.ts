import { defineConfig } from "vite";
import path from "path"
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(new URL("index.html", import.meta.url).pathname),
        app: path.resolve(new URL("src/main.ts", import.meta.url).pathname)
      },
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js"
      }
    }
  }
});
