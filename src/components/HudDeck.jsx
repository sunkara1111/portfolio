import React from 'react'
import { liveCount, projects } from '../data/projects'

const HudDeck = () => {
  const bars = projects.map((_, index) => 28 + index * 8)

  return (
    <section className="relative px-6 pb-20" aria-label="Systems deck">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
        <article className="neon-panel p-6">
          <p className="section-kicker mb-4">Projects</p>
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.id} className="flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hud text-sm text-text hover:text-cyan transition-colors"
                >
                  {project.title}
                </a>
                <span className="flex items-center gap-2 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-widest uppercase text-muted hover:text-cyan"
                    >
                      Repo
                    </a>
                  )}
                  <span className="font-mono text-[10px] tracking-widest uppercase text-cyan">Live</span>
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="neon-panel p-6">
          <p className="section-kicker mb-4">Currently building</p>
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.id} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-1 inline-block h-3 w-3 rounded-sm bg-cyan shadow-glow" aria-hidden="true" />
                <span>
                  <span className="text-text">{project.title}</span>
                  {' — '}
                  {project.blurb}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-[11px] text-muted">
            Checklist is shipped product only. No unreleased roadmap items.
          </p>
        </article>

        <article className="neon-panel p-6">
          <p className="section-kicker mb-2">Signal</p>
          <p className="font-heading text-5xl text-cyan">{liveCount}</p>
          <p className="font-hud text-xs tracking-[0.3em] uppercase text-muted mb-6">Live products</p>
          <svg viewBox="0 0 280 90" className="w-full h-24" role="img" aria-label={`${liveCount} live products`}>
            <polyline
              fill="none"
              stroke="#00e5ff"
              strokeWidth="2"
              points={bars.map((h, i) => `${20 + i * 38},${88 - h}`).join(' ')}
            />
            {bars.map((h, i) => (
              <rect
                key={projects[i].id}
                x={12 + i * 38}
                y={88 - h}
                width="16"
                height={h}
                rx="2"
                fill="url(#barFill)"
                opacity="0.85"
              />
            ))}
            <defs>
              <linearGradient id="barFill" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#b56bff" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
          </svg>
          <p className="font-mono text-[11px] text-muted mt-2">
            Count of live tools on this page — not users, revenue, or subscribers.
          </p>
        </article>
      </div>
    </section>
  )
}

export default HudDeck
