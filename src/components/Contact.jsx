import React from 'react'
import { SITE } from '../data/site'
import { GitHubIcon, LinkedInIcon, SocialLinks } from './icons'

const Contact = () => {
  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="glow-orb right-10 top-10 h-72 w-72 bg-series/15" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="series-tag mb-5">Episode finale / Contact</p>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
          Have a process
          <br />
          <span className="text-series">worth automating?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Let&apos;s talk controls, software, and the workflows that should run without you
          watching them. Best reached on LinkedIn, GitHub, or email.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a href={SITE.resume} download={SITE.resumeFileName} className="btn-primary">
            Download Resume
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">
          <a className="hover:text-series" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          {' · '}
          <a className="hover:text-series" href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
      </div>

      <footer className="relative mx-auto mt-20 max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name} · {SITE.title}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}projects.html`}
              className="text-sm text-muted underline-offset-4 hover:text-series hover:underline"
            >
              Live projects
            </a>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
