// Lists every top-level page except the 404 page.
const pages = Object.keys(import.meta.glob('./*.astro'))
  .map(file => file.slice(2, -'.astro'.length))
  .filter(name => name !== '404')
  .map(name => name === 'index' ? '/' : `/${name}/`);

export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const urls = pages.map(path => `  <url><loc>${new URL(base + path, site)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, { headers: { 'Content-Type': 'application/xml' } });
}
