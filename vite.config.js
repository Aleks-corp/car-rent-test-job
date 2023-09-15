import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/car-rent-test-job",
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        404: resolve("404.html"),
      },
    },
  },
});
