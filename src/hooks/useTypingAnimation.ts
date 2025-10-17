import { useState, useEffect } from 'react';
import { IUseTypingAnimation } from '@/types';

// SRP: Single responsibility - only handles typing animation logic
export const useTypingAnimation = (
  text: string,
  speed: number = 50,
  startImmediately: boolean = false
): IUseTypingAnimation => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(startImmediately);

  const startAnimation = () => {
    setShouldStart(true);
  };

  useEffect(() => {
    if (!shouldStart) return;

    let index = 0;
    setDisplayedText('');
    setIsComplete(false);

    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      
      if (index > text.length) {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, shouldStart]);

  return { displayedText, isComplete, startAnimation };
};
