import { IProject } from '@/types';
import { projectsData } from '@/data/projects';

// DIP: Interface abstrata para o serviço de projetos
export interface IProjectService {
  getAllProjects(): IProject[];
  getFeaturedProjects(): IProject[];
  getProjectById(id: number): IProject | undefined;
  getProjectsByTechnology(tech: string): IProject[];
  getProjectsByStatus(status: IProject['status']): IProject[];
  searchProjects(query: string): IProject[];
  getTotalProjectsCount(): number;
  getLiveProjectsCount(): number;
  getTechnologiesUsed(): string[];
  getProjectsGroupedByStatus(): Record<IProject['status'], IProject[]>;
}

// SRP: Responsabilidade única - gerenciar dados de projetos
// OCP: Aberto para extensão com novos métodos de busca
export class ProjectService implements IProjectService {
  private projects: IProject[];

  constructor(projects: IProject[] = projectsData) {
    this.projects = projects;
  }

  getAllProjects(): IProject[] {
    return [...this.projects];
  }

  getFeaturedProjects(): IProject[] {
    // Retorna os primeiros 3 projetos como featured
    return this.projects.slice(0, 3);
  }

  getProjectById(id: number): IProject | undefined {
    return this.projects.find(project => project.id === id);
  }

  getProjectsByTechnology(tech: string): IProject[] {
    return this.projects.filter(project =>
      project.tech.some(t => 
        t.toLowerCase().includes(tech.toLowerCase())
      )
    );
  }

  getProjectsByStatus(status: IProject['status']): IProject[] {
    return this.projects.filter(project => project.status === status);
  }

  searchProjects(query: string): IProject[] {
    const searchTerm = query.toLowerCase();
    return this.projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm))
    );
  }

  // Métodos para estatísticas (SRP)
  getTotalProjectsCount(): number {
    return this.projects.length;
  }

  getLiveProjectsCount(): number {
    return this.getProjectsByStatus('Live').length;
  }

  getTechnologiesUsed(): string[] {
    const allTech = this.projects.flatMap(project => project.tech);
    return [...new Set(allTech)].sort();
  }

  getProjectsGroupedByStatus(): Record<IProject['status'], IProject[]> {
    return this.projects.reduce((acc, project) => {
      if (!acc[project.status]) {
        acc[project.status] = [];
      }
      acc[project.status].push(project);
      return acc;
    }, {} as Record<IProject['status'], IProject[]>);
  }
}

// Factory para criar instâncias do serviço (DIP)
export class ProjectServiceFactory {
  private static instance: IProjectService;

  static getInstance(): IProjectService {
    if (!this.instance) {
      this.instance = new ProjectService();
    }
    return this.instance;
  }

  static createWithCustomData(projects: IProject[]): IProjectService {
    return new ProjectService(projects);
  }
}

// Instância singleton para uso geral
export const projectService = ProjectServiceFactory.getInstance();
