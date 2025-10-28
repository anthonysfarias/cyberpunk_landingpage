// SRP: Responsabilidade única - apenas gerencia operações de scroll
// OCP: Aberto para extensão com novos tipos de scroll
export class ScrollService {
  /**
   * Faz scroll suave para um elemento específico
   */
  static scrollToElement(elementId: string, options?: ScrollIntoViewOptions): boolean {
    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`Element with id "${elementId}" not found`);
      return false;
    }

    const defaultOptions: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start'
    };

    element.scrollIntoView({ ...defaultOptions, ...options });
    return true;
  }

  /**
   * Faz scroll suave para o topo da página
   */
  static scrollToTop(options?: ScrollToOptions): void {
    const defaultOptions: ScrollToOptions = {
      top: 0,
      behavior: 'smooth'
    };

    window.scrollTo({ ...defaultOptions, ...options });
  }

  /**
   * Faz scroll suave para uma posição específica
   */
  static scrollToPosition(x: number, y: number, behavior: ScrollBehavior = 'smooth'): void {
    window.scrollTo({
      left: x,
      top: y,
      behavior
    });
  }

  /**
   * Verifica se um elemento está visível na viewport
   */
  static isElementInViewport(elementId: string): boolean {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

// Interface para abstrair o serviço de scroll (DIP)
export interface IScrollService {
  scrollToElement(elementId: string, options?: ScrollIntoViewOptions): boolean;
  scrollToTop(options?: ScrollToOptions): void;
  scrollToPosition(x: number, y: number, behavior?: ScrollBehavior): void;
  isElementInViewport(elementId: string): boolean;
}

// Implementação concreta do serviço (DIP)
export const scrollService: IScrollService = ScrollService;
