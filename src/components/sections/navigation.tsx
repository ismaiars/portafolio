'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { useScrollTo } from '@/hooks/use-scroll-to'

const navItems = [
  { id: 'home', label: 'Inicio', labelEn: 'Home', icon: Home },
  { id: 'about', label: 'Sobre Mí', labelEn: 'About Me', icon: User },
  { id: 'timeline', label: 'Experiencia', labelEn: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Proyectos', labelEn: 'Projects', icon: FolderOpen },
  { id: 'contacto', label: 'Contacto', labelEn: 'Contact', icon: Mail }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const scrollTo = useScrollTo()

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

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/90 backdrop-blur-md border-b border-accent-green/20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-accent-green font-mono"
            >
              Ismael Salazar
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
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-accent-green"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-64 bg-terminal-bg border-l border-accent-green/20 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-md mb-2 transition-colors ${
                      activeSection === item.id
                        ? 'text-accent-green bg-accent-green/10'
                        : 'text-gray-300 hover:text-accent-green hover:bg-accent-green/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-mono" data-es={item.label} data-en={item.labelEn}>{item.label}</span>
                  </motion.button>
                )
              })}
              
              {/* Language Toggle for Mobile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * navItems.length }}
                className="mt-4 px-4"
              >
                <LanguageToggle className="w-full justify-center" />
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