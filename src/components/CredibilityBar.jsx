import React from 'react'

const CredibilityBar = () => {
  const items = [
    'Automation Engineering',
    'AI-Assisted Tools',
    'Workflow Optimization',
    'Computer Science'
  ]

  return (
    <section className="py-12 px-6 border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-muted font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CredibilityBar
