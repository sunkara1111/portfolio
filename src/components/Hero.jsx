import React from 'react'
import { HERO_STATS, PROJECTS, SITE } from '../data/site'

const featured = [PROJECTS[0], PROJECTS[1], PROJECTS[5]]

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="holo-grid absolute inset-0 opacity-80" />
        <div className="scanlines absolute inset-0" />
        <div className="neon-bar left-[8%] top-0 hidden h-full w-px opacity-70 md:block" />
        <div className="neon-bar-pink right-[11%] top-16 hidden h-[70%] w-px opacity-50 md:block" />
        <div className="glow-orb -left-24 top-16 h-80 w-80 bg-series/25" />
        <div className="glow-orb bottom-0 right-0 h-96 w-96 bg-vibranium/28" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-series">
            {SITE.shortTitle}
          </p>
          <h1 className="font-display text-[3.2rem] leading-[0.88] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            {SITE.firstName}
            <br />
            {SITE.lastName}
            <span className="text-white">.</span>
          </h1>
          <p className="mt-5 font-mono text-sm text-white/70 md:text-base">{SITE.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-xl text-muted">{SITE.summary}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#work" className="btn-primary">
              See My Work
            </a>
            <a href="#contact" className="text-link px-1">
              Let&apos;s talk
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <a href={SITE.resume} download={SITE.resumeFileName} className="hover:text-series">
              {SITE.resumeLabel}
            </a>
            {' · currently working'}
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[540px]">
          <div className="absolute inset-[8%] rounded-full bg-vibranium/15 blur-3xl" />
          <div className="holo-ring absolute inset-[6%] rounded-full animate-ring-spin" />
          <div className="holo-ring absolute inset-[16%] rounded-full animate-ring-spin-rev border-dashed border-violet-400/30" />
          <div className="holo-ring absolute inset-[28%] rounded-full border-series/20" />
          <div className="system-core absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full animate-core-pulse" />

          <div className="hud-panel absolute left-[4%] top-[12%] z-10 w-[42%] p-3 animate-float">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-series">Featured</p>
            <p className="mt-1 font-display text-lg text-white">{featured[0].title}</p>
            <p className="mt-1 text-[11px] text-muted">{featured[0].tags.slice(0, 2).join(' · ')}</p>
          </div>
          <div className="hud-panel absolute right-[2%] top-[28%] z-10 w-[40%] p-3 animate-float [animation-delay:1s]">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-vibranium">Live</p>
            <p className="mt-1 font-display text-lg text-white">{featured[1].title}</p>
            <p className="mt-1 text-[11px] text-muted">{featured[1].tags.slice(0, 2).join(' · ')}</p>
          </div>
          <div className="hud-panel absolute bottom-[14%] left-[18%] z-10 w-[46%] p-3 animate-float [animation-delay:1.8s]">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-royal">Systems</p>
            <p className="mt-1 font-display text-lg text-white">{featured[2].title}</p>
            <p className="mt-1 text-[11px] text-muted">{featured[2].tags.slice(0, 2).join(' · ')}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-6 grid w-full max-w-7xl gap-3 sm:grid-cols-3">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="hud-panel px-5 py-4">
            <p className="font-display text-3xl text-white md:text-4xl">{stat.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
