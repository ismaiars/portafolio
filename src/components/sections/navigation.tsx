'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { useScrollTo } from '@/hooks/use-scroll-to'

const navItems = [
  { id: 'home', label: 'Inicio', labelEn: 'Home', icon: Home },
  { id: 'about', label: 'Sobre Mí', labelEn: 'About Me', icon: User },
  { id: 'timeline', label: 'Experiencia', labelEn: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Proyectos', labelEn: 'Projects', icon: FolderOpen },
  { id: 'testimonials', label: 'Testimonios', labelEn: 'Testimonials', icon: MessageSquare },
  { id: 'contacto', label: 'Contacto', labelEn: 'Contact', icon: Mail }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMounted, setIsMounted] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId)
    setIsOpen(false)
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/80 backdrop-blur-md border-b border-accent-green/20"
      >
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="nav-mobile text-lg sm:text-xl font-bold text-accent-green font-mono cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('home')}
            >
              <span>&lt;IS /&gt;</span>
              {/* Language Toggle for Mobile */}
              <div className="md:hidden">
                <LanguageToggle size="xs" />
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'text-accent-green bg-accent-green/10'
                        : 'text-gray-300 hover:text-accent-green hover:bg-accent-green/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-mono text-sm" data-es={item.label} data-en={item.labelEn}>{item.label}</span>
                  </motion.button>
                )
              })}
              
              {/* Language Toggle */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navItems.length }}
              >
                <LanguageToggle />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-primary hover:text-accent-green transition-colors btn-mobile"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-terminal-bg/95 backdrop-blur-md border-t border-accent-green/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`btn-mobile block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-accent-green/20 text-accent-green border border-accent-green/30'
                      : 'text-text-secondary hover:text-accent-green hover:bg-accent-green/10'
                  }`}
                >
                  <span className="font-mono text-sm">{item.label}</span>
                </motion.button>
              ))}
              
              {/* Language Toggle in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-3 border-t border-accent-green/20"
              >
                <LanguageToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}