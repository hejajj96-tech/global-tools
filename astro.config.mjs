import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://global-tools.hejajj96.workers.dev',
  output: 'static',
  trailingSlash: 'always',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  integrations: [react()],
});
