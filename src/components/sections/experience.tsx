'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  SiReact, SiNodedotjs, SiTypescript, SiDocker, SiPostgresql,
  SiVuedotjs, SiPython, SiDjango, SiMysql, SiRedis, SiJavascript, SiSass,
  SiWebpack, SiJest
} from 'react-icons/si'

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Full-Stack Developer',
    positionEn: 'Senior Full-Stack Developer',
    location: 'Remote',
    locationEn: 'Remote',
    period: '2022 - Presente',
    periodEn: '2022 - Present',
    description: 'Liderazgo técnico en el desarrollo de aplicaciones web escalables usando React, Node.js y AWS. Implementación de arquitecturas microservicios y mejora de performance en un 40%.',
    descriptionEn: 'Technical leadership in developing scalable web applications using React, Node.js and AWS. Implementation of microservices architectures and 40% performance improvement.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    achievements: [
      'Redujo el tiempo de carga de la aplicación en un 40%',
      'Lideró un equipo de 5 desarrolladores',
      'Implementó CI/CD pipeline completo'
    ],
    achievementsEn: [
      'Reduced application load time by 40%',
      'Led a team of 5 developers',
      'Implemented complete CI/CD pipeline'
    ]
  },
  {
    company: 'Digital Innovations',
    position: 'Full-Stack Developer',
    positionEn: 'Full-Stack Developer',
    location: 'Ciudad, País',
    locationEn: 'City, Country',
    period: '2021 - 2022',
    periodEn: '2021 - 2022',
    description: 'Desarrollo de aplicaciones web modernas con enfoque en experiencia de usuario. Colaboración estrecha con equipos de diseño y product management.',
    descriptionEn: 'Development of modern web applications focused on user experience. Close collaboration with design and product management teams.',
    technologies: ['Vue.js', 'Python', 'Django', 'MySQL', 'Redis'],
    achievements: [
      'Desarrolló 3 aplicaciones web desde cero',
      'Mejoró la satisfacción del usuario en un 25%',
      'Implementó sistema de autenticación robusto'
    ],
    achievementsEn: [
      'Developed 3 web applications from scratch',
      'Improved user satisfaction by 25%',
      'Implemented robust authentication system'
    ]
  },
  {
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    positionEn: 'Frontend Developer',
    location: 'Ciudad, País',
    locationEn: 'City, Country',
    period: '2020 - 2021',
    periodEn: '2020 - 2021',
    description: 'Desarrollo de interfaces de usuario responsivas y accesibles. Optimización de performance y implementación de mejores prácticas de desarrollo frontend.',
    descriptionEn: 'Development of responsive and accessible user interfaces. Performance optimization and implementation of frontend development best practices.',
    technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Jest'],
    achievements: [
      'Creó componentes reutilizables para el design system',
      'Implementó testing automatizado',
      'Mejoró la accesibilidad web (WCAG 2.1)'
    ],
    achievementsEn: [
      'Created reusable components for the design system',
      'Implemented automated testing',
      'Improved web accessibility (WCAG 2.1)'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-terminal-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span data-es="Mi" data-en="My">Mi</span> <span className="text-accent-green" data-es="Experiencia" data-en="Experience">Experiencia</span>
          </h2>
          <div className="w-24 h-1 bg-accent-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-es="Un recorrido profesional enfocado en crear soluciones tecnológicas innovadoras" data-en="A professional journey focused on creating innovative technological solutions">
            Un recorrido profesional enfocado en crear soluciones tecnológicas innovadoras
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-green/30 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >


              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-terminal-border p-6 rounded-lg border border-accent-green/20 hover:border-accent-green/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-accent-green/10 text-accent-green text-sm rounded-full font-mono" data-es={exp.period} data-en={exp.periodEn}>
                      {exp.period}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span data-es={exp.location} data-en={exp.locationEn}>{exp.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1" data-es={exp.position} data-en={exp.positionEn}>{exp.position}</h3>
                  <h4 className="text-lg text-accent-green mb-4 font-mono">{exp.company}</h4>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed" data-es={exp.description} data-en={exp.descriptionEn}>{exp.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => {
                      const getTechIcon = (techName: string) => {
                        const iconMap: { [key: string]: JSX.Element } = {
                          'React': <SiReact className="text-cyan-400" />,
                          'Node.js': <SiNodedotjs className="text-green-500" />,
                          'TypeScript': <SiTypescript className="text-blue-600" />,
                          'AWS': <span className="text-orange-400 font-bold">☁️</span>,
                          'Docker': <SiDocker className="text-blue-500" />,
                          'PostgreSQL': <SiPostgresql className="text-blue-700" />,
                          'Vue.js': <SiVuedotjs className="text-green-500" />,
                          'Python': <SiPython className="text-blue-400" />,
                          'Django': <SiDjango className="text-green-600" />,
                          'MySQL': <SiMysql className="text-blue-600" />,
                          'Redis': <SiRedis className="text-red-500" />,
                          'JavaScript': <SiJavascript className="text-yellow-400" />,
                          'Sass': <SiSass className="text-pink-500" />,
                          'Webpack': <SiWebpack className="text-blue-500" />,
                          'Jest': <SiJest className="text-red-600" />
                        };
                        return iconMap[techName] || null;
                      };
                      
                      return (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-terminal-bg text-accent-green text-xs rounded border border-accent-green/30 font-mono flex items-center gap-1"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-1">
                    <h5 className="text-sm font-semibold text-white mb-2" data-es="Logros principales:" data-en="Key achievements:">Logros principales:</h5>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="text-gray-400 text-sm leading-relaxed">
                        <span data-es={achievement} data-en={exp.achievementsEn[i]}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="terminal" size="lg">
            <ExternalLink className="w-4 h-4 mr-2" />
            <span data-es="Ver CV Completo" data-en="View Full Resume">Ver CV Completo</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}