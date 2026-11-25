'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, GitBranch } from 'lucide-react'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { useScrollTo } from '@/hooks/use-scroll-to'

const navItems = [
  { id: 'home', index: '0', label: 'inicio', labelEn: 'home' },
  { id: 'about', index: '1', label: 'sobre-mi', labelEn: 'about' },
  { id: 'methodology', index: '2', label: 'metodologia', labelEn: 'workflow' },
  { id: 'experience', index: '3', label: 'experiencia', labelEn: 'experience' },
  { id: 'projects', index: '4', label: 'proyectos', labelEn: 'projects' },
  { id: 'contact', index: '5', label: 'contacto', labelEn: 'contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMounted, setIsMounted] = useState(false)
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const scrollTo = useScrollTo()

  useEffect(() => {
    setIsMounted(true)

    const syncLang = () => {
      const current = (document.documentElement.getAttribute('data-lang') as 'es' | 'en') || 'es'
      setLang(current)
    }
    syncLang()

    const observer = new MutationObserver(syncLang)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang'],
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 140

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId)
    setIsOpen(false)
  }

  if (!isMounted) return null

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#090b10]/90 backdrop-blur-md border-b border-[#262e40]"
      >
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between gap-4">
            {/* Oh My Posh / tmux Left Status Pill */}
            <button
              onClick={() => handleNavClick('home')}
              className="inline-flex items-center font-mono text-xs sm:text-sm group focus-visible:outline-none"
              aria-label="Ir al inicio"
            >
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-l-md bg-[#7c3aed] text-white font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>ismael</span>
              </span>
              <svg width="8" height="26" viewBox="0 0 8 26" className="shrink-0" aria-hidden="true">
                <rect x="0" y="0" width="8" height="26" fill="#0ea5e9" />
                <polygon points="0,0 8,13 0,26" fill="#7c3aed" />
              </svg>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-[#0ea5e9] text-[#06121e] font-semibold">
                <GitBranch className="w-3.5 h-3.5" />
                <span>main</span>
              </span>
              <svg width="8" height="26" viewBox="0 0 8 26" className="hidden sm:block shrink-0" aria-hidden="true">
                <polygon points="0,0 8,13 0,26" fill="#0ea5e9" />
              </svg>
            </button>

            {/* Desktop tmux Window Tabs */}
            <div className="hidden lg:flex items-center gap-1 font-mono text-xs">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-2.5 py-1.5 rounded transition-colors ${
                      isActive
                        ? 'bg-[#10b981]/15 text-[#00ff9c] border border-[#10b981]/40 font-semibold'
                        : 'text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#181d2a] border border-transparent'
                    }`}
                  >
                    <span className="text-[#64748b] mr-1">[{item.index}]</span>
                    <span>~/{lang === 'en' ? item.labelEn : item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Right Status + Language */}
            <div className="hidden md:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#151a26] border border-[#262e40] font-mono text-[11px] text-[#94a3b8]">
                <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-pulse" />
                <span>zsh · ready</span>
              </div>
              <LanguageToggle />
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="md:hidden">
                <LanguageToggle size="sm" />
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded border border-[#262e40] bg-[#151a26] text-[#e2e8f0] hover:text-[#00ff9c] hover:border-[#00ff9c]/40 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[53px] left-0 right-0 z-40 lg:hidden bg-[#0d111a]/98 backdrop-blur-lg border-b border-[#262e40] shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4 font-mono text-sm space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md border transition-colors ${
                      isActive
                        ? 'bg-[#10b981]/15 text-[#00ff9c] border-[#10b981]/40'
                        : 'text-[#cbd5e1] border-transparent hover:bg-[#181d2a]'
                    }`}
                  >
                    <span>
                      <span className="text-[#64748b] mr-2">[{item.index}]</span>
                      cd ~/{lang === 'en' ? item.labelEn : item.label}
                    </span>
                    {isActive && <span className="text-[11px] text-[#00ff9c]">● active</span>}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
