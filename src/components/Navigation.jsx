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
      scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-[var(--border)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-heading font-semibold text-lg text-text hover:text-primary transition-colors">
            Dineshgopi Sunkara
          </a>
          <div className="flex flex-wrap justify-end gap-4 md:gap-8">
            <a href="#about" className="text-sm text-muted hover:text-text transition-colors">
              About
            </a>
            <a href="#work" className="text-sm text-muted hover:text-text transition-colors">
              Work
            </a>
            <a href="#approach" className="text-sm text-muted hover:text-text transition-colors">
              Approach
            </a>
            <a href="#contact" className="text-sm text-muted hover:text-text transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
