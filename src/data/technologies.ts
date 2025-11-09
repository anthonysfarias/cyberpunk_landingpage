import { ITechnology } from '@/types';

// DIP: Abstração de dados - dados das tecnologias separados dos componentes
export const technologiesData: Record<string, ITechnology[]> = {
  frontend: [
    { name: 'React', icon: 'FaReact', color: 'from-blue-400 to-cyan-400', description: 'Biblioteca Frontend' },
    { name: 'TypeScript', icon: 'SiTypescript', color: 'from-blue-600 to-blue-400', description: 'Tipagem Segura' },
    { name: 'Next.js', icon: 'SiNextdotjs', color: 'from-gray-800 to-gray-600', description: 'Framework React' },
    { name: 'Vue.js', icon: 'SiVuedotjs', color: 'from-green-400 to-green-600', description: 'Framework Progressivo' },
    { name: 'Angular', icon: 'SiAngular', color: 'from-red-600 to-red-400', description: 'Framework Completo' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: 'from-cyan-400 to-blue-500', description: 'CSS Utilitário' },
    { name: 'Sass', icon: 'SiSass', color: 'from-pink-500 to-pink-400', description: 'Pré-processador CSS' },
    { name: 'Vite', icon: 'SiVite', color: 'from-purple-500 to-yellow-500', description: 'Ferramenta de Build' },
    { name: 'jQuery', icon: 'SiJquery', color: 'from-blue-600 to-blue-400', description: 'Biblioteca JavaScript' }
  ],
  backend: [
    { name: 'Node.js', icon: 'FaNodeJs', color: 'from-green-500 to-green-400', description: 'Runtime Backend' },
    { name: 'Express', icon: 'SiExpress', color: 'from-gray-600 to-gray-400', description: 'Framework Web' },
    { name: 'NestJS', icon: 'SiNestjs', color: 'from-red-500 to-pink-500', description: 'Framework Node.js' },
    { name: 'GraphQL', icon: 'SiGraphql', color: 'from-pink-500 to-purple-500', description: 'Linguagem de Consulta' },
    { name: 'Python', icon: 'SiPython', color: 'from-blue-500 to-yellow-500', description: 'Linguagem de Programação' },
    { name: 'FastAPI', icon: 'SiFastapi', color: 'from-green-500 to-teal-500', description: 'Framework Python' },
    { name: 'Java', icon: 'FaJava', color: 'from-red-600 to-orange-500', description: 'Linguagem de Programação' },
    { name: 'Spring', icon: 'SiSpring', color: 'from-green-600 to-green-400', description: 'Framework Java' },
    { name: 'Socket.io', icon: 'SiSocketdotio', color: 'from-gray-800 to-gray-600', description: 'Comunicação Real-Time' },
    { name: 'Pandas', icon: 'SiPandas', color: 'from-gray-100 to-white', description: 'Análise de Dados' },
    { name: 'Pytest', icon: 'SiPytest', color: 'from-blue-500 to-cyan-500', description: 'Testes Python' }
  ],
  database: [
    { name: 'PostgreSQL', icon: 'SiPostgresql', color: 'from-blue-700 to-blue-500', description: 'Banco SQL' },
    { name: 'MongoDB', icon: 'SiMongodb', color: 'from-green-600 to-green-400', description: 'Banco NoSQL' },
    { name: 'Redis', icon: 'SiRedis', color: 'from-red-600 to-red-400', description: 'Armazenamento em Memória' },
    { name: 'MySQL', icon: 'SiMysql', color: 'from-blue-600 to-orange-500', description: 'Banco SQL' },
    { name: 'SQLite', icon: 'SiSqlite', color: 'from-blue-500 to-blue-400', description: 'Banco Leve' },
    { name: 'Firebase', icon: 'SiFirebase', color: 'from-yellow-500 to-orange-500', description: 'Plataforma BaaS' }
  ],
  devops: [
    { name: 'Docker', icon: 'FaDocker', color: 'from-blue-500 to-cyan-500', description: 'Containerização' },
    { name: 'Kubernetes', icon: 'SiKubernetes', color: 'from-blue-600 to-purple-600', description: 'Orquestração' },
    { name: 'AWS', icon: 'FaAws', color: 'from-orange-500 to-yellow-500', description: 'Plataforma Cloud' },
    { name: 'Git', icon: 'FaGitAlt', color: 'from-red-500 to-orange-500', description: 'Controle de Versão' },
    { name: 'GitHub Actions', icon: 'SiGithubactions', color: 'from-blue-600 to-gray-600', description: 'CI/CD' },
    { name: 'Jenkins', icon: 'SiJenkins', color: 'from-blue-500 to-gray-500', description: 'Servidor de Automação' },
    { name: 'Terraform', icon: 'SiTerraform', color: 'from-purple-600 to-blue-600', description: 'Infraestrutura como Código' },
    { name: 'Ansible', icon: 'SiAnsible', color: 'from-gray-100 to-white', description: 'Automação de TI' },
    { name: 'Nginx', icon: 'SiNginx', color: 'from-green-500 to-green-400', description: 'Servidor Web' },
    { name: 'Ubuntu', icon: 'SiUbuntu', color: 'from-orange-600 to-red-600', description: 'Linux Server' },
    { name: 'Grafana', icon: 'SiGrafana', color: 'from-orange-500 to-yellow-500', description: 'Monitoramento' }
  ],
  mobile: [
    { name: 'React Native', icon: 'SiReact', color: 'from-blue-400 to-cyan-400', description: 'Multiplataforma' },
    { name: 'Expo', icon: 'SiExpo', color: 'from-gray-800 to-blue-600', description: 'Plataforma React Native' }
  ],
  tools: [
    { name: 'Figma', icon: 'SiFigma', color: 'from-purple-500 to-pink-500', description: 'Ferramenta de Design' },
    { name: 'Postman', icon: 'SiPostman', color: 'from-orange-500 to-red-500', description: 'Teste de API' },
    { name: 'Insomnia', icon: 'SiInsomnia', color: 'from-purple-600 to-purple-400', description: 'Cliente REST' },
    { name: 'Swagger', icon: 'SiSwagger', color: 'from-green-500 to-green-400', description: 'Documentação API' },
    { name: 'Jira', icon: 'SiJira', color: 'from-blue-600 to-blue-500', description: 'Gestão de Projetos' },
    { name: 'Trello', icon: 'SiTrello', color: 'from-blue-500 to-blue-400', description: 'Gestão de Tarefas' },
    { name: 'Slack', icon: 'SiSlack', color: 'from-purple-500 to-pink-500', description: 'Comunicação' },
    { name: 'Notion', icon: 'SiNotion', color: 'from-gray-800 to-gray-600', description: 'Documentação' },
    { name: 'Google Drive', icon: 'SiGoogledrive', color: 'from-blue-500 to-green-500', description: 'Armazenamento Cloud' },
    { name: 'Draw.io', icon: 'SiDiagramsdotnet', color: 'from-orange-500 to-orange-400', description: 'Diagramas' },
    { name: 'Lucidchart', icon: 'SiLucid', color: 'from-orange-600 to-yellow-500', description: 'Diagramação' },
    { name: 'Jest', icon: 'SiJest', color: 'from-red-600 to-pink-600', description: 'Testes JavaScript' },
    { name: 'Vitest', icon: 'SiVitest', color: 'from-yellow-500 to-green-500', description: 'Testes Vite' },
    { name: 'Selenium', icon: 'SiSelenium', color: 'from-green-600 to-green-400', description: 'Testes E2E' },
    { name: 'Markdown', icon: 'SiMarkdown', color: 'from-gray-700 to-gray-500', description: 'Documentação' }
  ]
};

export const categoryLabels = {
  frontend: { name: 'Frontend', icon: 'FaPalette', color: 'text-purple-400' },
  backend: { name: 'Backend', icon: 'FaBolt', color: 'text-cyan-400' },
  database: { name: 'Database', icon: 'FaDatabase', color: 'text-green-400' },
  devops: { name: 'DevOps', icon: 'FaCloud', color: 'text-orange-400' },
  mobile: { name: 'Mobile', icon: 'FaMobile', color: 'text-pink-400' },
  tools: { name: 'Tools', icon: 'FaTools', color: 'text-yellow-400' }
};

export const getTechnologies = (): ITechnology[] => {
  return Object.values(technologiesData).flat();
};

export const getTechnologiesByCategory = (): Record<string, ITechnology[]> => {
  return technologiesData;
};

export const getCategoryLabels = () => {
  return categoryLabels;
};
