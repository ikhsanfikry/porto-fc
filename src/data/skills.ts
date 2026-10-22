// ============================================================
// DATA: Skills / Tech Stack
// Edit this file to update the Tech Stack section content.
// ============================================================

export interface Skill {
  name: string
  icon: string // simple-icons slug or custom SVG path
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Framer Motion', icon: 'framer' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Go', icon: 'go' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Redis', icon: 'redis' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Prisma', icon: 'prisma' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Git', icon: 'git' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'visualstudiocode' },
      { name: 'Jira', icon: 'jira' },
    ],
  },
]
