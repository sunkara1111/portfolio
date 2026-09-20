import React from 'react'
import ParticleField from './components/ParticleField'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleField />
      <div className="relative z-10">
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
