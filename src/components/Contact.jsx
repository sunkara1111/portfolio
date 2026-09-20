import React from 'react'
import { SITE } from '../data/site'
import { GitHubIcon, LinkedInIcon, SocialLinks } from './icons'

const Contact = () => {
  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="glow-orb right-10 top-10 h-72 w-72 bg-violet-600/20" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan">
          Contact
        </p>
        <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Have a process worth automating?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Let&apos;s talk controls, software, and the workflows that should run without you
          watching them. Best reached on LinkedIn or GitHub.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>

      <footer className="relative mx-auto mt-20 max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name} · {SITE.title}
          </p>
          <SocialLinks />
        </div>
      </footer>
    </section>
  )
}

export default Contact
