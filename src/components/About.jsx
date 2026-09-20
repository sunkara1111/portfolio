import React from 'react'
import { FOUNDER_NAME, FOUNDER_SHORT } from '../data/projects'

const About = () => {
  const facts = [
    { label: 'Name', value: `${FOUNDER_NAME} (${FOUNDER_SHORT})` },
    { label: 'Role', value: 'Automation Engineer' },
    { label: 'Education', value: "Master's, Computer Science" },
    { label: 'University', value: 'Pace University' },
  ]

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="section-kicker mb-4">About</p>
          <h2 className="text-4xl md:text-5xl text-text mb-6 leading-tight">
            Building at the intersection of{' '}
            <span className="text-cyan">automation</span> &amp;{' '}
            <span className="text-purple">AI.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-5">
            I&apos;m {FOUNDER_NAME} ({FOUNDER_SHORT}), an Automation Engineer with a Master&apos;s
            degree in Computer Science from Pace University. I am the founder of Pilot, StatusPass,
            AdForge, DGS AI, AI Fund, Aetherline, and Client Kickoff.
          </p>
          <p className="text-muted leading-relaxed">
            StatusPass is an F-1/CPT/OPT/STEM OPT compliance organizer founded as {FOUNDER_SHORT} —
            not a law firm or DSO. Aetherline is live. No inflated user or subscriber claims live on this site.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {facts.map((fact) => (
            <div key={fact.label} className="neon-panel p-6">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-cyan mb-2">{fact.label}</p>
              <p className="font-medium text-text">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
