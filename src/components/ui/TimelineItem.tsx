import React from 'react';
import { ITimelineItem } from '@/types';
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TimelineItemProps {
  item: ITimelineItem;
  index: number;
  isLeft: boolean;
}

// Icon mapping for timeline items
const iconMap = {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaRocket
};

// SRP: Single responsibility - only renders timeline items
export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isLeft
}) => {
  const IconComponent = iconMap[item.icon as keyof typeof iconMap];
  const { ref, isVisible } = useIntersectionObserver(0.3);
  const divRef = ref as React.RefObject<HTMLDivElement>;

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
      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className={`group relative p-6 bg-gray-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 transform hover:scale-105 ${
          isVisible ? 'animate-slideInScale' : ''
        }`}>
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
          
          <div className="relative z-10">
            {/* Year & Type */}
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              <span className="text-2xl font-mono font-bold text-white">
                {item.year}
              </span>
              <span className={`px-2 py-1 text-xs font-mono font-bold border rounded ${getTypeColor(item.type)}`}>
                {getTypeLabel(item.type)}
              </span>
            </div>

            {/* Title & Company */}
            <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
              {item.title}
            </h3>
            <h4 className="text-lg font-mono text-cyan-400 mb-4">
              {item.company}
            </h4>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Technologies */}
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-mono rounded border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Icon */}
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
          
          {/* Pulse Ring */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 ${
            isVisible ? 'animate-ping' : ''
          }`}></div>
          
          {/* Connecting Line */}
          {index > 0 && (
            <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent transition-all duration-1000 ${
              isVisible ? 'h-12 opacity-100' : 'h-0 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200 + 100}ms` }}></div>
          )}
        </div>
      </div>

      {/* Empty Space */}
      <div className="w-5/12"></div>
    </div>
  );
};
