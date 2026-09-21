import React, { useEffect, useRef, useState } from 'react'

const REST = { x: -11, y: 16 }

const PortraitTilt = ({ children, className = '' }) => {
  const ref = useRef(null)
  const [tilt, setTilt] = useState(REST)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduce(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const onPointerMove = (event) => {
    if (reduce) return
    const node = ref.current
    if (!node) return
    const box = node.getBoundingClientRect()
    const px = (event.clientX - box.left) / box.width - 0.5
    const py = (event.clientY - box.top) / box.height - 0.5
    setTilt({ x: REST.x + py * -8, y: REST.y + px * 10 })
  }

  const reset = () => setTilt(REST)

  return (
    <div className={`portrait-stage-wrap ${className}`}>
      <div
        ref={ref}
        className="portrait-stage"
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        style={{
          transform: reduce ? 'none' : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default PortraitTilt
