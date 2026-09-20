/**
 * Live Sunkara projects. URLs verified HTTP 200.
 * Do not add user counts, revenue, or other unverified metrics.
 */
export const FOUNDER_NAME = 'Dinesh Gopi Sunkara'
export const FOUNDER_COMPACT = 'Dineshgopi Sunkara'
export const FOUNDER_SHORT = 'DINESH S'
export const FOUNDER_ROLE = 'Automation Engineer'
export const FOUNDER_ROLE_LONG = 'Senior Controls Engineer · Automation Engineer'
export const PORTFOLIO_URL = 'https://sunkara1111.github.io/portfolio/'
export const GITHUB_PROFILE = 'https://github.com/sunkara1111'
export const GITHUB_PORTFOLIO_REPO = 'https://github.com/sunkara1111/portfolio'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/dineshgopisunkara'

export const projects = [
  {
    id: 1,
    title: 'Pilot',
    blurb: 'Free AI tools for everyday work.',
    description:
      'Free AI tools for everyday work. Reply drafts customer responses you can edit and send — paste a message, pick a tone, and review before you copy.',
    tags: ['Productivity', 'Communication', 'AI tools'],
    liveUrl: 'https://get-pilot-app.netlify.app/',
    extraLinks: [
      {
        label: 'Reply tool',
        href: 'https://get-pilot-app.netlify.app/tools/reply',
      },
    ],
    githubUrl: 'https://github.com/sunkara1111/pilot',
    status: 'live',
    founder: FOUNDER_COMPACT,
    featured: true,
    gradient: 'from-[#00e5ff] via-[#3b82f6] to-[#7c3aed]',
  },
  {
    id: 2,
    title: 'StatusPass',
    blurb: 'F-1 / CPT / OPT / STEM OPT organizer.',
    description:
      'F-1/CPT/OPT/STEM OPT compliance organizer for international students in the United States. Tracks visa and work-authorization clocks so the next action is clear.',
    tags: ['F-1', 'CPT', 'OPT', 'STEM OPT'],
    liveUrl: 'https://temporary-prompt-pavo-7vphl3a.vercel.app/',
    githubUrl: 'https://github.com/sunkara1111/statuspass',
    status: 'live',
    founder: FOUNDER_SHORT,
    disclaimer: 'Compliance organizer, not a law firm or DSO',
    featured: true,
    gradient: 'from-[#b56bff] via-[#7c3aed] to-[#00e5ff]',
  },
  {
    id: 3,
    title: 'AdForge',
    blurb: 'Short-form ad packs for TikTok, Reels, Shorts.',
    description:
      'Turns a product into short-form ad packs for TikTok, Instagram Reels, and YouTube Shorts — hooks, scripts, captions, hashtags, and CTAs ready to shoot.',
    tags: ['AI', 'Marketing', 'Short-form'],
    liveUrl: 'https://adforge-sunkara.vercel.app/',
    status: 'live',
    founder: FOUNDER_COMPACT,
    featured: true,
    gradient: 'from-[#ff3cac] via-[#ff7a18] to-[#ffd166]',
  },
  {
    id: 4,
    title: 'DGS AI',
    blurb: 'Paper trading desk with risk gates.',
    description:
      'Paper trading desk with TradingView charts, risk gates, technical analysis, and market insights. Paper trading by default — not a live brokerage.',
    tags: ['AI', 'Markets', 'Paper trading'],
    liveUrl: 'https://sunkara1111.github.io/dgs-ai/',
    githubUrl: 'https://github.com/sunkara1111/dgs-ai',
    status: 'live',
    founder: FOUNDER_COMPACT,
    featured: true,
    gradient: 'from-[#22d3ee] via-[#06b6d4] to-[#0f766e]',
  },
  {
    id: 5,
    title: 'AI Fund',
    blurb: '7-agent investment research. Paper only.',
    description:
      'Sunkara AI Fund / Dinesh AI Fund — original 7-agent AI investment research. Sample examples only (ticker → agents → paper memo). Not live trading. Not financial advice.',
    tags: ['AI', 'Research', 'Finance'],
    liveUrl: 'https://sunkara1111.github.io/ai-hedge-fund/',
    githubUrl: 'https://github.com/sunkara1111/ai-hedge-fund',
    status: 'live',
    founder: FOUNDER_COMPACT,
    disclaimer: 'Research & experimental project',
    featured: true,
    gradient: 'from-[#fbbf24] via-[#a855f7] to-[#1d4ed8]',
  },
  {
    id: 6,
    title: 'Aetherline',
    blurb: 'Industrial signal narrative workbench.',
    description:
      'Industrial signal narrative workbench for real-time automation monitoring — signal visualization, alarm pattern recognition, response procedures, and compliance logging.',
    tags: ['Controls', 'Automation', 'SCADA'],
    liveUrl: 'https://sunkara1111.github.io/aetherline/',
    githubUrl: 'https://github.com/sunkara1111/aetherline',
    status: 'live',
    founder: FOUNDER_COMPACT,
    featured: true,
    gradient: 'from-[#67e8f9] via-[#3b82f6] to-[#1e1b4b]',
  },
  {
    id: 7,
    title: 'Client Kickoff',
    blurb: 'Free freelancer onboarding pipeline.',
    description:
      'Free client onboarding and kickoff system for solo freelancers — inquiry to first kickoff without rebuilding the same pipeline for every client.',
    tags: ['Automation', 'Workflow', 'Onboarding'],
    liveUrl: 'https://sunkara1111.github.io/client-kickoff-system-free/',
    githubUrl: 'https://github.com/sunkara1111/client-kickoff-system-free',
    status: 'live',
    founder: FOUNDER_COMPACT,
    featured: true,
    gradient: 'from-[#34d399] via-[#22d3ee] to-[#6366f1]',
  },
]

export const liveCount = projects.filter((p) => p.status === 'live').length
