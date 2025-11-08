// Interfaces principais seguindo ISP (Princípio da Segregação de Interface)

export interface IProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  status: 'Live' | 'Beta' | 'Em desenvolvimento' | 'Em breve';
  link: string;
  demoLink?: string;
  codeLink?: string;
}

export interface ITechnology {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export interface IAnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

// ISP: Interfaces segregadas por responsabilidade
export interface IButtonBaseProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface IButtonInteractionProps {
  onClick?: () => void;
  isLoading?: boolean;
}

export interface IButtonStyleProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

// Interface completa que combina as específicas
export interface IButtonProps extends IButtonBaseProps, IButtonInteractionProps, IButtonStyleProps {}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ITypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

// Interfaces dos hooks de animação
export interface IUseIntersectionObserver {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}

export interface IUseTypingAnimation {
  displayedText: string;
  isComplete: boolean;
  startAnimation: () => void;
}

export interface ITimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education' | 'project';
  icon: string;
  color: string;
}

export interface ISocialMedia {
  name: string;
  icon: string;
  url: string;
  color: string;
  hoverColor: string;
  textColor: string;
  description: string;
  disabled?: boolean;
}
