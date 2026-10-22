import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects, type Project } from '../../data/projects'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'

type Filter = 'all' | 'frontend' | 'backend' | 'fullstack'

const filters: { label: string; value: Filter }[] = [
  { label: 'All',        value: 'all' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Frontend',   value: 'frontend' },
  { label: 'Backend',    value: 'backend' },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.42, ease: 'easeOut', delay: index * 0.08 }}
      className="group bg-surface border border-neutral/10 rounded-sm overflow-hidden shadow-card hover:border-cyan/30 hover:shadow-card-hover transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-mono font-bold text-neutral text-body leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live demo"
                className="text-muted hover:text-cyan transition-colors duration-200"
              >
                <ExternalLink size={15} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-cyan transition-colors duration-200"
            >
              <Github size={15} />
            </a>
          </div>
        </div>

        <p className="font-mono text-small text-muted/80 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-[clamp(4rem,8vw,8rem)] bg-surface/40">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          label="my work"
          title="Projects"
          subtitle="A selection of projects I've built — from side projects to production-grade applications."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`font-mono text-small px-4 py-2 rounded-sm border transition-all duration-200 cursor-pointer ${
                activeFilter === f.value
                  ? 'border-cyan text-cyan bg-cyan/5'
                  : 'border-neutral/15 text-muted hover:border-neutral/30 hover:text-neutral'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
