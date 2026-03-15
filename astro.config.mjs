import { defineConfig, passthroughImageService } from "astro/config";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://samhermes.com',

  markdown: {
      shikiConfig: {
          theme: 'houston',
      },
  },

  adapter: cloudflare({
    service: passthroughImageService(),
    imageService: 'compile'
  }),
});