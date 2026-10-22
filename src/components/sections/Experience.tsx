import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { experiences } from '../../data/experience'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'

const typeColors: Record<string, string> = {
  'full-time':  'text-cyan',
  'part-time':  'text-yellow-500',
  'freelance':  'text-purple-500',
  'internship': 'text-green-500',
}

export function Experience() {
  return (
    <section id="experience" className="py-[clamp(4rem,8vw,8rem)] bg-surface/40">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          label="career"
          title="Experience"
          subtitle="My professional journey — companies I've worked at, roles I've held, and skills I've built."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral/10 -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft      = i % 2 === 0
              const isEducation = exp.role.toLowerCase().includes('bachelor') ||
                                  exp.role.toLowerCase().includes('master')

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.42, ease: 'easeOut', delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 pl-10 md:pl-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-surface border-2 border-cyan/40 rounded-sm flex items-center justify-center z-10">
                    {isEducation
                      ? <GraduationCap size={14} className="text-cyan" />
                      : <Briefcase     size={14} className="text-cyan" />
                    }
                  </div>

                  {/* Year label — desktop only */}
                  <div
                    className={`hidden md:flex w-1/2 items-start ${
                      isLeft ? 'justify-end pr-14' : 'justify-start pl-14'
                    }`}
                  >
                    <span className="font-mono text-small text-muted/50 mt-1">{exp.year}</span>
                  </div>

                  {/* Card */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pl-14' : 'md:pr-14'}`}>
                    <div className="bg-surface border border-neutral/10 rounded-sm p-5 hover:border-cyan/20 transition-colors duration-200">
                      {/* Mobile year */}
                      <p className="font-mono text-xs text-muted/50 mb-1 md:hidden">{exp.year}</p>

                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-mono font-bold text-neutral text-body leading-snug">
                          {exp.role}
                        </h3>
                        <span className={`font-mono text-xs shrink-0 mt-0.5 ${typeColors[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>

                      <p className="font-mono text-small text-cyan/80 mb-1">{exp.company}</p>
                      <p className="font-mono text-xs text-muted/40 mb-4">{exp.location}</p>

                      <ul className="space-y-1.5 mb-4">
                        {exp.description.map((item, j) => (
                          <li key={j} className="font-mono text-small text-muted/70 flex items-start gap-2">
                            <span className="text-cyan mt-0.5 shrink-0">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <Badge key={t} label={t} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
