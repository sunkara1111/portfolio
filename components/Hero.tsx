"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div
          className={`transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-400">
              Available for opportunities
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
            Dineshgopi Sunkara
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
            Automation Engineer
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Master&apos;s in Computer Science, Pace University
          </p>
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building practical and accessible automation and AI-assisted tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div
          className={`mt-20 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span>Scroll to explore</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
