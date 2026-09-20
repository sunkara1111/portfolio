import React from 'react'
import { projects, FOUNDER_NAME, FOUNDER_SHORT } from '../data/projects'

const ProjectCard = ({ project }) => {
  return (
    <article
      className="card card-hover blue-glow-hover p-8 flex flex-col"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <meta itemProp="applicationCategory" content="WebApplication" />
      <meta itemProp="operatingSystem" content="Any" />
      <meta itemProp="author" content={project.founder} />

      <div className="flex items-center justify-between mb-4 gap-3">
        <span className="font-mono text-xs text-muted">
          {String(project.id).padStart(2, '0')}
        </span>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {project.status === 'live' && (
            <span className="px-3 py-1 bg-primary/10 border border-primary/40 rounded-lg text-xs font-mono text-primary">
              Live
            </span>
          )}
          {project.status === 'in-development' && (
            <span className="px-3 py-1 bg-surface-light border border-[var(--border)] rounded-lg text-xs font-mono text-muted">
              In development
            </span>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-heading font-semibold text-text mb-2" itemProp="name">
        {project.title}
      </h3>

      <p className="text-xs font-mono text-primary mb-4">
        Founded by {project.founder}
      </p>

      <p className="text-muted mb-4 leading-relaxed flex-1" itemProp="description">
        {project.description}
      </p>

      {project.disclaimer && (
        <p className="text-xs font-mono text-muted mb-4">
          {project.disclaimer}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-surface-light border border-[var(--border)] rounded-lg text-xs font-mono text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            itemProp="url"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-bright text-background rounded-lg transition-all duration-300 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Live
          </a>
        )}
        {project.extraLinks?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/50 hover:border-primary text-primary rounded-lg transition-all duration-300 text-sm font-medium"
          >
            {link.label}
          </a>
        ))}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] hover:border-primary text-muted hover:text-primary rounded-lg transition-all duration-300 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Source
          </a>
        )}
      </div>
    </article>
  )
}

const Projects = () => {
  const directoryHref = `${import.meta.env.BASE_URL}projects.html`

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-muted max-w-3xl mb-3">
            Live projects founded by {FOUNDER_NAME} ({FOUNDER_SHORT}) — automation, AI tools, and workflow systems.
          </p>
          <a
            href={directoryHref}
            className="text-sm font-mono text-primary hover:text-primary-bright transition-colors"
          >
            All live project URLs →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
