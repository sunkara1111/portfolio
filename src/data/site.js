export const SITE = {
  name: 'Dineshgopi Sunkara',
  firstName: 'Dineshgopi',
  lastName: 'Sunkara',
  title: 'Senior Controls Engineer / Automation Engineer',
  shortTitle: 'Senior Controls Engineer',
  tagline: 'Building at the intersection of control systems & intelligent software.',
  summary:
    'I design reliable industrial controls, automation, and AI-assisted tools that turn complex workflows into systems you can trust.',
  education: 'M.S. in Computer Science',
  university: 'Pace University',
  resumeLabel: 'Latest resume',
  github: 'https://github.com/sunkara1111',
  linkedin: 'https://www.linkedin.com/in/sunkara-dineshgopi-86464919b',
  email: 'dineshgopi.sunkara@gmail.com',
  phone: '201-284-1559',
  phoneHref: 'tel:+12012841559',
  siteUrl: 'https://sunkara1111.github.io/portfolio/',
  portrait: `${import.meta.env.BASE_URL}portrait-hero.jpg`,
  portraitAbout: `${import.meta.env.BASE_URL}portrait-about.jpg`,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  resumeFileName: 'Sunkara-Dineshgopi-Resume.pdf',
}

export const EXPERIENCE = [
  {
    role: 'Automation Engineer',
    company: 'Jubilant HollisterStier',
    location: 'Spokane, WA (On-Site)',
    dates: 'Jun 2026 – Present',
    current: true,
    highlights: [
      'Develop custom Ignition SCADA modules using Python and JavaScript scripting for vision-sensor data and operator dashboards.',
      'Design an automated quality-control system integrating Rockwell PLCs with AVEVA SCADA.',
      'Direct integration, programming, and troubleshooting of control systems with sterile fill-finish lines.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Source Sphere LLC',
    location: 'Edison, NJ (Hybrid)',
    dates: 'Nov 2025 – Jun 2026',
    current: false,
  },
  {
    role: 'Program Analyst',
    company: 'Cognizant',
    location: 'Chennai, India (Remote)',
    dates: 'Aug 2020 – Mar 2023',
    current: false,
  },
  {
    role: 'Intern – Industrial Automation & Controls',
    company: 'Andhra Pradesh State Skill Development Corporation (APSSDC)',
    location: 'Andhra Pradesh, India',
    dates: 'Apr 2019 – Apr 2020',
    current: false,
  },
]

export const EDUCATION = [
  {
    school: 'Pace University – Seidenberg School of CS & IS, New York, NY',
    credential: 'Master of Science (M.S.) in Computer Science',
    dates: 'Sep 2023 – May 2025',
    detail: 'GPA: 3.55 / 4.0',
  },
  {
    school: 'Tirumala Engineering College, Andhra Pradesh, India',
    credential: 'B.Tech in Electrical, Electronics & Communication Engineering',
    dates: '2016 – 2020',
  },
]

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Pilot',
    description:
      'Free hub for communication, business writing, resumes, and message analysis. Practical productivity tools with secure backend architecture.',
    tags: ['Productivity', 'Communication', 'Tools'],
    liveUrl: 'https://get-pilot-app.netlify.app/',
    extraLinks: [{ label: 'Reply tool', href: 'https://get-pilot-app.netlify.app/tools/reply' }],
    githubUrl: 'https://github.com/sunkara1111/pilot',
    status: 'live',
    accent: 'from-emerald-300 via-teal-400 to-cyan-500',
    art: 'pulse',
  },
  {
    id: 2,
    title: 'StatusPass',
    description:
      'F-1 / CPT / OPT / STEM OPT compliance organizer for international students in the United States. Tracks visa and work-authorization clocks so the next action is clear.',
    tags: ['F-1', 'CPT', 'OPT', 'STEM OPT'],
    liveUrl: 'https://statuspass-web.vercel.app/',
    githubUrl: 'https://github.com/sunkara1111/statuspass',
    status: 'live',
    disclaimer: 'Not a law firm or DSO',
    accent: 'from-violet-400 via-fuchsia-400 to-cyan-400',
    art: 'orbit',
  },
  {
    id: 3,
    title: 'AdForge',
    description:
      'AI-powered advertising platform for creating, managing, and optimizing digital ad campaigns with intelligent automation and analytics.',
    tags: ['AI', 'Marketing', 'Automation'],
    liveUrl: 'https://adforge-sunkara.vercel.app/',
    status: 'live',
    accent: 'from-orange-400 via-amber-400 to-rose-400',
    art: 'bars',
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
    art: 'wave',
  },
  {
    id: 5,
    title: 'AI Fund',
    description:
      'Sunkara AI Fund — experimental AI-driven hedge fund research. Academic project exploring algorithmic trading strategies and market analysis. Paper / research only.',
    tags: ['AI', 'Research', 'Finance'],
    liveUrl: 'https://sunkara1111.github.io/ai-hedge-fund/',
    githubUrl: 'https://github.com/sunkara1111/ai-hedge-fund',
    status: 'live',
    disclaimer: 'Research & experimental project',
    accent: 'from-amber-300 via-violet-400 to-blue-600',
    art: 'nodes',
  },
  {
    id: 6,
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
    id: 7,
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
