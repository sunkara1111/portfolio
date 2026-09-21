import React, { useEffect, useState } from 'react'
import { NAV_LINKS, SERIES, SITE } from '../data/site'
import { SocialLinks } from './icons'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
            ? 'border-b border-white/10 bg-black/85 backdrop-blur-xl'
            : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <a
            href="#top"
            className="font-display text-lg font-extrabold tracking-[0.14em] text-series md:text-xl"
          >
            {SERIES.wordmark}
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <SocialLinks className="hidden sm:flex" />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
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
          <div className="border-t border-white/10 bg-black/95 px-6 py-8 lg:hidden">
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="font-display text-2xl uppercase tracking-wide text-white"
                >
                  {link.label}
                </a>
              ))}
              <SocialLinks className="pt-2 sm:hidden" />
              <a
                href={SITE.resume}
                download={SITE.resumeFileName}
                onClick={close}
                className="font-display text-2xl uppercase tracking-wide text-white"
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
