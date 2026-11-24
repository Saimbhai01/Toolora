# Toolora Phase 7 — Cloudflare Pages Deployment

This project is a Vite + React static site. Deploy it to **Cloudflare Pages** (not Workers Static Assets) using the Git integration.

## 1. Before deployment

1. Replace `https://YOUR-DOMAIN.example` with your real HTTPS domain in:
   - `index.html`
   - `src/seo.js`
   - `public/robots.txt`
   - `public/sitemap.xml`
2. Update the sitemap to list only real, publicly accessible URLs. Do not submit placeholder URLs or tool URLs that do not exist as separate pages.
3. Keep `.env` files, API keys, and private credentials out of the repository. This app is intended to run without secrets.

## 2. Test locally

Requires Node.js 22 LTS (or a compatible supported Node release) and npm.

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production output is generated in `dist/`.

## 3. Deploy with Cloudflare Pages Git integration

1. Push this project to a GitHub repository.
2. Sign in to the Cloudflare dashboard.
3. Open **Workers & Pages** (the dashboard label may vary).
4. Choose **Create application** → **Pages** → **Connect to Git**.
5. Authorize GitHub and select the Toolora repository.
6. Configure the build:
   - Framework preset: `Vite`
   - Production branch: `main` (or the branch you use)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (if package.json is in repository root)
7. Save and deploy. Cloudflare will provide a `*.pages.dev` preview/production URL.

Every new push to the production branch triggers a new deployment. Pull requests/other branches can create preview deployments depending on project settings.

## 4. Add a custom domain

1. Open the Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter the domain you own and follow Cloudflare's DNS instructions.
3. If the domain is not already on Cloudflare, add it to Cloudflare and update the nameservers at your registrar when prompted.
4. Wait until Cloudflare reports the domain as active and HTTPS is provisioned.
5. Choose one canonical host (for example, `www.example.com` or `example.com`) and configure redirects for the other host if needed. Update canonical metadata and sitemap to match.

Do not change DNS records blindly; preserve existing email (MX), verification, and other required records.

## 5. Verify after deployment

- Open the Pages URL and test the homepage and several tools.
- Test refresh on the homepage and app routes. `_redirects` provides an SPA fallback.
- Check `/robots.txt` and `/sitemap.xml` on the live domain.
- Confirm canonical and Open Graph URLs use the real domain.
- Check browser console for runtime errors and test mobile layout.
- Add and verify the domain in Google Search Console, then submit the sitemap.

## Notes and limitations

- This phase adds Cloudflare Pages deployment configuration and instructions; it does not deploy the site or connect a domain on the user's behalf.
- `public/_headers` contains baseline security headers. Review them before adding third-party embeds or scripts. A strict Content-Security-Policy is intentionally not added because it can break assets until the app's exact requirements are audited.
- `public/_redirects` enables SPA fallback. It does not create SEO-friendly, server-rendered pages for each tool. Tool-specific crawlable URLs and prerendering/SSG remain a separate development task.
- Cloudflare Pages free-plan limits and dashboard labels can change; check the current Cloudflare dashboard and documentation when deploying.
