import React from 'react'

const About = () => {
  const facts = [
    { label: 'Name', value: 'Dineshgopi Sunkara (DINESH S)' },
    { label: 'Role', value: 'Senior Controls Engineer · Automation Engineer' },
    { label: 'Education', value: "Master's degree in Computer Science" },
    { label: 'University', value: 'Pace University' },
    { label: 'Focus', value: 'Automation & AI-assisted tools' }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-8">
          Engineering better ways to work
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              I&apos;m Dineshgopi Sunkara (DINESH S), a Senior Controls Engineer and Automation Engineer with a Master&apos;s degree in Computer Science from Pace University.
              I build practical automation and AI-assisted tools that help people and businesses work more efficiently.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Live work includes Pilot, StatusPass (an F-1/CPT/OPT/STEM OPT compliance organizer founded as DINESH S — not a law firm or DSO), AdForge, DGS AI, Sunkara AI Fund, Aetherline, and Client Kickoff.
              The approach is the same across them: reliable, secure, and useful in real workflows.
            </p>
          </div>
          
          <div className="space-y-4">
            {facts.map((fact, index) => (
              <div key={index} className="card p-6">
                <p className="text-sm font-mono text-muted mb-1">{fact.label}</p>
                <p className="text-text font-medium">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
