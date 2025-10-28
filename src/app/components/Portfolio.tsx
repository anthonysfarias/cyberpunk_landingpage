'use client';

import { useState } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Pagination } from '@/components/ui/Pagination';
import { Button } from '@/components/ui/Button';
import { scrollService } from '@/services/scrollService';
import { projectService } from '@/services/projectService';

// SRP: Componente Portfolio apenas gerencia lógica de exibição do portfólio
// DIP: Depende de abstrações (serviços de dados, hooks) não de concretizações
export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const allProjects = projectService.getAllProjects();
  const featuredProjects = projectService.getFeaturedProjects();
  
  const currentProjects = showAllProjects ? allProjects : featuredProjects;
  const {
    currentPage,
    totalPages,
    currentItems: paginatedProjects,
    goToPage,
    resetToFirstPage
  } = usePagination(currentProjects, 6);

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
    resetToFirstPage();
  };

  const handlePageChange = (page: number) => {
    goToPage(page);
    
    // DIP: Usando abstração do serviço de scroll
    scrollService.scrollToElement('portfolio');
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 opacity-0 animate-fade-in-down">
            &lt;PROJETOS/&gt;
          </h2>
          <p className="text-xl text-gray-300 font-mono opacity-0 animate-fade-in-up animate-delay-200">
            Soluções inovadoras que criei para o mundo digital
          </p>
        </div>

        <div className={`grid gap-8 transition-all duration-700 ease-in-out ${
          showAllProjects ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-3'
        }`}>
          {paginatedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={setHoveredProject}
            />
          ))}
        </div>

        {/* Pagination - only show for all projects */}
        {showAllProjects && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* Toggle Projects Button */}
        <div className="text-center mt-12">
          <Button
            onClick={handleToggleProjects}
            variant="primary"
            size="lg"
            className="hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="mr-2">
              {showAllProjects ? 'VER PROJETOS EM DESTAQUE' : 'VER TODOS OS PROJETOS'}
            </span>
            <span className="group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300 inline-block">
              {showAllProjects ? '↑' : '→'}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
