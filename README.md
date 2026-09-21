# Portfolio — Dineshgopi Sunkara

**Senior Controls Engineer · Automation Engineer**

Dark cinematic cyber portfolio for industrial controls, automation systems, and AI-assisted tools. Opens with a full-viewport percentage loader, then a holographic hero with a cinematic portrait, energy bars, and HUD panels. Accents mix Netflix red (`#E50914`) with deep purple / magenta glows on a black base.

Public branding is the name, role, and GitHub / LinkedIn links only. Do not add “Powered by”, sponsored, or platform HUD badges (GitHub, Netlify, Vercel, or similar).

## Live Site

**https://sunkara1111.github.io/portfolio/**

If that URL **301s** to `http://portfolio.sunkaraops.com/`, the custom domain is still set in GitHub Pages settings even though this repo has no `CNAME` file. A repo **admin** must remove it (automation tokens get HTTP 403):

1. Open [Settings → Pages](https://github.com/sunkara1111/portfolio/settings/pages)
2. Under **Custom domain**, click **Remove**
3. Confirm with `curl -sI https://sunkara1111.github.io/portfolio/` — expect **HTTP 200** and **no** `Location: http://portfolio.sunkaraops.com/`

Or as the repo owner: `bash scripts/clear-pages-custom-domain.sh`

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

1. **Pilot** — Communication and productivity hub ([Live](https://get-pilot-app.netlify.app/) | [Reply](https://get-pilot-app.netlify.app/tools/reply) | [GitHub](https://github.com/sunkara1111/pilot))
2. **StatusPass** — F-1 / CPT / OPT / STEM OPT organizer ([Live](https://statuspass-web.vercel.app/) | [GitHub](https://github.com/sunkara1111/statuspass))
3. **AdForge** — AI-powered advertising platform ([Live](https://adforge-sunkara.vercel.app/))
4. **DGS AI** — Intelligent assistant platform ([Live](https://sunkara1111.github.io/dgs-ai/) | [GitHub](https://github.com/sunkara1111/dgs-ai))
5. **AI Fund** — Experimental hedge fund research ([Live](https://sunkara1111.github.io/ai-hedge-fund/) | [GitHub](https://github.com/sunkara1111/ai-hedge-fund))
6. **Aetherline** — Next-gen automation control system ([Live](https://sunkara1111.github.io/aetherline/) | [GitHub](https://github.com/sunkara1111/aetherline))
7. **Client Kickoff** — Streamlined onboarding automation ([Live](https://sunkara1111.github.io/client-kickoff-system-free/) | [GitHub](https://github.com/sunkara1111/client-kickoff-system-free))

## Custom domain (later — DNS first)

**Do not add a `CNAME` file and do not set Settings → Pages → Custom domain** until the hostname actually resolves. Either one makes GitHub Pages **301** `https://sunkara1111.github.io/portfolio/` to that host. CI (`scripts/check-pages.sh`) fails the build if `CNAME` / `public/CNAME` / `dist/CNAME` is present.

This repo cannot buy a domain or change registrar DNS. Vite `base` stays **`/portfolio/`**.

When `sunkaraops.com` DNS is under our control, create this record **first** and wait until it resolves. Do not invent a different hostname.

| Type | Host / Name | Value / Target |
| --- | --- | --- |
| CNAME | `portfolio` | `sunkara1111.github.io` |

Check:

```bash
dig +short CNAME portfolio.sunkaraops.com
# must print: sunkara1111.github.io.
```

Only after that lookup succeeds:

1. Copy `CNAME.example` guidance into `public/CNAME` with **only** `portfolio.sunkaraops.com` on one line (no `https://`, no path) — and update `scripts/check-pages.sh` so CI allows it.
2. Repo **Settings → Pages → Custom domain** → paste the same hostname → Save → wait for DNS / HTTPS.
3. If the site should load at `/` on that domain, change `base` in `vite.config.js` from `'/portfolio/'` to `'/'`.
4. Update canonical, Open Graph, JSON-LD, `public/sitemap.xml`, and `public/robots.txt` to the new origin.

Until then the live site is **https://sunkara1111.github.io/portfolio/**. Leave `CNAME.example` in place; never commit a guessed hostname.

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
