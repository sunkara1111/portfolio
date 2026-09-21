# Portfolio — Dineshgopi Sunkara

**Senior Controls Engineer · Automation Engineer**

Dark cinematic cyber portfolio for industrial controls, automation systems, and AI-assisted tools. Opens with a full-viewport percentage loader, then a holographic hero with a cinematic portrait, energy bars, and HUD panels. Accents mix Netflix red (`#E50914`) with deep purple / magenta glows on a black base.

Public branding is the name, role, and GitHub / LinkedIn links only. Do not add “Powered by”, sponsored, or platform HUD badges (GitHub, Netlify, Vercel, or similar).

## Live Site

**https://sunkara1111.github.io/portfolio/**

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

## Custom domain (DNS only)

**Do not add a `CNAME` file.** Publishing `public/CNAME` makes GitHub Pages **301** `https://sunkara1111.github.io/portfolio/` to that hostname. If DNS is NXDOMAIN, the live site goes down. This token cannot clear **Settings → Pages → Custom domain**; a repo admin must remove `portfolio.sunkaraops.com` there if github.io is still redirecting.

This repo cannot buy a domain or change registrar DNS. Vite `base` stays **`/portfolio/`**.

When you own `sunkaraops.com`, set this record at the registrar **first** and wait until it resolves:

| Type | Host / Name | Value / Target |
| --- | --- | --- |
| CNAME | `portfolio` | `sunkara1111.github.io` |

Check with `dig CNAME portfolio.sunkaraops.com` — it must return `sunkara1111.github.io`. Optional apex (`@`) A records for GitHub Pages are `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (not required for the subdomain).

Do not commit `public/CNAME` from this repo until that lookup succeeds **and** you are ready to cut github.io over to the custom domain. Until then the live site is **https://sunkara1111.github.io/portfolio/**.

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
