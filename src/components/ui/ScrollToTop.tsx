'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

// SRP: Componente responsável apenas pelo botão de scroll to top
export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece após rolar 25% da página
      const scrollThreshold = window.innerHeight * 0.25;
      
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona listener de scroll
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
      style={{ cursor: 'pointer' }}
    >
      {/* Ícone da seta */}
      <FaArrowUp className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
      
      {/* Efeito de brilho */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300 -z-10"></div>
      
      {/* Anel pulsante */}
      <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-ping-slow"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </div>
    </button>
  );
};
