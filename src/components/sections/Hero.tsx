import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ChevronDown, Download, ArrowRight } from 'lucide-react'
import { personalInfo } from '../../data/personal'
import { Button } from '../ui/Button'

const terminalLines = [
  { prompt: '$ whoami',                                              delay: 0 },
  { prompt: 'john_doe — full-stack developer',                      delay: 600,  isMuted: true },
  { prompt: '$ cat skills.txt',                                     delay: 1200 },
  { prompt: 'React · Node.js · TypeScript · PostgreSQL · Docker',   delay: 1800, isMuted: true },
  { prompt: '$ echo $STATUS',                                       delay: 2400 },
  { prompt: '// Available for new projects',                        delay: 3000, isCyan: true },
]

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="bg-surface border border-neutral/10 rounded-md p-5 font-mono text-small shadow-card w-full max-w-md transition-colors duration-200">
      {/* Terminal header */}
      <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-neutral/10">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-muted/40 text-xs">portfolio — zsh</span>
      </div>
      {/* Lines */}
      <div className="space-y-1.5">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <p
            key={i}
            className={
              line.isCyan  ? 'text-cyan'
              : line.isMuted ? 'text-muted/70'
              : 'text-neutral'
            }
          >
            {line.prompt}
            {i === visibleLines - 1 && (
              <span className="animate-blink ml-0.5">▋</span>
            )}
          </p>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const socials = [
    { icon: Github,   href: personalInfo.social.github,   label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter,  href: personalInfo.social.twitter,  label: 'Twitter' },
    { icon: Mail,     href: personalInfo.social.email,    label: 'Email' },
  ]

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      {/* Background image — light mode only */}
      <div className="block dark:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/assets/red-bg-dark.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      {/* Background image — dark mode only */}
      <div className="hidden dark:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
        <img
          src="/assets/red-bg-dark.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
          >
            <p className="font-mono text-small text-cyan tracking-widest uppercase mb-4">
              // {personalInfo.role}
            </p>
            <h1
              className="font-mono font-bold text-neutral leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Hi, I'm{' '}
              <span className="text-cyan">{personalInfo.name}</span>
              <span className="animate-blink">_</span>
            </h1>
            <p className="font-mono text-muted text-body leading-relaxed mb-8 max-w-lg">
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" href="#projects">
                <ArrowRight size={16} /> View My Work
              </Button>
              <Button variant="ghost" href={personalInfo.resumeUrl}>
                <Download size={16} /> Download CV
              </Button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-cyan transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo + Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: 'easeOut', delay: 0.12 }}
            className="flex flex-col items-center gap-6"
          >

            <TerminalCard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-muted/40"
        >
          <span className="font-mono text-xs">scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
