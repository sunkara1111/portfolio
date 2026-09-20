export const SITE = {
  name: 'Dineshgopi Sunkara',
  firstName: 'Dineshgopi',
  lastName: 'Sunkara',
  title: 'Senior Controls Engineer / Automation Engineer',
  shortTitle: 'Senior Controls Engineer',
  tagline: 'Building at the intersection of control systems & intelligent software.',
  summary:
    'I design reliable industrial controls, automation, and AI-assisted tools that turn complex workflows into systems you can trust.',
  education: "Master's degree in Computer Science",
  university: 'Pace University',
  github: 'https://github.com/sunkara1111',
  linkedin: 'https://www.linkedin.com/in/dineshgopisunkara',
  portrait: `${import.meta.env.BASE_URL}portrait.jpg`,
}

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'AdForge',
    description:
      'AI-powered advertising platform for creating, managing, and optimizing digital ad campaigns with intelligent automation and analytics.',
    tags: ['AI', 'Marketing', 'Automation'],
    liveUrl: 'https://adforge-sunkara.vercel.app',
    githubUrl: 'https://github.com/sunkara1111/adforge',
    status: 'live',
    accent: 'from-orange-400 via-amber-400 to-rose-400',
    art: 'bars',
  },
  {
    id: 2,
    title: 'Aetherline',
    description:
      'Next-generation automation control system integrating industrial controls with modern software engineering practices.',
    tags: ['Controls', 'Automation', 'SCADA'],
    liveUrl: 'https://sunkara1111.github.io/aetherline/',
    githubUrl: 'https://github.com/sunkara1111/aetherline',
    status: 'live',
    accent: 'from-cyan-300 via-teal-400 to-blue-500',
    art: 'wave',
  },
  {
    id: 3,
    title: 'AI Research Floor',
    description:
      'Experimental AI-driven hedge fund research system. Academic research project exploring algorithmic trading strategies and market analysis.',
    tags: ['AI', 'Research', 'Finance'],
    liveUrl: 'https://sunkara1111.github.io/ai-hedge-fund/',
    githubUrl: 'https://github.com/sunkara1111/ai-hedge-fund',
    status: 'live',
    disclaimer: 'Research & experimental project',
    accent: 'from-violet-400 via-fuchsia-400 to-purple-600',
    art: 'nodes',
  },
  {
    id: 4,
    title: 'DGS AI',
    description:
      'Intelligent assistant platform leveraging advanced AI models for natural language processing and task automation.',
    tags: ['AI', 'NLP', 'Assistant'],
    liveUrl: 'https://sunkara1111.github.io/dgs-ai/',
    githubUrl: 'https://github.com/sunkara1111/dgs-ai',
    status: 'live',
    accent: 'from-sky-400 via-indigo-400 to-blue-600',
    art: 'orbit',
  },
  {
    id: 5,
    title: 'Client Kickoff',
    description:
      'Streamlined client onboarding and project kickoff management system designed to automate initial engagement workflows.',
    tags: ['Automation', 'Workflow', 'Management'],
    liveUrl: 'https://sunkara1111.github.io/client-kickoff-system-free/',
    githubUrl: 'https://github.com/sunkara1111/client-kickoff-system-free',
    status: 'live',
    accent: 'from-pink-400 via-rose-400 to-orange-400',
    art: 'grid',
  },
  {
    id: 6,
    title: 'Pilot',
    description:
      'Free hub for communication, business writing, resumes, and message analysis. Practical productivity tools with secure backend architecture.',
    tags: ['Productivity', 'Communication', 'Tools'],
    liveUrl: 'https://get-pilot-app.netlify.app/',
    githubUrl: 'https://github.com/sunkara1111/pilot',
    status: 'live',
    accent: 'from-emerald-300 via-teal-400 to-cyan-500',
    art: 'pulse',
  },
]

export const SKILLS = [
  {
    category: 'Controls',
    items: [
      { name: 'PLC & Control Logic', detail: 'Reliable industrial control software' },
      { name: 'SCADA / HMI', detail: 'Operator-facing system visibility' },
      { name: 'Industrial Networking', detail: 'Plant-floor communications' },
      { name: 'MES Integration', detail: 'Bridging production and software' },
    ],
  },
  {
    category: 'Software',
    items: [
      { name: 'Python', detail: 'Automation, data, and tooling' },
      { name: 'JavaScript / React', detail: 'Interfaces for operators and teams' },
      { name: 'Workflow Systems', detail: 'Repeatable, observable processes' },
      { name: 'Git & CI', detail: 'Disciplined delivery' },
    ],
  },
  {
    category: 'Intelligence',
    items: [
      { name: 'AI-Assisted Tools', detail: 'Practical models in real workflows' },
      { name: 'Process Optimization', detail: 'Less waste, more uptime' },
      { name: 'Secure by Design', detail: 'Safety and access from the start' },
      { name: 'Continuous Improvement', detail: 'Iterate against live operations' },
    ],
  },
]

export const ABOUT_ORBITS = [
  { label: 'PLC / SCADA', className: 'top-6 -left-3 sm:-left-10' },
  { label: 'Automation', className: 'top-1/4 -right-4 sm:-right-12' },
  { label: 'AI Tools', className: 'bottom-24 -left-2 sm:-left-8' },
  { label: 'MES', className: 'bottom-10 -right-3 sm:-right-10' },
]
