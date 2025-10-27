import { IProject } from '@/types';

// DIP: Abstração de dados - dados dos projetos separados dos componentes
export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'SECOP Colômbia',
    description: 'Dashboard analytics com visualizações interativas. Processamento de big data e relatórios automatizados para empresas.',
    tech: ['TypeScript', 'D3.js', 'Express', 'Redis'],
    image: '/SECOP.png',
    color: 'from-green-600 to-teal-600',
    status: 'Em desenvolvimento',
    link: '#'
  },
  {
    id: 2,
    title: 'SOL',
    description: 'Aplicação de chat em tempo real com IA integrada. WebSockets, autenticação JWT e processamento de linguagem natural.',
    tech: ['Next.js', 'Socket.io', 'OpenAI', 'MongoDB'],
    image: '🤖',
    color: 'from-cyan-600 to-blue-600',
    status: 'Em desenvolvimento',
    link: '#'
  },
  {
    id: 3,
    title: 'CyberCommerce',
    description: 'E-commerce futurista com React, Node.js e PostgreSQL. Sistema completo de pagamentos, gestão de estoque e analytics em tempo real.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒',
    color: 'from-purple-600 to-pink-600',
    status: 'Live',
    link: '#'
  },
  {
    id: 4,
    title: 'CryptoTracker',
    description: 'Plataforma de monitoramento de criptomoedas com alertas em tempo real e análise técnica avançada.',
    tech: ['Vue.js', 'Python', 'FastAPI', 'WebSocket'],
    image: '💰',
    color: 'from-yellow-600 to-orange-600',
    status: 'Live',
    link: '#'
  },
  {
    id: 5,
    title: 'TaskFlow',
    description: 'Sistema de gerenciamento de projetos com Kanban boards, timeline e colaboração em equipe.',
    tech: ['React', 'GraphQL', 'Prisma', 'Docker'],
    image: '📋',
    color: 'from-indigo-600 to-purple-600',
    status: 'Beta',
    link: '#'
  },
  {
    id: 6,
    title: 'CloudSync',
    description: 'Sincronização de arquivos multi-plataforma com criptografia end-to-end e backup automático.',
    tech: ['Electron', 'Rust', 'AWS S3', 'Encryption'],
    image: '☁️',
    color: 'from-blue-600 to-cyan-600',
    status: 'Em desenvolvimento',
    link: '#'
  },
  {
    id: 7,
    title: 'GameHub',
    description: 'Plataforma social para gamers com matchmaking, tournaments e streaming integrado.',
    tech: ['Angular', 'NestJS', 'WebRTC', 'Redis'],
    image: '🎮',
    color: 'from-red-600 to-pink-600',
    status: 'Live',
    link: '#'
  },
  {
    id: 8,
    title: 'EcoTrack',
    description: 'App de sustentabilidade que monitora pegada de carbono pessoal e sugere ações eco-friendly.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'ML'],
    image: '🌱',
    color: 'from-green-600 to-emerald-600',
    status: 'Beta',
    link: '#'
  },
  {
    id: 9,
    title: 'CodeReview AI',
    description: 'Ferramenta de revisão de código automatizada com IA para detectar bugs e melhorar qualidade.',
    tech: ['Python', 'TensorFlow', 'GitHub API', 'Docker'],
    image: '🔍',
    color: 'from-purple-600 to-indigo-600',
    status: 'Em desenvolvimento',
    link: '#'
  }
];

export const getFeaturedProjects = (): IProject[] => {
  return projectsData.slice(0, 3);
};

export const getAllProjects = (): IProject[] => {
  return projectsData;
};
