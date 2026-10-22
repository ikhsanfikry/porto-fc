import { useState, useRef, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { personalInfo } from '../../data/personal'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    // Replace YOUR_FORM_ID with your Formspree form ID
    // Sign up at formspree.io to get a free form ID
    const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

    try {
      const data = new FormData(e.currentTarget)
      const res  = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-charcoal border border-neutral/15 rounded-sm px-4 py-3 font-mono text-small text-neutral placeholder:text-muted/40 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-primary transition-colors duration-200'

  return (
    <section id="contact" className="py-[clamp(4rem,8vw,8rem)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          label="get in touch"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? Send me a message — I read every email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-small text-muted/70 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-small text-muted/70 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-small text-muted/70 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry / Collaboration"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-small text-muted/70 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 font-mono text-small text-green-600 dark:text-green-400">
                  <CheckCircle size={15} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 font-mono text-small text-red-600 dark:text-red-400">
                  <AlertCircle size={15} />
                  Something went wrong. Please try emailing me directly.
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={status === 'loading'}
                className={status === 'loading' ? 'opacity-60 cursor-not-allowed' : ''}
              >
                <Send size={15} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Info card — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-2 bg-surface border border-neutral/10 rounded-sm p-6 space-y-6"
          >
            <div>
              <p className="font-mono text-small text-muted/50 uppercase tracking-widest mb-4">
                Contact Info
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-cyan mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-muted/50 mb-0.5">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-small text-neutral hover:text-cyan transition-colors duration-200"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-cyan mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-muted/50 mb-0.5">Location</p>
                    <p className="font-mono text-small text-neutral">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral/10 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <p className="font-mono text-small text-cyan">{personalInfo.availability}</p>
              </div>
              <p className="font-mono text-xs text-muted/50 leading-relaxed">
                I typically respond within 24–48 hours. For urgent inquiries, please include "URGENT" in your subject.
              </p>
            </div>

            <div className="border-t border-neutral/10 pt-6">
              <p className="font-mono text-xs text-muted/50 uppercase tracking-widest mb-3">
                Find me online
              </p>
              <div className="flex flex-col gap-2">
                {Object.entries(personalInfo.social).map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="font-mono text-small text-muted/70 hover:text-cyan transition-colors duration-200 capitalize"
                  >
                    <span className="text-cyan mr-2">→</span>{key}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
