import React from 'react'
import { liveCount, projects } from '../data/projects'
import { ConnectButtons } from './SocialLinks'

const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square">
      <div className="absolute inset-[8%] rounded-[2rem] neon-border bg-gradient-to-br from-purple/20 via-background to-cyan/10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[70%] rounded-full border border-cyan/20 animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[48%] w-[48%] rounded-full border border-purple/30" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <span className="font-heading text-6xl md:text-7xl text-cyan drop-shadow-[0_0_24px_rgba(0,229,255,0.7)]">
          DS
        </span>
        <span className="font-mono text-xs tracking-[0.4em] text-muted mt-3">DINESH S</span>
      </div>
      <div className="absolute -left-2 top-[18%] h-24 w-1.5 rounded-full bg-cyan shadow-glow" />
      <div className="absolute -right-1 top-[30%] h-32 w-1.5 rounded-full bg-purple shadow-glow-purple" />
      {projects.slice(0, 4).map((project, index) => (
        <span
          key={project.id}
          className="absolute hidden lg:inline-block font-mono text-[10px] tracking-widest uppercase text-cyan bg-background/80 neon-border px-3 py-1 rounded-full"
          style={{
            top: `${12 + index * 18}%`,
            [index % 2 === 0 ? 'right' : 'left']: '-4%',
          }}
        >
          {project.title}
        </span>
      ))}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-hud text-[10px] tracking-[0.4em] text-cyan">
        {String(liveCount).padStart(2, '0')} LIVE
      </p>
    </div>
  )
}

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-kicker mb-5">DINESH S · Automation Engineer</p>
          <h1 className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            <span className="block whitespace-nowrap">Dinesh Gopi</span>
            <span className="block whitespace-nowrap">Sunkara</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl">
            Master&apos;s in Computer Science, Pace University. I design practical automation
            and AI-assisted tools — founder of Pilot, StatusPass, AdForge, DGS AI, AI Fund,
            Aetherline, and Client Kickoff.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <ConnectButtons />
            <a href="#work" className="btn-secondary text-center">
              View work
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero
