import React, { useEffect, useState } from 'react'
import { NAV_LINKS, SERIES, SITE } from '../data/site'

const VolumeIcon = ({ muted }) => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    {muted ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M11 5 6 9H3v6h3l5 4V5zm7.5 3.5-7 7m7 0-7-7" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M11 5 6 9H3v6h3l5 4V5zm6 2a6 6 0 0 1 0 10" />
    )}
  </svg>
)

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-series px-4 py-1.5 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white sm:text-[11px]">
          {SERIES.label}
          <span className="mx-2 text-white/70">|</span>
          {SERIES.seasons}
        </p>
      </div>
      <nav
        className={`transition-all duration-300 ${
          scrolled || open
            ? 'border-b border-vibranium/35 bg-black/90 backdrop-blur-xl'
            : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-5 py-3 md:px-8">
          <a
            href="#top"
            className="font-display text-2xl leading-none tracking-[0.12em] text-series md:text-[1.65rem]"
          >
            {SERIES.wordmark}
          </a>

          <div className="hidden items-center justify-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <a href="#contact" className="btn-login hidden sm:inline-flex">
              Login
            </a>
            <button
              type="button"
              className="hidden h-8 w-8 items-center justify-center text-white sm:inline-flex"
              aria-label={muted ? 'Unmute' : 'Mute'}
              onClick={() => setMuted((v) => !v)}
            >
              <VolumeIcon muted={muted} />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-vibranium/50 text-white lg:hidden"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-vibranium/30 bg-black/95 px-6 py-8 lg:hidden">
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="font-display text-3xl tracking-wide text-white"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={close} className="btn-login w-fit">
                Login
              </a>
              <a
                href={SITE.resume}
                download={SITE.resumeFileName}
                onClick={close}
                className="font-mono text-sm uppercase tracking-[0.18em] text-white"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navigation
