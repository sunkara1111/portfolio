import React from 'react'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Learn the workflow, identify pain points, and define what success looks like.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Map out the automation logic, data flow, and user interactions before writing code.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Develop the solution with clean code, secure practices, and thorough testing.'
    },
    {
      number: '04',
      title: 'Improve',
      description: 'Monitor performance, gather feedback, and refine based on real-world usage.'
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-12 text-center">
          Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4">
                <span className="text-5xl font-heading font-bold text-primary opacity-20">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-text mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
