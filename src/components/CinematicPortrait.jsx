import React from 'react'

const CinematicPortrait = ({
  src,
  alt,
  className = '',
  crop = 'hero',
  priority = false,
}) => {
  return (
    <div className={`portrait-stage ${className}`}>
      <div className="portrait-halo" aria-hidden="true" />
      <div className={`portrait-frame hud-panel overflow-hidden ${crop === 'about' ? 'portrait-frame-about' : 'portrait-frame-hero'}`}>
        <img
          src={src}
          alt={alt}
          width={crop === 'about' ? 920 : 1206}
          height={crop === 'about' ? 1150 : 1507}
          fetchPriority={priority ? 'high' : 'auto'}
          className={crop === 'about' ? 'portrait-img portrait-img-about' : 'portrait-img portrait-img-hero'}
        />
        <div className="portrait-grade" aria-hidden="true" />
        <div className="scanlines absolute inset-0 opacity-70" aria-hidden="true" />
      </div>
    </div>
  )
}

export default CinematicPortrait
