import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      
      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-px h-64 bg-gradient-to-b from-industrial-500 to-transparent"></div>
      <div className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-industrial-500 to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-industrial-500 to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6">
          <div className="inline-block font-mono text-sm text-industrial-400 mb-4 tracking-wider">
            &lt;SYSTEM.INIT /&gt;
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-industrial-100 via-industrial-200 to-industrial-300 bg-clip-text text-transparent">
          Dineshgopi Sunkara
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-8 text-lg md:text-xl text-industrial-300">
          <span className="font-semibold">Senior Controls Engineer</span>
          <span className="text-industrial-600">·</span>
          <span className="font-semibold">Automation Engineer</span>
        </div>
        
        <p className="text-lg md:text-xl text-industrial-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building practical, reliable automation and AI-assisted tools
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-industrial-700 hover:bg-industrial-600 border border-industrial-600 text-industrial-50 rounded transition-all duration-300 font-medium"
          >
            View Projects
          </a>
          <a 
            href="https://github.com/sunkara1111" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-industrial-700 hover:border-industrial-600 text-industrial-300 hover:text-industrial-100 rounded transition-all duration-300 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-industrial-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-industrial-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
