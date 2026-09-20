import React from 'react'

const BackgroundFX = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-fade bg-[size:56px_56px] opacity-40" />
      <div className="particle-layer absolute inset-0" />
      <div className="absolute left-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
      <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-purple/40 to-transparent" />
      <div className="scanlines absolute inset-0 opacity-40" />
    </div>
  )
}

export default BackgroundFX
