import React from 'react'
import { ABOUT_ORBITS, SITE } from '../data/site'

const facts = [
  { label: 'Role', value: SITE.title },
  { label: 'Education', value: SITE.education },
  { label: 'University', value: SITE.university },
  { label: 'Focus', value: 'Industrial controls, automation & AI-assisted tools' },
]

const About = () => {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-neon-purple">
            About
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Building at the intersection of{' '}
            <span className="italic text-neon-cyan">control</span> &{' '}
            <span className="italic text-neon-purple">intelligence</span>.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m {SITE.name}, a {SITE.title} with a {SITE.education} from {SITE.university}.
            I build practical automation and AI-assisted tools that help people and businesses
            work more efficiently — without losing the reliability industrial systems demand.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            The work lives between plant-floor controls and modern software: PLC logic, SCADA
            visibility, workflow automation, and interfaces operators can actually use.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          {ABOUT_ORBITS.map((orbit) => (
            <span
              key={orbit.label}
              className={`orbit-chip absolute z-10 ${orbit.className}`}
            >
              {orbit.label}
            </span>
          ))}
          <figure className="portrait-frame relative mx-auto aspect-[4/5] overflow-hidden">
            <img
              src={SITE.portrait}
              alt=""
              width="460"
              height="575"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050510] to-transparent px-6 py-6 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                Developer · Controls · Automation
              </p>
            </div>
          </figure>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="neon-card p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{fact.label}</p>
            <p className="mt-2 text-sm font-medium text-white">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
