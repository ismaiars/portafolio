'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiStrapi, SiNodedotjs, 
  SiMongodb, SiStripe, SiVuedotjs, SiExpress, SiPostgresql, SiDocker 
} from 'react-icons/si';

export default function Projects() {
  return (
    <section id="proyectos" className="section-animate py-8 md:py-16 bg-terminal-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-accent-green" data-es="Mis Creaciones: Proyectos que Me Enorgullecen" data-en="My Creations: Projects I'm Proud Of">
          Mis Creaciones: Proyectos que Me Enorgullecen
        </h2>
        <p className="projects-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Aquí tienes una muestra de lo que he estado cocinando en mi laboratorio digital. Cada proyecto tiene su propia historia, sus desafíos únicos y, por supuesto, esos momentos de &apos;¡Eureka!&apos; que hacen que todo valga la pena." data-en="Here&apos;s a sample of what I&apos;ve been cooking up in my digital laboratory. Each project has its own story, unique challenges, and of course, those &apos;Eureka!&apos; moments that make it all worthwhile.">
          Aquí tienes una muestra de lo que he estado cocinando en mi laboratorio digital. 
          Cada proyecto tiene su propia historia, sus desafíos únicos y, por supuesto, 
          esos momentos de &apos;¡Eureka!&apos; que hacen que todo valga la pena.
        </p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1: Carpe Diem México */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-green transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/carpediem.webp" 
                alt="Carpe Diem México - Sitio Web Corporativo"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-green">Carpe Diem México</h3>
                <span className="project-type px-3 py-1 bg-accent-green/20 text-accent-green rounded-full text-sm font-medium" data-es="Sitio Web Corporativo" data-en="Corporate Website">
                  Sitio Web Corporativo
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="Un sitio web corporativo completo que refleja la esencia y profesionalismo de la empresa. Incluye gestión de contenido, optimización SEO y un diseño que convierte visitantes en clientes." data-en="A complete corporate website that reflects the company's essence and professionalism. Includes content management, SEO optimization and a design that converts visitors into customers.">
                Un sitio web corporativo completo que refleja la esencia y profesionalismo de la empresa. 
                Incluye gestión de contenido, optimización SEO y un diseño que convierte visitantes en clientes.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-blue font-semibold mb-2" data-es="Características destacadas:" data-en="Key features:">Características destacadas:</h4>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">▸</span>
                    <span data-es="CMS personalizado para gestión de contenido" data-en="Custom CMS for content management">CMS personalizado para gestión de contenido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">▸</span>
                    <span data-es="Diseño responsivo y optimizado para móviles" data-en="Responsive design optimized for mobile">Diseño responsivo y optimizado para móviles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">▸</span>
                    <span data-es="Integración con redes sociales y analytics" data-en="Social media and analytics integration">Integración con redes sociales y analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">▸</span>
                    <span data-es="Optimización SEO avanzada" data-en="Advanced SEO optimization">Optimización SEO avanzada</span>
                  </li>
                </ul>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiNextdotjs className="text-white" />
                    Next.js
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiTypescript className="text-blue-600" />
                    TypeScript
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiTailwindcss className="text-cyan-400" />
                    Tailwind CSS
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiStrapi className="text-purple-500" />
                    Strapi CMS
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://carpediemmexico.com.mx/2022/" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-green/20 hover:bg-accent-green hover:text-terminal-bg text-accent-green px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span data-es="Ver Sitio Web" data-en="View Website">Ver Sitio Web</span>
                </a>
              </div>
            </div>
          </div>

          {/* Proyecto 2: Ópticas Kairóz */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-blue transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/opticas-kairoz.webp" 
                alt="Ópticas Kairóz - Plataforma E-commerce"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-blue">Ópticas Kairóz</h3>
                <span className="project-type px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium" data-es="E-commerce" data-en="E-commerce">
                  E-commerce
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="Plataforma de e-commerce especializada en productos ópticos. Incluye configurador virtual, gestión de inventarios y un sistema de pagos seguro que transformó la experiencia de compra online." data-en="E-commerce platform specialized in optical products. Includes virtual configurator, inventory management and a secure payment system that transformed the online shopping experience.">
                Plataforma de e-commerce especializada en productos ópticos. Incluye configurador virtual, 
                gestión de inventarios y un sistema de pagos seguro que transformó la experiencia de compra online.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-green font-semibold mb-2" data-es="Características destacadas:" data-en="Key features:">Características destacadas:</h4>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">▸</span>
                    <span data-es="Configurador virtual de lentes" data-en="Virtual lens configurator">Configurador virtual de lentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">▸</span>
                    <span data-es="Carrito de compras avanzado" data-en="Advanced shopping cart">Carrito de compras avanzado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">▸</span>
                    <span data-es="Gestión de inventarios en tiempo real" data-en="Real-time inventory management">Gestión de inventarios en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">▸</span>
                    <span data-es="Integración con pasarelas de pago" data-en="Payment gateway integration">Integración con pasarelas de pago</span>
                  </li>
                </ul>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiReact className="text-cyan-400" />
                    React
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiNodedotjs className="text-green-500" />
                    Node.js
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiMongodb className="text-green-500" />
                    MongoDB
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiStripe className="text-purple-500" />
                    Stripe
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://opticaskairoz.com.mx/" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-blue/20 hover:bg-accent-blue hover:text-terminal-bg text-accent-blue px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span data-es="Ver E-commerce" data-en="View E-commerce">Ver E-commerce</span>
                </a>
              </div>
            </div>
          </div>

          {/* Proyecto 3: Sistema de Inventarios */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-purple transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/inventario.webp" 
                alt="Sistema de Inventarios - Aplicación Corporativa"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-purple">Sistema de Inventarios</h3>
                <span className="project-type px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium" data-es="Sistema Corporativo" data-en="Corporate System">
                  Sistema Corporativo
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="Sistema integral de gestión de inventarios diseñado para empresas medianas. Automatiza procesos, genera reportes inteligentes y reduce errores operativos significativamente." data-en="Comprehensive inventory management system designed for medium-sized companies. Automates processes, generates intelligent reports and significantly reduces operational errors.">
                Sistema integral de gestión de inventarios diseñado para empresas medianas. 
                Automatiza procesos, genera reportes inteligentes y reduce errores operativos significativamente.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-orange font-semibold mb-2" data-es="Características destacadas:" data-en="Key features:">Características destacadas:</h4>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple mt-1">▸</span>
                    <span data-es="Dashboard con métricas en tiempo real" data-en="Dashboard with real-time metrics">Dashboard con métricas en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple mt-1">▸</span>
                    <span data-es="Gestión de múltiples almacenes" data-en="Multi-warehouse management">Gestión de múltiples almacenes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple mt-1">▸</span>
                    <span data-es="Reportes automatizados y alertas" data-en="Automated reports and alerts">Reportes automatizados y alertas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple mt-1">▸</span>
                    <span data-es="API REST para integraciones" data-en="REST API for integrations">API REST para integraciones</span>
                  </li>
                </ul>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-blue font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiVuedotjs className="text-green-500" />
                    Vue.js
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiExpress className="text-gray-400" />
                    Express
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiPostgresql className="text-blue-700" />
                    PostgreSQL
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiDocker className="text-blue-500" />
                    Docker
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://github.com/ismaiars/Inventario-Corporativo" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-purple/20 hover:bg-accent-purple hover:text-terminal-bg text-accent-purple px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span data-es="Ver Código" data-en="View Code">Ver Código</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6" data-es="¿Te gustó lo que viste? Estos son solo algunos ejemplos. Tengo más proyectos esperando en mi repositorio de GitHub." data-en="Did you like what you saw? These are just a few examples. I have more projects waiting in my GitHub repository.">
            ¿Te gustó lo que viste? Estos son solo algunos ejemplos. 
            Tengo más proyectos esperando en mi repositorio de GitHub.
          </p>
          <a href="https://github.com/ismaiars" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 bg-accent-green/20 hover:bg-accent-green hover:text-terminal-bg text-accent-green px-6 py-3 rounded-lg font-medium transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span data-es="Ver Más Proyectos en GitHub" data-en="View More Projects on GitHub">Ver Más Proyectos en GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}