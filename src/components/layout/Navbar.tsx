import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../contexts/ThemeContext'
import { personalInfo } from '../../data/personal'
import { Button } from '../ui/Button'

function Logo() {
  const { theme } = useTheme()
  return (
    <a href="#hero" aria-label={personalInfo.name}>
      <img
        src={theme === 'dark' ? '/assets/logo-white.png' : '/assets/logo-black.png'}
        alt={personalInfo.name}
        className="h-8 w-auto object-contain"
      />
    </a>
  )
}

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const activeSection             = useActiveSection()
  const { theme, toggle }         = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-primary/90 backdrop-blur-md border-b border-neutral/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive  = activeSection === sectionId
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative font-mono text-small transition-colors duration-200 pb-1 ${
                      isActive ? 'text-cyan' : 'text-muted hover:text-neutral'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-px bg-cyan rounded-full" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop — Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-sm border border-neutral/15 text-muted hover:text-cyan hover:border-cyan transition-all duration-200 cursor-pointer"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Button variant="ghost" size="sm" href="#contact">
              Hire Me
            </Button>
          </div>

          {/* Mobile — Theme toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-sm text-muted hover:text-cyan transition-colors p-1"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-neutral hover:text-cyan transition-colors p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-primary/95 backdrop-blur-md pt-16">
          <ul className="flex flex-col gap-1 px-6 pt-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-body text-muted hover:text-cyan py-3 border-b border-neutral/10 transition-colors duration-200"
                >
                  <span className="text-cyan mr-2">//</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pt-8">
            <Button variant="primary" href="#contact" className="w-full justify-center">
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
