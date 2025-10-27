import React from 'react';
import { IPaginationProps } from '@/types';
import { Button } from './Button';

// SRP: Responsabilidade única - apenas gerencia interface de paginação
export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-4 mt-12 animate-slideInUp">
      <Button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        variant="secondary"
        size="sm"
        className="hover:scale-110"
      >
        ←
      </Button>
      
      <div className="flex gap-2">
        {pages.map(page => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            variant={currentPage === page ? 'primary' : 'secondary'}
            size="sm"
            className={`hover:scale-110 ${
              currentPage === page 
                ? 'shadow-lg shadow-purple-500/50 scale-105' 
                : ''
            }`}
            style={{ 
              animationDelay: `${page * 100}ms`
            }}
          >
            {page}
          </Button>
        ))}
      </div>
      
      <Button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        variant="secondary"
        size="sm"
        className="hover:scale-110"
      >
        →
      </Button>
    </div>
  );
};
