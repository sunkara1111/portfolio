# Portfolio — Dineshgopi Sunkara

A cinematic, founder-grade portfolio website showcasing AI products and multi-agent systems.

**Live Site:** https://sunkara1111.github.io/portfolio/

## Overview

This is a production-ready static portfolio built with Next.js, featuring:

- 🎨 Dark, premium aesthetic with violet/cyan accent gradients
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive, mobile-first design
- ♿ Accessible with proper contrast and semantic HTML
- 🚀 Optimized for performance with static export
- 🔗 Open Graph metadata for rich link previews

## Featured Projects

### 1. **AdForge**
AI social ad pack generator for Reels, TikTok, and Shorts.
- **Live:** https://adforge-sunkara.vercel.app
- **Stack:** Next.js, TypeScript, OpenAI, Stripe

### 2. **Dinesh AI Fund**
7-agent investment research floor with autonomous market analysis.
- **Live:** https://sunkara1111.github.io/ai-hedge-fund/
- **Stack:** Python, LangGraph, yfinance
- ⚠️ Paper trading and research only

### 3. **DGS AI**
Trading-first humanoid vision combining social, work product, and autonomous capabilities.
- **Live:** https://sunkara1111.github.io/dgs-ai/

### 4. **Client Kickoff System**
Free, open-source client onboarding framework.
- **Repo:** https://github.com/sunkara1111/client-kickoff-system-free

## Tech Stack

- **Framework:** Next.js 14 (App Router with static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Deployment:** GitHub Pages via GitHub Actions

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sunkara1111/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## Deployment

### GitHub Pages Setup (One-Time)

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy on push to `main`

### Manual Deployment

Push to the `main` branch and GitHub Actions will automatically build and deploy:

```bash
git push origin main
```

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg            # Custom favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Hero.tsx           # Hero section with animated background
│       ├── FeaturedWork.tsx   # Project showcase with live links
│       ├── HowIBuild.tsx      # Process/methodology section
│       ├── TechStack.tsx      # Technologies used
│       ├── Contact.tsx        # Contact CTAs
│       └── Footer.tsx         # Footer with attribution
├── next.config.mjs            # Next.js config (basePath for GitHub Pages)
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## Design Principles

- **Cinematic Experience:** Smooth animations and depth effects create an immersive feel
- **Founder-Grade:** Professional aesthetic that conveys technical depth and product focus
- **Content-First:** Clear hierarchy with project details, live links, and repositories
- **Performance:** Static generation ensures fast load times worldwide
- **Accessibility:** WCAG-compliant contrast ratios and semantic markup

## Contact

**Dineshgopi Sunkara**
- GitHub: [@sunkara1111](https://github.com/sunkara1111)
- LinkedIn: [dineshgopisunkara](https://www.linkedin.com/in/dineshgopisunkara)

---

**Founded & built by Dineshgopi Sunkara**
