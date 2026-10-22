// ============================================================
// DATA: Projects
// Edit this file to update the Projects section content.
// ============================================================

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  image: string
  featured: boolean
  category: 'frontend' | 'backend' | 'fullstack'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Marketplace Platform',
    description:
      'Full-stack e-commerce platform with real-time inventory tracking, payment gateway integration, and admin dashboard. Handles 10k+ concurrent users.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://picsum.photos/seed/marketplace/800/450',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Design System & Component Library',
    description:
      'Scalable UI component library built with React and Storybook. 60+ reusable components, dark/light theme support, and full accessibility compliance.',
    tech: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://picsum.photos/seed/designsystem/800/450',
    featured: true,
    category: 'frontend',
  },
  {
    id: 3,
    title: 'REST API Microservices',
    description:
      'Event-driven microservices architecture for a SaaS product. JWT auth, rate limiting, message queue with RabbitMQ, and comprehensive Swagger docs.',
    tech: ['Node.js', 'Express', 'RabbitMQ', 'MongoDB', 'Docker', 'Nginx'],
    liveUrl: '',
    githubUrl: 'https://github.com',
    image: 'https://picsum.photos/seed/microservice/800/450',
    featured: false,
    category: 'backend',
  },
  {
    id: 4,
    title: 'Real-time Collaboration Tool',
    description:
      'Google Docs-like collaborative editor with real-time cursors, conflict resolution, and version history. Built with WebSocket and CRDT algorithm.',
    tech: ['React', 'TypeScript', 'WebSocket', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://picsum.photos/seed/collab/800/450',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'DevOps Dashboard',
    description:
      'Internal monitoring tool that aggregates CI/CD pipelines, server metrics, and deployment logs into a single unified dashboard.',
    tech: ['React', 'Go', 'Docker', 'PostgreSQL', 'Grafana'],
    liveUrl: '',
    githubUrl: 'https://github.com',
    image: 'https://picsum.photos/seed/devops/800/450',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 6,
    title: 'Open Source CLI Tool',
    description:
      'Command-line tool for scaffolding React projects with pre-configured ESLint, Prettier, Husky, and conventional commits setup.',
    tech: ['Node.js', 'TypeScript', 'Commander.js'],
    liveUrl: 'https://npmjs.com',
    githubUrl: 'https://github.com',
    image: 'https://picsum.photos/seed/cli/800/450',
    featured: false,
    category: 'backend',
  },
]
