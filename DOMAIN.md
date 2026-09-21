# Custom domain checklist — Portfolio

The portfolio is a **static** GitHub Pages site. Vite builds to `dist/` and GitHub Actions publishes that artifact. No paid host is required.

## Live URL

**https://sunkara1111.github.io/portfolio/**

Do **not** commit a repo-root `CNAME` (or `public/CNAME`, which Vite copies into `dist/`) while `portfolio.sunkaraops.com` DNS does not resolve. GitHub Pages treats that file as a custom domain and **301s** the github.io URL to it. That takes the public site down.

`sunkaraops.com` Netlify DNS is on another team. This repo cannot create the record. Same blocker as DGS AI (`dgsai.sunkaraops.com`).

## When DNS exists — then re-add CNAME

Intended hostname (not live today): `portfolio.sunkaraops.com`

1. In Netlify / NSONE for `sunkaraops.com`, add a **CNAME**:
   - **Host / name:** `portfolio`
   - **Target / value:** `sunkara1111.github.io`
   - Do **not** target `sunkara1111.github.io/portfolio` — DNS is a host, not a path.
2. Confirm `portfolio.sunkaraops.com` resolves (`dig +short CNAME portfolio.sunkaraops.com`).
3. Copy `docs/CNAME.example` to **both** a repo-root file named `CNAME` **and** `public/CNAME` (hostname only, no `https://`). Vite copies `public/` into `dist/`; Actions publishes `dist/`.
4. GitHub → repo **Settings → Pages → Custom domain** → `portfolio.sunkaraops.com` → Save.
5. Wait for free Let’s Encrypt TLS. Enforce HTTPS when ready.
6. Point canonical, Open Graph, JSON-LD, `public/robots.txt`, `public/sitemap.xml`, `src/data/site.js` `siteUrl`, and README at `https://portfolio.sunkaraops.com/`.
7. CI currently **fails** if a live `CNAME` is present. Update `scripts/check-pages.sh` when DNS is real.

Until those steps are done, keep using https://sunkara1111.github.io/portfolio/ and leave `CNAME` **out** of the repo root and `public/`.

## GitHub Pages (current host)

- Source: GitHub Actions → `dist/` (Vite build), not `/docs`
- **No** root or `public/CNAME` until DNS is live
- Asset URLs are **relative** (`vite.config.js` `base: './'`), so the same files will also work at `/` on a custom domain later
- Canonical, sitemap, and robots stay on https://sunkara1111.github.io/portfolio/

## Cutover checklist

- [x] Live site is https://sunkara1111.github.io/portfolio/ (no root / public `CNAME`)
- [ ] DNS CNAME `portfolio` → `sunkara1111.github.io` exists and resolves
- [ ] `CNAME` and `public/CNAME` copied from `docs/CNAME.example` **after** DNS
- [ ] HTTPS lock is valid on https://portfolio.sunkaraops.com/
- [ ] Canonical, sitemap, robots, `siteUrl`, and README updated to the new origin
- [ ] No “Powered by” platform badges on the public site
