// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ottilieohm.com',
  // portfolio.html rather than portfolio/index.html, so GitHub Pages serves
  // /portfolio directly instead of redirecting to /portfolio/
  build: { format: 'file' },
});
