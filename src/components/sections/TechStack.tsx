import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { SectionTitle } from '../ui/SectionTitle'

function SkillIcon({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-sm bg-charcoal border border-neutral/10 flex items-center justify-center text-muted/60 group-hover:text-cyan group-hover:border-cyan/30 transition-all duration-200">
      <span className="font-mono text-xs font-bold">{name.slice(0, 2).toUpperCase()}</span>
    </div>
  )
}

export function TechStack() {
  return (
    <section id="skills" className="py-[clamp(4rem,8vw,8rem)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          label="tech stack"
          title="Skills & Tools"
          subtitle="Technologies I use regularly to build reliable, scalable products."
        />

        <div className="space-y-10">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, ease: 'easeOut', delay: catIndex * 0.06 }}
            >
              <p className="font-mono text-small text-muted/50 uppercase tracking-widest mb-4">
                {cat.category}
              </p>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: catIndex * 0.06 + i * 0.05 }}
                    className="group flex items-center gap-2.5 bg-surface border border-neutral/10 rounded-sm px-3 py-2 hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-200 cursor-default"
                  >
                    <SkillIcon name={skill.name} />
                    <span className="font-mono text-small text-muted group-hover:text-neutral transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
