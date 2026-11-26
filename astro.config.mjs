import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eeldev.com',
  redirects: {
    '/index.php/help': '/help/',
    '/index.php/how-to-validate-your-product': '/how-to-validate-your-product/'
  }
});
