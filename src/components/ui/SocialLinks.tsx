import React from 'react';
import { getSocialMedia } from '@/data/socialMedia';
import { ISocialMedia } from '@/types';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaDiscord, 
  FaYoutube 
} from 'react-icons/fa';

// Mapeamento de ícones para redes sociais
const socialIconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube
};

interface SocialLinksProps {
  layout?: 'grid' | 'horizontal';
  showDescription?: boolean;
  className?: string;
}

// SRP: Responsabilidade única - apenas renderiza links de redes sociais
export const SocialLinks: React.FC<SocialLinksProps> = ({ 
  layout = 'grid', 
  showDescription = false,
  className = '' 
}) => {
  const socialMedia = getSocialMedia();

  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-4 justify-center';
      case 'grid':
      default:
        return 'grid grid-cols-2 sm:grid-cols-3 gap-4';
    }
  };

  return (
    <div className={`${getLayoutClasses()} ${className}`}>
      {socialMedia.map((social: ISocialMedia) => {
        const IconComponent = socialIconMap[social.icon as keyof typeof socialIconMap];
        
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-2 border-purple-500/20 rounded-xl ${social.hoverColor} transition-all duration-500 text-center hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 transform backdrop-blur-sm overflow-hidden`}
            title={social.description}
          >
            {/* Background glow effect */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-all duration-500 blur-sm`}></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-500"></div>
            
            {/* Neon glow */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl scale-110`}></div>
            
            <div className="relative z-10">
              {IconComponent && (
                <div className="relative">
                  <IconComponent className={`text-3xl mb-3 group-hover:scale-125 transition-all duration-500 text-gray-300 ${social.textColor} drop-shadow-lg`} />
                  {/* Icon glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className={`text-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 ${social.textColor} blur-sm`} />
                  </div>
                </div>
              )}
              <div className={`font-mono text-sm font-bold text-gray-300 ${social.textColor} transition-all duration-500 tracking-wider`}>
                {social.name.toUpperCase()}
              </div>
              {showDescription && (
                <div className="text-xs text-gray-500 mt-2 font-mono opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {social.description}
                </div>
              )}
            </div>

            {/* Cyberpunk lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-purple-400/0 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/80 transition-all duration-500"></div>
          </a>
        );
      })}
    </div>
  );
};
