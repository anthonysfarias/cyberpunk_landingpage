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

// Mapeamento local de ícones
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

// SRP: Responsabilidade única - apenas renderiza cards de tecnologia
export const TechCard: React.FC<TechCardProps> = ({
  tech,
  index,
  isHovered,
  onHover
}) => {
  // Obtém o componente de ícone dinamicamente
  const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
  
  // Cores oficiais das marcas para cada tecnologia
  const getIconColor = (iconName: string) => {
    const colorMap: Record<string, string> = {
      'FaReact': '#61DAFB',        // React ciano oficial
      'SiTypescript': '#3178C6',   // TypeScript azul oficial
      'FaNodeJs': '#339933',       // Node.js verde oficial
      'SiNextdotjs': '#FFFFFF',    // Next.js branco oficial (melhor visibilidade)
      'FaDocker': '#2496ED',       // Docker azul oficial
      'SiPostgresql': '#336791',   // PostgreSQL azul oficial
      'SiMongodb': '#47A248',      // MongoDB verde oficial
      'FaAws': '#FF9900',          // AWS laranja oficial
      'FaGitAlt': '#F05032',       // Git vermelho-laranja oficial
      'SiGraphql': '#E10098',      // GraphQL rosa oficial
      'SiRedis': '#DC382D',        // Redis vermelho oficial
      'SiKubernetes': '#326CE5',   // Kubernetes azul oficial
      'SiVuedotjs': '#4FC08D',     // Vue.js verde oficial
      'SiAngular': '#DD0031',      // Angular vermelho oficial
      'SiTailwindcss': '#06B6D4',  // Tailwind CSS ciano oficial
      'SiSass': '#CC6699',         // Sass rosa oficial
      'SiVite': '#646CFF',         // Vite roxo oficial
      'SiExpress': '#000000',      // Express preto oficial
      'SiNestjs': '#E0234E',       // NestJS vermelho oficial
      'SiPython': '#3776AB',       // Python azul oficial
      'SiFastapi': '#009688',      // FastAPI azul-esverdeado oficial
      'FaJava': '#ED8B00',         // Java laranja oficial
      'SiSpring': '#6DB33F',       // Spring verde oficial
      'SiMysql': '#4479A1',        // MySQL azul oficial
      'SiSqlite': '#003B57',       // SQLite azul escuro oficial
      'SiFirebase': '#FFCA28',     // Firebase amarelo oficial
      'SiGithubactions': '#2088FF', // GitHub Actions azul oficial
      'SiJenkins': '#D24939',      // Jenkins vermelho oficial
      'SiTerraform': '#623CE4',    // Terraform roxo oficial
      'SiNginx': '#009639',        // Nginx verde oficial
      'SiReact': '#61DAFB',        // React Native (mesmo do React)
      'SiFlutter': '#02569B',      // Flutter azul oficial
      'SiSwift': '#FA7343',        // Swift laranja oficial
      'SiKotlin': '#7F52FF',       // Kotlin roxo oficial
      'SiExpo': '#000020',         // Expo escuro oficial
      'SiFigma': '#F24E1E',        // Figma vermelho oficial
      'SiPostman': '#FF6C37',      // Postman laranja oficial
      'SiJira': '#0052CC',         // Jira azul oficial
      'SiSlack': '#4A154B',        // Slack roxo oficial
      'SiNotion': '#000000'        // Notion preto oficial
    };
    return colorMap[iconName] || '#8B5CF6'; // Roxo padrão se não encontrado
  };

  return (
    <div
      className="group relative p-6 bg-gray-900/70 rounded-xl border-2 border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 min-h-[180px] flex flex-col"
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Efeito de Brilho */}
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

      {/* Brilho no Hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} blur-xl opacity-20`}></div>
      </div>
    </div>
  );
};
