'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import {
  SiReact, SiNodedotjs, SiTypescript, SiDocker, SiPostgresql,
  SiVuedotjs, SiPython, SiDjango, SiMysql, SiRedis, SiJavascript, SiSass,
  SiWebpack, SiJest, SiWordpress, SiLinux, SiSupabase, SiN8N
} from 'react-icons/si'

const experiences = [
  {
    company: 'Carpe Diem México',
    position: 'Coordinador de Sistemas',
    positionEn: 'Systems Coordinator',
    location: 'Presencial',
    locationEn: 'On-site',
    period: 'Marzo 2023 – Diciembre 2025',
    periodEn: 'March 2023 – December 2025',
    description: 'Administración y mantenimiento de plataformas educativas en Moodle, incluyendo gestión de usuarios, cursos y respaldos.',
    descriptionEn: 'Administration and maintenance of educational platforms in Moodle, including user management, courses, and backups.',
    technologies: ['Moodle', 'WordPress', 'Hardware', 'Videovigilancia'],
    achievements: [
      'Instalación y gestión de equipos de videovigilancia en más de 5 ubicaciones',
      'Mantenimiento preventivo y correctivo a más de 50 equipos de cómputo, reduciendo tiempos de inactividad',
      'Mantenimiento y optimización del sitio web institucional en WordPress',
      'Documentación de incidencias y procedimientos técnicos para estandarizar procesos',
      'Atención directa a profesores y estudiantes para soporte tecnológico',
      'Colaboración con el área académica en la implementación de aulas virtuales y recursos digitales'
    ],
    achievementsEn: [
      'Installation and management of video surveillance equipment in more than 5 locations',
      'Preventive and corrective maintenance for over 50 computer systems, reducing downtime',
      'Maintenance and optimization of the institutional website in WordPress',
      'Documentation of incidents and technical procedures to standardize processes',
      'Direct support to teachers and students for technological assistance',
      'Collaboration with the academic area in the implementation of virtual classrooms and digital resources'
    ]
  },
  {
    company: 'Ópticas Kairóz',
    position: 'Técnico de Sistemas',
    positionEn: 'Systems Technician',
    location: 'Presencial',
    locationEn: 'On-site',
    period: 'Abril 2024 – Diciembre 2025',
    periodEn: 'April 2024 – December 2025',
    description: 'Supervisión de mantenimiento tecnológico preventivo y correctivo en sucursales.',
    descriptionEn: 'Supervision of preventive and corrective technological maintenance in branches.',
    technologies: ['Software Dev', 'Redes', 'Videovigilancia', 'Soporte'],
    achievements: [
      'Administración de redes y configuración de routers',
      'Implementación de sistemas de videovigilancia en distintas sedes',
      'Soporte y mejoras en la página web de la óptica',
      'Apoyo en campañas digitales mediante la integración del catálogo en línea con redes sociales',
      'Configuración de correos empresariales y asistencia técnica al personal',
      'Capacitación básica al equipo en el uso de herramientas digitales',
      'Creación y Mantenimiento de Software CRUD para inventario con punto de ventas para control de caja y métricas para las consultas del negocio'
    ],
    achievementsEn: [
      'Network administration and router configuration',
      'Implementation of video surveillance systems in different locations',
      'Support and improvements to the optical shop\'s website',
      'Support in digital campaigns by integrating the online catalog with social networks',
      'Configuration of business emails and technical assistance to staff',
      'Basic training for the team in the use of digital tools',
      'Creation and Maintenance of CRUD Software for inventory with point of sale for cash control and metrics for business queries'
    ]
  },
  {
    company: 'Freelance',
    position: 'Desarrollador y Soporte IT',
    positionEn: 'Developer & IT Support',
    location: 'Remoto',
    locationEn: 'Remote',
    period: '2021 – Actualidad',
    periodEn: '2021 – Present',
    description: 'Desarrollo de sitios y aplicaciones web con Node.js, Python y Next.js.',
    descriptionEn: 'Development of websites and web applications with Node.js, Python, and Next.js.',
    technologies: ['Node.js', 'Python', 'Next.js', 'n8n', 'Supabase', 'Linux'],
    achievements: [
      'Automatización de procesos con n8n y conexión a bases de datos en Supabase',
      'Configuración de servidores Linux, despliegue de aplicaciones y entornos de prueba',
      'Creación de soluciones personalizadas para clientes de diferentes sectores (educación, salud visual, comercios)',
      'Análisis de requerimientos con clientes y entrega de soluciones iterativas',
      'Comunicación directa con clientes para ajustes y mejoras continuas',
      'Apoyo en la digitalización de servicios y catálogos en línea'
    ],
    achievementsEn: [
      'Process automation with n8n and connection to Supabase databases',
      'Linux server configuration, application deployment, and test environments',
      'Creation of custom solutions for clients in different sectors (education, visual health, retail)',
      'Requirement analysis with clients and delivery of iterative solutions',
      'Direct communication with clients for continuous adjustments and improvements',
      'Support in the digitization of services and online catalogs'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-terminal-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-green/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span data-es="Mi" data-en="My">Mi</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-emerald-400" data-es="Experiencia" data-en="Experience">Experiencia</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed" data-es="Un recorrido profesional enfocado en crear soluciones tecnológicas innovadoras" data-en="A professional journey focused on creating innovative technological solutions">
            Un recorrido profesional enfocado en crear soluciones tecnológicas innovadoras
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-green via-accent-green/50 to-transparent transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-start mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-terminal-bg border-4 border-accent-green transform -translate-x-1/2 mt-8 z-10 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>

              {/* Spacing for timeline */}
              <div className="hidden md:block w-1/2"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                <div className="group relative bg-[#111111]/80 backdrop-blur-sm p-8 rounded-xl border border-white/5 hover:border-accent-green/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.05)] hover:-translate-y-1">

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-green/5 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-accent-green/10 text-accent-green text-sm rounded-full font-mono font-medium border border-accent-green/20" data-es={exp.period} data-en={exp.periodEn}>
                      {exp.period}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm bg-black/30 px-3 py-1 rounded-md">
                      <MapPin className="w-4 h-4 mr-2 text-accent-green" />
                      <span data-es={exp.location} data-en={exp.locationEn}>{exp.location}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide" data-es={exp.position} data-en={exp.positionEn}>{exp.position}</h3>
                  <h4 className="text-lg text-emerald-400 mb-6 font-mono border-b border-white/5 pb-4 inline-block w-full">{exp.company}</h4>

                  <p className="text-gray-300 mb-6 leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5 text-sm" data-es={exp.description} data-en={exp.descriptionEn}>{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
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
                            'Jest': <SiJest className="text-red-600" />,
                            'WordPress': <SiWordpress className="text-blue-600" />,
                            'Linux': <SiLinux className="text-yellow-500" />,
                            'Supabase': <SiSupabase className="text-green-400" />,
                            'n8n': <SiN8N className="text-red-500" />,
                            'Moodle': <span className="text-orange-500 font-bold">🎓</span>,
                            'Hardware': <span className="text-gray-400 font-bold">🖥️</span>,
                            'Redes': <span className="text-blue-400 font-bold">🔌</span>,
                            'Videovigilancia': <span className="text-red-400 font-bold">📹</span>,
                            'Soporte': <span className="text-green-400 font-bold">🛠️</span>,
                            'Software Dev': <span className="text-cyan-400 font-bold">💻</span>,
                            'Next.js': <span className="text-white font-bold">N</span>
                          };
                          return iconMap[techName] || null;
                        };

                        return (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/5 font-mono flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                          >
                            {getTechIcon(tech)}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2" data-es="Logros destacados" data-en="Key achievements">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span>
                      Logros destacados
                    </h5>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <span className="mt-1.5 text-accent-green/50 text-[10px] group-hover/item:text-accent-green transition-colors">▹</span>
                        <p className="text-gray-400 text-sm leading-relaxed" data-es={achievement} data-en={exp.achievementsEn[i]}>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}