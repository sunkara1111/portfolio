import React from 'react'
import Hero from './components/Hero'
import CredibilityBar from './components/CredibilityBar'
import About from './components/About'
import Projects from './components/Projects'
import WhatIBring from './components/WhatIBring'
import Process from './components/Process'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CredibilityBar />
        <About />
        <Projects />
        <div id="approach">
          <WhatIBring />
          <Process />
        </div>
        <Contact />
      </main>
    </div>
  )
}

export default App
