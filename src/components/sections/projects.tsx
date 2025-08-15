'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiStripe, SiPython, SiFastapi, SiWordpress, SiJson, SiDocker
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
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Desarrollar una plataforma educativa especializada en cursos de optometría y certificaciones profesionales, con sistema de gestión de contenidos y modalidades híbridas de aprendizaje." data-en="🎯 CHALLENGE: Develop an educational platform specialized in optometry courses and professional certifications, with content management system and hybrid learning modalities.">
                🎯 DESAFÍO: Desarrollar una plataforma educativa especializada en cursos de optometría y certificaciones profesionales, 
                con sistema de gestión de contenidos y modalidades híbridas de aprendizaje.
              </p>
            </div>
            
            <div className="project-details p-4 md:p-6">
              <div className="mb-4">
                <h4 className="text-accent-green font-semibold mb-3 flex items-center gap-2" data-es="💰 RESULTADOS ENTREGADOS:" data-en="💰 DELIVERED RESULTS:">
                  <span className="text-lg">💰</span>
                  RESULTADOS ENTREGADOS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🔒</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Seguridad Reforzada" data-en="Enhanced Security">Seguridad Reforzada</div>
                        <div className="text-xs text-text-secondary" data-es="SSL, autenticación 2FA, firewall" data-en="SSL, 2FA authentication, firewall">SSL, autenticación 2FA, firewall</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">📈</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Marketing Digital" data-en="Digital Marketing">Marketing Digital</div>
                        <div className="text-xs text-text-secondary" data-es="SEO, Google Ads, redes sociales" data-en="SEO, Google Ads, social media">SEO, Google Ads, redes sociales</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">🎓</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Plataforma LMS" data-en="LMS Platform">Plataforma LMS</div>
                        <div className="text-xs text-text-secondary" data-es="Gestión completa de cursos" data-en="Complete course management">Gestión completa de cursos</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">💳</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Pagos Integrados" data-en="Integrated Payments">Pagos Integrados</div>
                        <div className="text-xs text-text-secondary" data-es="PayPal, Stripe, transferencias" data-en="PayPal, Stripe, transfers">PayPal, Stripe, transferencias</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Analytics Avanzado" data-en="Advanced Analytics">Analytics Avanzado</div>
                        <div className="text-xs text-text-secondary" data-es="Tracking de conversiones y ROI" data-en="Conversion and ROI tracking">Tracking de conversiones y ROI</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">🏆</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Certificaciones CONOCER" data-en="CONOCER Certifications">Certificaciones CONOCER</div>
                        <div className="text-xs text-text-secondary" data-es="EC0052, EC0994, EC0301 oficiales" data-en="Official EC0052, EC0994, EC0301">EC0052, EC0994, EC0301 oficiales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiWordpress className="text-blue-500" />
                    WordPress
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiReact className="text-cyan-400" />
                    React
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-green-500">🔍</span>
                    SEO
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-red-500">🔒</span>
                    Security
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
                <span className="text-xs text-accent-green font-semibold bg-accent-green/10 px-2 py-1 rounded" data-es="Certificaciones oficiales CONOCER" data-en="Official CONOCER certifications">Certificaciones oficiales CONOCER</span>
              </div>
            </div>
          </div>

          {/* Proyecto 2: Ópticas Kairóz */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-orange transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/opticas-kairoz.webp" 
                alt="Ópticas Kairóz - E-commerce Especializado"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-orange text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">E-commerce</span>
              </div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-orange">Ópticas Kairóz</h3>
                <span className="project-type px-3 py-1 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-medium" data-es="E-commerce Especializado" data-en="Specialized E-commerce">
                  E-commerce Especializado
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-orange/10 to-accent-purple/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-orange">React</div>
                    <div className="text-xs text-text-secondary">Frontend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-blue">Node.js</div>
                    <div className="text-xs text-text-secondary">Backend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-green">MongoDB</div>
                    <div className="text-xs text-text-secondary">Database</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Desarrollar una plataforma web profesional para servicios ópticos integrales, con sistema de citas, catálogo de productos y servicios especializados en salud visual con tecnología de punta." data-en="🎯 CHALLENGE: Develop a professional web platform for comprehensive optical services, with appointment system, product catalog and specialized visual health services with cutting-edge technology.">
                🎯 DESAFÍO: Desarrollar una plataforma web profesional para servicios ópticos integrales, 
                con sistema de citas, catálogo de productos y servicios especializados en salud visual con tecnología de punta.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-orange font-semibold mb-3 flex items-center gap-2" data-es="🚀 CARACTERÍSTICAS IMPLEMENTADAS:" data-en="🚀 IMPLEMENTED FEATURES:">
                  <span className="text-lg">🚀</span>
                  CARACTERÍSTICAS IMPLEMENTADAS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🛒</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="E-commerce Completo" data-en="Complete E-commerce">E-commerce Completo</div>
                        <div className="text-xs text-text-secondary" data-es="Carrito, pagos, inventario automático" data-en="Cart, payments, automatic inventory">Carrito, pagos, inventario automático</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">📱</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="App Móvil Nativa" data-en="Native Mobile App">App Móvil Nativa</div>
                        <div className="text-xs text-text-secondary" data-es="iOS y Android optimizadas" data-en="Optimized iOS and Android">iOS y Android optimizadas</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">🏆</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Reconocimiento Amazon" data-en="Amazon Recognition">Reconocimiento Amazon</div>
                        <div className="text-xs text-text-secondary" data-es="Contactados por excelencia técnica" data-en="Contacted for technical excellence">Contactados por excelencia técnica</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Analytics Avanzado" data-en="Advanced Analytics">Analytics Avanzado</div>
                        <div className="text-xs text-text-secondary" data-es="Google Analytics 4, heatmaps" data-en="Google Analytics 4, heatmaps">Google Analytics 4, heatmaps</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🔒</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Seguridad PCI DSS" data-en="PCI DSS Security">Seguridad PCI DSS</div>
                        <div className="text-xs text-text-secondary" data-es="Certificación para pagos seguros" data-en="Certification for secure payments">Certificación para pagos seguros</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">🚀</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="CDN Global" data-en="Global CDN">CDN Global</div>
                        <div className="text-xs text-text-secondary" data-es="Carga rápida en todo el mundo" data-en="Fast loading worldwide">Carga rápida en todo el mundo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiWordpress className="text-blue-500" />
                    WordPress
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-purple-500">🛒</span>
                    WooCommerce
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-green-500">🔍</span>
                    SEO
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiStripe className="text-purple-500" />
                    Stripe
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://opticaskairoz.com" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-orange/20 hover:bg-accent-orange hover:text-terminal-bg text-accent-orange px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span data-es="Ver Sitio Web" data-en="View Website">Ver Sitio Web</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-orange font-semibold bg-accent-orange/10 px-2 py-1 rounded" data-es="Reconocido por Amazon por excelencia técnica" data-en="Recognized by Amazon for technical excellence">Reconocido por Amazon por excelencia técnica</span>
              </div>
            </div>
          </div>

          {/* Proyecto 3: SCCA Project */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-blue transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/scca-project.svg" 
                alt="SCCA - Sistema de Creación de Contenido Automatizado"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-blue text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">IA & Video</span>
              </div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-blue">SCCA Project</h3>
                <span className="project-type px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium" data-es="Automatización IA" data-en="AI Automation">
                  Automatización IA
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-blue">Python</div>
                    <div className="text-xs text-text-secondary">Backend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-green">Whisper</div>
                    <div className="text-xs text-text-secondary">IA Audio</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-purple">LLM</div>
                    <div className="text-xs text-text-secondary">Análisis</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Crear una aplicación web local que utiliza IA para extraer clips temáticos de videos largos de forma completamente automatizada, optimizada para CPU sin necesidad de GPU dedicada." data-en="🎯 CHALLENGE: Create a local web application that uses AI to extract thematic clips from long videos in a completely automated way, optimized for CPU without the need for dedicated GPU.">
                🎯 DESAFÍO: Crear una aplicación web local que utiliza IA para extraer clips temáticos de videos largos 
                de forma completamente automatizada, optimizada para CPU sin necesidad de GPU dedicada.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-blue font-semibold mb-3 flex items-center gap-2" data-es="🚀 CARACTERÍSTICAS IMPLEMENTADAS:" data-en="🚀 IMPLEMENTED FEATURES:">
                  <span className="text-lg">🚀</span>
                  CARACTERÍSTICAS IMPLEMENTADAS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">🎤</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Transcripción Automática" data-en="Automatic Transcription">Transcripción Automática</div>
                        <div className="text-xs text-text-secondary" data-es="Whisper.cpp optimizado para CPU" data-en="Whisper.cpp optimized for CPU">Whisper.cpp optimizado para CPU</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">🧠</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Análisis Inteligente" data-en="Intelligent Analysis">Análisis Inteligente</div>
                        <div className="text-xs text-text-secondary" data-es="Modelos LLM locales (Mistral-7B)" data-en="Local LLM models (Mistral-7B)">Modelos LLM locales (Mistral-7B)</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">✂️</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Corte Automático" data-en="Automatic Cutting">Corte Automático</div>
                        <div className="text-xs text-text-secondary" data-es="FFmpeg con progreso en tiempo real" data-en="FFmpeg with real-time progress">FFmpeg con progreso en tiempo real</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🎨</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Perfiles Personalizables" data-en="Customizable Profiles">Perfiles Personalizables</div>
                        <div className="text-xs text-text-secondary" data-es="Redes sociales, educativo, archivo" data-en="Social media, educational, archive">Redes sociales, educativo, archivo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiPython className="text-yellow-400" />
                    Python
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiFastapi className="text-green-500" />
                    FastAPI
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Whisper.cpp
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Mistral-7B
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    FFmpeg
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://github.com/ismaiars/Scca_Project" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-blue/20 hover:bg-accent-blue hover:text-terminal-bg text-accent-blue px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span data-es="Ver Código Fuente" data-en="View Source Code">Ver Código Fuente</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-blue font-semibold bg-accent-blue/10 px-2 py-1 rounded" data-es="IA local sin GPU requerida" data-en="Local AI without GPU required">IA local sin GPU requerida</span>
              </div>
            </div>
          </div>

          {/* Proyecto 4: Inventario Corporativo */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-purple transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/inventario.webp" 
                alt="Inventario Corporativo - Sistema de Gestión de Equipos"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-purple text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">Web App</span>
              </div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-purple">Inventario Corporativo</h3>
                <span className="project-type px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium" data-es="Sistema de Gestión" data-en="Management System">
                  Sistema de Gestión
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-purple/10 to-accent-orange/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-purple">Next.js</div>
                    <div className="text-xs text-text-secondary">Frontend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-orange">OAuth</div>
                    <div className="text-xs text-text-secondary">Seguridad</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-green">Shadcn/ui</div>
                    <div className="text-xs text-text-secondary">UI/UX</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Desarrollar una aplicación web moderna para la gestión eficiente del inventario de equipos corporativos, con autenticación segura y acceso restringido solo al personal autorizado." data-en="🎯 CHALLENGE: Develop a modern web application for efficient management of corporate equipment inventory, with secure authentication and restricted access only to authorized personnel.">
                🎯 DESAFÍO: Desarrollar una aplicación web moderna para la gestión eficiente del inventario de equipos corporativos, 
                con autenticación segura y acceso restringido solo al personal autorizado.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-purple font-semibold mb-3 flex items-center gap-2" data-es="🚀 CARACTERÍSTICAS IMPLEMENTADAS:" data-en="🚀 IMPLEMENTED FEATURES:">
                  <span className="text-lg">🚀</span>
                  CARACTERÍSTICAS IMPLEMENTADAS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Dashboard Interactivo" data-en="Interactive Dashboard">Dashboard Interactivo</div>
                        <div className="text-xs text-text-secondary" data-es="Estadísticas clave del inventario" data-en="Key inventory statistics">Estadísticas clave del inventario</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🔐</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Autenticación Google OAuth" data-en="Google OAuth Authentication">Autenticación Google OAuth</div>
                        <div className="text-xs text-text-secondary" data-es="Acceso seguro con whitelist" data-en="Secure access with whitelist">Acceso seguro con whitelist</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">🔍</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Búsqueda y Filtrado" data-en="Search and Filtering">Búsqueda y Filtrado</div>
                        <div className="text-xs text-text-secondary" data-es="Por estado, departamento y más" data-en="By status, department and more">Por estado, departamento y más</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">📱</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Interfaz Responsiva" data-en="Responsive Interface">Interfaz Responsiva</div>
                        <div className="text-xs text-text-secondary" data-es="Shadcn/ui + Tailwind CSS" data-en="Shadcn/ui + Tailwind CSS">Shadcn/ui + Tailwind CSS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-blue font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiNextdotjs className="text-white" />
                    Next.js
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiReact className="text-cyan-400" />
                    React
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiTypescript className="text-blue-500" />
                    TypeScript
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiTailwindcss className="text-cyan-400" />
                    Tailwind CSS
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://github.com/ismaiars/Inventario-Corporativo" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-purple/20 hover:bg-accent-purple hover:text-terminal-bg text-accent-purple px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span data-es="Ver Código Fuente" data-en="View Source Code">Ver Código Fuente</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-purple font-semibold bg-accent-purple/10 px-2 py-1 rounded" data-es="Autenticación OAuth 2.0 integrada" data-en="OAuth 2.0 authentication integrated">Autenticación OAuth 2.0 integrada</span>
              </div>
            </div>
          </div>

          {/* Proyecto 5: Sistema de Generación de Páginas WP */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-green transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/wordpress-generator.svg" 
                alt="Sistema de Generación de Páginas WP - Automatización WordPress"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-green text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">Automatización</span>
              </div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-green">Sistema de Generación de Páginas WP</h3>
                <span className="project-type px-3 py-1 bg-accent-green/20 text-accent-green rounded-full text-sm font-medium" data-es="Automatización Web" data-en="Web Automation">
                  Automatización Web
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-green">Python</div>
                    <div className="text-xs text-text-secondary">Backend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-blue">WordPress</div>
                    <div className="text-xs text-text-secondary">CMS</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-orange">API REST</div>
                    <div className="text-xs text-text-secondary">Integración</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Automatizar la creación masiva de páginas en WordPress para Ópticas Kairóz, reduciendo el tiempo de desarrollo de horas a minutos mediante scripts inteligentes y plantillas dinámicas." data-en="🎯 CHALLENGE: Automate massive WordPress page creation for Ópticas Kairóz, reducing development time from hours to minutes through intelligent scripts and dynamic templates.">
                🎯 DESAFÍO: Automatizar la creación masiva de páginas en WordPress para Ópticas Kairóz, 
                reduciendo el tiempo de desarrollo de horas a minutos mediante scripts inteligentes y plantillas dinámicas.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-green font-semibold mb-3 flex items-center gap-2" data-es="🚀 CARACTERÍSTICAS IMPLEMENTADAS:" data-en="🚀 IMPLEMENTED FEATURES:">
                  <span className="text-lg">🚀</span>
                  CARACTERÍSTICAS IMPLEMENTADAS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">⚡</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Generación Automática" data-en="Automatic Generation">Generación Automática</div>
                        <div className="text-xs text-text-secondary" data-es="Páginas desde plantillas JSON" data-en="Pages from JSON templates">Páginas desde plantillas JSON</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">🔗</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Integración WordPress API" data-en="WordPress API Integration">Integración WordPress API</div>
                        <div className="text-xs text-text-secondary" data-es="REST API nativa" data-en="Native REST API">REST API nativa</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">📋</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Plantillas Dinámicas" data-en="Dynamic Templates">Plantillas Dinámicas</div>
                        <div className="text-xs text-text-secondary" data-es="Configurables por JSON" data-en="Configurable via JSON">Configurables por JSON</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Logging Detallado" data-en="Detailed Logging">Logging Detallado</div>
                        <div className="text-xs text-text-secondary" data-es="Seguimiento de procesos" data-en="Process tracking">Seguimiento de procesos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-green font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiPython className="text-yellow-400" />
                    Python
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiWordpress className="text-blue-600" />
                    WordPress API
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiJson className="text-yellow-500" />
                    JSON
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    REST API
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Requests
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://github.com/ismaiars/Sistema_De_Generacion_Paginas_WP" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-green/20 hover:bg-accent-green hover:text-terminal-bg text-accent-green px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span data-es="Ver Código Fuente" data-en="View Source Code">Ver Código Fuente</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-green font-semibold bg-accent-green/10 px-2 py-1 rounded" data-es="Automatización 95% más rápida" data-en="95% faster automation">Automatización 95% más rápida</span>
              </div>
            </div>
          </div>

          {/* Proyecto 6: ForenseCTL */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-orange transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image 
                src="/images/projects/forensectl.svg" 
                alt="ForenseCTL - Sistema de Análisis Forense Digital Multiplataforma"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent-orange text-terminal-bg px-3 py-1 rounded-full text-sm font-bold">Ciberseguridad</span>
              </div>
            </div>
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-orange">ForenseCTL</h3>
                <span className="project-type px-3 py-1 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-medium" data-es="Análisis Forense Digital" data-en="Digital Forensic Analysis">
                  Análisis Forense Digital
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-orange/10 to-accent-red/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-orange">Python</div>
                    <div className="text-xs text-text-secondary">Core</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-red">Multiplataforma</div>
                    <div className="text-xs text-text-secondary">Windows/Linux</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-purple">DFIR</div>
                    <div className="text-xs text-text-secondary">Forense</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Desarrollar un sistema completo de análisis forense digital multiplataforma para profesionales de ciberseguridad, equipos DFIR y analistas forenses, proporcionando un ciclo completo de investigación: recopilación → análisis → reporte → cadena de custodia." data-en="🎯 CHALLENGE: Develop a complete multiplatform digital forensic analysis system for cybersecurity professionals, DFIR teams and forensic analysts, providing a complete investigation cycle: collection → analysis → reporting → chain of custody.">
                🎯 DESAFÍO: Desarrollar un sistema completo de análisis forense digital multiplataforma para profesionales de ciberseguridad, 
                equipos DFIR y analistas forenses, proporcionando un ciclo completo de investigación: recopilación → análisis → reporte → cadena de custodia.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-orange font-semibold mb-3 flex items-center gap-2" data-es="🚀 CARACTERÍSTICAS IMPLEMENTADAS:" data-en="🚀 IMPLEMENTED FEATURES:">
                  <span className="text-lg">🚀</span>
                  CARACTERÍSTICAS IMPLEMENTADAS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🔍</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Recopilación Automática" data-en="Automatic Collection">Recopilación Automática</div>
                        <div className="text-xs text-text-secondary" data-es="Artefactos del sistema en tiempo real" data-en="Real-time system artifacts">Artefactos del sistema en tiempo real</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-red/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-red mt-1 text-lg">🌐</span>
                      <div>
                        <div className="font-semibold text-accent-red text-sm" data-es="Multiplataforma" data-en="Multiplatform">Multiplataforma</div>
                        <div className="text-xs text-text-secondary" data-es="Windows (ejecutable) y Linux (script)" data-en="Windows (executable) and Linux (script)">Windows (ejecutable) y Linux (script)</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">📄</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Reportes Profesionales" data-en="Professional Reports">Reportes Profesionales</div>
                        <div className="text-xs text-text-secondary" data-es="HTML y JSON con diseño técnico" data-en="HTML and JSON with technical design">HTML y JSON con diseño técnico</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">🔗</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Cadena de Custodia" data-en="Chain of Custody">Cadena de Custodia</div>
                        <div className="text-xs text-text-secondary" data-es="Registro automático de acciones" data-en="Automatic action logging">Registro automático de acciones</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">⚡</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Sin Instalaciones Complejas" data-en="No Complex Installations">Sin Instalaciones Complejas</div>
                        <div className="text-xs text-text-secondary" data-es="Ejecutable único o script directo" data-en="Single executable or direct script">Ejecutable único o script directo</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🛡️</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Análisis Forense Integral" data-en="Comprehensive Forensic Analysis">Análisis Forense Integral</div>
                        <div className="text-xs text-text-secondary" data-es="Sistema, procesos, red y logs" data-en="System, processes, network and logs">Sistema, procesos, red y logs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiPython className="text-yellow-400" />
                    Python
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Windows API
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Linux Forensics
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-red-500">🔒</span>
                    DFIR
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Cybersecurity
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://github.com/ismaiars/ForenseCTL" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-orange/20 hover:bg-accent-orange hover:text-terminal-bg text-accent-orange px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span data-es="Ver Código Fuente" data-en="View Source Code">Ver Código Fuente</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-orange font-semibold bg-accent-orange/10 px-2 py-1 rounded" data-es="Sistema profesional para equipos DFIR" data-en="Professional system for DFIR teams">Sistema profesional para equipos DFIR</span>
              </div>
            </div>
          </div>

          {/* Proyecto 7: SIEM OpenSource PyMES */}
          <div className="project-card bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden hover:border-accent-blue transition-all duration-300 group">
            <div className="project-image relative overflow-hidden">
              <Image
                src="/images/projects/siem.svg"
                alt="SIEM OpenSource PyMES - Sistema de Gestión de Información y Eventos de Seguridad"
                width={400}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="project-header p-6 border-b border-terminal-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-accent-blue">SIEM OpenSource PyMES</h3>
                <span className="project-type px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium" data-es="Sistema SIEM" data-en="SIEM System">
                  Sistema SIEM
                </span>
              </div>
              <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-accent-blue">Elasticsearch</div>
                    <div className="text-xs text-text-secondary">Motor</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-purple">Kibana</div>
                    <div className="text-xs text-text-secondary">Dashboard</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent-green">Docker</div>
                    <div className="text-xs text-text-secondary">Deploy</div>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4" data-es="🎯 DESAFÍO: Desarrollar una solución SIEM completa y accesible para PyMES, integrando herramientas de código abierto líderes en la industria en una plataforma unificada para monitoreo de seguridad empresarial sin la complejidad de soluciones comerciales." data-en="🎯 CHALLENGE: Develop a complete and accessible SIEM solution for SMEs, integrating industry-leading open source tools into a unified platform for enterprise security monitoring without the complexity of commercial solutions.">
                🎯 DESAFÍO: Desarrollar una solución SIEM completa y accesible para PyMES, integrando herramientas de código abierto líderes 
                en la industria en una plataforma unificada para monitoreo de seguridad empresarial sin la complejidad de soluciones comerciales.
              </p>
            </div>
            
            <div className="project-details p-6">
              <div className="mb-4">
                <h4 className="text-accent-blue font-semibold mb-3 flex items-center gap-2" data-es="🚀 CARACTERÍSTICAS IMPLEMENTADAS:" data-en="🚀 IMPLEMENTED FEATURES:">
                  <span className="text-lg">🚀</span>
                  CARACTERÍSTICAS IMPLEMENTADAS:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">👁️</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Monitoreo en Tiempo Real" data-en="Real-time Monitoring">Monitoreo en Tiempo Real</div>
                        <div className="text-xs text-text-secondary" data-es="Supervisión continua de logs y eventos" data-en="Continuous log and event monitoring">Supervisión continua de logs y eventos</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-purple/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1 text-lg">🤖</span>
                      <div>
                        <div className="font-semibold text-accent-purple text-sm" data-es="Detección de Amenazas" data-en="Threat Detection">Detección de Amenazas</div>
                        <div className="text-xs text-text-secondary" data-es="ML para anomalías e inteligencia" data-en="ML for anomalies and intelligence">ML para anomalías e inteligencia</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-green/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-green mt-1 text-lg">📊</span>
                      <div>
                        <div className="font-semibold text-accent-green text-sm" data-es="Dashboards Integrales" data-en="Comprehensive Dashboards">Dashboards Integrales</div>
                        <div className="text-xs text-text-secondary" data-es="Visualizaciones preconfiguradas" data-en="Pre-configured visualizations">Visualizaciones preconfiguradas</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-orange/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-orange mt-1 text-lg">🗄️</span>
                      <div>
                        <div className="font-semibold text-accent-orange text-sm" data-es="Recolección Multi-fuente" data-en="Multi-source Collection">Recolección Multi-fuente</div>
                        <div className="text-xs text-text-secondary" data-es="Syslog, Windows Events, dispositivos" data-en="Syslog, Windows Events, devices">Syslog, Windows Events, dispositivos</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-red/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-red mt-1 text-lg">⚡</span>
                      <div>
                        <div className="font-semibold text-accent-red text-sm" data-es="Respuesta Automatizada" data-en="Automated Response">Respuesta Automatizada</div>
                        <div className="text-xs text-text-secondary" data-es="Respuestas configurables a incidentes" data-en="Configurable incident responses">Respuestas configurables a incidentes</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-terminal-bg/50 rounded-lg p-3 border border-accent-blue/20">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1 text-lg">📋</span>
                      <div>
                        <div className="font-semibold text-accent-blue text-sm" data-es="Reportes de Cumplimiento" data-en="Compliance Reports">Reportes de Cumplimiento</div>
                        <div className="text-xs text-text-secondary" data-es="GDPR, HIPAA, PCI DSS, SOX, ISO 27001" data-en="GDPR, HIPAA, PCI DSS, SOX, ISO 27001">GDPR, HIPAA, PCI DSS, SOX, ISO 27001</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="technologies mb-4">
                <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-yellow-400">🔍</span>
                    Elasticsearch
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-purple-400">📊</span>
                    Kibana
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-green-400">🔄</span>
                    Logstash
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <SiDocker className="text-blue-400" />
                    Docker
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-orange-400">📈</span>
                    Grafana
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                    <span className="text-red-400">🎯</span>
                    Prometheus
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    PostgreSQL
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Redis
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Wazuh
                  </span>
                  <span className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono">
                    Suricata
                  </span>
                </div>
              </div>
              
              <div className="project-links flex gap-3">
                <a href="https://github.com/ismaiars/SIEM" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-blue/20 hover:bg-accent-blue hover:text-terminal-bg text-accent-blue px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span data-es="Ver Código Fuente" data-en="View Source Code">Ver Código Fuente</span>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-accent-blue font-semibold bg-accent-blue/10 px-2 py-1 rounded" data-es="Solución empresarial para PyMES" data-en="Enterprise solution for SMEs">Solución empresarial para PyMES</span>
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