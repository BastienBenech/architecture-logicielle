import { defineConfig } from "vite";
import path from "path";

export default defineConfig(() => {
  return {
    build: {
      manifest: false,
      serviceWorker: false,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
        },
      },
      outDir: "dist",
    },
  };
});
