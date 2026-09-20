import React from 'react'
import BackgroundFX from './components/BackgroundFX'
import IntroOverlay from './components/IntroOverlay'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import HudDeck from './components/HudDeck'
import About from './components/About'
import BuiltCarousel from './components/BuiltCarousel'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <IntroOverlay />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <HudDeck />
        <About />
        <BuiltCarousel />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
