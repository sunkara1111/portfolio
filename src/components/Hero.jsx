import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-sm text-primary tracking-wide mb-4">
          Dineshgopi Sunkara · DINESH S
        </p>
        <p className="text-sm md:text-base text-muted font-medium mb-6">
          Senior Controls Engineer · Automation Engineer
        </p>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-text mb-6 leading-tight">
          I automate complexity into<br />simple, reliable workflows.
        </h1>
        
        {/* Supporting text */}
        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          I&apos;m Dineshgopi Sunkara (DINESH S), an Automation Engineer with a Master&apos;s degree in Computer Science from Pace University.
          I am the founder of Pilot, StatusPass, AdForge, DGS AI, Sunkara AI Fund, Aetherline, and Client Kickoff — practical automation and AI-assisted tools that help people and businesses work more efficiently.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#work" className="btn-primary">
            View my work
          </a>
          <a 
            href="https://www.linkedin.com/in/dineshgopisunkara"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            Connect with me
          </a>
        </div>
        
        {/* Optional workflow visual */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-surface-light flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-muted font-mono">Input</p>
            </div>
            
            <div className="card p-6 text-center blue-glow">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm text-primary font-mono">Automation</p>
            </div>
            
            <div className="card p-6 text-center blue-glow">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-sm text-primary font-mono">Intelligence</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-surface-light flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-muted font-mono">Result</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
