import React from 'react'
import { SERIES, SITE } from '../data/site'
import PortraitTilt from './PortraitTilt'

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 6h16v12H4V6zm0 0 8 7 8-7" />
  </svg>
)

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb right-[8%] top-24 h-80 w-80 bg-vibranium/30" />
        <div className="glow-orb -left-16 bottom-10 h-64 w-64 bg-series/15" />
        <div className="glow-orb left-1/3 top-10 h-56 w-56 bg-royal/25" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-series bg-series/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-series">
              {SERIES.badgeTop}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/75">
              {SERIES.badge}
            </span>
          </div>
          <h1 className="font-display text-[3.6rem] leading-[0.82] text-white sm:text-7xl md:text-8xl lg:text-[6.4rem]">
            {SERIES.wordmark}
            <br />
            <span className="text-series">{SERIES.roleLine}</span>
          </h1>
          <div className="mt-7 flex flex-wrap gap-2">
            {SERIES.chips.map((chip) => (
              <span key={chip} className="tech-pill">
                {chip}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-white/70 md:text-[15px]">
            {SITE.tagline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#work" className="btn-outline">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              <MailIcon />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-8 rounded-[2rem] bg-vibranium/25 blur-3xl" />
          <div className="absolute -inset-4 rounded-[2rem] bg-series/10 blur-2xl" />
          <PortraitTilt className="relative mx-auto max-w-[340px] lg:max-w-[380px]">
            <figure className="portrait-frame mx-auto aspect-[3/4]">
              <p className="absolute left-4 top-4 z-10 rounded-sm border border-series bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-series">
                {SERIES.featureLabel}
              </p>
              <img
                src={SITE.portrait}
                alt={`${SITE.name}, ${SITE.shortTitle}`}
                width="1206"
                height="2144"
                className="h-full w-full origin-[center_12%] scale-[1.7] object-cover object-[center_12%]"
              />
            </figure>
          </PortraitTilt>
        </div>
      </div>

      <div className="absolute bottom-6 left-5 right-5 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35 md:left-8 md:right-8">
        <p>{SERIES.engineered}</p>
        <p>{SERIES.version}</p>
      </div>
    </section>
  )
}

export default Hero
