'use client';

import { useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

// SRP: Componente About apenas gerencia exibição da seção sobre
export default function About() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver(0.3);
  
  const codeText = `const developer = {
  name: 'Anthony Farias',
  role: 'Fullstack Developer',
  skills: [
    'React', 'Node.js', 'TypeScript'
  ],
  passion: 'Innovation'
};`;

  const { displayedText, isComplete, startAnimation } = useTypingAnimation(codeText, 50);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);
  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              &lt;SOBRE/&gt;
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Desenvolvedor <span className="text-cyan-400 font-mono">fullstack</span> especializado em criar 
                experiências digitais inovadoras. Com expertise em <span className="text-purple-400 font-mono">Next.js</span>, 
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

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-purple-400">4+</div>
                <div className="text-sm text-gray-400 font-mono">ANOS EXP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-cyan-400">10+</div>
                <div className="text-sm text-gray-400 font-mono">PROJETOS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-pink-400">100%</div>
                <div className="text-sm text-gray-400 font-mono">DEDICAÇÃO</div>
              </div>
            </div>
          </div>

          {/* Elemento Visual */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30 overflow-hidden">
              {/* Animação de Código */}
              <div className="absolute inset-4 font-mono text-sm text-green-400">
                <pre className="whitespace-pre-wrap">
                  <span dangerouslySetInnerHTML={{
                    __html: displayedText
                      .replace(/const developer = \{/, '<span class="text-green-400">const developer = {</span>')
                      .replace(/'Anthony Farias'/, '<span class="text-cyan-400">\'Anthony Farias\'</span>')
                      .replace(/'Fullstack Developer'/, '<span class="text-pink-400">\'Fullstack Developer\'</span>')
                      .replace(/'React', 'Node\.js', 'TypeScript'/, '<span class="text-purple-400">\'React\', \'Node.js\', \'TypeScript\'</span>')
                      .replace(/'Innovation'/, '<span class="text-yellow-400">\'Innovation\'</span>')
                  }} />
                  {!isComplete && (
                    <span className="animate-pulse text-purple-400">|</span>
                  )}
                </pre>
              </div>
              
              {/* Efeitos Glitch */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
