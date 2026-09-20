"use client";

import { useEffect, useState } from "react";

const techStack = [
  { category: "AI & ML", items: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain"] },
  { category: "Web Development", items: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"] },
  { category: "Automation", items: ["Selenium", "Playwright", "GitHub Actions", "CI/CD"] },
  { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "Git"] },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding the problem space, user needs, and technical constraints.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Designing scalable systems with the right tools and frameworks.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Building with clean code, testing thoroughly, and iterating quickly.",
  },
  {
    number: "04",
    title: "Deployment",
    description: "Shipping to production with monitoring, documentation, and support.",
  },
];

export default function Process() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="process" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How I Build
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A systematic approach to creating reliable, scalable automation and AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="font-display text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-600">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-12">Tech Stack</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <div
                key={stack.category}
                className={`gradient-border rounded-xl p-6 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <h4 className="font-display text-lg font-bold mb-4 text-blue-400">{stack.category}</h4>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
