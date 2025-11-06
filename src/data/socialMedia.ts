import { ISocialMedia } from '@/types';

// DIP: Abstração de dados - dados das redes sociais separados dos componentes
export const socialMediaData: ISocialMedia[] = [
  {
    name: 'GitHub',
    icon: 'FaGithub',
    url: 'https://github.com/anthonysfarias',
    color: 'from-purple-500 to-gray-400',
    hoverColor: 'hover:border-purple-500/80',
    textColor: 'group-hover:text-purple-400',
    description: 'Repositórios e projetos'
  },
  {
    name: 'LinkedIn',
    icon: 'FaLinkedin',
    url: 'https://linkedin.com/in/anthony-farias',
    color: 'from-blue-500 to-cyan-400',
    hoverColor: 'hover:border-cyan-500/80',
    textColor: 'group-hover:text-cyan-400',
    description: 'Perfil profissional'
  },
  {
    name: 'Twitter',
    icon: 'FaTwitter',
    url: 'https://twitter.com/anthonysfarias',
    color: 'from-cyan-400 to-blue-500',
    hoverColor: 'hover:border-cyan-400/80',
    textColor: 'group-hover:text-cyan-300',
    description: 'Atualizações e insights'
  },
  {
    name: 'Instagram',
    icon: 'FaInstagram',
    url: 'https://instagram.com/anthonysfarias',
    color: 'from-pink-500 to-purple-500',
    hoverColor: 'hover:border-pink-500/80',
    textColor: 'group-hover:text-pink-400',
    description: 'Conteúdo visual'
  },
  {
    name: 'Discord',
    icon: 'FaDiscord',
    url: 'https://discord.gg/anthonysfarias',
    color: 'from-indigo-500 to-purple-600',
    hoverColor: 'hover:border-indigo-400/80',
    textColor: 'group-hover:text-indigo-400',
    description: 'Comunidade e chat'
  },
  {
    name: 'YouTube',
    icon: 'FaYoutube',
    url: 'https://youtube.com/@anthonysfarias',
    color: 'from-red-500 to-pink-500',
    hoverColor: 'hover:border-red-400/80',
    textColor: 'group-hover:text-red-400',
    description: 'Tutoriais e conteúdo'
  }
];

export const getSocialMedia = (): ISocialMedia[] => {
  return socialMediaData;
};

export const getSocialMediaByName = (name: string): ISocialMedia | undefined => {
  return socialMediaData.find(social => social.name.toLowerCase() === name.toLowerCase());
};
