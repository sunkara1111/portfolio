import React, { useEffect, useState } from 'react'
import { PROJECTS } from '../data/site'
import { GitHubIcon } from './icons'

const ProjectArt = ({ art, accent }) => {
  const stroke = 'rgba(255,255,255,0.85)'
  return (
    <div className={`project-gloss relative h-44 overflow-hidden bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-0 bg-black/35" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 176" fill="none" aria-hidden="true">
        {art === 'wave' && (
          <path
            d="M0 118 C40 78, 80 158, 120 98 S200 48, 240 88 S300 138, 320 78"
            stroke={stroke}
            strokeWidth="3"
          />
        )}
        {art === 'bars' &&
          [40, 80, 120, 160, 200, 240, 280].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={28 + (i % 4) * 14}
              width="18"
              height={128 - (i % 4) * 14}
              rx="4"
              fill="rgba(255,255,255,0.28)"
            />
          ))}
        {art === 'nodes' && (
          <>
            <circle cx="70" cy="88" r="8" fill={stroke} />
            <circle cx="160" cy="50" r="8" fill={stroke} />
            <circle cx="160" cy="126" r="8" fill={stroke} />
            <circle cx="250" cy="88" r="8" fill={stroke} />
            <path d="M70 88 L160 50 L250 88 L160 126 Z" stroke={stroke} strokeWidth="2" />
          </>
        )}
        {art === 'orbit' && (
          <>
            <ellipse cx="160" cy="88" rx="110" ry="46" stroke={stroke} strokeWidth="2" />
            <ellipse cx="160" cy="88" rx="70" ry="28" stroke="rgba(255,255,255,0.5)" />
            <circle cx="160" cy="88" r="10" fill={stroke} />
            <circle cx="250" cy="60" r="6" fill={stroke} />
          </>
        )}
        {art === 'grid' &&
          Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 10 }).map((__, c) => (
              <circle
                key={`${r}-${c}`}
                cx={24 + c * 30}
                cy={24 + r * 26}
                r={r === 2 && c === 4 ? 5 : 2}
                fill="rgba(255,255,255,0.7)"
              />
            ))
          )}
        {art === 'pulse' && (
          <>
            <path d="M20 96 H90 L110 44 L140 140 L170 76 L200 96 H300" stroke={stroke} strokeWidth="3" />
            <circle cx="140" cy="140" r="5" fill={stroke} />
          </>
        )}
      </svg>
    </div>
  )
}

const StatusBadge = ({ project }) => (
  <div className="flex flex-wrap items-center gap-2">
    {project.status === 'live' && (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-series/40 bg-series/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-series">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-series" />
        Live
      </span>
    )}
    {project.status === 'in-development' && (
      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
        In development
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
        className="btn-primary px-4 py-2 text-sm"
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
        className="btn-secondary px-4 py-2 text-sm"
      >
        {link.label}
      </a>
    ))}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary inline-flex items-center gap-2 px-4 py-2 text-sm"
      >
        <GitHubIcon className="h-4 w-4" />
        Source
      </a>
    )}
  </div>
)

export const ProjectCard = ({ project, featured = false }) => (
  <article className={`neon-card project-card-3d flex h-full flex-col overflow-hidden ${featured ? 'shadow-neon' : ''}`}>
    <ProjectArt art={project.art} accent={project.accent} />
    <div className="flex flex-1 flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl text-white">{project.title}</h3>
        <StatusBadge project={project} />
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      {project.upcomingHost && (
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
          Custom domain soon: {project.upcomingHost}
        </p>
      )}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <ProjectActions project={project} />
    </div>
  </article>
)

const VisualCard = ({ project, featured }) => (
  <article className={`neon-card project-card-3d overflow-hidden ${featured ? 'shadow-neon' : ''}`}>
    <ProjectArt art={project.art} accent={project.accent} />
    <div className="p-5">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl text-white">{project.title}</h3>
        <StatusBadge project={project} />
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
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
      <div className="relative mx-auto h-[380px] max-w-5xl perspective-[1600px]">
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
                transform: `translateX(-50%) translateX(${offset * 228}px) rotateY(${offset * -38}deg) translateZ(${offset === 0 ? 110 : -70}px) scale(${offset === 0 ? 1.04 : 0.86})`,
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
        {current.upcomingHost && (
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
            Custom domain soon: {current.upcomingHost}
          </p>
        )}
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
      <div className="glow-orb left-1/2 top-10 h-72 w-72 -translate-x-1/2 bg-vibranium/12" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-muted">Selected work</p>
          <h2 className="font-display text-5xl italic text-white md:text-7xl">built.</h2>
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
