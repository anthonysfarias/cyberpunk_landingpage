import React from 'react';
import { ITypingAnimationProps } from '@/types';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

// SRP: Single responsibility - only handles typing animation display
export const TypingAnimation: React.FC<ITypingAnimationProps> = ({
  text,
  speed = 50,
  onComplete
}) => {
  const { displayedText, isComplete, startAnimation } = useTypingAnimation(text, speed);

  React.useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  // Auto-start animation when component mounts
  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <span className="font-mono">
      <span dangerouslySetInnerHTML={{
        __html: displayedText
          .replace(/const developer = \{/, '<span class="text-green-400">const developer = {</span>')
          .replace(/'Alex Cyber'/, '<span class="text-cyan-400">\'Alex Cyber\'</span>')
          .replace(/'Fullstack Developer'/, '<span class="text-pink-400">\'Fullstack Developer\'</span>')
          .replace(/'React', 'Node\.js', 'TypeScript'/, '<span class="text-purple-400">\'React\', \'Node.js\', \'TypeScript\'</span>')
          .replace(/'Innovation'/, '<span class="text-yellow-400">\'Innovation\'</span>')
      }} />
      {!isComplete && (
        <span className="animate-pulse text-purple-400">|</span>
      )}
    </span>
  );
};
