import React from 'react'
import { projects, FOUNDER_NAME, FOUNDER_SHORT } from '../data/projects'

const Projects = () => {
  const directoryHref = `${import.meta.env.BASE_URL}projects.html`

  return (
    <section className="relative px-6 pb-24" aria-label="Live project catalog">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="section-kicker mb-2">Catalog</p>
            <h2 className="text-3xl text-text">All live URLs</h2>
          </div>
          <a href={directoryHref} className="font-mono text-sm text-cyan hover:text-cyan-dim">
            Crawlable directory →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="neon-panel p-6"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <meta itemProp="applicationCategory" content="WebApplication" />
              <meta itemProp="operatingSystem" content="Any" />
              <meta itemProp="author" content={project.founder} />
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-xl text-text" itemProp="name">{project.title}</h3>
                <span className="font-mono text-[10px] tracking-widest uppercase text-cyan">Live</span>
              </div>
              <p className="font-mono text-[11px] text-purple mb-3">Founded by {project.founder}</p>
              <p className="text-sm text-muted mb-4" itemProp="description">{project.description}</p>
              {project.disclaimer && (
                <p className="text-xs font-mono text-muted mb-3">{project.disclaimer}</p>
              )}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="url"
                  className="text-sm text-cyan hover:text-cyan-dim"
                >
                  View live
                </a>
                {project.extraLinks?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan hover:text-cyan-dim"
                  >
                    {link.label}
                  </a>
                ))}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-cyan"
                  >
                    GitHub repo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs font-mono text-muted">
          Indexed by {FOUNDER_NAME} ({FOUNDER_SHORT}). Aetherline is live.
        </p>
      </div>
    </section>
  )
}

export default Projects
