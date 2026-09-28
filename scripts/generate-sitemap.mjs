import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const siteUrl = process.env.SITE_URL || 'https://global-tools.hejajj96.workers.dev';
const langs = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ar', 'tr', 'hi', 'ja'];

const tools = [
  'image-compressor',
  'image-resizer',
  'jpg-to-png',
  'png-to-jpg',
  'webp-to-jpg',
  'remove-exif',
  'jpg-to-pdf',
  'merge-pdf',
  'split-pdf',
  'rotate-pdf',
  'compress-pdf',
  'json-formatter',
  'json-validator',
  'base64-encoder-decoder',
  'url-encoder-decoder',
  'uuid-generator',
  'regex-tester',
  'timestamp-converter',
  'word-counter',
  'case-converter',
  'text-cleaner',
  'typing-test',
  'cps-test',
  'keyboard-test',
  'qr-code-generator',
  'wifi-qr-code',
  'barcode-generator',
  'password-generator',
  'color-picker',
  'reaction-time-test'
];

const pages = [];

for (const lang of langs) {
  pages.push(
    `${siteUrl}/${lang}/`,
    `${siteUrl}/${lang}/tools/`,
    `${siteUrl}/${lang}/categories/`,
    `${siteUrl}/${lang}/about/`,
    `${siteUrl}/${lang}/privacy/`,
    `${siteUrl}/${lang}/terms/`,
    `${siteUrl}/${lang}/contact/`
  );

  for (const tool of tools) {
    pages.push(`${siteUrl}/${lang}/tools/${tool}/`);
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml');

await mkdir(resolve(process.cwd(), 'public'), { recursive: true });
await writeFile(outputPath, xml, 'utf8');

console.log(`Sitemap generated: ${outputPath}`);
console.log(`URLs: ${pages.length}`);
