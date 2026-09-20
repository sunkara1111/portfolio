'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Frontend',
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'violet',
  },
  {
    title: 'AI & Backend',
    techs: ['OpenAI', 'LangGraph', 'Python', 'Node.js'],
    color: 'cyan',
  },
  {
    title: 'Data & Markets',
    techs: ['yfinance', 'Multi-agent systems', 'Research pipelines'],
    color: 'purple',
  },
  {
    title: 'Infrastructure',
    techs: ['Vercel', 'GitHub Pages', 'Stripe', 'Git'],
    color: 'emerald',
  },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I use to ship products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/5 transition-all"
            >
              <h3 className={`text-xl font-bold mb-4 text-${category.color}-400`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.techs.map((tech) => (
                  <li key={tech} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${category.color}-400`} />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
