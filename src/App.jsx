import React, { useCallback, useState } from 'react'
import ParticleField from './components/ParticleField'
import IntroLoader from './components/IntroLoader'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [ready, setReady] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const onReveal = useCallback(() => setReady(true), [])
  const onIntroComplete = useCallback(() => setShowIntro(false), [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      {showIntro && <IntroLoader onReveal={onReveal} onComplete={onIntroComplete} />}
      <ParticleField />
      <div className="hex-glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className={`relative z-10 site-stage ${ready ? 'is-ready' : ''}`}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
