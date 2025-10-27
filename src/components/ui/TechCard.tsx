import React from 'react';
import { ITechnology } from '@/types';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaGitAlt,
  FaJava 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiGraphql, 
  SiRedis, 
  SiKubernetes,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiSass,
  SiVite,
  SiExpress,
  SiNestjs,
  SiPython,
  SiFastapi,
  SiSpring,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiNginx,
  SiReact,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiExpo,
  SiFigma,
  SiPostman,
  SiJira,
  SiSlack,
  SiNotion
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
  SiKubernetes,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiSass,
  SiVite,
  SiExpress,
  SiNestjs,
  SiPython,
  SiFastapi,
  FaJava,
  SiSpring,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiNginx,
  SiReact,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiExpo,
  SiFigma,
  SiPostman,
  SiJira,
  SiSlack,
  SiNotion
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
    const colorMap: Record<string, string> = {
      'FaReact': '#61DAFB',        // React official cyan
      'SiTypescript': '#3178C6',   // TypeScript official blue
      'FaNodeJs': '#339933',       // Node.js official green
      'SiNextdotjs': '#FFFFFF',    // Next.js official white (better visibility)
      'FaDocker': '#2496ED',       // Docker official blue
      'SiPostgresql': '#336791',   // PostgreSQL official blue
      'SiMongodb': '#47A248',      // MongoDB official green
      'FaAws': '#FF9900',          // AWS official orange
      'FaGitAlt': '#F05032',       // Git official red-orange
      'SiGraphql': '#E10098',      // GraphQL official pink
      'SiRedis': '#DC382D',        // Redis official red
      'SiKubernetes': '#326CE5',   // Kubernetes official blue
      'SiVuedotjs': '#4FC08D',     // Vue.js official green
      'SiAngular': '#DD0031',      // Angular official red
      'SiTailwindcss': '#06B6D4',  // Tailwind CSS official cyan
      'SiSass': '#CC6699',         // Sass official pink
      'SiVite': '#646CFF',         // Vite official purple
      'SiExpress': '#000000',      // Express official black
      'SiNestjs': '#E0234E',       // NestJS official red
      'SiPython': '#3776AB',       // Python official blue
      'SiFastapi': '#009688',      // FastAPI official teal
      'FaJava': '#ED8B00',         // Java official orange
      'SiSpring': '#6DB33F',       // Spring official green
      'SiMysql': '#4479A1',        // MySQL official blue
      'SiSqlite': '#003B57',       // SQLite official dark blue
      'SiFirebase': '#FFCA28',     // Firebase official yellow
      'SiGithubactions': '#2088FF', // GitHub Actions official blue
      'SiJenkins': '#D24939',      // Jenkins official red
      'SiTerraform': '#623CE4',    // Terraform official purple
      'SiNginx': '#009639',        // Nginx official green
      'SiReact': '#61DAFB',        // React Native (same as React)
      'SiFlutter': '#02569B',      // Flutter official blue
      'SiSwift': '#FA7343',        // Swift official orange
      'SiKotlin': '#7F52FF',       // Kotlin official purple
      'SiExpo': '#000020',         // Expo official dark
      'SiFigma': '#F24E1E',        // Figma official red
      'SiPostman': '#FF6C37',      // Postman official orange
      'SiJira': '#0052CC',         // Jira official blue
      'SiSlack': '#4A154B',        // Slack official purple
      'SiNotion': '#000000'        // Notion official black
    };
    return colorMap[iconName] || '#8B5CF6'; // Default purple if not found
  };

  return (
    <div
      className="group relative p-6 bg-gray-900/70 rounded-xl border-2 border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 min-h-[180px] flex flex-col"
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
      
      <div className="relative z-10 text-center flex flex-col h-full">
        <div className="h-16 mb-4 flex justify-center items-center">
          {IconComponent ? (
            <IconComponent 
              className="text-5xl transition-all duration-300 group-hover:scale-110"
              style={{ 
                color: getIconColor(tech.icon),
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
              }}
            />
          ) : (
            <div className="text-5xl text-purple-400">⚙️</div>
          )}
        </div>
        <h3 className="font-mono font-bold text-white mb-3 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {tech.name}
        </h3>
        <p className="text-sm text-gray-400 font-mono leading-relaxed flex-grow flex items-center justify-center">
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
