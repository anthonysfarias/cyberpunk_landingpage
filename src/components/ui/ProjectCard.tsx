import React from 'react';
import { IProject } from '@/types';
import { Button } from './Button';
import { StatusService } from '@/factories/statusFactory';

interface ProjectCardProps {
  project: IProject;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

// SRP: Responsabilidade única - apenas renderiza cards de projeto
// OCP: Usa factory para status, aberto para novos tipos
// DIP: Depende da abstração StatusService
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isHovered,
  onHover
}) => {

  return (
    <div
      className="group relative bg-gray-900/50 rounded-lg border border-purple-500/20 overflow-hidden transition-all duration-500 cursor-pointer animate-fadeInUp"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Cyberpunk Border Effects - Only on edges */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-border-light"></div>
        
        {/* Glitch border effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-purple-500/40 animate-border-glitch"></div>
      </div>
      
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {project.image.startsWith('/') ? (
          <img 
            src={project.image} 
            alt={project.title}
            className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
              project.image.includes('rbxrobotica') || project.image.includes('nplbrasil') 
                ? 'w-32 h-32' 
                : 'w-52 h-52'
            }`}
          />
        ) : (
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {project.image}
          </div>
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold border ${StatusService.getStatusClasses(project.status)}`}>
          {StatusService.getStatusLabel(project.status)}
        </div>

      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col h-[310px]">
        <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack with scroll */}
        <div className="flex-1 mb-4 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-mono rounded border border-purple-500/30 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons - Fixed position */}
        <div className="flex gap-3 mt-auto">
          <Button 
            variant="primary" 
            size="sm" 
            className="flex-1"
            disabled={!project.demoLink}
            onClick={() => project.demoLink && window.open(project.demoLink, '_blank')}
          >
            Demo
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            disabled={!project.codeLink}
            onClick={() => project.codeLink && window.open(project.codeLink, '_blank')}
          >
            Code
          </Button>
        </div>
      </div>

    </div>
  );
};
