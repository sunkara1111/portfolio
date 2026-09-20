import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-surface border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-6">
          Have a workflow worth improving?
        </h2>
        
        <p className="text-lg text-muted mb-10">
          Let's discuss how automation can help your business work more efficiently.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="https://www.linkedin.com/in/dineshgopisunkara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact me
          </a>
          <a 
            href="https://www.linkedin.com/in/dineshgopisunkara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/sunkara1111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
        
        <div className="pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Dinesh Gopi Sunkara · Automation Engineer
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
