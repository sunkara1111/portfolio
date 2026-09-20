import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-industrial-950/95 backdrop-blur-sm border-b border-industrial-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-mono font-semibold text-lg text-industrial-300 hover:text-industrial-100 transition-colors">
            DGS
          </a>
          <div className="flex gap-8">
            <a href="#projects" className="text-sm text-industrial-300 hover:text-industrial-100 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm text-industrial-300 hover:text-industrial-100 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-industrial-300 hover:text-industrial-100 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
