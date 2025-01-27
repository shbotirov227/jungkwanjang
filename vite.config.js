// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
	plugins: [react()],
    base: '/',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "src/styles/tailwind.scss";`,
			},
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},

    server: {
        historyApiFallback: true,
    },
});
