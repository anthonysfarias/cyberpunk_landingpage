import { IProject } from '@/types';

// OCP: Aberto para extensão, fechado para modificação
// Interface para diferentes tipos de status
export interface IStatusConfig {
  cssClasses: string;
  label: string;
  icon?: string;
}

// Abstract Factory para criar configurações de status
export abstract class StatusFactory {
  abstract createStatusConfig(): IStatusConfig;
}

// Implementações concretas para cada status
export class LiveStatusFactory extends StatusFactory {
  createStatusConfig(): IStatusConfig {
    return {
      cssClasses: 'bg-green-500/20 text-green-400 border-green-500/50',
      label: 'Live',
      icon: '🟢'
    };
  }
}

export class BetaStatusFactory extends StatusFactory {
  createStatusConfig(): IStatusConfig {
    return {
      cssClasses: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      label: 'Beta',
      icon: '🟡'
    };
  }
}

export class DevelopmentStatusFactory extends StatusFactory {
  createStatusConfig(): IStatusConfig {
    return {
      cssClasses: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      label: 'Em desenvolvimento',
      icon: '🔵'
    };
  }
}

export class DefaultStatusFactory extends StatusFactory {
  createStatusConfig(): IStatusConfig {
    return {
      cssClasses: 'bg-gray-500/20 text-gray-400 border-gray-500/50',
      label: 'Desconhecido',
      icon: '⚪'
    };
  }
}

// Factory principal que decide qual factory usar
export class ProjectStatusFactory {
  private static factories: Map<IProject['status'], StatusFactory> = new Map([
    ['Live', new LiveStatusFactory()],
    ['Beta', new BetaStatusFactory()],
    ['Em desenvolvimento', new DevelopmentStatusFactory()]
  ]);

  static getStatusConfig(status: IProject['status']): IStatusConfig {
    const factory = this.factories.get(status) || new DefaultStatusFactory();
    return factory.createStatusConfig();
  }

  // OCP: Método para adicionar novos tipos de status sem modificar código existente
  static registerStatusFactory(status: IProject['status'], factory: StatusFactory): void {
    this.factories.set(status, factory);
  }
}

// Service para usar o factory (SRP)
export class StatusService {
  static getStatusClasses(status: IProject['status']): string {
    return ProjectStatusFactory.getStatusConfig(status).cssClasses;
  }

  static getStatusLabel(status: IProject['status']): string {
    return ProjectStatusFactory.getStatusConfig(status).label;
  }

  static getStatusIcon(status: IProject['status']): string | undefined {
    return ProjectStatusFactory.getStatusConfig(status).icon;
  }
}
