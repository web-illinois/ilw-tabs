import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-tabs",
            entry: "ilw-tabs.ts",
            fileName: "ilw-tabs",
            formats: ["es"],
        }
    },
    server: {
        hmr: false,
    },
});
