export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              &lt;SOBRE/&gt;
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Desenvolvedor <span className="text-cyan-400 font-mono">fullstack</span> especializado em criar 
                experiências digitais inovadoras. Com expertise em <span className="text-purple-400 font-mono">React</span>, 
                <span className="text-green-400 font-mono"> Node.js</span> e <span className="text-blue-400 font-mono">TypeScript</span>, 
                transformo ideias complexas em soluções elegantes e funcionais.
              </p>
              
              <p>
                Minha paixão está na intersecção entre design e tecnologia, onde cada linha de código 
                é uma oportunidade de construir o futuro. Especialista em <span className="text-pink-400 font-mono">APIs RESTful</span>, 
                <span className="text-cyan-400 font-mono"> microserviços</span> e <span className="text-purple-400 font-mono">deploy automatizado</span>.
              </p>
              
              <p>
                Quando não estou codificando, estou explorando novas tecnologias, contribuindo para 
                projetos open source ou hackeando soluções criativas para problemas do mundo real.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400 font-mono">ANOS EXP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-400 font-mono">PROJETOS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-pink-400">100%</div>
                <div className="text-sm text-gray-400 font-mono">DEDICAÇÃO</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30 overflow-hidden">
              {/* Code Animation */}
              <div className="absolute inset-4 font-mono text-sm text-green-400 opacity-60">
                <div className="animate-pulse">
                  <div className="mb-2">const developer = &#123;</div>
                  <div className="ml-4 mb-1">name: <span className="text-cyan-400">'Alex Cyber'</span>,</div>
                  <div className="ml-4 mb-1">role: <span className="text-pink-400">'Fullstack Developer'</span>,</div>
                  <div className="ml-4 mb-1">skills: [</div>
                  <div className="ml-8 mb-1 text-purple-400">'React', 'Node.js', 'TypeScript'</div>
                  <div className="ml-4 mb-1">],</div>
                  <div className="ml-4 mb-1">passion: <span className="text-yellow-400">'Innovation'</span></div>
                  <div>&#125;;</div>
                </div>
              </div>
              
              {/* Glitch Effects */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
