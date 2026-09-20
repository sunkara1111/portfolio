"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "AdForge",
    description: "AI-powered social ad pack generator for Reels, TikTok, and Shorts. Transform your marketing workflow with intelligent automation.",
    tags: ["AI", "Automation", "Video Generation", "Next.js"],
    liveUrl: "https://adforge-sunkara.vercel.app",
    repoUrl: "https://github.com/sunkara1111/adforge",
    gradient: "from-blue-600 to-cyan-500",
    isRepoPrivate: true,
  },
  {
    title: "AI Research Floor",
    description: "Educational multi-agent market analysis system demonstrating AI-driven research methodologies. Academic research and paper exploration only.",
    tags: ["Multi-Agent", "Research", "AI", "Finance"],
    liveUrl: "https://sunkara1111.github.io/ai-hedge-fund/",
    repoUrl: "https://github.com/sunkara1111/ai-hedge-fund",
    gradient: "from-purple-600 to-pink-500",
    disclaimer: "Research/educational purposes only",
  },
  {
    title: "DGS AI",
    description: "AI-powered assistant platform showcasing modern web architecture and intelligent user interactions.",
    tags: ["AI Assistant", "Web Platform", "React"],
    liveUrl: "https://sunkara1111.github.io/dgs-ai/",
    repoUrl: "https://github.com/sunkara1111/dgs-ai",
    gradient: "from-orange-600 to-red-500",
  },
  {
    title: "Client Kickoff System",
    description: "Free, streamlined client onboarding and project kickoff automation system for efficient project management.",
    tags: ["Automation", "Project Management", "Workflow"],
    repoUrl: "https://github.com/sunkara1111/client-kickoff-system-free",
    gradient: "from-green-600 to-teal-500",
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Building tools that combine AI, automation, and thoughtful design to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card gradient-border rounded-2xl p-8 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative z-10">
                <div className={`inline-block mb-4 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full`}>
                  <span className="text-xs font-semibold text-white">Featured</span>
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                {project.disclaimer && (
                  <div className="mb-6 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-sm text-yellow-400">⚠️ {project.disclaimer}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.repoUrl && !project.isRepoPrivate && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <span>Source</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {project.isRepoPrivate && (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg font-semibold text-gray-500 cursor-not-allowed">
                      <span>Private Repo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
