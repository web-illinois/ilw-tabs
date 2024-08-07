import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-tabs",
            entry: "ilw-tabs.js",
            fileName: "ilw-tabs",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-tabs.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
