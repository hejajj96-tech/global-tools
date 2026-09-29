import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const SITE_URL = 'https://global-tools.hejajj96.workers.dev';

const LANGUAGES = [
  'en',
  'es',
  'fr',
  'de',
  'it',
  'pt',
  'ar',
  'tr',
  'hi',
  'ja',
];

const TOOLS = [
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
  'reaction-time-test',
];

const STATIC_PAGES = [
  '',
  'tools/',
  'categories/',
  'about/',
  'privacy/',
  'terms/',
  'contact/',
];

const urls = [];

for (const lang of LANGUAGES) {
  for (const page of STATIC_PAGES) {
    urls.push(`${SITE_URL}/${lang}/${page}`);
  }

  for (const tool of TOOLS) {
    urls.push(`${SITE_URL}/${lang}/tools/${tool}/`);
  }
}

const uniqueUrls = [...new Set(urls)];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniqueUrls.map((url) => `  <url><loc>${url}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

const publicDir = resolve(process.cwd(), 'public');
const outputPath = resolve(publicDir, 'sitemap.xml');

await mkdir(publicDir, { recursive: true });
await writeFile(outputPath, xml, 'utf8');

console.log('========================================');
console.log('Global Tools Sitemap');
console.log('========================================');
console.log(`Site: ${SITE_URL}`);
console.log(`Languages: ${LANGUAGES.length}`);
console.log(`Tools: ${TOOLS.length}`);
console.log(`Static pages per language: ${STATIC_PAGES.length}`);
console.log(`Total URLs: ${uniqueUrls.length}`);
console.log(`Output: ${outputPath}`);
console.log('========================================');

if (uniqueUrls.length !== 370) {
  throw new Error(
    `Sitemap validation failed: expected 370 URLs, got ${uniqueUrls.length}`
  );
}

if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
  throw new Error('Sitemap validation failed: missing XML declaration');
}

if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
  throw new Error('Sitemap validation failed: missing sitemap namespace');
}

if (xml.includes('YOUR-DOMAIN.com')) {
  throw new Error('Sitemap validation failed: placeholder domain detected');
}

if (xml.includes('http://') && !xml.includes('http://www.sitemaps.org')) {
  throw new Error('Sitemap validation failed: unexpected HTTP URL detected');
}

console.log('Sitemap validation: PASSED');
