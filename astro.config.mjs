import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: 'https://samhermes.com',
    markdown: {
        shikiConfig: {
            theme: 'houston',
        },
    },
});