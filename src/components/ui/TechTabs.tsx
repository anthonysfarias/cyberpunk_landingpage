import React, { useState } from 'react';
import { getTechnologiesByCategory, getCategoryLabels } from '@/data/technologies';
import { TechCarousel } from './TechCarousel';
import { 
  FaPalette, 
  FaBolt, 
  FaDatabase, 
  FaCloud, 
  FaMobile, 
  FaTools 
} from 'react-icons/fa';

// Mapeamento de ícones para categorias
const categoryIconMap = {
  FaPalette,
  FaBolt,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaTools
};

// SRP: Responsabilidade única - apenas gerencia navegação de tabs e exibição de categorias
export const TechTabs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const technologiesByCategory = getTechnologiesByCategory();
  const categoryLabels = getCategoryLabels();

  return (
    <div className="w-full">
      {/* Navegação das Abas */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {Object.entries(categoryLabels).map(([key, label]) => {
          const IconComponent = categoryIconMap[label.icon as keyof typeof categoryIconMap];
          const isActive = activeCategory === key;
          
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl font-mono font-bold transition-all duration-300 transform hover:scale-105 min-w-[140px] justify-center ${
                isActive
                  ? `bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/50 scale-105`
                  : 'bg-gray-900/70 text-gray-300 hover:bg-gray-800/70 border-2 border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20'
              }`}
              style={{ cursor: 'pointer' }}
            >
              {IconComponent && (
                <IconComponent className={`text-xl ${isActive ? 'text-white' : label.color} transition-colors duration-300`} />
              )}
              <span className="text-base font-semibold">{label.name}</span>
              
              
              {/* Efeito de brilho */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-sm -z-10"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Conteúdo das Abas */}
      <div className="relative">
        {Object.entries(technologiesByCategory).map(([category, technologies]) => (
          <div
            key={category}
            className={`transition-all duration-500 ${
              activeCategory === category
                ? 'opacity-100 translate-y-0 relative'
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}
          >
            {activeCategory === category && (
              <TechCarousel
                technologies={technologies}
                category={category}
              />
            )}
          </div>
        ))}
      </div>

      {/* Informações da Categoria */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl border-2 border-purple-500/30 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
          <span className="text-base text-gray-300 font-mono">
            {technologiesByCategory[activeCategory]?.length || 0} tecnologias em
          </span>
          <span className={`text-base font-mono font-bold ${categoryLabels[activeCategory as keyof typeof categoryLabels]?.color} bg-gradient-to-r bg-clip-text text-transparent from-purple-400 to-pink-400`}>
            {categoryLabels[activeCategory as keyof typeof categoryLabels]?.name}
          </span>
        </div>
      </div>
    </div>
  );
};
