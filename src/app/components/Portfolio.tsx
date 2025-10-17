'use client';

import { useState } from 'react';

const allProjects = [
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
  },
  {
    id: 4,
    title: 'CryptoTracker',
    description: 'Plataforma de monitoramento de criptomoedas com alertas em tempo real e análise técnica avançada.',
    tech: ['Vue.js', 'Python', 'FastAPI', 'WebSocket'],
    image: '💰',
    color: 'from-yellow-600 to-orange-600',
    status: 'Live',
    link: '#'
  },
  {
    id: 5,
    title: 'TaskFlow',
    description: 'Sistema de gerenciamento de projetos com Kanban boards, timeline e colaboração em equipe.',
    tech: ['React', 'GraphQL', 'Prisma', 'Docker'],
    image: '📋',
    color: 'from-indigo-600 to-purple-600',
    status: 'Beta',
    link: '#'
  },
  {
    id: 6,
    title: 'CloudSync',
    description: 'Sincronização de arquivos multi-plataforma com criptografia end-to-end e backup automático.',
    tech: ['Electron', 'Rust', 'AWS S3', 'Encryption'],
    image: '☁️',
    color: 'from-blue-600 to-cyan-600',
    status: 'Development',
    link: '#'
  },
  {
    id: 7,
    title: 'GameHub',
    description: 'Plataforma social para gamers com matchmaking, tournaments e streaming integrado.',
    tech: ['Angular', 'NestJS', 'WebRTC', 'Redis'],
    image: '🎮',
    color: 'from-red-600 to-pink-600',
    status: 'Live',
    link: '#'
  },
  {
    id: 8,
    title: 'EcoTrack',
    description: 'App de sustentabilidade que monitora pegada de carbono pessoal e sugere ações eco-friendly.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'ML'],
    image: '🌱',
    color: 'from-green-600 to-emerald-600',
    status: 'Beta',
    link: '#'
  },
  {
    id: 9,
    title: 'CodeReview AI',
    description: 'Ferramenta de revisão de código automatizada com IA para detectar bugs e melhorar qualidade.',
    tech: ['Python', 'TensorFlow', 'GitHub API', 'Docker'],
    image: '🔍',
    color: 'from-purple-600 to-indigo-600',
    status: 'Development',
    link: '#'
  }
];

const featuredProjects = allProjects.slice(0, 3);

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const displayedProjects = showAllProjects ? allProjects : featuredProjects;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  
  const paginatedProjects = showAllProjects 
    ? allProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
    : featuredProjects;

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

        <div className={`grid gap-8 transition-all duration-700 ease-in-out ${
          showAllProjects ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-3'
        }`}>
          {paginatedProjects.map((project: any, index: number) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 rounded-lg border border-purple-500/20 overflow-hidden hover:border-purple-500/60 transition-all duration-500 cursor-pointer animate-fadeInUp"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
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
                  {project.tech.map((tech: string) => (
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

        {/* Pagination */}
        {showAllProjects && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12 animate-slideInUp">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-purple-600 text-white font-mono rounded-lg hover:bg-purple-700 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 transform"
              style={{ cursor: 'pointer' }}
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 font-mono rounded-lg transition-all duration-300 transform hover:scale-110 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  style={{ 
                    cursor: 'pointer',
                    animationDelay: `${page * 100}ms`
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-purple-600 text-white font-mono rounded-lg hover:bg-purple-700 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 transform"
              style={{ cursor: 'pointer' }}
            >
              →
            </button>
          </div>
        )}

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              setShowAllProjects(!showAllProjects);
              setCurrentPage(1);
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transform overflow-hidden"
            style={{ cursor: 'pointer' }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 blur-sm"></div>
            
            <span className="relative z-10 mr-2 transition-all duration-300">
              {showAllProjects ? 'VER PROJETOS EM DESTAQUE' : 'VER TODOS OS PROJETOS'}
            </span>
            <span className="relative z-10 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300 inline-block">
              {showAllProjects ? '↑' : '→'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
