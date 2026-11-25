# Toolora Phase 6 — SEO Foundation

This package builds on Phase 5 and adds technical SEO foundations:
- Search-friendly title and meta description in the initial HTML
- Open Graph and Twitter metadata
- Canonical URL
- WebSite JSON-LD on the homepage
- Runtime metadata updates for the currently opened tool in the app
- WebApplication JSON-LD for the selected tool
- `public/robots.txt` and `public/sitemap.xml`
- Basic Cloudflare Pages security headers and static asset caching

## Important setup before launch
1. Replace every `https://YOUR-DOMAIN.example` in `index.html`, `src/seo.js`, `public/robots.txt`, and `public/sitemap.xml` with your real HTTPS custom domain.
2. Update the site name/description if your final brand wording changes.
3. Run `npm install`, then `npm run build`.
4. Deploy to Cloudflare Pages with build command `npm run build` and output directory `dist`.
5. Submit `https://YOUR-DOMAIN/sitemap.xml` in Google Search Console after the domain is live and verified.

## SEO limitation to understand
The current app opens tools inside a client-side workspace; they are not yet independent crawlable URLs with unique server-rendered HTML. Runtime title/meta updates improve browser sharing but do not guarantee that Google indexes every tool separately. A later routing + prerender/SSG phase is needed before publishing a sitemap containing individual tool URLs. This sitemap intentionally lists only the real homepage route, not invented routes.

## Local development
```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
