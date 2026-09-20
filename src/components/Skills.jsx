import React from 'react'

const skills = [
  {
    title: 'Automation mindset',
    description: 'I map repetitive work and design systems that handle it reliably.',
  },
  {
    title: 'Practical engineering',
    description: 'Tools are built for real environments — not demo-only slides.',
  },
  {
    title: 'Controls & signals',
    description: 'Industrial monitoring, alarm narratives, and compliance logging (Aetherline).',
  },
  {
    title: 'AI-assisted tools',
    description: 'Assistive drafts and research desks people can edit before they act.',
  },
  {
    title: 'Security awareness',
    description: 'No password theater. Paper trading and compliance copy stay explicit.',
  },
  {
    title: 'Computer Science',
    description: "Master's degree, Pace University.",
  },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="section-kicker mb-4">Skills</p>
        <h2 className="text-4xl md:text-5xl text-text mb-12">What I bring online</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <article key={skill.title} className="neon-panel p-6 hover:shadow-glow transition-shadow">
              <h3 className="text-xl text-cyan mb-3">{skill.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
