import { useState, useCallback } from 'react';
import { IAnimationConfig } from '@/types';

// SRP: Responsabilidade única - controlar animações
// OCP: Aberto para extensão com novos tipos de animação
export interface IAnimationState {
  isAnimating: boolean;
  isComplete: boolean;
  progress: number;
}

export interface IAnimationController {
  state: IAnimationState;
  start: () => void;
  pause: () => void;
  reset: () => void;
  setProgress: (progress: number) => void;
}

export const useAnimationController = (
  config: IAnimationConfig = { duration: 1000 }
): IAnimationController => {
  const [state, setState] = useState<IAnimationState>({
    isAnimating: false,
    isComplete: false,
    progress: 0
  });

  const start = useCallback(() => {
    setState(prev => ({
      ...prev,
      isAnimating: true,
      isComplete: false
    }));

    // Simular progresso da animação
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / config.duration, 1);

      setState(prev => ({
        ...prev,
        progress,
        isComplete: progress >= 1,
        isAnimating: progress < 1
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [config.duration]);

  const pause = useCallback(() => {
    setState(prev => ({
      ...prev,
      isAnimating: false
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      isAnimating: false,
      isComplete: false,
      progress: 0
    });
  }, []);

  const setProgress = useCallback((progress: number) => {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    setState(prev => ({
      ...prev,
      progress: clampedProgress,
      isComplete: clampedProgress >= 1,
      isAnimating: false
    }));
  }, []);

  return {
    state,
    start,
    pause,
    reset,
    setProgress
  };
};

// Hook especializado para animações de entrada (SRP)
export const useEntryAnimation = (delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  const trigger = useCallback(() => {
    if (delay > 0) {
      setTimeout(() => setIsVisible(true), delay);
    } else {
      setIsVisible(true);
    }
  }, [delay]);

  const reset = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    trigger,
    reset,
    className: isVisible ? 'animate-fade-in-up' : 'opacity-0'
  };
};

// Hook para animações de hover (SRP)
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    isHovered,
    onMouseEnter,
    onMouseLeave,
    hoverProps: {
      onMouseEnter,
      onMouseLeave
    }
  };
};
