'use client';

import { useState } from 'react';

const technologies = [
  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400', description: 'Frontend Library' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400', description: 'Type Safety' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-400', description: 'Backend Runtime' },
  { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-gray-600', description: 'React Framework' },
  { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-500', description: 'Containerization' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-500', description: 'Database' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-400', description: 'NoSQL Database' },
  { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500', description: 'Cloud Platform' },
  { name: 'Git', icon: '📚', color: 'from-red-500 to-orange-500', description: 'Version Control' },
  { name: 'GraphQL', icon: '🔗', color: 'from-pink-500 to-purple-500', description: 'Query Language' },
  { name: 'Redis', icon: '🔴', color: 'from-red-600 to-red-400', description: 'Caching' },
  { name: 'Kubernetes', icon: '⚙️', color: 'from-blue-600 to-purple-600', description: 'Orchestration' }
];

export default function Stack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            &lt;STACK/&gt;
          </h2>
          <p className="text-xl text-gray-300 font-mono">
            Tecnologias que domino para criar soluções completas
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative p-6 bg-gray-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-mono font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-400 font-mono">
                  {tech.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} blur-xl opacity-20`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-mono font-bold text-purple-400 mb-2">FRONTEND</h3>
            <p className="text-gray-300 text-sm">
              React, Next.js, TypeScript, Tailwind CSS, Responsive Design
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-lg border border-cyan-500/30">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-mono font-bold text-cyan-400 mb-2">BACKEND</h3>
            <p className="text-gray-300 text-sm">
              Node.js, Express, GraphQL, REST APIs, Microservices
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg border border-orange-500/30">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-xl font-mono font-bold text-orange-400 mb-2">DEVOPS</h3>
            <p className="text-gray-300 text-sm">
              Docker, Kubernetes, AWS, CI/CD, Monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
