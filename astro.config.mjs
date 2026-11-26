import { defineConfig } from 'astro/config';
import { exactRedirects } from './src/legacy-redirects.js';

const base = (process.env.PAGES_BASE_PATH || '').replace(/\/$/, '');
const legacyRedirects = Object.fromEntries(exactRedirects.map(([from, to]) => [
  from,
  to.startsWith('/') ? base + to : to
]));

export default defineConfig({
  site: process.env.PAGES_ORIGIN || 'https://eeldev.com',
  base: base || '/',
  redirects: {
    ...legacyRedirects,
    '/index.php/help': base + '/help/',
    '/index.php/how-to-validate-your-product': base + '/how-to-validate-your-product/'
  }
});
