import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail } from 'lucide-react'
import { animate, stagger, splitText } from 'animejs'
import { personalInfo } from '../../data/personal'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return

    let splitter: any = null
    let anim: any = null
    let floatAnim: any = null

    try {
      splitter = splitText(textRef.current, {
        words: {
          class: 'inline-block opacity-0 will-change-transform',
        },
      })
    } catch (err) {
      console.warn('Anime.js splitText error:', err)
    }

    const wordTargets = splitter?.words?.length
      ? splitter.words
      : textRef.current.querySelectorAll('.profile-bg-word')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && wordTargets.length) {
            anim = animate(wordTargets, {
              translateY: [50, 0],
              opacity: [0, 1],
              scale: [0.92, 1],
              delay: stagger(200, { start: 100 }),
              duration: 1200,
              ease: 'outExpo',
              onComplete: () => {
                floatAnim = animate(wordTargets, {
                  translateY: [-6, 6],
                  duration: 3500,
                  alternate: true,
                  loop: true,
                  delay: stagger(300),
                  ease: 'inOutSine',
                })
              },
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      if (anim?.revert) anim.revert()
      if (floatAnim?.revert) floatAnim.revert()
      if (splitter?.revert) splitter.revert()
    }
  }, [])

  return (
    <section id="about" className="relative py-[clamp(4rem,8vw,8rem)] overflow-hidden">
      {/* Background watermark text — My Profile (Anime.js text words animation) */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <div
          ref={textRef}
          className="font-mono font-black uppercase tracking-widest text-[clamp(4rem,14vw,12rem)] leading-none whitespace-nowrap text-neutral/[0.04] dark:text-neutral/[0.06] flex gap-4 md:gap-8 transition-colors duration-200"
        >
          My Profile
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative border offset */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-cyan/20 rounded-md" />
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-md overflow-hidden border border-neutral/10">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, ease: 'easeOut', delay: 0.1 }}
          >
            <SectionTitle label="about me" title="Who I Am" />

            <div className="space-y-4 text-muted leading-relaxed mb-8">
              {personalInfo.bio.split('\n').filter(Boolean).map((para, i) => (
                <p key={i} className="font-mono text-body">{para.trim()}</p>
              ))}
            </div>

            {/* Meta info */}
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2 font-mono text-small text-muted/80">
                <MapPin size={14} className="text-cyan shrink-0" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2 font-mono text-small text-muted/80">
                <Mail size={14} className="text-cyan shrink-0" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2 font-mono text-small">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shrink-0" />
                <span className="text-cyan">{personalInfo.availability}</span>
              </div>
            </div>

            <Button variant="ghost" href="#contact">
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-neutral/10"
        >
          {personalInfo.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, ease: 'easeOut', delay: i * 0.08 }}
              className="text-center"
            >
              <p
                className="font-mono font-bold text-cyan mb-1"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-small text-muted/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
