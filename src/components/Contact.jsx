import React from 'react'
import { projects, FOUNDER_NAME, FOUNDER_SHORT, FOUNDER_ROLE } from '../data/projects'

const Contact = () => {
  const directoryHref = `${import.meta.env.BASE_URL}projects.html`

  return (
    <section id="contact" className="py-20 px-6 bg-surface border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-6">
          Have a workflow worth improving?
        </h2>
        
        <p className="text-lg text-muted mb-10">
          Let&apos;s discuss how automation can help your business work more efficiently.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="https://www.linkedin.com/in/dineshgopisunkara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact me
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

        <nav aria-label="Live Sunkara projects" className="mb-16">
          <h3 className="text-sm font-mono text-primary mb-4">Live projects</h3>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <a
              href={directoryHref}
              className="text-xs font-mono text-primary hover:text-primary-bright transition-colors"
            >
              Full URL directory
            </a>
          </p>
        </nav>
        
        <div className="pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {FOUNDER_NAME} ({FOUNDER_SHORT}) · {FOUNDER_ROLE}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
