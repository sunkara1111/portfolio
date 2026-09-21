import React from 'react'
import { HERO_STATS, PROJECTS, SITE } from '../data/site'
import CinematicPortrait from './CinematicPortrait'

const featured = [PROJECTS[0], PROJECTS[1], PROJECTS[5]]

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="holo-grid absolute inset-0 opacity-70" />
        <div className="energy-field absolute inset-0" />
        <div className="scanlines absolute inset-0" />
        <div className="neon-bar left-[7%] top-0 hidden h-full w-[3px] opacity-90 md:block" />
        <div className="neon-bar-pink right-[9%] top-10 hidden h-[78%] w-[3px] opacity-80 md:block" />
        <div className="glow-orb -left-24 top-10 h-80 w-80 bg-series/28" />
        <div className="glow-orb bottom-0 right-0 h-[28rem] w-[28rem] bg-vibranium/30" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
        <div className="relative z-20">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-series">
            {SITE.shortTitle}
          </p>
          <h1 className="font-display text-[3.2rem] leading-[0.86] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            {SITE.firstName}
            <br />
            {SITE.lastName}
            <span className="text-series">.</span>
          </h1>
          <p className="mt-5 font-mono text-sm text-white/70 md:text-base">{SITE.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            {SITE.tagline}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#work" className="btn-primary uppercase tracking-[0.14em]">
              View my work
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

        <div className="relative mx-auto w-full max-w-[560px]">
          <CinematicPortrait src={SITE.portrait} alt={`${SITE.name} — cinematic portrait`} />

          <div className="hud-panel absolute -left-3 top-[4%] z-10 hidden w-[42%] p-3 animate-float sm:block sm:-left-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-series">Featured</p>
            <p className="mt-1 font-display text-lg text-white">{featured[0].title}</p>
            <p className="mt-1 text-[11px] text-muted">{featured[0].tags.slice(0, 2).join(' · ')}</p>
          </div>
          <div className="hud-panel absolute -right-2 top-[22%] z-10 hidden w-[38%] p-3 animate-float [animation-delay:1s] sm:block sm:-right-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-vibranium">Live</p>
            <p className="mt-1 font-display text-lg text-white">{featured[1].title}</p>
            <p className="mt-1 text-[11px] text-muted">{featured[1].tags.slice(0, 2).join(' · ')}</p>
          </div>
          <div className="hud-panel absolute bottom-[4%] left-0 z-10 w-[48%] p-3 animate-float [animation-delay:1.8s] sm:-left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-royal">Systems</p>
            <p className="mt-1 font-display text-lg text-white">{featured[2].title}</p>
            <p className="mt-1 text-[11px] text-muted">{featured[2].tags.slice(0, 2).join(' · ')}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 grid w-full max-w-7xl gap-3 sm:grid-cols-3">
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
