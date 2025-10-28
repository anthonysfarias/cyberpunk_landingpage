'use client';

import { getTimelineItems } from '@/data/timeline';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// SRP: Componente Timeline apenas gerencia exibição da seção timeline
// DIP: Depende de abstrações (serviços de dados, componentes) não de concretizações
export default function Timeline() {
  const timelineItems = getTimelineItems();
  const { ref: timelineRef, isVisible: timelineVisible } = useIntersectionObserver(0.2);

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Efeitos de Fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            &lt;TIMELINE/&gt;
          </h2>
          <p className="text-xl text-gray-300 font-mono">
            Minha jornada profissional e acadêmica
          </p>
        </div>

        {/* Container da Timeline */}
        <div ref={timelineRef as React.RefObject<HTMLDivElement>} className="relative">
          {/* Linha Central */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transition-all duration-2000 ease-out ${
            timelineVisible 
              ? 'h-full opacity-30' 
              : 'h-0 opacity-0'
          }`}></div>
          
          {/* Itens da Timeline */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* Final da Timeline */}
          <div className="flex justify-center">
            <div className={`w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg transition-all duration-500 ${
              timelineVisible ? 'scale-100' : 'scale-0'
            }`} style={{ transitionDelay: '1000ms' }}></div>
          </div>
        </div>

        {/* Seção de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className={`text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30 transition-all duration-500 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1200ms' }}>
            <div className={`text-3xl font-mono font-bold text-purple-400 mb-2 ${
              timelineVisible ? 'animate-cyberpunk-complete' : ''
            }`} style={{ animationDelay: '1400ms' }}>4+</div>
            <div className={`text-sm text-gray-200 font-mono font-semibold ${
              timelineVisible ? 'animate-cyberpunk-typewriter' : ''
            }`} style={{ animationDelay: '1600ms' }}>ANOS DE EXPERIÊNCIA</div>
          </div>
          
          <div className={`text-center p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg border border-cyan-500/30 transition-all duration-500 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1400ms' }}>
            <div className={`text-3xl font-mono font-bold text-cyan-400 mb-2 ${
              timelineVisible ? 'animate-cyberpunk-complete' : ''
            }`} style={{ animationDelay: '1600ms' }}>15+</div>
            <div className={`text-sm text-gray-200 font-mono font-semibold ${
              timelineVisible ? 'animate-cyberpunk-typewriter' : ''
            }`} style={{ animationDelay: '1800ms' }}>PROJETOS CONCLUÍDOS</div>
          </div>
          
          <div className={`text-center p-6 bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-lg border border-green-500/30 transition-all duration-500 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1600ms' }}>
            <div className={`text-3xl font-mono font-bold text-green-400 mb-2 ${
              timelineVisible ? 'animate-cyberpunk-complete' : ''
            }`} style={{ animationDelay: '1800ms' }}>10+</div>
            <div className={`text-sm text-gray-200 font-mono font-semibold ${
              timelineVisible ? 'animate-cyberpunk-typewriter' : ''
            }`} style={{ animationDelay: '2000ms' }}>TECNOLOGIAS DOMINADAS</div>
          </div>
          
          <div className={`text-center p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg border border-orange-500/30 transition-all duration-500 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1800ms' }}>
            <div className={`text-3xl font-mono font-bold text-orange-400 mb-2 ${
              timelineVisible ? 'animate-cyberpunk-complete' : ''
            }`} style={{ animationDelay: '2000ms' }}>100%</div>
            <div className={`text-sm text-gray-200 font-mono font-semibold ${
              timelineVisible ? 'animate-cyberpunk-typewriter' : ''
            }`} style={{ animationDelay: '2200ms' }}>DEDICAÇÃO</div>
          </div>
        </div>
      </div>
    </section>
  );
}
