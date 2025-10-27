import { ITechnology } from '@/types';

// DIP: Data abstraction - technologies data separated from components
export const technologiesData: Record<string, ITechnology[]> = {
  frontend: [
    { name: 'React', icon: 'FaReact', color: 'from-blue-400 to-cyan-400', description: 'Frontend Library' },
    { name: 'TypeScript', icon: 'SiTypescript', color: 'from-blue-600 to-blue-400', description: 'Type Safety' },
    { name: 'Next.js', icon: 'SiNextdotjs', color: 'from-gray-800 to-gray-600', description: 'React Framework' },
    { name: 'Vue.js', icon: 'SiVuedotjs', color: 'from-green-400 to-green-600', description: 'Progressive Framework' },
    { name: 'Angular', icon: 'SiAngular', color: 'from-red-600 to-red-400', description: 'Full Framework' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: 'from-cyan-400 to-blue-500', description: 'Utility CSS' },
    { name: 'Sass', icon: 'SiSass', color: 'from-pink-500 to-pink-400', description: 'CSS Preprocessor' },
    { name: 'Vite', icon: 'SiVite', color: 'from-purple-500 to-yellow-500', description: 'Build Tool' }
  ],
  backend: [
    { name: 'Node.js', icon: 'FaNodeJs', color: 'from-green-500 to-green-400', description: 'Backend Runtime' },
    { name: 'Express', icon: 'SiExpress', color: 'from-gray-600 to-gray-400', description: 'Web Framework' },
    { name: 'NestJS', icon: 'SiNestjs', color: 'from-red-500 to-pink-500', description: 'Node.js Framework' },
    { name: 'GraphQL', icon: 'SiGraphql', color: 'from-pink-500 to-purple-500', description: 'Query Language' },
    { name: 'Python', icon: 'SiPython', color: 'from-blue-500 to-yellow-500', description: 'Programming Language' },
    { name: 'FastAPI', icon: 'SiFastapi', color: 'from-green-500 to-teal-500', description: 'Python Framework' },
    { name: 'Java', icon: 'SiJava', color: 'from-red-600 to-orange-500', description: 'Programming Language' },
    { name: 'Spring', icon: 'SiSpring', color: 'from-green-600 to-green-400', description: 'Java Framework' }
  ],
  database: [
    { name: 'PostgreSQL', icon: 'SiPostgresql', color: 'from-blue-700 to-blue-500', description: 'SQL Database' },
    { name: 'MongoDB', icon: 'SiMongodb', color: 'from-green-600 to-green-400', description: 'NoSQL Database' },
    { name: 'Redis', icon: 'SiRedis', color: 'from-red-600 to-red-400', description: 'In-Memory Store' },
    { name: 'MySQL', icon: 'SiMysql', color: 'from-blue-600 to-orange-500', description: 'SQL Database' },
    { name: 'SQLite', icon: 'SiSqlite', color: 'from-blue-500 to-blue-400', description: 'Lightweight DB' },
    { name: 'Firebase', icon: 'SiFirebase', color: 'from-yellow-500 to-orange-500', description: 'BaaS Platform' }
  ],
  devops: [
    { name: 'Docker', icon: 'FaDocker', color: 'from-blue-500 to-cyan-500', description: 'Containerization' },
    { name: 'Kubernetes', icon: 'SiKubernetes', color: 'from-blue-600 to-purple-600', description: 'Orchestration' },
    { name: 'AWS', icon: 'FaAws', color: 'from-orange-500 to-yellow-500', description: 'Cloud Platform' },
    { name: 'Git', icon: 'FaGitAlt', color: 'from-red-500 to-orange-500', description: 'Version Control' },
    { name: 'GitHub Actions', icon: 'SiGithubactions', color: 'from-blue-600 to-gray-600', description: 'CI/CD' },
    { name: 'Jenkins', icon: 'SiJenkins', color: 'from-blue-500 to-gray-500', description: 'Automation Server' },
    { name: 'Terraform', icon: 'SiTerraform', color: 'from-purple-600 to-blue-600', description: 'Infrastructure as Code' },
    { name: 'Nginx', icon: 'SiNginx', color: 'from-green-500 to-green-400', description: 'Web Server' }
  ],
  mobile: [
    { name: 'React Native', icon: 'SiReact', color: 'from-blue-400 to-cyan-400', description: 'Cross-platform' },
    { name: 'Flutter', icon: 'SiFlutter', color: 'from-blue-500 to-cyan-500', description: 'Google Framework' },
    { name: 'Swift', icon: 'SiSwift', color: 'from-orange-500 to-red-500', description: 'iOS Development' },
    { name: 'Kotlin', icon: 'SiKotlin', color: 'from-purple-500 to-blue-500', description: 'Android Development' },
    { name: 'Expo', icon: 'SiExpo', color: 'from-gray-800 to-blue-600', description: 'React Native Platform' }
  ],
  tools: [
    { name: 'Figma', icon: 'SiFigma', color: 'from-purple-500 to-pink-500', description: 'Design Tool' },
    { name: 'Postman', icon: 'SiPostman', color: 'from-orange-500 to-red-500', description: 'API Testing' },
    { name: 'Jira', icon: 'SiJira', color: 'from-blue-600 to-blue-500', description: 'Project Management' },
    { name: 'Slack', icon: 'SiSlack', color: 'from-purple-500 to-pink-500', description: 'Communication' },
    { name: 'Notion', icon: 'SiNotion', color: 'from-gray-800 to-gray-600', description: 'Documentation' }
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
