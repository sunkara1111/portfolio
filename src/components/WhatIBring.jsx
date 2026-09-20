import React from 'react'

const WhatIBring = () => {
  const items = [
    {
      title: 'Automation mindset',
      description: 'I identify repetitive tasks and design systems that handle them reliably, freeing up time for higher-value work.'
    },
    {
      title: 'Practical engineering',
      description: 'Solutions are built to work in real environments, not just in theory. I focus on what actually delivers results.'
    },
    {
      title: 'Security awareness',
      description: 'Every system is designed with security in mind from the start, protecting data and ensuring reliable operation.'
    },
    {
      title: 'Continuous improvement',
      description: 'I believe in iterative refinement. Systems should evolve based on feedback and changing needs.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-12 text-center">
          What I Bring
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="card card-hover p-8">
              <h3 className="text-xl font-heading font-semibold text-text mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIBring
