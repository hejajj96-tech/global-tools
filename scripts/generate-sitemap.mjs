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

function normalizeSiteUrl(url) {
  return url.replace(/\/+$/, '');
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const siteUrl = normalizeSiteUrl(SITE_URL);

const urls = [];

for (const language of LANGUAGES) {
  for (const page of STATIC_PAGES) {
    urls.push(`${siteUrl}/${language}/${page}`);
  }

  for (const tool of TOOLS) {
    urls.push(`${siteUrl}/${language}/tools/${tool}/`);
  }
}

const uniqueUrls = [...new Set(urls)];

if (uniqueUrls.length !== urls.length) {
  throw new Error(
    `Sitemap generation failed: duplicate URLs detected. Total: ${urls.length}, unique: ${uniqueUrls.length}`
  );
}

const expectedUrlCount =
  LANGUAGES.length * (STATIC_PAGES.length + TOOLS.length);

if (uniqueUrls.length !== expectedUrlCount) {
  throw new Error(
    `Sitemap generation failed: expected ${expectedUrlCount} URLs, got ${uniqueUrls.length}`
  );
}

for (const url of uniqueUrls) {
  if (!url.startsWith(`${siteUrl}/`)) {
    throw new Error(`Sitemap validation failed: invalid URL: ${url}`);
  }

  if (url.includes('YOUR-DOMAIN.com')) {
    throw new Error('Sitemap validation failed: placeholder domain detected');
  }

  if (url.startsWith('http://')) {
    throw new Error(`Sitemap validation failed: HTTP URL detected: ${url}`);
  }
}

const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

for (const url of uniqueUrls) {
  xmlLines.push('  <url>');
  xmlLines.push(`    <loc>${escapeXml(url)}</loc>`);
  xmlLines.push('  </url>');
}

xmlLines.push('</urlset>');
xmlLines.push('');

const xml = xmlLines.join('\n');

if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
  throw new Error('Sitemap validation failed: missing XML declaration');
}

if (
  !xml.includes(
    'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'
  )
) {
  throw new Error('Sitemap validation failed: missing sitemap namespace');
}

const publicDir = resolve(process.cwd(), 'public');
const outputPath = resolve(publicDir, 'sitemap.xml');

await mkdir(publicDir, { recursive: true });

await writeFile(outputPath, xml, 'utf8');

console.log('========================================');
console.log('Global Tools Sitemap');
console.log('========================================');
console.log(`Site: ${siteUrl}`);
console.log(`Languages: ${LANGUAGES.length}`);
console.log(`Tools: ${TOOLS.length}`);
console.log(`Static pages per language: ${STATIC_PAGES.length}`);
console.log(`URLs per language: ${STATIC_PAGES.length + TOOLS.length}`);
console.log(`Total URLs: ${uniqueUrls.length}`);
console.log(`Output: ${outputPath}`);
console.log('========================================');

console.log('Sitemap validation: PASSED');
console.log('Sitemap generation: PASSED');
