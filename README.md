# Portfolio — Dineshgopi Sunkara

**Senior Controls Engineer · Automation Engineer**

Dark cinematic cyber portfolio for industrial controls, automation systems, and AI-assisted tools. Opens with a full-viewport percentage loader, then a holographic hero with a cinematic portrait, energy bars, and HUD panels. Accents mix Netflix red (`#E50914`) with deep purple / magenta glows on a black base.

Public branding is the name, role, and GitHub / LinkedIn links only. Do not add “Powered by”, sponsored, or platform HUD badges (GitHub, Netlify, Vercel, or similar).

## Live Site

**https://portfolio.sunkaraops.com/** (GitHub Pages custom domain)

GitHub Pages project URL (stays available; GitHub redirects it to the custom domain after DNS / HTTPS verify):

**https://sunkara1111.github.io/portfolio/**

- GitHub: [github.com/sunkara1111](https://github.com/sunkara1111)
- LinkedIn: [linkedin.com/in/sunkara-dineshgopi-86464919b](https://www.linkedin.com/in/sunkara-dineshgopi-86464919b)
- Resume: [Latest resume (PDF)](https://portfolio.sunkaraops.com/resume.pdf)

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

## Custom domain (GitHub Pages)

Hostname: **portfolio.sunkaraops.com**

This repo publishes with **GitHub Actions** (not `/docs`). Vite copies `public/` into `dist/`, so the file GitHub Pages reads is `public/CNAME`. A matching `CNAME` is also at the repo root.

### Files

- `CNAME` (repo root) and `public/CNAME` — one line, no protocol, no path:

```
portfolio.sunkaraops.com
```

### DNS (owner of sunkaraops.com)

Create a **CNAME** record:

| Host | Type | Value |
| --- | --- | --- |
| `portfolio` | CNAME | `sunkara1111.github.io` |

Do not point this hostname at Netlify or Vercel. Apex (`sunkaraops.com`) is not used for this site.

### GitHub Pages setting

1. Repo **Settings → Pages**.
2. **Custom domain**: `portfolio.sunkaraops.com` (GitHub often fills this from the published `CNAME` after the next deploy to `main`).
3. Wait for DNS check to pass, then keep **Enforce HTTPS** on.
4. Publishing source stays **GitHub Actions**.

`vite.config.js` uses a relative `base` (`./`) so assets resolve both at `https://sunkara1111.github.io/portfolio/` and at the custom-domain root. Canonical, Open Graph, JSON-LD, `public/sitemap.xml`, and `public/robots.txt` use `https://portfolio.sunkaraops.com/`.

Until DNS is live, the GitHub Pages URL continues to serve the site.

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
