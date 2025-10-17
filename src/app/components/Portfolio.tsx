'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'CyberCommerce',
    description: 'E-commerce futurista com React, Node.js e PostgreSQL. Sistema completo de pagamentos, gestão de estoque e analytics em tempo real.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒',
    color: 'from-purple-600 to-pink-600',
    status: 'Live',
    link: '#'
  },
  {
    id: 2,
    title: 'NeuralChat',
    description: 'Aplicação de chat em tempo real com IA integrada. WebSockets, autenticação JWT e processamento de linguagem natural.',
    tech: ['Next.js', 'Socket.io', 'OpenAI', 'MongoDB'],
    image: '🤖',
    color: 'from-cyan-600 to-blue-600',
    status: 'Beta',
    link: '#'
  },
  {
    id: 3,
    title: 'DataVault',
    description: 'Dashboard analytics com visualizações interativas. Processamento de big data e relatórios automatizados para empresas.',
    tech: ['TypeScript', 'D3.js', 'Express', 'Redis'],
    image: '📊',
    color: 'from-green-600 to-teal-600',
    status: 'Development',
    link: '#'
  }
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            &lt;PROJETOS/&gt;
          </h2>
          <p className="text-xl text-gray-300 font-mono">
            Soluções inovadoras que criei para o mundo digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 rounded-lg border border-purple-500/20 overflow-hidden hover:border-purple-500/60 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                  project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                }`}>
                  {project.status}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-mono hover:bg-white/20 transition-colors duration-300">
                    VER PROJETO
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-mono rounded border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono text-sm rounded hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                    Demo
                  </button>
                  <button className="flex-1 py-2 border border-cyan-400 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    Code
                  </button>
                </div>
              </div>

              {/* Glitch Effect */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 animate-pulse`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
            <span className="mr-2">VER TODOS OS PROJETOS</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
