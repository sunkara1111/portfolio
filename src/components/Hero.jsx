import React from 'react'
import { SITE } from '../data/site'
import PortraitTilt from './PortraitTilt'

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="neon-bar left-[8%] top-0 hidden h-full w-px opacity-70 md:block" />
        <div className="neon-bar-pink right-[12%] top-10 hidden h-[75%] w-[2px] opacity-60 md:block" />
        <div className="glow-orb -left-24 top-24 h-72 w-72 bg-violet-600/30" />
        <div className="glow-orb bottom-10 right-0 h-80 w-80 bg-cyan-400/20" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan">
            {SITE.shortTitle}
          </p>
          <h1 className="font-display text-[3.1rem] leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <span className="text-neon-cyan">{SITE.firstName}</span>
            <br />
            {SITE.lastName}
            <span className="text-neon-cyan">.</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-muted md:text-base">{SITE.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-xl text-muted">{SITE.summary}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#work" className="btn-primary">
              See My Work
            </a>
            <a
              href={SITE.resume}
              download={SITE.resumeFileName}
              className="btn-secondary"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Talk
            </a>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {SITE.resumeLabel} · currently working
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-fuchsia-500/10 to-transparent blur-2xl" />
          <PortraitTilt className="relative mx-auto max-w-[380px] lg:max-w-[440px]">
            <figure className="portrait-frame relative mx-auto aspect-[4/5] overflow-hidden">
              <img
                src={SITE.portrait}
                alt={`${SITE.name}, ${SITE.shortTitle}`}
                width="720"
                height="1280"
                className="h-full w-full object-cover object-[center_18%]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050510] via-[#050510]/40 to-transparent p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon-cyan">
                  Controls · Automation
                </p>
              </figcaption>
            </figure>
          </PortraitTilt>
        </div>
      </div>
    </section>
  )
}

export default Hero
