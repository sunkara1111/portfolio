import React, { useEffect, useRef, useState } from 'react'
import { SKILL_CARDS } from '../data/site'

const pad = (n) => String(n).padStart(2, '0')

const poses = [
  { x: -18, y: 22, z: 40, tx: -12, ty: 8 },
  { x: -8, y: -6, z: 80, tx: 8, ty: -18 },
  { x: 10, y: -24, z: 20, tx: 18, ty: 14 },
  { x: -14, y: 16, z: -10, tx: -6, ty: 22 },
  { x: 6, y: -12, z: 50, tx: 14, ty: -8 },
]

const SkillCard = ({ card, index, total }) => (
  <article className="series-card lattice-corners flex h-full min-h-[280px] flex-col p-6">
    <div className="glow-ring" aria-hidden="true" />
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-series" />
        <span className="h-1.5 w-1.5 rounded-full bg-vibranium/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-chrome/50" />
      </div>
      <span className="series-tag">
        {pad(index + 1)} / {pad(total)}
      </span>
    </div>
    <h3 className="font-display text-3xl text-white">{card.title}</h3>
    <p className="mt-4 flex-1 font-mono text-sm leading-relaxed text-muted">{card.blurb}</p>
    <div className="mt-8 flex flex-wrap gap-2 border-t border-vibranium/35 pt-5">
      {card.chips.map((chip) => (
        <span key={chip} className="tech-pill">
          {chip}
        </span>
      ))}
    </div>
  </article>
)

const Skills = () => {
  const stageRef = useRef(null)
  const [progress, setProgress] = useState(0.35)
  const [reduce, setReduce] = useState(false)
  const count = SKILL_CARDS.length

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduce(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const node = stageRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const mid = rect.top + rect.height / 2
      const p = 1 - Math.min(1, Math.max(0, mid / (window.innerHeight + rect.height * 0.2)))
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="skills" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="watermark">
        <span className="watermark-word">SKILLS</span>
      </div>
      <div className="glow-orb -left-10 bottom-10 h-64 w-64 bg-vibranium/20" />
      <div className="glow-orb right-10 top-24 h-56 w-56 bg-royal/20" />

      <div className="relative mx-auto max-w-7xl">
        <p className="series-tag mb-5">Episode 02 / Core competencies</p>
        <h2 className="font-display text-5xl leading-[0.88] text-white sm:text-7xl md:text-8xl">
          Frontend
          <br />
          <span className="text-series">Backend.</span>{' '}
          <span className="text-vibranium">Cloud.</span>
        </h2>
        <p className="mt-6 max-w-2xl font-mono text-sm text-muted md:text-[15px]">
          Scroll-driven isometric cards for the disciplines that ship: interfaces,
          services, cloud, controls, and applied AI.
        </p>

        <div ref={stageRef} className="relative mt-16 hidden min-h-[720px] iso-stage md:block">
          {SKILL_CARDS.map((card, index) => {
            const pose = poses[index]
            const lift = reduce ? 0 : (progress - 0.5) * 48
            const spin = reduce ? 0 : (progress - 0.45) * 18
            return (
              <div
                key={card.title}
                className="iso-card absolute w-[280px] lg:w-[300px]"
                style={{
                  left: `${8 + (index % 3) * 28}%`,
                  top: `${index < 3 ? 4 : 46}%`,
                  zIndex: 5 + index,
                  transform: reduce
                    ? 'none'
                    : `translate3d(${pose.tx}px, ${pose.ty + lift * (index % 2 === 0 ? 1 : -1)}px, ${pose.z}px) rotateX(${pose.x + spin * 0.2}deg) rotateY(${pose.y + spin}deg)`,
                }}
              >
                <SkillCard card={card} index={index} total={count} />
              </div>
            )
          })}
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
