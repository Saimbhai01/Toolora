# Toolora Phase 7 — Cloudflare Pages Ready

Phase 7 builds on the Phase 6 project and adds deployment-ready configuration:
- Node.js version pin (`.node-version`, 22)
- Git ignore rules
- Cloudflare Pages SPA fallback (`public/_redirects`)
- Detailed GitHub → Cloudflare Pages deployment guide (`DEPLOYMENT.md`)
- Existing SEO metadata, robots, sitemap and `_headers` retained from Phase 6

Read `DEPLOYMENT.md` before deploying. Replace all `YOUR-DOMAIN.example` placeholders with your actual domain.

## Build settings
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `/`

## Local commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

This package is prepared for deployment; it has not been deployed to your Cloudflare account. Individual tool pages still need a future routing + prerender/SSG implementation for independent SEO indexing.
