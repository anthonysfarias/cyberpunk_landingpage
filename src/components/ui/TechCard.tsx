import React from 'react';
import { ITechnology } from '@/types';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiGraphql, 
  SiRedis, 
  SiKubernetes 
} from 'react-icons/si';

interface TechCardProps {
  tech: ITechnology;
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}

// Icon mapping local
const iconMap = {
  FaReact,
  SiTypescript,
  FaNodeJs,
  SiNextdotjs,
  FaDocker,
  SiPostgresql,
  SiMongodb,
  FaAws,
  FaGitAlt,
  SiGraphql,
  SiRedis,
  SiKubernetes
};

// SRP: Single responsibility - only renders technology cards
export const TechCard: React.FC<TechCardProps> = ({
  tech,
  index,
  isHovered,
  onHover
}) => {
  // Get the icon component dynamically
  const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
  
  // Official brand colors for each technology
  const getIconColor = (iconName: string) => {
    const colorMap = {
      'FaReact': '#61DAFB',        // React official cyan
      'SiTypescript': '#3178C6',   // TypeScript official blue
      'FaNodeJs': '#339933',       // Node.js official green
      'SiNextdotjs': '#000000',    // Next.js official black
      'FaDocker': '#2496ED',       // Docker official blue
      'SiPostgresql': '#336791',   // PostgreSQL official blue
      'SiMongodb': '#47A248',      // MongoDB official green
      'FaAws': '#FF9900',          // AWS official orange
      'FaGitAlt': '#F05032',       // Git official red-orange
      'SiGraphql': '#E10098',      // GraphQL official pink
      'SiRedis': '#DC382D',        // Redis official red
      'SiKubernetes': '#326CE5'    // Kubernetes official blue
    };
    return colorMap[iconName as keyof typeof colorMap] || '#FFFFFF';
  };

  return (
    <div
      className="group relative p-6 bg-gray-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
      
      <div className="relative z-10 text-center">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
          {IconComponent ? (
            <IconComponent 
              className="text-4xl transition-all duration-300 group-hover:brightness-125"
              style={{ 
                color: getIconColor(tech.icon),
                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))'
              }}
            />
          ) : (
            <div className="text-4xl">⚙️</div>
          )}
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
  );
};
