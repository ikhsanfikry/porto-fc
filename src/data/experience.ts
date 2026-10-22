// ============================================================
// DATA: Experience
// Edit this file to update the Experience section content.
// ============================================================

export interface Experience {
  id: number
  year: string
  role: string
  company: string
  location: string
  type: 'full-time' | 'part-time' | 'freelance' | 'internship'
  description: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    year: '2023 — Present',
    role: 'Senior Software Developer',
    company: 'eCentrix Teknologi Indonesia.',
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    description: [
      'Lead development of a SaaS platform serving 50k+ monthly active users.',
      'Architected microservices migration that reduced latency by 40%.',
      'Mentored a team of 4 junior developers, conducting weekly code reviews.',
      'Introduced CI/CD pipelines with GitHub Actions, reducing deployment time by 60%.',
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 2,
    year: '2022 — 2023',
    role: 'Full-Stack Developer',
    company: 'Startup Studio',
    location: 'Remote',
    type: 'full-time',
    description: [
      'Built and maintained 3 client-facing web apps from scratch to production.',
      'Implemented real-time features using WebSocket and Redis pub/sub.',
      'Improved Core Web Vitals scores from 60 to 95+ across all products.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Vercel'],
  },
  {
    id: 3,
    year: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'Bandung, Indonesia',
    type: 'full-time',
    description: [
      'Delivered 10+ responsive landing pages and web apps for clients.',
      'Collaborated with designers to implement pixel-perfect UI from Figma.',
      'Maintained and optimized legacy codebases (jQuery → React migration).',
    ],
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'WordPress'],
  },
  {
    id: 4,
    year: '2020 — 2021',
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'Remote',
    type: 'freelance',
    description: [
      'Worked with 8+ clients across various industries to build custom web solutions.',
      'Delivered projects on time with high client satisfaction ratings.',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Laravel'],
  },
  {
    id: 5,
    year: '2016 — 2020',
    role: 'Bachelor of Computer Science',
    company: 'Universitas Indonesia',
    location: 'Depok, Indonesia',
    type: 'full-time',
    description: [
      'Graduated with GPA 3.75/4.00.',
      'Thesis: "Optimizing Database Query Performance using Machine Learning Predictions".',
      'Active member of programming club and university hackathon team.',
    ],
    tech: ['Java', 'Python', 'SQL', 'Algorithms'],
  },
]
