import { IProject } from '@/types';

// DIP: Abstração de dados - dados dos projetos separados dos componentes
export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'Democratização',
    description: 'Plataforma tecnológica para democratização de compras públicas. Sistema com 8 módulos para registro, caracterização, análise geoespacial e inclusão de atores da economia popular.',
    tech: ['Em definição'],
    image: '/SECOP.png',
    color: 'from-blue-600 to-indigo-600',
    status: 'Em breve',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 2,
    title: 'SECOP Colômbia',
    description: 'Nova plataforma de contratação pública eletrônica da Colômbia. Integra processos de aquisição para entidades estatais com foco em transparência, segurança e eficiência.',
    tech: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'Typia', 'Kysely'],
    image: '/SECOP.png',
    color: 'from-green-600 to-teal-600',
    status: 'Em desenvolvimento',
    link: '#',
    demoLink: undefined,
    codeLink: 'https://github.com/e-strategiapublica/sol-ms-auth'
  },
  {
    id: 3,
    title: 'SOL',
    description: 'Plataforma generalista de contratação pública. Sistema completo de gestão de processos de aquisição com arquitetura escalável e interoperabilidade entre sistemas.',
    tech: ['Angular', 'Tailwind CSS', 'NestJS'],
    image: '/SOL.png',
    color: 'from-cyan-600 to-blue-600',
    status: 'Em desenvolvimento',
    link: '#',
    demoLink: 'https://e-strategiapublica.com/pt-br/',
    codeLink: 'https://github.com/orgs/e-strategiapublica/repositories'
  },
  {
    id: 4,
    title: 'LandingPage Kalinne',
    description: 'Landing page profissional para estudante de psicologia. Plataforma com blog, artigos científicos e conteúdo educacional com design clean e navegação intuitiva.',
    tech: ['Next.js', 'Tailwind CSS'],
    image: '🎨',
    color: 'from-pink-600 to-purple-600',
    status: 'Em desenvolvimento',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 5,
    title: 'RBX Robótica',
    description: 'Startup de tecnologia fundada em 2024. Desenvolvimento de soluções web personalizadas e escaláveis para automação de processos e otimização operacional empresarial.',
    tech: ['Next.js', 'Tailwind CSS'],
    image: '/rbxrobotica.svg',
    color: 'from-orange-600 to-red-600',
    status: 'Beta',
    link: '#',
    demoLink: undefined,
    codeLink: 'https://github.com/rbxrobotica/rbx-robotica-frontend'
  },
  {
    id: 6,
    title: 'LINA Hub',
    description: 'Software de gestão de créditos corporativos inadimplidos (NPL). Plataforma tecnológica avançada para recuperação de créditos e reestruturação de dívidas com análise multidisciplinar.',
    tech: ['HTML', 'JavaScript', 'CSS', 'Python'],
    image: '/nplbrasil.png',
    color: 'from-purple-600 to-pink-600',
    status: 'Live',
    link: '#',
    demoLink: 'https://www.nplbrasil.com.br/',
    codeLink: undefined
  },
  {
    id: 7,
    title: 'CyberCommerce',
    description: 'E-commerce futurista com React, Node.js e PostgreSQL. Sistema completo de pagamentos, gestão de estoque e analytics em tempo real.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒',
    color: 'from-purple-600 to-pink-600',
    status: 'Live',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 8,
    title: 'CryptoTracker',
    description: 'Plataforma de monitoramento de criptomoedas com alertas em tempo real e análise técnica avançada.',
    tech: ['Vue.js', 'Python', 'FastAPI', 'WebSocket'],
    image: '💰',
    color: 'from-yellow-600 to-orange-600',
    status: 'Live',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 9,
    title: 'TaskFlow',
    description: 'Sistema de gerenciamento de projetos com Kanban boards, timeline e colaboração em equipe.',
    tech: ['React', 'GraphQL', 'Prisma', 'Docker'],
    image: '📋',
    color: 'from-indigo-600 to-purple-600',
    status: 'Beta',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 10,
    title: 'CloudSync',
    description: 'Sincronização de arquivos multi-plataforma com criptografia end-to-end e backup automático.',
    tech: ['Electron', 'Rust', 'AWS S3', 'Encryption'],
    image: '☁️',
    color: 'from-blue-600 to-cyan-600',
    status: 'Em desenvolvimento',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 11,
    title: 'GameHub',
    description: 'Plataforma social para gamers com matchmaking, tournaments e streaming integrado.',
    tech: ['Angular', 'NestJS', 'WebRTC', 'Redis'],
    image: '🎮',
    color: 'from-red-600 to-pink-600',
    status: 'Live',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 12,
    title: 'EcoTrack',
    description: 'App de sustentabilidade que monitora pegada de carbono pessoal e sugere ações eco-friendly.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'ML'],
    image: '🌱',
    color: 'from-green-600 to-emerald-600',
    status: 'Beta',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  },
  {
    id: 13,
    title: 'CodeReview AI',
    description: 'Ferramenta de revisão de código automatizada com IA para detectar bugs e melhorar qualidade.',
    tech: ['Python', 'TensorFlow', 'GitHub API', 'Docker'],
    image: '🔍',
    color: 'from-purple-600 to-indigo-600',
    status: 'Em desenvolvimento',
    link: '#',
    demoLink: undefined,
    codeLink: undefined
  }
];

export const getFeaturedProjects = (): IProject[] => {
  return projectsData.slice(0, 3);
};

export const getAllProjects = (): IProject[] => {
  return projectsData;
};
