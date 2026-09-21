# Portfolio — Dineshgopi Sunkara

**Senior Controls Engineer · Automation Engineer**

Dark cinematic cyber portfolio for industrial controls, automation systems, and AI-assisted tools. Opens with a full-viewport percentage loader, then a holographic hero with a cinematic portrait, energy bars, and HUD panels. Accents mix Netflix red (`#E50914`) with deep purple / magenta glows on a black base.

Public branding is the name, role, and GitHub / LinkedIn links only. Do not add “Powered by”, sponsored, or platform HUD badges (GitHub, Netlify, Vercel, or similar).

## Live Site

**https://sunkara1111.github.io/portfolio/**

Intended custom domain (DNS must be set at the registrar — this repo cannot do that): **https://portfolio.sunkaraops.com/**

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

## Custom domain (GitHub Pages)

Repo support for **`portfolio.sunkaraops.com`** is in `public/CNAME`. Vite `base` stays **`/portfolio/`** so the current live URL `https://sunkara1111.github.io/portfolio/` keeps working. This repo cannot create or pay for a domain, and it cannot change registrar DNS.

### DNS (set at the registrar that owns `sunkaraops.com`)

Add a **CNAME** for the `portfolio` host only (no `https://`, no path):

| Type | Host / Name | Value / Target |
| --- | --- | --- |
| CNAME | `portfolio` | `sunkara1111.github.io` |

Optional apex (`sunkaraops.com` itself) is **not** required for this subdomain. If you later point the apex at GitHub Pages, use A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.

TTL 300–3600 is fine. After DNS is published:

1. Repo **Settings → Pages → Custom domain** should show `portfolio.sunkaraops.com` (the CNAME file in the Pages artifact also sets this).
2. Wait for the DNS check, then enable **Enforce HTTPS**.
3. Until that check passes, keep using `https://sunkara1111.github.io/portfolio/`.

### Path after the custom domain is live

GitHub Pages project sites are served at the **root** of a custom domain. This build still references `/portfolio/` assets so github.io keeps working. After HTTPS is green on `portfolio.sunkaraops.com`:

- If `https://portfolio.sunkaraops.com/` loads HTML but CSS/JS 404, change `base` in `vite.config.js` from `'/portfolio/'` to `'/'` and update canonical / Open Graph / JSON-LD / `public/sitemap.xml` / `public/robots.txt` to `https://portfolio.sunkaraops.com/`.
- Do not change `base` before DNS actually resolves — that would break the github.io URL.

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
