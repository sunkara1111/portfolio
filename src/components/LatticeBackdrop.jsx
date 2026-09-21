import React from 'react'

const LatticeBackdrop = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <svg className="absolute inset-0 h-full w-full opacity-[0.14]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex-lattice" width="56" height="97" patternUnits="userSpaceOnUse">
          <path
            d="M28 2 L54 16 V46 L28 60 L2 46 V16 Z"
            fill="none"
            stroke="rgba(168,85,247,0.55)"
            strokeWidth="0.7"
          />
          <path
            d="M28 60 L54 74 V104"
            fill="none"
            stroke="rgba(192,199,209,0.18)"
            strokeWidth="0.5"
          />
        </pattern>
        <linearGradient id="ambient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(229,9,20,0.16)" />
          <stop offset="55%" stopColor="rgba(91,33,182,0.2)" />
          <stop offset="100%" stopColor="rgba(192,38,211,0.1)" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-lattice)" />
      <rect width="100%" height="100%" fill="url(#ambient)" />
      <g stroke="rgba(192,199,209,0.12)" strokeWidth="0.6" fill="none">
        <path d="M0 120 L180 40 L360 160" />
        <path d="M70% 0 L78% 90 L92% 40" />
        <path d="M8% 78% L22% 92% L40% 84%" />
      </g>
    </svg>
    <div className="glow-orb -left-24 top-24 h-80 w-80 bg-royal/30" />
    <div className="glow-orb right-0 top-10 h-96 w-96 bg-vibranium/25" />
    <div className="glow-orb bottom-0 left-1/3 h-72 w-72 bg-series/12" />
  </div>
)

export default LatticeBackdrop
