import React from 'react';
import { IProject } from '@/types';
import { Button } from './Button';

interface ProjectCardProps {
  project: IProject;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

// SRP: Responsabilidade única - apenas renderiza cards de projeto
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isHovered,
  onHover
}) => {
  const getStatusColor = (status: IProject['status']) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Beta':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Em desenvolvimento':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div
      className="group relative bg-gray-900/50 rounded-lg border border-purple-500/20 overflow-hidden hover:border-purple-500/60 transition-all duration-500 cursor-pointer animate-fadeInUp"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {project.image.startsWith('/') ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-52 h-52 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {project.image}
          </div>
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold border ${getStatusColor(project.status)}`}>
          {project.status}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm">
            VER PROJETO
          </Button>
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
          <Button variant="primary" size="sm" className="flex-1">
            Demo
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Code
          </Button>
        </div>
      </div>

      {/* Glitch Effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 animate-pulse`}></div>
        </div>
      )}
    </div>
  );
};
