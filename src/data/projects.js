/**
 * Live Sunkara projects. URLs verified HTTP 200.
 * Do not add user counts, revenue, or other unverified metrics.
 */
export const FOUNDER_NAME = 'Dineshgopi Sunkara'
export const FOUNDER_SHORT = 'DINESH S'
export const FOUNDER_ROLE = 'Senior Controls Engineer · Automation Engineer'
export const PORTFOLIO_URL = 'https://sunkara1111.github.io/portfolio/'

export const projects = [
  {
    id: 1,
    title: 'Pilot',
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
    founder: FOUNDER_NAME,
    featured: true,
  },
  {
    id: 2,
    title: 'StatusPass',
    description:
      'F-1/CPT/OPT/STEM OPT compliance organizer for international students in the United States. Tracks visa and work-authorization clocks so the next action is clear.',
    tags: ['F-1', 'CPT', 'OPT', 'STEM OPT'],
    liveUrl: 'https://temporary-prompt-pavo-7vphl3a.vercel.app/',
    githubUrl: 'https://github.com/sunkara1111/statuspass',
    status: 'live',
    founder: FOUNDER_SHORT,
    disclaimer: 'Compliance organizer, not a law firm or DSO',
    featured: true,
  },
  {
    id: 3,
    title: 'AdForge',
    description:
      'Turns a product into short-form ad packs for TikTok, Instagram Reels, and YouTube Shorts — hooks, scripts, captions, hashtags, and CTAs ready to shoot.',
    tags: ['AI', 'Marketing', 'Short-form'],
    liveUrl: 'https://adforge-sunkara.vercel.app/',
    status: 'live',
    founder: FOUNDER_NAME,
    featured: true,
  },
  {
    id: 4,
    title: 'DGS AI',
    description:
      'Paper trading desk with TradingView charts, risk gates, technical analysis, and market insights. Paper trading by default — not a live brokerage.',
    tags: ['AI', 'Markets', 'Paper trading'],
    liveUrl: 'https://sunkara1111.github.io/dgs-ai/',
    githubUrl: 'https://github.com/sunkara1111/dgs-ai',
    status: 'live',
    founder: FOUNDER_NAME,
    featured: true,
  },
  {
    id: 5,
    title: 'Sunkara AI Fund',
    description:
      'Dinesh AI Fund — original 7-agent AI investment research. Sample examples only (ticker → agents → paper memo). Not live trading. Not financial advice.',
    tags: ['AI', 'Research', 'Finance'],
    liveUrl: 'https://sunkara1111.github.io/ai-hedge-fund/',
    githubUrl: 'https://github.com/sunkara1111/ai-hedge-fund',
    status: 'live',
    founder: FOUNDER_NAME,
    disclaimer: 'Research & experimental project',
    featured: true,
  },
  {
    id: 6,
    title: 'Aetherline',
    description:
      'Industrial signal narrative workbench for real-time automation monitoring — signal visualization, alarm pattern recognition, response procedures, and compliance logging.',
    tags: ['Controls', 'Automation', 'SCADA'],
    liveUrl: 'https://sunkara1111.github.io/aetherline/',
    githubUrl: 'https://github.com/sunkara1111/aetherline',
    status: 'live',
    founder: FOUNDER_NAME,
    featured: true,
  },
  {
    id: 7,
    title: 'Client Kickoff',
    description:
      'Free client onboarding and kickoff system for solo freelancers — inquiry to first kickoff without rebuilding the same pipeline for every client.',
    tags: ['Automation', 'Workflow', 'Onboarding'],
    liveUrl: 'https://sunkara1111.github.io/client-kickoff-system-free/',
    githubUrl: 'https://github.com/sunkara1111/client-kickoff-system-free',
    status: 'live',
    founder: FOUNDER_NAME,
    featured: false,
  },
  {
    id: 8,
    title: 'Portfolio',
    description:
      'This site — the public index of live work by Dineshgopi Sunkara (DINESH S), Senior Controls Engineer / Automation Engineer.',
    tags: ['Portfolio', 'Index'],
    liveUrl: PORTFOLIO_URL,
    githubUrl: 'https://github.com/sunkara1111/portfolio',
    status: 'live',
    founder: FOUNDER_NAME,
    featured: false,
  },
]
