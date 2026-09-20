import React, { useEffect, useState } from 'react'
import { liveCount } from '../data/projects'

const IntroOverlay = () => {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false)
      return undefined
    }

    const start = performance.now()
    const duration = 1800
    let frame

    const tick = (now) => {
      const next = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(next)
      if (next < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 280)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduceMotion])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-background"
      role="dialog"
      aria-label="Loading"
      onClick={() => setVisible(false)}
    >
      <p className="section-kicker mb-6">Boot sequence</p>
      <p className="font-heading text-[18vw] md:text-[8rem] leading-none text-cyan drop-shadow-[0_0_40px_rgba(0,229,255,0.55)]">
        {String(liveCount).padStart(2, '0')}
      </p>
      <p className="font-hud text-sm tracking-[0.5em] text-muted mt-2">LIVE SYSTEMS</p>
      <div className="mt-10 h-[2px] w-56 bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan to-purple"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-mono text-xs text-muted mt-4">DINESH S · skip</p>
    </div>
  )
}

export default IntroOverlay
