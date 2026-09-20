'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Research & Strategy',
    description: 'Deep dive into the problem space. Understand users, markets, and constraints.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Rapid Prototyping',
    description: 'Build fast, test assumptions, iterate. Ship MVPs that prove value early.',
    icon: '⚡',
  },
  {
    number: '03',
    title: 'Production Polish',
    description: 'Scale what works. Refine UX, optimize performance, prepare for growth.',
    icon: '✨',
  },
];

export default function HowIBuild() {
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
            <span className="gradient-text">How I Build</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to production — a founder&apos;s approach to shipping
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 h-full hover:bg-white/5 transition-all">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-4xl font-bold text-violet-400/30 mb-2">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-600" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
