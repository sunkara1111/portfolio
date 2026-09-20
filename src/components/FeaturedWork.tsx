'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'AdForge',
    description: 'AI social ad pack generator for Reels, TikTok, and Shorts. Complete ad creation workflow powered by OpenAI.',
    liveUrl: 'https://adforge-sunkara.vercel.app',
    repoUrl: 'https://github.com/sunkara1111/adforge',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'Stripe'],
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    name: 'Dinesh AI Fund',
    description: '7-agent investment research floor running autonomous market analysis. Paper trading and research only — includes clear disclaimers.',
    liveUrl: 'https://sunkara1111.github.io/ai-hedge-fund/',
    repoUrl: 'https://github.com/sunkara1111/ai-hedge-fund',
    stack: ['Python', 'LangGraph', 'yfinance'],
    gradient: 'from-cyan-600 to-blue-600',
    disclaimer: true,
  },
  {
    name: 'DGS AI',
    description: 'Trading-first humanoid vision — social, work product, and autonomous capabilities combined.',
    liveUrl: 'https://sunkara1111.github.io/dgs-ai/',
    repoUrl: 'https://github.com/sunkara1111/dgs-ai',
    stack: ['Research', 'Vision'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Client Kickoff System',
    description: 'Free, open-source client onboarding and kickoff framework. Streamline project starts.',
    liveUrl: 'https://github.com/sunkara1111/client-kickoff-system-free',
    repoUrl: 'https://github.com/sunkara1111/client-kickoff-system-free',
    stack: ['Open Source', 'Framework'],
    gradient: 'from-emerald-600 to-teal-600',
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Selected Work</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Products shipping to production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all group"
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}>
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.disclaimer && (
                <p className="text-xs text-yellow-400/80 mb-4 italic">
                  ⚠️ Research & paper trading only — not investment advice
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Site
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Repository
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
