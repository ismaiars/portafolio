'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Mail } from 'lucide-react'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { ParticleBackground } from '@/components/ui/particle-background'
import { Button } from '@/components/ui/button'
import { useScrollTo } from '@/hooks/use-scroll-to'

const roles = [
  { es: 'Web Developer', en: 'Web Developer' },
  { es: 'Node.js Specialist', en: 'Node.js Specialist' },
  { es: 'Python Developer', en: 'Python Developer' },
  { es: 'Next.js Expert', en: 'Next.js Expert' },
  { es: 'Systems Coordinator', en: 'Systems Coordinator' },
  { es: 'Tech Innovator', en: 'Tech Innovator' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentLanguage, setCurrentLanguage] = useState('es')
  const scrollTo = useScrollTo()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChange = () => {
      const htmlLang = document.documentElement.getAttribute('data-lang') || 'es'
      setCurrentLanguage(htmlLang)
    }

    // Initial language check
    handleLanguageChange()

    // Listen for language toggle events
    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang']
    })

    return () => observer.disconnect()
  }, [])

  const handleScrollToAbout = () => {
    scrollTo('about')
  }

  const handleDownloadCV = () => {
    // Trigger CV download
    const link = document.createElement('a')
    link.href = '/docs/cv_ismael_salazar.pdf'
    link.download = 'cv_ismael_salazar.pdf'
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-bg via-terminal-surface to-terminal-bg" />
      <ParticleBackground />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-terminal-grid opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center mt-8 sm:mt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-accent-green font-mono text-lg md:text-xl" data-es="Hola, soy" data-en="Hello, I'm">
              Hola, soy
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="gradient-text">Ismael Salazar</span>
            </h1>
          </motion.div>
          
          {/* Role with Typewriter Effect */}
          <motion.div variants={itemVariants} className="h-16 md:h-20">
            <TypewriterEffect
              words={[roles[currentRoleIndex][currentLanguage as keyof typeof roles[0]]]}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-primary"
              cursorClassName="bg-accent-green"
            />
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            <span data-es="Especializado en" data-en="Specialized in">Especializado en</span>{' '}
            <span className="text-accent-blue font-semibold">Node.js</span>,{' '}
            <span className="text-accent-purple font-semibold">Python</span>,{' '}
            <span className="text-accent-green font-semibold">Next.js</span> <span data-es="y" data-en="and">y</span>{' '}
            <span className="text-accent-orange font-semibold" data-es="tecnologías modernas" data-en="modern technologies">tecnologías modernas</span>.
            <br />
            <span data-es="Creando soluciones web innovadoras y eficientes." data-en="Creating innovative and efficient web solutions.">Creando soluciones web innovadoras y eficientes.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleDownloadCV}
              className="btn-primary group"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              <span data-es="Descargar CV" data-en="Download CV">Descargar CV</span>
            </Button>
            
            <Button
              onClick={() => scrollTo('contact')}
              variant="outline"
              className="btn-secondary"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span data-es="Contactar" data-en="Contact">Contactar</span>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              <a 
                href="https://github.com/ismaiars" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Ver perfil de GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-green mb-2">
                1+
              </div>
              <div className="text-text-secondary font-mono text-sm" data-es="Año de Experiencia" data-en="Year of Experience">
                Año de Experiencia
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">
                10+
              </div>
              <div className="text-text-secondary font-mono text-sm" data-es="Proyectos Completados" data-en="Completed Projects">
                Proyectos Completados
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">
                15+
              </div>
              <div className="text-text-secondary font-mono text-sm" data-es="Tecnologías Dominadas" data-en="Technologies Mastered">
                Tecnologías Dominadas
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.button
        variants={floatingVariants}
        animate="animate"
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-green hover:text-accent-blue transition-colors cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  )
}