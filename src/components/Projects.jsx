import React from 'react'
import { PROJECTS } from '../data/site'
import { GitHubIcon } from './icons'

const StatusBadge = ({ project }) => (
  <div className="flex flex-wrap items-center gap-2">
    <span className="rounded-sm border border-series px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-series">
      {project.category}
    </span>
    {project.status === 'live' && (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-white/70">
        <span className="h-1.5 w-1.5 rounded-full bg-series" />
        Live
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
        className="btn-outline px-4 py-2 text-[10px]"
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
        className="btn-ghost px-4 py-2 text-[10px]"
      >
        {link.label}
      </a>
    ))}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost inline-flex items-center gap-2 px-4 py-2 text-[10px]"
      >
        <GitHubIcon className="h-4 w-4" />
        Source
      </a>
    )}
  </div>
)

export const ProjectCard = ({ project }) => (
  <article className="series-card flex h-full flex-col p-6">
    <div className="mb-5 flex items-start justify-between gap-3">
      <StatusBadge project={project} />
      <span className="series-tag">SLOT_{project.episode}</span>
    </div>
    <h3 className="font-display text-3xl text-white">{project.title}</h3>
    <p className="mb-5 mt-3 flex-1 font-mono text-sm leading-relaxed text-muted">{project.description}</p>
    {project.disclaimer && (
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">{project.disclaimer}</p>
    )}
    <div className="mb-5 flex flex-wrap gap-2 border-t border-series/30 pt-4">
      {project.tags.map((tag) => (
        <span key={tag} className="tech-pill">
          {tag}
        </span>
      ))}
    </div>
    <ProjectActions project={project} />
  </article>
)

const Projects = () => {
  return (
    <section id="work" className="relative overflow-x-clip px-5 py-24 md:px-8 md:py-32">
      <div className="watermark">
        <span className="watermark-word">ARCHIVE</span>
      </div>
      <div className="glow-orb left-1/2 top-10 h-72 w-72 -translate-x-1/2 bg-series/12" />
      <div className="relative mx-auto max-w-7xl">
        <p className="series-tag mb-5">Episode 03 / Showcase</p>
        <div className="mb-12 border border-series/70 bg-black/60 px-5 py-6 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-series">Archive_slots</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-5xl leading-[0.88] text-white sm:text-7xl md:text-8xl">
              Showcase
              <span className="text-series">.</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">
              {String(PROJECTS.length).padStart(2, '0')} entries // live systems
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <nav aria-label="Live projects" className="mx-auto mt-12 max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-muted">
            All live projects
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-sm">
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
              className="font-mono text-sm text-series underline-offset-4 hover:underline"
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
