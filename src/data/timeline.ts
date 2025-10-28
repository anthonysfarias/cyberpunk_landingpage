import { ITimelineItem } from '@/types';

// DIP: Abstração de dados - dados da timeline separados dos componentes
export const timelineData: ITimelineItem[] = [
  {
    id: 1,
    year: '2025',
    title: 'Desenvolvedor Full Stack',
    company: 'E-stratégia Pública',
    description: 'Desenvolvimento de soluções para o setor público com foco em estratégias digitais. Trabalho remoto com tecnologias modernas e práticas de DevOps.',
    technologies: ['TypeScript', 'AngularJS', 'NestJS', 'TailwindCSS', 'GitHub Actions', 'Linux Server', 'Docker'],
    type: 'work',
    icon: 'FaBriefcase',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 2,
    year: '2024',
    title: 'Desenvolvedor Front End',
    company: 'RBX Robótica',
    description: 'Desenvolvimento de interfaces modernas para soluções de robótica. Implementação de arquiteturas escaláveis com foco em performance e DevOps.',
    technologies: ['TypeScript', 'Next.js', 'Shadcn/ui', 'TailwindCSS', 'GitHub Actions', 'NGINX', 'Docker', 'Kubernetes', 'AWS'],
    type: 'work',
    icon: 'FaBriefcase',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 3,
    year: '2024',
    title: 'Curso Livre de Inglês',
    company: 'SENAC São Miguel Paulista',
    description: 'Aperfeiçoamento do idioma inglês para comunicação técnica e internacional no ambiente de desenvolvimento.',
    technologies: ['English', 'Communication', 'Technical Writing'],
    type: 'education',
    icon: 'FaGraduationCap',
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 4,
    year: '2022-2023',
    title: 'Desenvolvedor Full Stack',
    company: 'NPL Brasil',
    description: 'Desenvolvimento de aplicações web completas com stack JavaScript/Python. Trabalho presencial em Vila Olímpia com foco em soluções escaláveis.',
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'React.js', 'HTML', 'jQuery', 'Bootstrap', 'GraphQL', 'PostgreSQL', 'MySQL', 'AWS'],
    type: 'work',
    icon: 'FaBriefcase',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 5,
    year: '2020-2021',
    title: 'Técnico em Informática',
    company: 'Nanismo Brasil',
    description: 'Suporte técnico e desenvolvimento web para ONG. Trabalho remoto com foco em soluções de baixo custo e alta eficiência.',
    technologies: ['JavaScript', 'Gatsby', 'HTML', 'CSS', 'MySQL', 'SQL Server', 'Windows Server', 'Linux Server'],
    type: 'work',
    icon: 'FaBriefcase',
    color: 'from-orange-600 to-yellow-600'
  },
  {
    id: 6,
    year: '2019-2021',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    company: 'UNICSUL São Miguel Paulista',
    description: 'Formação superior completa em desenvolvimento de software com foco em tecnologias modernas, arquitetura de sistemas e metodologias ágeis.',
    technologies: [
      'Programação em C',
      'Python',
      'HTML5, CSS, JavaScript, PHP',
      'Aplicações para Internet',
      'Banco de Dados',
      'Modelagem de Dados',
      'Big Data',
      'Computação em Nuvem',
      'Arquitetura de Computadores',
      'Organização de Computadores',
      'Redes de Computadores',
      'Segurança da Informação',
      'Engenharia de Software',
      'Modelagem de Negócios',
      'Pensamento Computacional',
      'Matemática Aplicada',
      'Matemática e Lógica',
      'Direito Cibernético',
      'Empreendedorismo',
      'LIBRAS'
    ],
    type: 'education',
    icon: 'FaGraduationCap',
    color: 'from-pink-600 to-red-600'
  },
  {
    id: 7,
    year: '2018-2019',
    title: 'Técnico em Redes de Computadores',
    company: 'SENAC São Miguel Paulista',
    description: 'Formação técnica completa em infraestrutura de redes, administração de servidores e segurança de sistemas com foco em soluções corporativas.',
    technologies: [
      'Instalação e Manutenção de Redes',
      'Cabeamento Estruturado',
      'Protocolos de Rede',
      'Roteadores e Switches',
      'Roteamento e Switching',
      'Redes Wi-Fi',
      'Telefonia IP',
      'Administração de Servidores',
      'Configuração de Sistemas Operacionais',
      'Segurança Windows Server',
      'Segurança Linux Server',
      'Projeto de Rede Lógica e Física',
      'Políticas de Administração',
      'Disponibilidade de Redes',
      'Segurança Física e Lógica',
      'Criptografia de Dados',
      'Certificados Digitais',
      'Planejamento de Segurança',
      'Gerenciamento de Projetos',
      'Governança em TI'
    ],
    type: 'education',
    icon: 'FaGraduationCap',
    color: 'from-cyan-600 to-blue-600'
  }
];

export const getTimelineItems = (): ITimelineItem[] => {
  return timelineData;
};
