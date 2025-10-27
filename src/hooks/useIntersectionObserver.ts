import { useState, useEffect, useRef } from 'react';
import { IUseIntersectionObserver } from '@/types';

// SRP: Responsabilidade única - apenas gerencia observação de interseção
export const useIntersectionObserver = (
  threshold: number = 0.3
): IUseIntersectionObserver => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return { ref, isVisible };
};
