import React, { useEffect, useState } from 'react'

const DURATION_MS = 2300
const HOLD_MS = 280
const EXIT_MS = 720

const IntroLoader = ({ onReveal, onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      setProgress(100)
      onReveal()
      onComplete()
      return undefined
    }

    let frame
    let exitTimer
    let holdTimer
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION_MS)
      const eased = 1 - (1 - t) ** 3
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
        return
      }
      holdTimer = window.setTimeout(() => {
        setExiting(true)
        onReveal()
        exitTimer = window.setTimeout(onComplete, EXIT_MS)
      }, HOLD_MS)
    }

    frame = requestAnimationFrame(tick)
    document.body.style.overflow = 'hidden'

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(holdTimer)
      window.clearTimeout(exitTimer)
      document.body.style.overflow = ''
    }
  }, [onComplete, onReveal])

  return (
    <div
      className={`intro-loader ${exiting ? 'is-exiting' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${progress} percent`}
    >
      <div className="intro-counter" aria-hidden="true">
        {progress}
      </div>
      <div className="intro-track" aria-hidden="true">
        <div className="intro-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export default IntroLoader
