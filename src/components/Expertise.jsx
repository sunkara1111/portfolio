import React from 'react'
import { EXPERIENCE, TECH_STACK } from '../data/site'

const Expertise = () => {
  return (
    <section id="expertise" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb left-1/2 top-10 h-72 w-72 -translate-x-1/2 bg-series/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <p className="series-tag mb-5">Episode 02 / Core competencies</p>
        <h2 className="max-w-5xl font-display text-5xl leading-[0.88] text-white sm:text-7xl md:text-8xl">
          Director&apos;s cut
          <br />
          <span className="text-series">Technical capabilities.</span>
        </h2>
        <p className="mt-6 max-w-2xl font-mono text-sm text-muted md:text-[15px]">
          Equipped with industry-grade instruments for robust, scalable control and
          software systems — from plant-floor PLCs to cloud-deployed products.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {TECH_STACK.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>

        <ul className="mt-14 grid gap-4 lg:grid-cols-2">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.dates}`} className="series-card p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-2">
                {job.current && (
                  <span className="rounded-sm border border-series px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-series">
                    Current
                  </span>
                )}
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                  {job.dates}
                </p>
              </div>
              <p className="mt-3 font-display text-3xl text-white">{job.role}</p>
              <p className="mt-1 font-mono text-sm text-muted">
                {job.company} · {job.location}
              </p>
              {job.highlights && (
                <ul className="mt-4 space-y-2 font-mono text-sm leading-relaxed text-muted">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Expertise
