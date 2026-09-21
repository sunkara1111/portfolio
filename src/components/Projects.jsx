import React, { useEffect, useState } from 'react'
import { PROJECTS } from '../data/site'
import { GitHubIcon } from './icons'

const StatusBadge = ({ project }) => (
  <div className="flex flex-wrap items-center gap-2">
    <span className="rounded-full border border-series/40 bg-series/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-series">
      {project.category}
    </span>
    {project.status === 'live' && (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-series" />
        Live
      </span>
    )}
    {project.disclaimer && (
      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
        {project.disclaimer}
      </span>
    )}
  </div>
)

const ProjectActions = ({ project }) => (
  <div className="flex flex-wrap gap-2">
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary px-4 py-2 text-xs"
      >
        View Live
      </a>
    )}
    {project.extraLinks?.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost px-4 py-2 text-xs"
      >
        {link.label}
      </a>
    ))}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost inline-flex items-center gap-2 px-4 py-2 text-xs"
      >
        <GitHubIcon className="h-4 w-4" />
        Source
      </a>
    )}
  </div>
)

export const ProjectCard = ({ project, featured = false }) => (
  <article className={`series-card project-card-3d flex h-full flex-col p-6 ${featured ? 'shadow-series' : ''}`}>
    <div className="mb-5 flex items-start justify-between gap-3">
      <StatusBadge project={project} />
      <span className="series-tag">{project.episode} / 07</span>
    </div>
    <h3 className="font-display text-2xl text-white">{project.title}</h3>
    <p className="mb-5 mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
    <div className="mb-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
    <ProjectActions project={project} />
  </article>
)

const VisualCard = ({ project, featured }) => (
  <article className={`series-card project-card-3d overflow-hidden p-6 ${featured ? 'shadow-series' : ''}`}>
    <div className="mb-4 flex items-start justify-between gap-3">
      <StatusBadge project={project} />
      <span className="series-tag">{project.episode} / 07</span>
    </div>
    <h3 className="font-display text-2xl text-white">{project.title}</h3>
    <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  </article>
)

const Coverflow = ({ projects }) => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = projects.length
  const current = projects[active]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || paused) return undefined
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % count)
    }, 5200)
    return () => window.clearInterval(id)
  }, [count, paused, active])

  const offsetOf = (index) => {
    let diff = index - active
    if (diff > count / 2) diff -= count
    if (diff < -count / 2) diff += count
    return diff
  }

  return (
    <div
      className="hidden md:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto h-[340px] max-w-5xl" style={{ perspective: '1600px' }}>
        {projects.map((project, index) => {
          const offset = offsetOf(index)
          const abs = Math.abs(offset)
          const visible = abs <= 2
          return (
            <div
              key={project.id}
              role="button"
              tabIndex={visible ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActive(index)
                }
              }}
              aria-label={`Show ${project.title}`}
              aria-current={offset === 0 ? 'true' : undefined}
              className="absolute left-1/2 top-4 w-[min(86%,300px)] origin-center cursor-pointer text-left transition-transform duration-500"
              style={{
                transform: `translateX(-50%) translateX(${offset * 228}px) rotateY(${offset * -32}deg) translateZ(${offset === 0 ? 110 : -70}px) scale(${offset === 0 ? 1.04 : 0.86})`,
                zIndex: 20 - abs,
                opacity: visible ? (abs === 2 ? 0.4 : 1) : 0,
                pointerEvents: visible ? 'auto' : 'none',
              }}
            >
              <VisualCard project={project} featured={offset === 0} />
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-4 max-w-2xl text-center">
        <p className="text-muted">{current.description}</p>
        <div className="mt-5 flex justify-center">
          <ProjectActions project={current} />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous project"
          className="social-icon"
          onClick={() => setActive((n) => (n - 1 + count) % count)}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={project.title}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? 'w-8 bg-series' : 'w-2.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next project"
          className="social-icon"
          onClick={() => setActive((n) => (n + 1) % count)}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="work" className="relative overflow-x-clip px-5 py-24 md:px-8 md:py-32">
      <div className="watermark">
        <span className="watermark-word">ORIGINATE</span>
      </div>
      <div className="glow-orb left-1/2 top-10 h-72 w-72 -translate-x-1/2 bg-series/12" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="series-tag mb-5">Episode 04 / Original work</p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            Original
            <span className="text-series">.</span>
          </h2>
        </div>

        <Coverflow projects={PROJECTS} />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
          {PROJECTS.map((project) => (
            <div key={project.id} className="w-[88%] shrink-0 snap-center">
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>

        <nav aria-label="Live projects" className="mx-auto mt-12 max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-muted">
            All live projects
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {PROJECTS.map((project) => (
              <li key={project.id}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 underline-offset-4 transition-colors hover:text-series hover:underline"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <a
              href={`${import.meta.env.BASE_URL}projects.html`}
              className="text-sm text-series underline-offset-4 hover:underline"
            >
              Full project directory
            </a>
          </p>
        </nav>
      </div>
    </section>
  )
}

export default Projects
