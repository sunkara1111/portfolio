# Portfolio — Dineshgopi Sunkara

**Senior Controls Engineer · Automation Engineer**

Dark cinematic cyber portfolio for industrial controls, automation systems, and AI-assisted tools. Opens with a full-viewport percentage loader, then a holographic hero with a cinematic portrait, energy bars, and HUD panels. Accents mix Netflix red (`#E50914`) with deep purple / magenta glows on a black base.

Public branding is the name, role, and GitHub / LinkedIn links only. Do not add “Powered by”, sponsored, or platform HUD badges (GitHub, Netlify, Vercel, or similar).

## Live Site

**https://sunkara1111.github.io/portfolio/**

There is **no** repo-root `CNAME` and **no** `public/CNAME`. `portfolio.sunkaraops.com` DNS does not resolve (`sunkaraops.com` Netlify DNS is on another team). A committed CNAME would make GitHub Pages **301** this github.io URL to that dead host and take the live site down. Re-add CNAME (copy `docs/CNAME.example`) **only after** a DNS CNAME `portfolio` → `sunkara1111.github.io` exists. See `DOMAIN.md`.

- GitHub: [github.com/sunkara1111](https://github.com/sunkara1111)
- LinkedIn: [linkedin.com/in/sunkara-dineshgopi-86464919b](https://www.linkedin.com/in/sunkara-dineshgopi-86464919b)
- Resume: [Latest resume (PDF)](https://sunkara1111.github.io/portfolio/resume.pdf)

## Tech Stack

- **React** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **GitHub Pages** — Hosting
- **GitHub Actions** — CI/CD

## Featured Projects

1. **Pilot** — Communication and productivity hub ([Live](https://get-pilot-app.netlify.app/) | [Reply](https://get-pilot-app.netlify.app/tools/reply) | [GitHub](https://github.com/sunkara1111/pilot)). Custom domain soon: `pilot.sunkaraops.com`
2. **StatusPass** — F-1 / CPT / OPT / STEM OPT organizer ([Live](https://statuspass-web.vercel.app) | [GitHub](https://github.com/sunkara1111/statuspass)). Custom domain soon: `statuspass.sunkaraops.com`
3. **AdForge** — AI-powered advertising platform ([Live](https://adforge-sunkara.vercel.app/))
4. **DGS AI** — Intelligent assistant platform ([Live](https://sunkara1111.github.io/dgs-ai/) | [GitHub](https://github.com/sunkara1111/dgs-ai))
5. **AI Fund** — Experimental hedge fund research ([Live](https://sunkara1111.github.io/ai-hedge-fund/) | [GitHub](https://github.com/sunkara1111/ai-hedge-fund))
6. **Aetherline** — Next-gen automation control system ([Live](https://sunkara1111.github.io/aetherline/) | [GitHub](https://github.com/sunkara1111/aetherline))
7. **Client Kickoff** — Streamlined onboarding automation ([Live](https://sunkara1111.github.io/client-kickoff-system-free/) | [GitHub](https://github.com/sunkara1111/client-kickoff-system-free))

## Custom domain (not live)

Intended hostname: `portfolio.sunkaraops.com` — **do not enable until DNS exists.**

This repo publishes with **GitHub Actions** (Vite `public/` → `dist/`), not `/docs`. GitHub Pages reads a `CNAME` from the published `dist/` **and** from the repo root. Either file 301s `https://sunkara1111.github.io/portfolio/` to that hostname.

1. Confirm DNS: CNAME `portfolio` → `sunkara1111.github.io` (`dig +short CNAME portfolio.sunkaraops.com`).
2. Copy `docs/CNAME.example` to repo-root `CNAME` **and** `public/CNAME` (one line, no protocol).
3. Repo **Settings → Pages → Custom domain**: `portfolio.sunkaraops.com`. Keep **Enforce HTTPS** after TLS provisions.
4. Point canonical, Open Graph, JSON-LD, sitemap, robots, and `SITE.siteUrl` at the new origin.
5. Update `scripts/check-pages.sh` so CI no longer rejects the live CNAME.

`vite.config.js` uses a relative `base` (`./`) so the same assets work at github.io/portfolio/ today and at a custom-domain root later.

Canonical, Open Graph, JSON-LD, `public/sitemap.xml`, and `public/robots.txt` stay on **https://sunkara1111.github.io/portfolio/** until that cutover.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## License

© 2026 Dineshgopi Sunkara. All rights reserved.
