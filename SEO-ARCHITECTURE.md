# Global Tools Platform — SEO Architecture

## Positioning
A premium, privacy-first online utility platform. Start with 30 tools, then expand only when Search Console data shows demand.

## Languages
/en/ /es/ /fr/ /de/ /it/ /pt/ /ar/ /tr/ /hi/ /ja/

Every localized page gets its own URL, canonical, reciprocal hreflang set, visible localized content, and language switcher. Do not auto-redirect by IP/browser language.

## Initial clusters
Image Tools, PDF Tools, Developer Tools, Text Tools, Typing & Tests, QR Tools, Security Tools, Design Tools.

## SEO rules
- Static HTML for every indexable page.
- One primary intent per tool page.
- Unique title/H1/meta description per locale.
- Breadcrumbs and strong internal links.
- XML sitemap with only canonical 200/indexable URLs.
- No placeholder/empty indexable pages in production.
- FAQ only when it genuinely helps users; no keyword stuffing.
- Do not mass-generate translated pages without useful localized content.
- Performance budget: avoid shipping heavy libraries on routes that do not need them.
- Tool execution should be client-side where technically possible.

## AdSense readiness
Keep ad slots visually separated from tool controls, never disguise ads as UI, and keep the primary task usable without interacting with ads. Add Privacy, Terms, Contact, About, and a clear data-processing explanation before applying.

## Production checklist
- Replace YOUR-DOMAIN.com everywhere.
- Implement all 10 language routes.
- Implement functional tool components.
- Add real localized copy, not machine-translated filler.
- Generate sitemap-index + per-language sitemaps.
- Generate hreflang automatically from the locale/tool registry.
- Add Organization/WebSite/BreadcrumbList/SoftwareApplication or WebApplication structured data only where appropriate.
- Connect Search Console and verify canonical/sitemap/indexability.
- Test mobile, keyboard navigation, reduced motion, RTL, and Core Web Vitals.
