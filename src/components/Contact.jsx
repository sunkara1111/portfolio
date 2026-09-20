import React from 'react'
import { projects, FOUNDER_NAME, FOUNDER_SHORT, FOUNDER_ROLE_LONG, PORTFOLIO_URL } from '../data/projects'

const ProofStrip = () => {
  const items = [
    ...projects.map((project) => project.title),
    `${FOUNDER_NAME} · ${FOUNDER_SHORT}`,
    'Pace University',
    'Automation Engineer',
  ]
  const loop = [...items, ...items]

  return (
    <div className="relative border-y border-cyan/15 bg-navy/60 overflow-hidden py-4" aria-label="Live brands">
      <div className="marquee-track gap-10 px-6">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="font-hud text-xs tracking-[0.35em] uppercase text-cyan/80 whitespace-nowrap">
            {item}
            <span className="text-purple mx-6">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

const Contact = () => {
  const directoryHref = `${import.meta.env.BASE_URL}projects.html`

  return (
    <section id="contact" className="relative py-24 px-6">
      <ProofStrip />
      <div className="max-w-4xl mx-auto text-center pt-16">
        <p className="section-kicker mb-4">Contact</p>
        <h2 className="text-4xl md:text-5xl text-text mb-6">Have a workflow worth improving?</h2>
        <p className="text-muted mb-10">
          Talk to {FOUNDER_NAME} ({FOUNDER_SHORT}) — {FOUNDER_ROLE_LONG}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="https://www.linkedin.com/in/dineshgopisunkara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Let&apos;s talk
          </a>
          <a
            href="https://www.linkedin.com/in/dineshgopisunkara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sunkara1111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
        <nav aria-label="Live Sunkara projects" className="mb-12">
          <p className="section-kicker mb-4">Live projects</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-cyan"
                >
                  {project.title}
                </a>
              </li>
            ))}
            <li>
              <a href={PORTFOLIO_URL} className="text-muted hover:text-cyan">Portfolio</a>
            </li>
          </ul>
          <p className="mt-4">
            <a href={directoryHref} className="font-mono text-xs text-cyan">
              Full URL directory
            </a>
          </p>
        </nav>
        <p className="text-xs text-muted border-t border-cyan/15 pt-8">
          © {new Date().getFullYear()} {FOUNDER_NAME} ({FOUNDER_SHORT}) · {FOUNDER_ROLE_LONG}
        </p>
      </div>
    </section>
  )
}

export default Contact
