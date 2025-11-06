import React from 'react';
import { IButtonProps } from '@/types';

// SRP: Responsabilidade única - apenas renderiza botões
// OCP: Aberto para extensão através de variantes e props
export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  style
}) => {
  const baseClasses = 'font-mono font-bold rounded-lg transition-all duration-500 transform overflow-hidden relative group';
  
  const variantClasses = {
    primary: disabled || isLoading 
      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-pink-600 hover:to-purple-600 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50',
    secondary: disabled || isLoading
      ? 'bg-gray-800 text-gray-300'
      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105',
    outline: disabled || isLoading
      ? 'border-2 border-cyan-400 text-cyan-400'
      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled || isLoading 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={combinedClasses}
      style={style}
    >
      {/* Shimmer Effect - only for primary variant when not loading */}
      {variant === 'primary' && !isLoading && !disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      )}
      
      {/* Pulse Ring - only for primary variant when not loading */}
      {variant === 'primary' && !isLoading && !disabled && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 blur-sm"></div>
      )}
      
      {/* Loading Ring */}
      {isLoading && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
      )}
      
      <span className="relative z-10">
        {isLoading ? (
          <span className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Carregando...
          </span>
        ) : (
          children
        )}
      </span>
    </button>
  );
};
