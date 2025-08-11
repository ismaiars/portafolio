'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Mail } from 'lucide-react'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { ParticleBackground } from '@/components/ui/particle-background'
import { Button } from '@/components/ui/button'
import { useScrollTo } from '@/hooks/use-scroll-to'
import { trackEvent } from '@/components/analytics'

const roles = [
  { es: 'Soluciones Digitales Rentables', en: 'Profitable Digital Solutions' },
  { es: 'Aplicaciones Web de Alto Rendimiento', en: 'High-Performance Web Applications' },
  { es: 'Sistemas que Impulsan Negocios', en: 'Business-Driving Systems' },
  { es: 'Experiencias de Usuario Excepcionales', en: 'Exceptional User Experiences' },
  { es: 'Plataformas E-commerce Exitosas', en: 'Successful E-commerce Platforms' },
  { es: 'Automatización que Ahorra Tiempo', en: 'Time-Saving Automation' }
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



export function Hero() {
  const [currentLanguage, setCurrentLanguage] = useState('es')
  const scrollTo = useScrollTo()

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



  const handleDownloadCV = () => {
    // Track CV download event
    trackEvent('download', 'engagement', 'CV Download', 1)
    
    // Trigger CV download
    const link = document.createElement('a')
    link.href = '/docs/cv_ismael_salazar.pdf'
    link.download = 'cv_ismael_salazar.pdf'
    link.click()
  }

  const handleContactClick = () => {
    trackEvent('click', 'navigation', 'Contact Button', 1)
    scrollTo('contact')
  }

  const handleGithubClick = () => {
    trackEvent('click', 'social', 'GitHub Profile', 1)
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
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="gradient-text">Ismael Salazar</span>
            </h1>
            <p className="hero-subtitle text-accent-green font-mono text-lg md:text-xl" data-es="Transformo Ideas en" data-en="I Transform Ideas into">
              Transformo Ideas en
            </p>
          </motion.div>
          
          {/* Role with Typewriter Effect */}
          <motion.div variants={itemVariants} className="h-16 md:h-20">
            <TypewriterEffect
              words={roles.map(role => role[currentLanguage as keyof typeof role])}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-primary"
              cursorClassName="bg-accent-green"
              typeSpeed={100}
              deleteSpeed={50}
              delayBetweenWords={3000}
              loop={true}
            />
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            <span data-es="Desarrollo soluciones web que no solo se ven increíbles, sino que generan resultados reales: más ventas, mejor eficiencia y crecimiento sostenible para tu negocio." data-en="I develop web solutions that don't just look amazing, but deliver real results: more sales, better efficiency, and sustainable growth for your business.">
              Desarrollo soluciones web que no solo se ven increíbles, sino que generan resultados reales: más ventas, mejor eficiencia y crecimiento sostenible para tu negocio.
            </span>
          </motion.p>
          
          {/* Guarantee */}
          <motion.div 
            variants={itemVariants}
            className="bg-terminal-surface/50 border border-accent-green/30 rounded-lg p-4 max-w-2xl mx-auto"
          >
            <p className="text-accent-green font-mono text-sm md:text-base">
              <span data-es="✅ Proyectos entregados a tiempo y con calidad excepcional" data-en="✅ Projects delivered on time with exceptional quality">
                ✅ Proyectos entregados a tiempo y con calidad excepcional
              </span>
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button
              onClick={handleContactClick}
              className="btn-primary btn-mobile group w-full sm:w-auto"
              size="lg"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base" data-es="📞 Hablemos de tu Proyecto" data-en="📞 Let's Talk About Your Project">📞 Hablemos de tu Proyecto</span>
            </Button>
            
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              className="btn-secondary btn-mobile group w-full sm:w-auto"
              size="lg"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
              <span className="text-sm sm:text-base" data-es="💼 Ver Mi Trabajo" data-en="💼 See My Work">💼 Ver Mi Trabajo</span>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-text-secondary hover:text-accent-green transition-colors btn-mobile"
            >
              <a 
                href="https://github.com/ismaiars" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Ver perfil de GitHub"
                onClick={handleGithubClick}
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="stats-mobile grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto px-4"
          >
            <div className="text-center bg-terminal-surface/30 rounded-lg p-3 sm:p-4 border border-accent-green/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-green mb-1 sm:mb-2">
                2+
              </div>
              <div className="text-text-secondary font-mono text-xs sm:text-sm leading-tight" data-es="Años Creando Soluciones" data-en="Years Creating Solutions">
                Años Creando Soluciones
              </div>
            </div>
            
            <div className="text-center bg-terminal-surface/30 rounded-lg p-3 sm:p-4 border border-accent-blue/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-blue mb-1 sm:mb-2">
                15+
              </div>
              <div className="text-text-secondary font-mono text-xs sm:text-sm leading-tight" data-es="Proyectos Exitosos Entregados" data-en="Successful Projects Delivered">
                Proyectos Exitosos Entregados
              </div>
            </div>
            
            <div className="text-center bg-terminal-surface/30 rounded-lg p-3 sm:p-4 border border-accent-purple/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-purple mb-1 sm:mb-2">
                300%+
              </div>
              <div className="text-text-secondary font-mono text-xs sm:text-sm leading-tight" data-es="Promedio Aumento Conversiones" data-en="Average Conversion Increase">
                Promedio Aumento Conversiones
              </div>
            </div>
            
            <div className="text-center bg-terminal-surface/30 rounded-lg p-3 sm:p-4 border border-accent-orange/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-orange mb-1 sm:mb-2">
                99.9%
              </div>
              <div className="text-text-secondary font-mono text-xs sm:text-sm leading-tight" data-es="Tiempo Actividad Garantizado" data-en="Uptime Guaranteed">
                Tiempo Actividad Garantizado
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      

    </section>
  )
}