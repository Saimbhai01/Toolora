# Toolora Phase 1 starter

A static, browser-based online tools homepage. No backend, database, or paid API required.


## Files
- `index.html` — page structure and SEO starter metadata
- `styles.css` — responsive UI, light/dark theme
- `app.js` — search, categories, favorites, and six browser-side tools
- `favicon.svg` — editable brand icon


## Local preview
Open `index.html` in a modern browser. For best behavior, run a local static server or use Cloudflare Pages.


## Deploy to Cloudflare Pages (free tier)
1. Create a GitHub repository and upload these files to the repository root.
2. In Cloudflare Dashboard, open Workers & Pages → Create → Pages → Connect to Git.
3. Select your repository.
4. Framework preset: None. Build command: leave empty. Build output directory: `/` (root).
5. Deploy. Cloudflare assigns a `*.pages.dev` address.


## Before launch
- Replace the canonical URL in `index.html` with your actual deployed URL.
- Replace `hello@example.com` with your contact email.
- Add real Privacy Policy and Terms pages and link them from the footer.
- Add sitemap.xml and robots.txt after the final URL is known.
- Google Fonts is used for typography; if you prefer fully offline/no external assets, remove the import in `styles.css`.

