export const SITE_URL = 'https://global-tools.hejajj96.workers.dev';
export const SITE_NAME = 'ToolAtlas';

export const LANGUAGES = [
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
] as const;

export type SupportedLanguage = (typeof LANGUAGES)[number];

export function normalizeSiteUrl(url: string): string {
  return url.replace(/\/+$/, '');
}

export function cleanUrl(url: string): string {
  const base = normalizeSiteUrl(SITE_URL);
  return url
    .replace('https://global-tools.pages.dev', base)
    .replace('https://YOUR-DOMAIN.com', base)
    .replace('http://global-tools.pages.dev', base)
    .replace('http://YOUR-DOMAIN.com', base)
    .replace(/([^:]\/)\/+/g, '$1');
}

export function getCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const withTrailingSlash = normalizedPath.endsWith('/')
    ? normalizedPath
    : `${normalizedPath}/`;
  return `${normalizeSiteUrl(SITE_URL)}${withTrailingSlash}`;
}
