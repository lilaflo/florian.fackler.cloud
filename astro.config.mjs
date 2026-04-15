import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://properflow.ch',
  build: {
    inlineStylesheets: 'auto',
  },
});
