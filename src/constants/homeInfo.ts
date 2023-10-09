import { chipColors } from '@/components/Chip';

export const LANGUAGES: {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
  color: (typeof chipColors)[number];
  description: string;
}[] = [
  {
    name: 'TypeScript',
    level: 'Advanced',
    color: 'red',
    description: 'My main language with which I write production ready code.',
  },
  {
    name: 'Solidity',
    level: 'Advanced',
    color: 'red',
    description:
      'I helped build and maintain smart contracts for couple of projects. I was also part of a security audit team.',
  },
  {
    name: 'Rust',
    level: 'Intermediate',
    color: 'yellow',
    description:
      'I use Rust for my personal projects ranging from simple CLI tools to games.',
  },
  {
    name: 'Python',
    level: 'Intermediate',
    color: 'yellow',
    description:
      'I use Python for scripting, automation, data analysis and machine learning.',
  },
  {
    name: 'C++ (11)',
    level: 'Intermediate',
    color: 'yellow',
    description:
      'I used C++ for competitive programming and for university projects in the past.',
  },
  {
    name: 'Java',
    level: 'Beginner',
    color: 'green',
    description:
      "I helped build a couple of simple Java applications. I also used it for university projects building simple android apps/games and implementing an evolutionary algorithm (Archimedes'optimization algorithm (AOA)).",
  },
];

export const FRAMEWORKS: {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
  color: (typeof chipColors)[number];
}[] = [
  {
    name: 'React',
    level: 'Advanced',
    color: 'red',
  },
  {
    name: 'Nest.js',
    level: 'Advanced',
    color: 'red',
  },
  {
    name: 'Next.js',
    level: 'Advanced',
    color: 'red',
  },
  {
    name: 'Express',
    level: 'Intermediate',
    color: 'yellow',
  },
  {
    name: 'Vue',
    level: 'Beginner',
    color: 'green',
  },
  {
    name: 'React Native',
    level: 'Beginner',
    color: 'green',
  },
  {
    name: 'Electron',
    level: 'Beginner',
    color: 'green',
  },
];

export const TOOLS: {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
  color: (typeof chipColors)[number];
  description?: string;
}[] = [
  {
    name: 'Docker',
    level: 'Advanced',
    color: 'red',
    description:
      'I used Docker to build and deploy my personal projects and for work. I also used it to build a CI/CD pipeline for a project at work, including building and deploying a monorepo.',
  },
  {
    name: 'Git',
    level: 'Advanced',
    color: 'red',
  },
  {
    name: 'GitHub Actions',
    level: 'Advanced',
    color: 'red',
    description:
      'I used GitHub Actions to build and deploy projects from a monorepo at work.',
  },
  {
    name: 'Linux',
    level: 'Advanced',
    color: 'red',
    description:
      'I use Linux as my main OS for development and personal use. I am currently using Arch Linux with the Plasma desktop environment and I3 window manager.',
  },
  {
    name: 'NX',
    level: 'Intermediate',
    color: 'yellow',
    description:
      'I was part of a team that used NX to build a monorepo for a large project at work. I was also the lead develop that setup a NX monorepo for a medium sized project.',
  },
  {
    name: 'Grafana',
    level: 'Beginner',
    color: 'green',
    description:
      'I use Grafana (with Prometheus) to monitor my server and work Besu network.',
  },
];

export const OTHER = [
  {
    name: 'GraphQL',
  },
  {
    name: 'The Graph',
  },
  {
    name: 'IPFS',
  },
  {
    name: 'Zustand',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'Jest',
  },
  {
    name: 'Storybook',
  },
  {
    name: 'Jira',
  },
  {
    name: 'Confluence',
  },
  {
    name: 'Figma',
  },
  {
    name: 'Chai',
  },
  {
    name: 'Mocha',
  },
  {
    name: 'Foundry',
  },
  {
    name: 'Styled Components',
  },
  {
    name: 'Hardhat',
  },
  {
    name: 'Prisma',
  },
  {
    name: 'PlanetScale',
  },
  {
    name: 'MongoDB',
  },
  {
    name: 'PostgreSQL',
  },
  {
    name: 'Three.js',
  },
];

export const SKILLS = [
  {
    title: 'Languages',
    skills: LANGUAGES,
  },
  {
    title: 'Frameworks',
    skills: FRAMEWORKS,
  },
  {
    title: 'Tools',
    skills: TOOLS,
  },
  {
    title: 'Other',
    description:
      'Other technologies with which I built at least one project or more.',
    skills: OTHER,
  },
];
