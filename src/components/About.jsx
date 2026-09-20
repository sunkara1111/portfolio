import React from 'react'

const About = () => {
  const skills = [
    { category: 'Controls & Automation', items: ['PLC Programming', 'SCADA Systems', 'Industrial Controls', 'Process Automation'] },
    { category: 'Software Engineering', items: ['Full-Stack Development', 'System Architecture', 'API Design', 'Cloud Infrastructure'] },
    { category: 'AI & Intelligence', items: ['Machine Learning', 'Natural Language Processing', 'Intelligent Systems', 'Automation AI'] },
    { category: 'Tools & Methods', items: ['Git', 'CI/CD', 'Agile', 'System Integration'] }
  ]

  return (
    <section id="about" className="relative py-24 px-6 bg-industrial-900/20">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block font-mono text-sm text-industrial-500 mb-4 tracking-wider">
            &lt;ABOUT /&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-100 mb-6">
            Engineering Reliable Systems
          </h2>
          <div className="max-w-3xl space-y-4 text-lg text-industrial-400 leading-relaxed">
            <p>
              Senior Controls Engineer and Automation Engineer with expertise in building practical, 
              reliable automation systems and AI-assisted tools.
            </p>
            <p>
              Focus on industrial control systems, process automation, and intelligent software 
              that solves real-world engineering challenges. Combining controls engineering 
              principles with modern software development to deliver robust solutions.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-industrial-900/40 border card-border rounded-lg p-6 hover:card-glow transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-industrial-200 mb-4 font-mono">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-industrial-400">
                    <div className="w-1.5 h-1.5 bg-industrial-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
