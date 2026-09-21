import React from 'react'
import { ABOUT_ORBITS, EDUCATION, EXPERIENCE, SITE } from '../data/site'
import CinematicPortrait from './CinematicPortrait'

const facts = [
  { label: 'Current role', value: `${EXPERIENCE[0].role} · ${EXPERIENCE[0].company}` },
  { label: 'Education', value: SITE.education },
  { label: 'University', value: SITE.university },
  { label: 'Focus', value: 'OT, SCADA, and GxP / GMP automation' },
]

const About = () => {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb right-0 top-20 h-72 w-72 bg-vibranium/14" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-vibranium">
            About
          </p>
          <h2 className="font-display text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl">
            Building at the intersection of{' '}
            <span className="italic text-white">control</span> &{' '}
            <span className="italic text-series">intelligence</span>.
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

        <div className="relative mx-auto w-full max-w-md sm:px-10">
          {ABOUT_ORBITS.map((orbit) => (
            <span
              key={orbit.label}
              className={`orbit-chip absolute z-10 ${orbit.className}`}
            >
              {orbit.label}
            </span>
          ))}
          <CinematicPortrait
            src={SITE.portraitAbout}
            alt={`${SITE.name} in a black overcoat at night`}
            crop="about"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="hud-panel p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{fact.label}</p>
            <p className="mt-2 text-sm font-medium text-white">{fact.value}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-series">
          Experience
        </p>
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.dates}`} className="neon-card p-6">
              <div className="flex flex-wrap items-center gap-2">
                {job.current && (
                  <span className="rounded-full border border-series/40 bg-series/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-series">
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
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-vibranium">
          Education
        </p>
        <ul className="mt-6 grid gap-4">
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
