# Portfolio — Dineshgopi Sunkara

**Senior Controls Engineer · Automation Engineer**

Dark cinematic cyber portfolio for industrial controls, automation systems, and AI-assisted tools.

## Live Site

**https://sunkara1111.github.io/portfolio/**

There is no repo-root `CNAME` and no `public/CNAME`. `portfolio.sunkaraops.com` DNS does not resolve. A committed CNAME would make GitHub Pages 301 this github.io URL to that dead host. Re-add it only after DNS exists. If Pages still redirects, leave Settings → Pages → Custom domain empty until DNS is configured.

- GitHub: https://github.com/sunkara1111
- LinkedIn: https://www.linkedin.com/in/sunkara-dineshgopi-86464919b
- Resume: https://sunkara1111.github.io/portfolio/resume.pdf

## Tech Stack

- React
- Vite
- Tailwind CSS
- GitHub Pages
- GitHub Actions

## Featured Projects

1. Pilot — https://get-pilot-app.netlify.app/
2. StatusPass — https://statuspass-web.vercel.app
3. AdForge — https://adforge-sunkara.vercel.app/
4. DGS AI — https://sunkara1111.github.io/dgs-ai/
5. AI Fund — https://sunkara1111.github.io/ai-hedge-fund/
6. Aetherline — https://sunkara1111.github.io/aetherline/
7. Client Kickoff — https://sunkara1111.github.io/client-kickoff-system-free/

## Custom domain (not live)

Intended hostname: `portfolio.sunkaraops.com` — do not enable until DNS exists. When ready, add a DNS CNAME `portfolio` → `sunkara1111.github.io`, then copy `docs/CNAME.example` to repo-root `CNAME` and `public/CNAME`, configure Settings → Pages → Custom domain, and update canonical URLs. Until then keep the GitHub Pages URL above and let `scripts/check-pages.sh` reject live CNAME files.

`vite.config.js` uses a relative base (`./`) so the same build works at the project URL and custom-domain root later.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

GitHub Actions deploys to GitHub Pages when changes are pushed to `main`.

## License

© 2026 Dineshgopi Sunkara. All rights reserved.
