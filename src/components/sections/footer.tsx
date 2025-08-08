'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getCurrentYear } from '@/lib/utils'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/ismaiars',
    color: 'hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/ismael-salazar',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:iarsfate@gmail.com',
    color: 'hover:text-accent-green'
  }
]

const quickLinks = [
  { name: 'Inicio', nameEn: 'Home', href: '#home' },
  { name: 'Sobre Mí', nameEn: 'About Me', href: '#about' },
  { name: 'Experiencia', nameEn: 'Experience', href: '#timeline' },
  { name: 'Proyectos', nameEn: 'Projects', href: '#projects' },
  { name: 'Contacto', nameEn: 'Contact', href: '#contacto' }
]

export function Footer() {
  const currentYear = getCurrentYear()
  const [currentLanguage, setCurrentLanguage] = useState('es')

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChange = () => {
      const htmlLang = document.documentElement.getAttribute('data-lang') || 'es'
      setCurrentLanguage(htmlLang)
    }

    // Initial language detection
    handleLanguageChange()

    // Listen for changes to data-lang attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-lang') {
          handleLanguageChange()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-terminal-border border-t border-accent-green/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold text-accent-green font-mono">
              Ismael Salazar
            </div>
            <p className="text-gray-400 text-sm leading-relaxed" data-es="Ingeniero de Sistemas especializado en desarrollo web con Node.js, Python y tecnologías modernas." data-en="Systems Engineer specialized in web development with Node.js, Python and modern technologies.">
              {currentLanguage === 'es' 
                ? 'Ingeniero de Sistemas especializado en desarrollo web con Node.js, Python y tecnologías modernas.'
                : 'Systems Engineer specialized in web development with Node.js, Python and modern technologies.'
              }
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-2 rounded-full bg-terminal-bg border border-accent-green/20 text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white font-mono" data-es="Enlaces Rápidos" data-en="Quick Links">
              {currentLanguage === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-green transition-colors text-sm font-mono"
                    data-es={link.name}
                    data-en={link.nameEn}
                  >
                    {currentLanguage === 'es' ? link.name : link.nameEn}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white font-mono" data-es="Contacto" data-en="Contact">
              {currentLanguage === 'es' ? 'Contacto' : 'Contact'}
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-accent-green">Email:</span> iarsfate@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-accent-green" data-es="Ubicación" data-en="Location">
                   {currentLanguage === 'es' ? 'Ubicación' : 'Location'}:
                 </span> Toluca, México
              </p>
              <p className="text-gray-400">
                <span className="text-accent-green" data-es="Estado" data-en="Status">
                  {currentLanguage === 'es' ? 'Estado' : 'Status'}:
                </span> 
                <span data-es="Disponible para proyectos" data-en="Available for projects">
                  {currentLanguage === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
                </span>
              </p>
            </div>
            <Button variant="terminal" size="sm" className="mt-4" data-es="Trabajemos Juntos" data-en="Let's Work Together">
              {currentLanguage === 'es' ? 'Trabajemos Juntos' : "Let's Work Together"}
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-accent-green/20 text-center"
        >
          <p className="text-gray-400 text-sm font-mono flex items-center justify-center gap-2">
            © {currentYear} 
            <span data-es="Hecho con" data-en="Made with">
              {currentLanguage === 'es' ? 'Hecho con' : 'Made with'}
            </span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
            <span data-es="por Ismael Salazar" data-en="by Ismael Salazar">
              {currentLanguage === 'es' ? 'por Ismael Salazar' : 'by Ismael Salazar'}
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}