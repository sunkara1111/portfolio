import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
