import React, { useState, useEffect } from 'react';
import { ITechnology } from '@/types';
import { TechCard } from './TechCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TechCarouselProps {
  technologies: ITechnology[];
  category: string;
}

// SRP: Single responsibility - only handles carousel functionality
export const TechCarousel: React.FC<TechCarouselProps> = ({
  technologies,
  category
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3;
  };
  
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, technologies.length - itemsPerView);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const visibleTechnologies = technologies.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
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

      {/* Carousel Container */}
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

      {/* Indicators */}
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
