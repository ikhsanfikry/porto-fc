import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { personalInfo } from '../../data/personal'
import { useTheme } from '../../contexts/ThemeContext'

export function Footer() {
  const year = new Date().getFullYear()
  const { theme } = useTheme()
  const socialIcons = [
    { icon: Github,   href: personalInfo.social.github,   label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter,  href: personalInfo.social.twitter,  label: 'Twitter' },
    { icon: Mail,     href: personalInfo.social.email,    label: 'Email' },
  ]

  const navLinks = [
    { label: 'About',      href: '#about' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact',    href: '#contact' },
  ]

  return (
    <footer className="border-t border-neutral/10 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a href="#hero" aria-label={personalInfo.name}>
            <img
              src={theme === 'dark' ? '/assets/logo-white.png' : '/assets/logo-black.png'}
              alt={personalInfo.name}
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-small text-muted hover:text-cyan transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted hover:text-cyan transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral/10 text-center">
          <p className="font-mono text-small text-muted/60">
            &copy; {year} {personalInfo.name}.
          </p>
        </div>
      </div>
    </footer>
  )
}
