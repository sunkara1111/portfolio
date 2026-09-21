export const SITE = {
  name: 'Dineshgopi Sunkara',
  firstName: 'Dineshgopi',
  lastName: 'Sunkara',
  title: 'Senior Controls Engineer / Automation Engineer',
  shortTitle: 'Automation Engineer',
  tagline:
    'Architecting robust automation and full-stack systems — plant-floor platforms, MES integrations, and software operators can actually run.',
  summary:
    'I design industrial controls, OT platforms, and AI-assisted tools that turn complex workflows into systems you can trust.',
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

export const SERIES = {
  label: 'NETFLIX DEVELOPER SERIES',
  seasons: 'SEASONS 2019 — 2026',
  wordmark: 'SUNKARA',
  roleLine: 'AUTO.ENGINE',
  badge: 'AUTOMATION ENGINEER & PROBLEM SOLVER',
  chips: ['React', 'Node.js', 'Python', 'Ignition', 'PLC'],
  engineered: 'ENGINEERED FOR RELIABILITY',
}

export const NAV_LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

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
    highlights: [
      'Architected and deployed Java microservices with Spring Boot and Hibernate across resilient IT infrastructure.',
      'Designed RESTful and SOAP services and data models on MySQL, PostgreSQL, and MongoDB.',
      'Contributed to CI/CD pipelines with Jenkins, Git, and Docker on AWS and Azure.',
    ],
  },
  {
    role: 'Intern – Industrial Automation & Controls',
    company: 'Andhra Pradesh State Skill Development Corporation (APSSDC)',
    location: 'Andhra Pradesh, India',
    dates: 'Apr 2019 – Apr 2020',
    current: false,
    highlights: [
      'Hands-on exposure to manufacturing automation workflows, microcontrollers, and production-line lifecycles.',
      'Studied how PLCs interface with supervisory software to manage plant-floor equipment.',
    ],
  },
]

export const EDUCATION = [
  {
    school: 'Pace University – Seidenberg School of CS & IS, New York, NY',
    credential: 'Master of Science (M.S.) in Computer Science',
    dates: 'Sep 2023 – May 2025',
    detail: 'GPA: 3.55 / 4.0',
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Pilot',
    category: 'PRODUCTIVITY',
    description:
      'Free hub for communication, business writing, resumes, and message analysis. Practical productivity tools with secure backend architecture.',
    tags: ['Productivity', 'Communication', 'Tools'],
    liveUrl: 'https://get-pilot-app.netlify.app/',
    extraLinks: [{ label: 'Reply tool', href: 'https://get-pilot-app.netlify.app/tools/reply' }],
    githubUrl: 'https://github.com/sunkara1111/pilot',
    status: 'live',
    episode: '01',
  },
  {
    id: 2,
    title: 'StatusPass',
    category: 'COMPLIANCE',
    description:
      'F-1 / CPT / OPT / STEM OPT compliance organizer for international students in the United States. Tracks visa and work-authorization clocks so the next action is clear.',
    tags: ['F-1', 'CPT', 'OPT', 'STEM OPT'],
    liveUrl: 'https://statuspass-web.vercel.app/',
    githubUrl: 'https://github.com/sunkara1111/statuspass',
    status: 'live',
    disclaimer: 'Not a law firm or DSO',
    episode: '02',
  },
  {
    id: 3,
    title: 'AdForge',
    category: 'ADTECH',
    description:
      'AI-powered advertising platform for creating, managing, and optimizing digital ad campaigns with intelligent automation and analytics.',
    tags: ['AI', 'Marketing', 'Automation'],
    liveUrl: 'https://adforge-sunkara.vercel.app/',
    status: 'live',
    episode: '03',
  },
  {
    id: 4,
    title: 'DGS AI',
    category: 'INTELLIGENCE',
    description:
      'Intelligent assistant platform leveraging advanced AI models for natural language processing and task automation.',
    tags: ['AI', 'NLP', 'Assistant'],
    liveUrl: 'https://sunkara1111.github.io/dgs-ai/',
    githubUrl: 'https://github.com/sunkara1111/dgs-ai',
    status: 'live',
    episode: '04',
  },
  {
    id: 5,
    title: 'AI Fund',
    category: 'RESEARCH',
    description:
      'Sunkara AI Fund — experimental AI-driven hedge fund research. Academic project exploring algorithmic trading strategies and market analysis. Paper / research only.',
    tags: ['AI', 'Research', 'Finance'],
    liveUrl: 'https://sunkara1111.github.io/ai-hedge-fund/',
    githubUrl: 'https://github.com/sunkara1111/ai-hedge-fund',
    status: 'live',
    disclaimer: 'Research & experimental project',
    episode: '05',
  },
  {
    id: 6,
    title: 'Aetherline',
    category: 'CONTROLS',
    description:
      'Next-generation automation control system integrating industrial controls with modern software engineering practices.',
    tags: ['Controls', 'Automation', 'SCADA'],
    liveUrl: 'https://sunkara1111.github.io/aetherline/',
    githubUrl: 'https://github.com/sunkara1111/aetherline',
    status: 'live',
    episode: '06',
  },
  {
    id: 7,
    title: 'Client Kickoff',
    category: 'WORKFLOW',
    description:
      'Streamlined client onboarding and project kickoff management system designed to automate initial engagement workflows.',
    tags: ['Automation', 'Workflow', 'Management'],
    liveUrl: 'https://sunkara1111.github.io/client-kickoff-system-free/',
    githubUrl: 'https://github.com/sunkara1111/client-kickoff-system-free',
    status: 'live',
    episode: '07',
  },
]

export const SKILL_CARDS = [
  {
    title: 'Frontend Engineering',
    blurb:
      'Crafting responsive, operator-ready interfaces with React, modern JavaScript, and production CSS — dashboards people can actually run.',
    chips: ['React', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Backend & Databases',
    blurb:
      'Building secure REST APIs, authentication, and high-performance data layers across Java, Python, SQL, and document stores.',
    chips: ['Java', 'Python', 'SQL'],
  },
  {
    title: 'Cloud & DevOps',
    blurb:
      'Deploying and operating production applications with Docker, CI/CD, AWS, and Azure — repeatable pipelines, not one-off servers.',
    chips: ['AWS', 'Azure', 'Docker'],
  },
  {
    title: 'Controls & Automation',
    blurb:
      'Industrial control software — PLC logic, Ignition / AVEVA SCADA, and MES transactions in regulated GxP / GMP environments.',
    chips: ['PLC', 'Ignition', 'SCADA'],
  },
  {
    title: 'AI & Machine Learning',
    blurb:
      'Practical AI assistants and automation tools — language models applied to real operator, writing, and business workflows.',
    chips: ['NLP', 'LLMs', 'Python'],
  },
]

export const TECH_STACK = [
  'REACT',
  'NODE.JS',
  'PYTHON',
  'JAVA',
  'IGNITION',
  'ALLEN-BRADLEY',
  'AVEVA',
  'AWS',
  'AZURE',
  'DOCKER',
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
