import { ITimelineItem } from '@/types';

// DIP: Abstração de dados - dados da timeline separados dos componentes
export const timelineData: ITimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Fullstack Developer',
    company: 'Tech Solutions',
    description: 'Desenvolvimento de aplicações web modernas com React, Node.js e TypeScript. Implementação de arquiteturas escaláveis e práticas de DevOps.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    type: 'work',
    icon: 'FaBriefcase',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 2,
    year: '2023',
    title: 'SECOP Colômbia',
    company: 'Projeto Freelance',
    description: 'Desenvolvimento de dashboard analytics para sistema de compras públicas da Colômbia com visualizações interativas e processamento de big data.',
    technologies: ['TypeScript', 'D3.js', 'Express', 'Redis'],
    type: 'project',
    icon: 'FaCode',
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 3,
    year: '2023',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Criação de interfaces modernas e responsivas. Foco em performance, acessibilidade e experiência do usuário.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    type: 'work',
    icon: 'FaBriefcase',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 4,
    year: '2022',
    title: 'Análise e Desenvolvimento de Sistemas',
    company: 'Universidade Tecnológica',
    description: 'Formação em desenvolvimento de software, banco de dados, engenharia de software e metodologias ágeis.',
    technologies: ['Java', 'Python', 'SQL', 'Git'],
    type: 'education',
    icon: 'FaGraduationCap',
    color: 'from-orange-600 to-yellow-600'
  },
  {
    id: 5,
    year: '2022',
    title: 'Desenvolvedor Júnior',
    company: 'StartupTech',
    description: 'Primeiro contato profissional com desenvolvimento web. Aprendizado de tecnologias modernas e metodologias ágeis.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'MySQL'],
    type: 'work',
    icon: 'FaBriefcase',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 6,
    year: '2021',
    title: 'Início da Jornada',
    company: 'Autodidata',
    description: 'Primeiros passos no mundo da programação. Aprendizado autodidata através de cursos online e projetos pessoais.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'education',
    icon: 'FaRocket',
    color: 'from-pink-600 to-red-600'
  }
];

export const getTimelineItems = (): ITimelineItem[] => {
  return timelineData;
};
