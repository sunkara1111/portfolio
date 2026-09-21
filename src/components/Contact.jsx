import React, { useState } from 'react'
import { SITE } from '../data/site'
import { GitHubIcon, LinkedInIcon, SocialLinks } from './icons'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="glow-orb right-10 top-10 h-72 w-72 bg-series/15" />
      <div className="relative mx-auto max-w-3xl">
        <p className="series-tag mb-5">Episode finale / Contact</p>
        <h2 className="font-display text-5xl leading-[0.88] text-white sm:text-7xl">
          Have a process
          <br />
          <span className="text-series">worth automating?</span>
        </h2>
        <p className="mt-6 max-w-2xl font-mono text-sm text-muted md:text-[15px]">
          Terminal channel open. Send a brief, or reach Dineshgopi Sunkara on LinkedIn and GitHub.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 border border-series bg-black/80 p-5 md:p-8"
          aria-label="Contact terminal"
        >
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-series">
            {'>'} contact_terminal
          </p>
          <label className="mb-4 block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">Name_</span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="terminal-field"
              placeholder="your_name"
              autoComplete="name"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">Email_</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="terminal-field"
              placeholder="you@domain"
              autoComplete="email"
            />
          </label>
          <label className="mb-6 block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">Message_</span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="terminal-field resize-y"
              placeholder="payload..."
            />
          </label>
          <button type="submit" className="btn-submit">
            SUBMIT_DATA_&gt;&gt;
          </button>
          {sent && (
            <p className="mt-4 font-mono text-xs text-white/60">mailto client opened // {SITE.email}</p>
          )}
        </form>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={SITE.resume} download={SITE.resumeFileName} className="btn-outline">
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
        <p className="mt-6 font-mono text-sm text-muted">
          <a className="hover:text-series" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          {' · '}
          <a className="hover:text-series" href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
      </div>

      <footer className="relative mx-auto mt-20 max-w-7xl border-t border-series/30 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name} · {SITE.title}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}projects.html`}
              className="font-mono text-sm text-muted underline-offset-4 hover:text-series hover:underline"
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
