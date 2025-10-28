import React, { useState } from 'react';
import { ITimelineItem } from '@/types';
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TimelineItemProps {
  item: ITimelineItem;
  index: number;
  isLeft: boolean;
}

// Mapeamento de ícones para itens da timeline
const iconMap = {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaRocket
};

// SRP: Responsabilidade única - apenas renderiza itens da timeline
export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isLeft
}) => {
  const IconComponent = iconMap[item.icon as keyof typeof iconMap];
  const { ref, isVisible } = useIntersectionObserver(0.3);
  const divRef = ref as React.RefObject<HTMLDivElement>;
  
  // Estado para controlar o collapse das tecnologias
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determina se deve mostrar o botão de collapse (mais de 6 tecnologias)
  const shouldShowCollapse = item.technologies.length > 6;
  const displayedTechnologies = shouldShowCollapse && !isExpanded 
    ? item.technologies.slice(0, 6) 
    : item.technologies;

  const getTypeLabel = (type: ITimelineItem['type']) => {
    switch (type) {
      case 'work':
        return 'TRABALHO';
      case 'education':
        return 'EDUCAÇÃO';
      case 'project':
        return 'PROJETO';
      default:
        return 'EXPERIÊNCIA';
    }
  };

  const getTypeColor = (type: ITimelineItem['type']) => {
    switch (type) {
      case 'work':
        return 'text-blue-400 border-blue-400';
      case 'education':
        return 'text-green-400 border-green-400';
      case 'project':
        return 'text-purple-400 border-purple-400';
      default:
        return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <div 
      ref={divRef}
      className={`flex items-center mb-12 transition-all duration-700 ${isLeft ? 'flex-row-reverse' : 'flex-row'} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : `opacity-0 ${isLeft ? 'translate-x-20' : '-translate-x-20'} translate-y-10`
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        transform: isVisible ? 'none' : `translateX(${isLeft ? '80px' : '-80px'}) translateY(40px)`
      }}
    >
      {/* Conteúdo */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className={`group relative p-6 bg-gray-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 transform hover:scale-105 ${
          isVisible ? 'animate-slideInScale' : ''
        }`}>
          {/* Efeito de Brilho */}
          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
          
          <div className="relative z-10">
            {/* Ano e Tipo */}
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              <span className="text-2xl font-mono font-bold text-white">
                {item.year}
              </span>
              <span className={`px-2 py-1 text-xs font-mono font-bold border rounded ${getTypeColor(item.type)}`}>
                {getTypeLabel(item.type)}
              </span>
            </div>

            {/* Título e Empresa */}
            <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
              {item.title}
            </h3>
            <h4 className="text-lg font-mono text-cyan-400 mb-4">
              {item.company}
            </h4>

            {/* Descrição */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Tecnologias */}
            <div className="space-y-3">
              <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'} transition-all duration-500`}>
                {displayedTechnologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-mono rounded border border-purple-500/30 transition-all duration-300 ${
                      shouldShowCollapse && !isExpanded && techIndex >= 4 
                        ? 'animate-fade-in-up' 
                        : ''
                    }`}
                    style={{
                      animationDelay: shouldShowCollapse && !isExpanded && techIndex >= 4 
                        ? `${(techIndex - 4) * 50}ms` 
                        : '0ms'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Botão de Collapse - Apenas Seta */}
              {shouldShowCollapse && (
                <div className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group w-8 h-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 text-purple-300 hover:text-white rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer"
                  >
                    {isExpanded ? (
                      <FaChevronUp className="text-sm group-hover:animate-bounce" />
                    ) : (
                      <FaChevronDown className="text-sm group-hover:animate-bounce" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ícone da Timeline */}
      <div className="w-2/12 flex justify-center">
        <div className={`relative w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
          isVisible 
            ? 'scale-100 rotate-0 opacity-100' 
            : 'scale-0 rotate-180 opacity-0'
        } hover:scale-125 hover:shadow-2xl`}
        style={{ transitionDelay: `${index * 200 + 300}ms` }}>
          {IconComponent && (
            <IconComponent className={`text-white text-xl transition-all duration-300 ${
              isVisible ? 'animate-bounce' : ''
            }`} />
          )}
          
          {/* Anel Pulsante */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 ${
            isVisible ? 'animate-ping' : ''
          }`}></div>
          
          {/* Linha Conectora */}
          {index > 0 && (
            <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent transition-all duration-1000 ${
              isVisible ? 'h-12 opacity-100' : 'h-0 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200 + 100}ms` }}></div>
          )}
        </div>
      </div>

      {/* Espaço Vazio */}
      <div className="w-5/12"></div>
    </div>
  );
};
