import React from 'react'
import { SERIES, SITE } from '../data/site'
import PortraitTilt from './PortraitTilt'

const PlayIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M4 2.7v10.6L13.2 8 4 2.7z" />
  </svg>
)

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb right-[8%] top-24 h-80 w-80 bg-series/25" />
        <div className="glow-orb -left-16 bottom-10 h-64 w-64 bg-series/10" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85">
            {SERIES.badge}
          </p>
          <h1 className="font-display text-[3.2rem] font-extrabold uppercase leading-[0.86] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            {SERIES.wordmark}
            <br />
            <span className="text-series">{SERIES.roleLine}</span>
          </h1>
          <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.18em] text-white/70">
            {SERIES.chips.join('  •  ')}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {SITE.tagline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#work" className="btn-primary">
              <PlayIcon />
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-8 rounded-[2rem] bg-series/20 blur-3xl" />
          <PortraitTilt className="relative mx-auto max-w-[340px] lg:max-w-[380px]">
            <figure className="portrait-frame mx-auto aspect-[3/4]">
              <img
                src={SITE.portrait}
                alt={`${SITE.name}, ${SITE.shortTitle}`}
                width="1206"
                height="2144"
                className="h-full w-full object-cover object-[center_10%]"
              />
            </figure>
          </PortraitTilt>
        </div>
      </div>

      <p className="absolute bottom-6 left-5 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35 md:left-8">
        {SERIES.engineered}
      </p>
    </section>
  )
}

export default Hero
