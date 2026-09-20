import React from 'react'
import { ABOUT_ORBITS, EDUCATION, EXPERIENCE, SITE } from '../data/site'
import PortraitTilt from './PortraitTilt'

const facts = [
  { label: 'Current role', value: `${EXPERIENCE[0].role} · ${EXPERIENCE[0].company}` },
  { label: 'Education', value: SITE.education },
  { label: 'University', value: SITE.university },
  { label: 'Focus', value: 'OT, SCADA, and GxP / GMP automation' },
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
            I&apos;m {SITE.name}, an Automation Engineer at Jubilant HollisterStier in Spokane,
            WA, with an {SITE.education} from {SITE.university}. I work across industrial
            automation, OT platforms, and software architecture in regulated GxP / GMP
            environments.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            The work lives between plant-floor controls and modern software: PLC / DCS
            architectures, SCADA (Ignition, AVEVA), MES transactions, and interfaces operators
            can actually use.
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
          <PortraitTilt>
            <figure className="portrait-frame relative mx-auto aspect-[4/5] overflow-hidden">
              <img
                src={SITE.portraitAbout}
                alt={`${SITE.name} on the Brooklyn Bridge`}
                width="1206"
                height="2144"
                className="h-full w-full object-cover object-[center_18%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050510] to-transparent px-6 py-6 text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                  Developer · Controls · Automation
                </p>
              </div>
            </figure>
          </PortraitTilt>
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

      <div className="mx-auto mt-16 max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan">
          Experience
        </p>
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.dates}`} className="neon-card p-6">
              <div className="flex flex-wrap items-center gap-2">
                {job.current && (
                  <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neon-cyan">
                    Current
                  </span>
                )}
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {job.dates}
                </p>
              </div>
              <p className="mt-2 font-display text-xl text-white">{job.role}</p>
              <p className="mt-1 text-sm text-muted">
                {job.company} · {job.location}
              </p>
              {job.highlights && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-12 max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon-purple">
          Education
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {EDUCATION.map((item) => (
            <li key={item.credential} className="neon-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">{item.dates}</p>
              <p className="mt-2 font-display text-xl text-white">{item.credential}</p>
              <p className="mt-1 text-sm text-muted">{item.school}</p>
              {item.detail && <p className="mt-1 text-sm text-muted">{item.detail}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
