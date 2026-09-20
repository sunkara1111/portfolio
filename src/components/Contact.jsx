import React from 'react'

const Contact = () => {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/sunkara1111',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:contact@example.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="relative py-24 px-6 bg-industrial-950 border-t border-industrial-900">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block font-mono text-sm text-industrial-500 mb-4 tracking-wider">
            &lt;CONTACT /&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-industrial-400 max-w-2xl mx-auto">
            Interested in automation systems, controls engineering, or collaboration?
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-16">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 px-6 py-3 bg-industrial-900/40 border card-border rounded-lg hover:card-glow transition-all duration-300 text-industrial-300 hover:text-industrial-100"
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
        
        <div className="border-t border-industrial-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-industrial-500">
            <div>
              <p className="font-mono">
                © {new Date().getFullYear()} Dineshgopi Sunkara
              </p>
              <p className="text-industrial-600 mt-1">
                Senior Controls Engineer · Automation Engineer
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-industrial-300 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-industrial-300 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
