import React, { useEffect, useState } from 'react'
import { SKILL_CARDS } from '../data/site'

const pad = (n) => String(n).padStart(2, '0')

const SkillCard = ({ card, index, total, featured = false }) => (
  <article className={`series-card skill-card-3d flex h-full flex-col p-6 md:p-7 ${featured ? 'shadow-series' : ''}`}>
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="chrome-dot bg-series/80" />
        <span className="chrome-dot" />
        <span className="chrome-dot" />
      </div>
      <span className="series-tag">
        {pad(index + 1)} / {pad(total)}
      </span>
    </div>
    <h3 className="font-display text-2xl font-extrabold text-white md:text-[1.75rem]">{card.title}</h3>
    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{card.blurb}</p>
    <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5">
      {card.chips.map((chip) => (
        <span
          key={chip}
          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70"
        >
          {chip}
        </span>
      ))}
    </div>
  </article>
)

const Skills = () => {
  const [active, setActive] = useState(1)
  const [paused, setPaused] = useState(false)
  const count = SKILL_CARDS.length

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || paused) return undefined
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % count)
    }, 4800)
    return () => window.clearInterval(id)
  }, [count, paused])

  const offsetOf = (index) => {
    let diff = index - active
    if (diff > count / 2) diff -= count
    if (diff < -count / 2) diff += count
    return diff
  }

  return (
    <section id="skills" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="watermark">
        <span className="watermark-word">SKILLS</span>
      </div>
      <div className="glow-orb -left-10 bottom-10 h-64 w-64 bg-series/15" />

      <div className="relative mx-auto max-w-7xl">
        <p className="series-tag mb-5">Episode 03 / Production tech stack</p>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
          Frontend
          <br />
          <span className="text-series">Backend. Cloud.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">
          Three-dimensional cards for the disciplines that ship: interfaces, services,
          cloud, controls, and applied AI.
        </p>

        <div
          className="relative mx-auto mt-16 hidden h-[420px] max-w-5xl skill-stage md:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {SKILL_CARDS.map((card, index) => {
            const offset = offsetOf(index)
            const abs = Math.abs(offset)
            const visible = abs <= 1
            return (
              <div
                key={card.title}
                role="button"
                tabIndex={visible ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setActive(index)
                  }
                }}
                aria-label={`Show ${card.title}`}
                aria-current={offset === 0 ? 'true' : undefined}
                className="absolute left-1/2 top-4 w-[min(78%,340px)] origin-center cursor-pointer"
                style={{
                  transform: `translateX(-50%) translateX(${offset * 250}px) rotateY(${offset * -22}deg) translateZ(${offset === 0 ? 80 : -40}px) scale(${offset === 0 ? 1.04 : 0.9})`,
                  zIndex: 20 - abs,
                  opacity: visible ? 1 : 0,
                  pointerEvents: visible ? 'auto' : 'none',
                }}
              >
                <SkillCard card={card} index={index} total={count} featured={offset === 0} />
              </div>
            )
          })}
        </div>

        <div className="mt-8 hidden items-center justify-center gap-4 md:flex">
          <button
            type="button"
            aria-label="Previous skill"
            className="social-icon"
            onClick={() => setActive((n) => (n - 1 + count) % count)}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {SKILL_CARDS.map((card, index) => (
              <button
                key={card.title}
                type="button"
                aria-label={card.title}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === active ? 'w-8 bg-series' : 'w-2.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next skill"
            className="social-icon"
            onClick={() => setActive((n) => (n + 1) % count)}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:hidden">
          {SKILL_CARDS.map((card, index) => (
            <SkillCard key={card.title} card={card} index={index} total={count} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
