# Portfolio — Dineshgopi Sunkara

**Senior Controls Engineer · Automation Engineer**

Dark neon portfolio for industrial controls, automation systems, and AI-assisted tools.

Public branding is the name, role, and GitHub / LinkedIn links only. Do not add “Powered by”, sponsored, or platform HUD badges (GitHub, Netlify, Vercel, or similar).

## Live Site

**https://sunkara1111.github.io/portfolio/**

- GitHub: [github.com/sunkara1111](https://github.com/sunkara1111)
- LinkedIn: [linkedin.com/in/dineshgopisunkara](https://www.linkedin.com/in/dineshgopisunkara)

## Tech Stack

- **React** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **GitHub Pages** — Hosting
- **GitHub Actions** — CI/CD

## Featured Projects

1. **Pilot** — Communication and productivity hub ([Live](https://get-pilot-app.netlify.app/) | [Reply](https://get-pilot-app.netlify.app/tools/reply) | [GitHub](https://github.com/sunkara1111/pilot))
2. **StatusPass** — F-1 / CPT / OPT / STEM OPT organizer ([Live](https://temporary-prompt-pavo-7vphl3a.vercel.app/) | [GitHub](https://github.com/sunkara1111/statuspass))
3. **AdForge** — AI-powered advertising platform ([Live](https://adforge-sunkara.vercel.app/))
4. **DGS AI** — Intelligent assistant platform ([Live](https://sunkara1111.github.io/dgs-ai/) | [GitHub](https://github.com/sunkara1111/dgs-ai))
5. **AI Fund** — Experimental hedge fund research ([Live](https://sunkara1111.github.io/ai-hedge-fund/) | [GitHub](https://github.com/sunkara1111/ai-hedge-fund))
6. **Aetherline** — Next-gen automation control system ([Live](https://sunkara1111.github.io/aetherline/) | [GitHub](https://github.com/sunkara1111/aetherline))
7. **Client Kickoff** — Streamlined onboarding automation ([Live](https://sunkara1111.github.io/client-kickoff-system-free/) | [GitHub](https://github.com/sunkara1111/client-kickoff-system-free))

## Custom domain (GitHub Pages)

No hostname is set yet. When a real domain is ready, do not invent one — use the owner’s domain and this checklist:

1. Copy `CNAME.example` to `public/CNAME` and put **only** the real hostname on one line (no `https://`, no path).
2. DNS:
   - `www` (or another subdomain): CNAME → `sunkara1111.github.io`
   - Apex (`@`): A records to GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
3. Repo **Settings → Pages → Custom domain** — paste the same hostname and wait for DNS / HTTPS to check out.
4. If the site should load at `/` on that domain, change `base` in `vite.config.js` from `'/portfolio/'` to `'/'`.
5. Update canonical, Open Graph, JSON-LD, `public/sitemap.xml`, and `public/robots.txt` to the new origin.
6. Do not commit a guessed hostname. Leave `CNAME.example` in place until DNS is actually owned.

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
