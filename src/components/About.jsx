import React from 'react'

const About = () => {
  const facts = [
    { label: 'Role', value: 'Automation Engineer' },
    { label: 'Education', value: "Master's degree in Computer Science" },
    { label: 'University', value: 'Pace University' },
    { label: 'Focus', value: 'Automation & AI-Assisted Tools' }
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
              I'm an Automation Engineer with a Master's degree in Computer Science from Pace University. 
              I build practical automation and AI-assisted tools that help people and businesses work more efficiently.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              My approach combines technical expertise with a focus on creating solutions that are reliable, 
              secure, and genuinely useful in real-world scenarios.
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
