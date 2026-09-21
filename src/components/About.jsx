import React from 'react'
import { EDUCATION, EXPERIENCE, SITE } from '../data/site'

const About = () => {
  const current = EXPERIENCE[0]

  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="watermark">
        <span className="watermark-word">ORIGINATE</span>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <p className="series-tag mb-5">Episode 01 / About</p>
        <h2 className="max-w-4xl font-display text-5xl leading-[0.88] text-white sm:text-7xl md:text-8xl">
          Episode synopsis
          <br />
          <span className="text-white">Origin </span>
          <span className="text-series">&amp; Vision.</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="series-card p-7 md:p-9">
            <p className="series-tag">Biography</p>
            <p className="mt-5 font-mono text-sm leading-relaxed text-white/80 md:text-[15px]">
              I&apos;m {SITE.name}, an Automation Engineer at {current.company} in Spokane, WA,
              with an {SITE.education} from {SITE.university}. I work across industrial
              automation, OT platforms, and software architecture in regulated GxP / GMP
              environments.
            </p>
            <p className="mt-4 font-mono text-sm leading-relaxed text-muted">
              The work lives between plant-floor controls and modern software: PLC / DCS
              architectures, SCADA (Ignition, AVEVA), MES transactions, and interfaces
              operators can actually use.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Current role</dt>
                <dd className="mt-1 font-mono text-sm text-white">{current.role} · {current.company}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Education</dt>
                <dd className="mt-1 font-mono text-sm text-white">{SITE.education} · {SITE.university}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Focus</dt>
                <dd className="mt-1 font-mono text-sm text-white">OT, SCADA, and GxP / GMP automation</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Links</dt>
                <dd className="mt-1 font-mono text-sm text-white">
                  <a className="hover:text-series" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {' · '}
                  <a className="hover:text-series" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </dd>
              </div>
            </dl>
          </article>

          <article className="series-card p-7 md:p-9">
            <p className="series-tag">Episode notes</p>
            {EDUCATION.map((item) => (
              <div key={item.credential} className="mt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">{item.dates}</p>
                <p className="mt-2 font-display text-3xl text-white">{item.credential}</p>
                <p className="mt-1 font-mono text-sm text-muted">{item.school}</p>
                {item.detail && <p className="mt-1 font-mono text-sm text-muted">{item.detail}</p>}
              </div>
            ))}
            <p className="mt-8 font-mono text-sm leading-relaxed text-muted">
              Career seasons run from industrial automation training through software
              engineering and into pharmaceutical fill-finish controls — 2019 to now.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
