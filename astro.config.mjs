import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://samhermes.com',

  markdown: {
      shikiConfig: {
          theme: 'houston',
      },
  },

  adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),

  integrations: [sitemap()],
});