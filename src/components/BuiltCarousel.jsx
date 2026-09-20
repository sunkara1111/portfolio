import React, { useEffect, useState } from 'react'
import { projects } from '../data/projects'

const BuiltCarousel = () => {
  const [active, setActive] = useState(0)
  const total = projects.length

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowRight') setActive((i) => (i + 1) % total)
      if (event.key === 'ArrowLeft') setActive((i) => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  return (
    <section id="work" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="section-kicker mb-4">Work</p>
        <h2 className="text-4xl md:text-6xl text-text">
          Things I&apos;ve <span className="text-cyan">built.</span>
        </h2>
        <p className="text-muted mt-4">Live systems by Dinesh Gopi Sunkara (DINESH S). Every card opens a working URL.</p>
      </div>

      <div className="carousel-stage relative flex items-center justify-center">
        {projects.map((project, index) => {
          const offset = index - active
          const abs = Math.abs(offset)
          const hidden = abs > 2
          return (
            <article
              key={project.id}
              className={`carousel-card absolute w-[250px] sm:w-[280px] h-[380px] rounded-[1.6rem] p-6 flex flex-col text-left bg-gradient-to-br ${project.gradient} shadow-glow-lg`}
              style={{
                transform: `translateX(${offset * 210}px) rotateY(${offset * -38}deg) translateZ(${abs === 0 ? 80 : -80}px) scale(${abs === 0 ? 1 : 0.82})`,
                opacity: hidden ? 0 : abs === 0 ? 1 : 0.55,
                zIndex: 20 - abs,
                pointerEvents: hidden ? 'none' : 'auto',
              }}
            >
              <div className="flex items-center justify-between text-white/80 font-mono text-xs">
                <span>{String(project.id).padStart(2, '0')}</span>
                <span className="uppercase tracking-widest">Live</span>
              </div>
              <h3 className="mt-8 text-3xl font-heading text-white drop-shadow-md">{project.title}</h3>
              <p className="mt-3 text-white/90 text-sm flex-1">{project.blurb}</p>
              <p className="text-[11px] font-mono text-white/70 mb-4">Founded by {project.founder}</p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black/35 text-white text-sm py-2.5 font-hud tracking-widest uppercase hover:bg-black/50"
              >
                View live
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-center text-xs text-white underline underline-offset-4"
                >
                  GitHub repo
                </a>
              )}
              {project.extraLinks?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-center text-xs text-white/90 underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </article>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          type="button"
          className="btn-secondary px-4 py-2"
          onClick={() => setActive((i) => (i - 1 + total) % total)}
          aria-label="Previous project"
        >
          Prev
        </button>
        <div className="flex gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Show ${project.title}`}
              className={`h-2.5 w-2.5 rounded-full ${index === active ? 'bg-cyan shadow-glow' : 'bg-white/20'}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="btn-secondary px-4 py-2"
          onClick={() => setActive((i) => (i + 1) % total)}
          aria-label="Next project"
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default BuiltCarousel
