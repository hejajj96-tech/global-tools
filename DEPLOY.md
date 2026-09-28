# ToolAtlas deployment

## 1. GitHub
Create a repository and push this folder.

## 2. Cloudflare Pages
Import the GitHub repository.
- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`

## 3. Domain
Replace every `https://YOUR-DOMAIN.com` occurrence with the real domain before production. This affects canonical URLs, sitemap and robots.txt.

## 4. AdSense
Do not insert a fake publisher ID. After AdSense approval, add the official AdSense script through a controlled layout component and configure real ad slots. Keep ads clearly separated from tool controls and download buttons.

## 5. SEO launch checklist
- Verify domain in Google Search Console.
- Submit `/sitemap.xml`.
- Confirm robots.txt is accessible.
- Test representative English and non-English URLs with URL Inspection.
- Verify canonical and hreflang tags.
- Confirm every localized URL returns 200.
- Add real About, Privacy, Terms and Contact details.
- Do not publish placeholder legal/contact text.

## 6. Important
The starter is designed as a static-first architecture. Browser processing is preferred to avoid file uploads and server costs. Before production, audit each tool's implementation and the licenses of every dependency.
