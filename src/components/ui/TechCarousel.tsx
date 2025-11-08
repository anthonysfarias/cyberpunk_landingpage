import React, { useState, useEffect, useRef } from 'react';
import { ITechnology } from '@/types';
import { TechCard } from './TechCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TechCarouselProps {
  technologies: ITechnology[];
  category: string;
}

// SRP: Responsabilidade única - apenas gerencia funcionalidade do carrossel
export const TechCarousel: React.FC<TechCarouselProps> = ({
  technologies,
  category
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Itens responsivos por visualização
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3;
  };
  
  const [itemsPerView, setItemsPerView] = useState(3);
  const maxIndex = Math.max(0, technologies.length - itemsPerView);

  // Detecta o tamanho real no primeiro render do cliente
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        setItemsPerView(getItemsPerView());
      }
    };
    
    checkMobile();
  }, []);

  // Gerencia redimensionamento da janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setItemsPerView(getItemsPerView());
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detecta scroll para atualizar indicadores (apenas mobile)
  useEffect(() => {
    if (!isMobile) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / technologies.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [technologies.length, isMobile]);

  // Navegação com setas (desktop)
  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Função para scroll suave até um índice específico (mobile)
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = container.scrollWidth / technologies.length;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  };

  // Renderização condicional: Mobile usa scroll, Desktop usa setas
  if (isMobile) {
    return (
      <div className="relative">
        {/* Container do Carrossel com Scroll Horizontal - MOBILE ONLY */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 px-4 pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex-shrink-0 snap-start snap-always"
              style={{ width: 'calc(100% - 2rem)' }}
            >
              <TechCard
                tech={tech}
                index={index}
                isHovered={hoveredTech === tech.name}
                onHover={setHoveredTech}
              />
            </div>
          ))}
        </div>

        {/* Indicadores de Posição (Dots) - Mobile */}
        <div className="flex justify-center mt-8 gap-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index 
                  ? 'w-8 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                  : 'w-2.5 h-2.5 bg-gray-600/50 hover:bg-gray-500'
              }`}
              aria-label={`Ir para tecnologia ${index + 1}`}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop: Carrossel com setas (comportamento original)
  return (
    <div className="relative">
      {/* Botões de Navegação - DESKTOP ONLY */}
      {technologies.length > itemsPerView && (
        <>
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl disabled:hover:scale-100"
            style={{ cursor: 'pointer' }}
          >
            <FaChevronLeft className="text-white text-base" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl disabled:hover:scale-100"
            style={{ cursor: 'pointer' }}
          >
            <FaChevronRight className="text-white text-base" />
          </button>
        </>
      )}

      {/* Container do Carrossel - DESKTOP */}
      <div className="overflow-hidden px-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-8"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / itemsPerView}% - 2rem)` }}
            >
              <TechCard
                tech={tech}
                index={index}
                isHovered={hoveredTech === tech.name}
                onHover={setHoveredTech}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores - DESKTOP */}
      {technologies.length > itemsPerView && (
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === i 
                  ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg' 
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
              }`}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
