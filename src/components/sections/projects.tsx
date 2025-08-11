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
        <h2 className="text-4xl font-bold text-center mb-4 text-accent-green" data-es="Mis Proyectos Destacados" data-en="My Featured Projects">
          Mis Proyectos Destacados
        </h2>
        <p className="text-xl text-center mb-8 text-text-secondary max-w-3xl mx-auto" data-es="Soluciones creativas | Código limpio | Experiencias memorables" data-en="Creative solutions | Clean code | Memorable experiences">
          Soluciones creativas | Código limpio | Experiencias memorables
        </p>
        <p className="projects-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único y una oportunidad de aprender algo nuevo mientras creo soluciones efectivas." data-en="Here you can see some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn something new while creating effective solutions.">
          Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único 
          y una oportunidad de aprender algo nuevo mientras creo soluciones efectivas.
        </p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
          {/* Proyecto 1: Carpe Diem México */}
          <div className="project-card project-mobile bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-green transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/carpediem.webp" 
                alt="Carpe Diem México - Transformación Digital Completa"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-green text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">E-commerce</span>
              </div>
            </div>
            <div className="project-header p-4 md:p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-green">Carpe Diem México</h3>
                <span className="project-type px-3 py-1 bg-accent-green/20 text-accent-green rounded-full text-sm font-medium" data-es="Transformación Digital" data-en="Digital Transformation">
                  Transformación Digital
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-green">Next.js</div>
                    <div className="text-xs text-text-secondary">Framework</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-blue">CMS</div>
                    <div className="text-xs text-text-secondary">Gestión</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-purple">SEO</div>
                    <div className="text-xs text-text-secondary">Optimizado</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Transformar una empresa tradicional en líder digital de su sector con una plataforma que genere leads calificados y automatice procesos críticos de negocio." data-en="🎯 CHALLENGE: Transform a traditional company into a digital leader in its sector with a platform that generates qualified leads and automates critical business processes.">
                🎯 DESAFÍO: Transformar una empresa tradicional en líder digital de su sector con una 
                plataforma que genere leads calificados y automatice procesos críticos de negocio.
              </p>
            </div>
            
            <div className="project-details p-4 md:p-6">
              <div className="mb-4">
                <h4 className="text-accent-green font-semibold mb-3 flex items-center gap-2" data-es="💰 RESULTADOS ENTREGADOS:" data-en="💰 DELIVERED RESULTS:">
                  <span className="text-lg">💰</span>
                  RESULTADOS ENTREGADOS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">🚀</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm">CMS Inteligente de Conversión</div>
                        <div className="text-xs text-text-secondary">Gestión automatizada que aumentó leads 200%</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">📱</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm">Experiencia Mobile-First</div>
                        <div className="text-xs text-text-secondary">Diseño que convierte en todos los dispositivos</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm">Analytics Avanzados</div>
                        <div className="text-xs text-text-secondary">Tracking completo del customer journey</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🔍</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm">SEO de Alto Impacto</div>
                        <div className="text-xs text-text-secondary">Posicionamiento #1 en palabras clave objetivo</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <span data-es="Ver Caso de Éxito" data-en="View Success Story">Ver Caso de Éxito</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-green font-semibold bg-accent-green/10 px-2 py-1 rounded" data-es="ROI: +300% en 6 meses" data-en="ROI: +300% in 6 months">ROI: +300% en 6 meses</span>
              </div>
            </div>
          </div>

          {/* Proyecto 2: Ópticas Kairóz */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-blue transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/opticas-kairoz.webp" 
                alt="Ópticas Kairóz - Revolución E-commerce"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-blue text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">E-commerce</span>
              </div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-blue">Ópticas Kairóz</h3>
                <span className="project-type px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium" data-es="E-commerce Premium" data-en="Premium E-commerce">
                  E-commerce Premium
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-blue">React</div>
                    <div className="text-xs text-text-secondary">Frontend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-green">AR</div>
                    <div className="text-xs text-text-secondary">Tecnología</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-purple">Stripe</div>
                    <div className="text-xs text-text-secondary">Pagos</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Crear la primera experiencia de compra online premium para lentes en México, con tecnología AR y automatización completa del proceso de venta." data-en="🎯 CHALLENGE: Create the first premium online shopping experience for glasses in Mexico, with AR technology and complete sales process automation.">
                🎯 DESAFÍO: Crear la primera experiencia de compra online premium para lentes en México, 
                con tecnología AR y automatización completa del proceso de venta.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-blue font-semibold mb-3 flex items-center gap-2" data-es="💰 IMPACTO GENERADO:" data-en="💰 GENERATED IMPACT:">
                  <span className="text-lg">💰</span>
                  IMPACTO GENERADO:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">👓</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Configurador AR Revolucionario" data-en="Revolutionary AR Configurator">Configurador AR Revolucionario</div>
                        <div className="text-xs text-text-secondary" data-es="Tecnología que aumentó conversión 40%" data-en="Technology that increased conversion 40%">Tecnología que aumentó conversión 40%</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">🛒</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Carrito Inteligente" data-en="Smart Cart">Carrito Inteligente</div>
                        <div className="text-xs text-text-secondary" data-es="Abandono reducido en 65%" data-en="Abandonment reduced by 65%">Abandono reducido en 65%</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Inventario Sincronizado" data-en="Synchronized Inventory">Inventario Sincronizado</div>
                        <div className="text-xs text-text-secondary" data-es="Cero sobreventa, máxima eficiencia" data-en="Zero overselling, maximum efficiency">Cero sobreventa, máxima eficiencia</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">💳</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Pagos Ultra-Seguros" data-en="Ultra-Secure Payments">Pagos Ultra-Seguros</div>
                        <div className="text-xs text-text-secondary" data-es="Múltiples métodos, conversión optimizada" data-en="Multiple methods, optimized conversion">Múltiples métodos, conversión optimizada</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
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
                  <span data-es="Ver Plataforma Live" data-en="View Live Platform">Ver Plataforma Live</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-blue font-semibold bg-accent-blue/10 px-2 py-1 rounded" data-es="Primer lugar en Google México" data-en="#1 ranking on Google Mexico">Primer lugar en Google México</span>
              </div>
            </div>
          </div>

          {/* Proyecto 3: Sistema de Inventarios */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-purple transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/inventario.webp" 
                alt="Sistema de Inventarios - Automatización Empresarial"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-purple text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">Sistema</span>
              </div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-purple">Sistema de Inventarios</h3>
                <span className="project-type px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium" data-es="Automatización Empresarial" data-en="Enterprise Automation">
                  Automatización Empresarial
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-purple/10 to-accent-orange/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-purple">Vue.js</div>
                    <div className="text-xs text-text-secondary">Frontend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-orange">API</div>
                    <div className="text-xs text-text-secondary">REST</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-green">Docker</div>
                    <div className="text-xs text-text-secondary">Deploy</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Eliminar el caos operativo de empresas medianas mediante un sistema que automatice completamente la gestión de inventarios y reduzca costos operativos en 50%." data-en="🎯 CHALLENGE: Eliminate operational chaos in medium-sized companies through a system that completely automates inventory management and reduces operational costs by 50%.">
                🎯 DESAFÍO: Eliminar el caos operativo de empresas medianas mediante un sistema que automatice 
                completamente la gestión de inventarios y reduzca costos operativos en 50%.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-purple font-semibold mb-3 flex items-center gap-2" data-es="💰 AUTOMATIZACIÓN LOGRADA:" data-en="💰 ACHIEVED AUTOMATION:">
                  <span className="text-lg">💰</span>
                  AUTOMATIZACIÓN LOGRADA:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm">Dashboard Inteligente</div>
                        <div className="text-xs text-text-secondary">Decisiones basadas en datos en tiempo real</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🏢</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm">Multi-Almacén Sincronizado</div>
                        <div className="text-xs text-text-secondary">Control total de múltiples ubicaciones</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">📈</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm">Reportes Automáticos</div>
                        <div className="text-xs text-text-secondary">Insights que impulsan el crecimiento</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">🔗</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm">API Empresarial</div>
                        <div className="text-xs text-text-secondary">Integración perfecta con sistemas existentes</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <span data-es="Ver Arquitectura" data-en="View Architecture">Ver Arquitectura</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-purple font-semibold bg-accent-purple/10 px-2 py-1 rounded" data-es="Implementado en 15+ empresas" data-en="Implemented in 15+ companies">Implementado en 15+ empresas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-accent-green/10 via-accent-blue/10 to-accent-purple/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-accent-green mb-4" data-es="¿Listo para Transformar Tu Negocio?" data-en="Ready to Transform Your Business?">
              ¿Listo para Transformar Tu Negocio?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto" data-es="Estos son solo algunos ejemplos de cómo mis soluciones han generado resultados reales. Tu proyecto podría ser el próximo caso de éxito con ROI garantizado." data-en="These are just a few examples of how my solutions have generated real results. Your project could be the next success story with guaranteed ROI.">
              Estos son solo algunos ejemplos de cómo mis soluciones han generado resultados reales. 
              Tu proyecto podría ser el próximo caso de éxito con ROI garantizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://github.com/ismaiars" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent-green/20 hover:bg-accent-green hover:text-terminal-bg text-accent-green px-6 py-3 rounded-lg font-medium transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span data-es="Ver Más Casos de Éxito" data-en="View More Success Stories">Ver Más Casos de Éxito</span>
              </a>
              <span className="text-sm text-accent-blue font-semibold" data-es="+20 proyectos exitosos disponibles" data-en="+20 successful projects available">+20 proyectos exitosos disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}