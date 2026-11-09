import fs from 'fs';
import path from 'path';

console.log('=== STARTING QUALITY ASSURANCE & PRODUCTION VALIDATION ===\n');

const DIST = './dist';
const SITE_URL = 'https://global-tools.hejajj96.workers.dev';
const LANGUAGES = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ar', 'tr', 'hi', 'ja'];

// 1. PAGE GENERATION
console.log('--- 1. PAGE GENERATION VALIDATION ---');
if (!fs.existsSync(DIST)) {
  console.error('ERROR: dist directory does not exist! Please run build first.');
  process.exit(1);
}

const allFiles = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (item.endsWith('.html')) {
      allFiles.push(full);
    }
  }
}
walk(DIST);

console.log(`Total HTML files generated in dist: ${allFiles.length}`);

// Check routes
const expectedBaseRoutes = [
  '', // root index.html
  ...LANGUAGES.map(l => `${l}`),
  ...LANGUAGES.map(l => `${l}/tools`),
  ...LANGUAGES.map(l => `${l}/categories`),
  ...LANGUAGES.map(l => `${l}/guides`),
  ...LANGUAGES.map(l => `${l}/about`),
  ...LANGUAGES.map(l => `${l}/privacy`),
  ...LANGUAGES.map(l => `${l}/terms`),
  ...LANGUAGES.map(l => `${l}/contact`),
];

let missingRoutes = [];
for (const r of expectedBaseRoutes) {
  const p = r === '' ? path.join(DIST, 'index.html') : path.join(DIST, r, 'index.html');
  if (!fs.existsSync(p)) {
    missingRoutes.push(r || '/');
  }
}
console.log(`Base routes checked: ${expectedBaseRoutes.length}. Missing: ${missingRoutes.length}`);
if (missingRoutes.length > 0) {
  console.error('Missing base routes:', missingRoutes);
}

// Check 404 page
const has404 = fs.existsSync(path.join(DIST, '404.html'));
console.log(`404.html exists in dist: ${has404}`);

// 2. SITEMAP VALIDATION
console.log('\n--- 2. SITEMAP VALIDATION ---');
const sitemapPath = path.join(DIST, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('ERROR: dist/sitemap.xml does not exist!');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Check XML Namespace
const hasCorrectNs = sitemapContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
console.log(`Sitemap official namespace valid: ${hasCorrectNs}`);

// Parse URLs
const locRegex = /<loc>(.*?)<\/loc>/g;
let match;
const sitemapUrls = [];
while ((match = locRegex.exec(sitemapContent)) !== null) {
  sitemapUrls.push(match[1]);
}

console.log(`Total URLs found in sitemap.xml: ${sitemapUrls.length}`);

// Unique check
const uniqueUrls = new Set(sitemapUrls);
console.log(`Unique URLs count: ${uniqueUrls.size} (Duplicates: ${sitemapUrls.length - uniqueUrls.size})`);

// Check domain & query params
const invalidDomainUrls = sitemapUrls.filter(u => !u.startsWith(SITE_URL));
const queryParamUrls = sitemapUrls.filter(u => u.includes('?'));
const contains404 = sitemapUrls.filter(u => u.includes('404'));
console.log(`URLs matching production domain (${SITE_URL}): ${sitemapUrls.length - invalidDomainUrls.length}/${sitemapUrls.length}`);
console.log(`URLs with query parameters: ${queryParamUrls.length}`);
console.log(`URLs pointing to 404: ${contains404.length}`);

// Check that every sitemap URL maps to an actual HTML file in dist
let missingHtmlForSitemap = [];
for (const u of sitemapUrls) {
  const rel = u.replace(SITE_URL, '').replace(/^\//, '').replace(/\/$/, '');
  const targetHtml = rel === '' ? path.join(DIST, 'index.html') : path.join(DIST, rel, 'index.html');
  if (!fs.existsSync(targetHtml)) {
    missingHtmlForSitemap.push({ url: u, expectedPath: targetHtml });
  }
}
console.log(`Sitemap URLs mapping to real dist HTML files: ${sitemapUrls.length - missingHtmlForSitemap.length}/${sitemapUrls.length}`);
if (missingHtmlForSitemap.length > 0) {
  console.error('Missing HTML files for sitemap URLs:', missingHtmlForSitemap.slice(0, 5));
}

// 3. TECHNICAL SEO & JSON-LD VALIDATION ON ALL GENERATED HTML
console.log('\n--- 3. TECHNICAL SEO & JSON-LD VALIDATION (ALL PAGES) ---');
let canonicalErrors = 0;
let hreflangErrors = 0;
let missingMetaDesc = 0;
let missingH1 = 0;
let missingLangAttr = 0;
let jsonLdErrors = 0;
let totalChecked = 0;

for (const file of allFiles) {
  totalChecked++;
  const html = fs.readFileSync(file, 'utf8');

  // Lang attribute
  const langMatch = html.match(/<html[^>]*lang=["']([^"']+)["']/i);
  if (!langMatch) missingLangAttr++;

  // 404 check
  if (file.endsWith('404.html')) continue;

  // Canonical
  const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (!canonMatch || !canonMatch[1].startsWith(SITE_URL) || !canonMatch[1].endsWith('/')) {
    canonicalErrors++;
  }

  // Hreflang
  const hreflangs = [...html.matchAll(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)];
  const isMultilingual = !file.endsWith('dist/index.html');
  if (isMultilingual && hreflangs.length !== 11) {
    hreflangErrors++;
  }

  // H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match || !h1Match[1].trim()) missingH1++;

  // Meta description
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (!metaDescMatch || !metaDescMatch[1].trim()) missingMetaDesc++;

  // JSON-LD validation
  const scriptMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const sm of scriptMatches) {
    try {
      JSON.parse(sm[1]);
    } catch (err) {
      jsonLdErrors++;
      console.error(`Invalid JSON-LD in ${file}:`, err.message);
    }
  }
}

console.log(`Total HTML pages verified: ${totalChecked}`);
console.log(`Missing HTML lang attributes: ${missingLangAttr}`);
console.log(`Canonical tag errors: ${canonicalErrors}`);
console.log(`Hreflang errors (must be exactly 11 for multilingual pages): ${hreflangErrors}`);
console.log(`Missing H1 tags: ${missingH1}`);
console.log(`Missing meta descriptions: ${missingMetaDesc}`);
console.log(`Invalid JSON-LD schemas: ${jsonLdErrors}`);

console.log('\n=== VALIDATION COMPLETED ===');
