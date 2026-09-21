import React from 'react'
import { SKILLS } from '../data/site'

const Skills = () => {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="glow-orb -left-10 bottom-0 h-64 w-64 bg-series/15" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-muted">Capabilities</p>
          <h2 className="font-display text-5xl text-white md:text-7xl">
            My Toolkit<span className="text-white">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Industrial controls on one side, software and AI-assisted tooling on the other —
            connected so the plant and the product actually talk.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div key={group.category} className="neon-card p-7">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-vibranium">
                {group.category}
              </p>
              <ul className="mt-6 space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-display text-xl text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
