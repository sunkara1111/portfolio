import React, { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-cyan/15' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-hud text-sm tracking-[0.35em] text-cyan">
          DS
        </a>
        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-hud text-[11px] tracking-[0.35em] uppercase text-muted hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="md:hidden font-hud text-[11px] tracking-[0.3em] uppercase text-cyan"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-background/95 border-b border-cyan/15">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-hud text-sm tracking-[0.3em] uppercase text-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
