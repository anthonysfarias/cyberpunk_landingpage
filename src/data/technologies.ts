import { ITechnology } from '@/types';

// DIP: Data abstraction - technologies data separated from components
export const technologiesData: ITechnology[] = [
  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400', description: 'Frontend Library' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400', description: 'Type Safety' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-400', description: 'Backend Runtime' },
  { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-gray-600', description: 'React Framework' },
  { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-500', description: 'Containerization' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-500', description: 'Database' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-400', description: 'NoSQL Database' },
  { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500', description: 'Cloud Platform' },
  { name: 'Git', icon: '📚', color: 'from-red-500 to-orange-500', description: 'Version Control' },
  { name: 'GraphQL', icon: '🔗', color: 'from-pink-500 to-purple-500', description: 'Query Language' },
  { name: 'Redis', icon: '🔴', color: 'from-red-600 to-red-400', description: 'Caching' },
  { name: 'Kubernetes', icon: '⚙️', color: 'from-blue-600 to-purple-600', description: 'Orchestration' }
];

export const getTechnologies = (): ITechnology[] => {
  return technologiesData;
};
