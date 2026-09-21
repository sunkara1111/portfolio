import React, { useEffect, useRef } from 'react'

const ParticleField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationId
    let particles = []
    let width = 0
    let height = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createParticles = () => {
      const count = Math.min(90, Math.floor((width * height) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.25,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        a: Math.random() * 0.45 + 0.18,
        hue: Math.random() > 0.55 ? 355 : Math.random() > 0.35 ? 278 : 320,
      }))
    }

    const draw = (move) => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p, i) => {
        if (move) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0
        }

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < 118) {
            ctx.beginPath()
            ctx.strokeStyle = `hsla(${p.hue}, 90%, 70%, ${0.08 * (1 - dist / 118)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue}, 95%, 76%, ${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const tick = () => {
      draw(true)
      animationId = requestAnimationFrame(tick)
    }

    const start = () => {
      resize()
      createParticles()
      if (media.matches) {
        draw(false)
        return
      }
      tick()
    }

    const onResize = () => {
      resize()
      createParticles()
    }

    start()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export default ParticleField
