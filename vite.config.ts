import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: resolve(__dirname, "public/_live-preview.ts"),
            fileName: "live-preview",
            name: "live-preview",
        },
        outDir: resolve(__dirname, "public/"),
    },
});
