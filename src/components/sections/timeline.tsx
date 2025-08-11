'use client';

export default function Timeline() {
  return (
    <section id="timeline" className="section-animate py-8 md:py-16 bg-terminal-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-accent-green" data-es="Mi Trayectoria Profesional" data-en="My Professional Journey">
          Mi Trayectoria Profesional
        </h2>
        <p className="text-xl text-center mb-8 text-text-secondary max-w-3xl mx-auto" data-es="Múltiples proyectos exitosos | Clientes satisfechos | Soluciones que funcionan" data-en="Multiple successful projects | Satisfied clients | Solutions that work">
          Múltiples proyectos exitosos | Clientes satisfechos | Soluciones que funcionan
        </p>
        <p className="timeline-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="A lo largo de mi carrera he tenido la oportunidad de trabajar en proyectos diversos y emocionantes. Cada experiencia me ha enseñado algo nuevo y me ha ayudado a crecer como desarrollador." data-en="Throughout my career I have had the opportunity to work on diverse and exciting projects. Each experience has taught me something new and helped me grow as a developer.">
          A lo largo de mi carrera he tenido la oportunidad de trabajar en proyectos diversos y emocionantes. 
          Cada experiencia me ha enseñado algo nuevo y me ha ayudado a crecer como desarrollador.
        </p>

        <div className="timeline-container max-w-4xl mx-auto">
          <div className="timeline-item mb-12 relative">
            <div className="timeline-marker absolute left-0 top-0 w-4 h-4 bg-accent-green rounded-full border-4 border-terminal-bg z-10"></div>
            <div className="timeline-content ml-12 bg-terminal-bg p-6 rounded-lg border border-terminal-border">
              <div className="timeline-header mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-accent-green" data-es="Carpe Diem México" data-en="Carpe Diem México">Carpe Diem México</h3>
                  <span className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-sm font-semibold">ACTUAL</span>
                </div>
                <div className="timeline-meta flex flex-wrap gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                    <span data-es="Arquitecto de Soluciones Digitales" data-en="Digital Solutions Architect">Arquitecto de Soluciones Digitales</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                    <span data-es="2023 - Presente" data-en="2023 - Present">2023 - Presente</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                    <span data-es="Remoto" data-en="Remote">Remoto</span>
                  </span>
                </div>
                <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent-green">Exitoso</div>
                      <div className="text-xs text-text-secondary">Proyecto Entregado</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-blue">85%</div>
                      <div className="text-xs text-text-secondary">Reducción Errores</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-purple">60%</div>
                      <div className="text-xs text-text-secondary">Mejora Velocidad</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-orange">99.9%</div>
                      <div className="text-xs text-text-secondary">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-description text-text-secondary leading-relaxed mb-4">
                <p className="mb-4 text-lg font-medium" data-es="🎯 DESAFÍO: Transformar una empresa tradicional en un líder digital de su sector" data-en="🎯 CHALLENGE: Transform a traditional company into a digital leader in its sector">
                  🎯 DESAFÍO: Transformar una empresa tradicional en un líder digital de su sector
                </p>
                <div className="achievements">
                  <h4 className="text-accent-green font-semibold mb-3 flex items-center gap-2" data-es="💰 RESULTADOS ENTREGADOS:" data-en="💰 DELIVERED RESULTS:">
                    <span className="text-xl">💰</span>
                    RESULTADOS ENTREGADOS:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-green/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-green mt-1 text-lg">🚀</span>
                        <div>
                          <div className="font-semibold text-accent-green">Sitio Web Corporativo de Alto Impacto</div>
                          <div className="text-sm">Next.js + CMS personalizado = +150% tráfico orgánico</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-blue/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-blue mt-1 text-lg">⚡</span>
                        <div>
                          <div className="font-semibold text-accent-blue" data-es="Sistema de Inventarios Inteligente" data-en="Smart Inventory System">Sistema de Inventarios Inteligente</div>
                          <div className="text-sm" data-es="Automatización que ahorró $50K anuales en costos operativos" data-en="Automation that saved $50K annually in operational costs">Automatización que ahorró $50K anuales en costos operativos</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-purple/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-purple mt-1 text-lg">🔧</span>
                        <div>
                          <div className="font-semibold text-accent-purple" data-es="Infraestructura de Alto Rendimiento" data-en="High Performance Infrastructure">Infraestructura de Alto Rendimiento</div>
                          <div className="text-sm" data-es="Migración completa que mejoró la experiencia del usuario" data-en="Complete migration that improved user experience">Migración completa que mejoró la experiencia del usuario</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-orange/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-orange mt-1 text-lg">📈</span>
                        <div>
                          <div className="font-semibold text-accent-orange" data-es="Modernización Tecnológica" data-en="Technological Modernization">Modernización Tecnológica</div>
                          <div className="text-sm" data-es="De sistemas legacy a arquitectura escalable moderna" data-en="From legacy systems to modern scalable architecture">De sistemas legacy a arquitectura escalable moderna</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mb-12 relative">
            <div className="timeline-marker absolute left-0 top-0 w-4 h-4 bg-accent-blue rounded-full border-4 border-terminal-bg z-10"></div>
            <div className="timeline-content ml-12 bg-terminal-bg p-6 rounded-lg border border-terminal-border">
              <div className="timeline-header mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-accent-blue" data-es="Ópticas Kairóz" data-en="Ópticas Kairóz">Ópticas Kairóz</h3>
                  <span className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-sm font-semibold">E-COMMERCE</span>
                </div>
                <div className="timeline-meta flex flex-wrap gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                    <span data-es="Especialista en Conversión Digital" data-en="Digital Conversion Specialist">Especialista en Conversión Digital</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                    <span data-es="2022 - 2023" data-en="2022 - 2023">2022 - 2023</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                    <span data-es="Híbrido" data-en="Hybrid">Híbrido</span>
                  </span>
                </div>
                <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent-blue">Exitoso</div>
                      <div className="text-xs text-text-secondary" data-es="E-commerce Lanzado" data-en="E-commerce Launched">E-commerce Lanzado</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-green">40%</div>
                      <div className="text-xs text-text-secondary" data-es="Aumento Ventas" data-en="Sales Increase">Aumento Ventas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-purple">250%</div>
                      <div className="text-xs text-text-secondary" data-es="Mejora SEO" data-en="SEO Improvement">Mejora SEO</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-orange">95%</div>
                      <div className="text-xs text-text-secondary" data-es="Satisfacción Cliente" data-en="Customer Satisfaction">Satisfacción Cliente</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-description text-text-secondary leading-relaxed mb-4">
                <p className="mb-4 text-lg font-medium" data-es="🎯 DESAFÍO: Crear la primera tienda online de lentes con experiencia premium en México" data-en="🎯 CHALLENGE: Create the first premium online glasses store experience in Mexico">
                  🎯 DESAFÍO: Crear la primera tienda online de lentes con experiencia premium en México
                </p>
                <div className="achievements">
                  <h4 className="text-accent-blue font-semibold mb-3 flex items-center gap-2" data-es="💰 IMPACTO GENERADO:" data-en="💰 GENERATED IMPACT:">
                    <span className="text-xl">💰</span>
                    <span data-es="IMPACTO GENERADO:" data-en="GENERATED IMPACT:">IMPACTO GENERADO:</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-blue/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-blue mt-1 text-lg">🛒</span>
                        <div>
                          <div className="font-semibold text-accent-blue" data-es="Plataforma E-commerce Completa" data-en="Complete E-commerce Platform">Plataforma E-commerce Completa</div>
                          <div className="text-sm" data-es="Carrito inteligente + Pagos seguros = Conversión optimizada" data-en="Smart cart + Secure payments = Optimized conversion">Carrito inteligente + Pagos seguros = Conversión optimizada</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-green/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-green mt-1 text-lg">👓</span>
                        <div>
                          <div className="font-semibold text-accent-green" data-es="Configurador Virtual Revolucionario" data-en="Revolutionary Virtual Configurator">Configurador Virtual Revolucionario</div>
                          <div className="text-sm" data-es="Tecnología AR que aumentó ventas 40% en 3 meses" data-en="AR technology that increased sales 40% in 3 months">Tecnología AR que aumentó ventas 40% en 3 meses</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-purple/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-purple mt-1 text-lg">📊</span>
                        <div>
                          <div className="font-semibold text-accent-purple" data-es="Inventario Inteligente en Tiempo Real" data-en="Real-Time Smart Inventory">Inventario Inteligente en Tiempo Real</div>
                          <div className="text-sm" data-es="Sincronización automática que eliminó sobreventa" data-en="Automatic synchronization that eliminated overselling">Sincronización automática que eliminó sobreventa</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-orange/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-orange mt-1 text-lg">🔍</span>
                        <div>
                          <div className="font-semibold text-accent-orange" data-es="Dominancia SEO Total" data-en="Total SEO Dominance">Dominancia SEO Total</div>
                          <div className="text-sm" data-es="Posición #1 en Google para palabras clave principales" data-en="#1 position on Google for main keywords">Posición #1 en Google para palabras clave principales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mb-12 relative">
            <div className="timeline-marker absolute left-0 top-0 w-4 h-4 bg-accent-purple rounded-full border-4 border-terminal-bg z-10"></div>
            <div className="timeline-content ml-12 bg-terminal-bg p-6 rounded-lg border border-terminal-border">
              <div className="timeline-header mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-accent-purple" data-es="Desarrollo Digital Independiente" data-en="Independent Digital Development">Desarrollo Digital Independiente</h3>
                  <span className="bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-sm font-semibold">EMPRENDIMIENTO</span>
                </div>
                <div className="timeline-meta flex flex-wrap gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                    <span data-es="Desarrollador Full-Stack Independiente" data-en="Independent Full-Stack Developer">Desarrollador Full-Stack Independiente</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                    <span data-es="2021 - Presente" data-en="2021 - Present">2021 - Presente</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                    <span data-es="Remoto" data-en="Remote">Remoto</span>
                  </span>
                </div>
                <div className="bg-gradient-to-r from-accent-purple/10 to-accent-orange/10 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent-purple">Múltiples</div>
                      <div className="text-xs text-text-secondary" data-es="Proyectos Entregados" data-en="Delivered Projects">Proyectos Entregados</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-green">20+</div>
                      <div className="text-xs text-text-secondary" data-es="Clientes Satisfechos" data-en="Satisfied Clients">Clientes Satisfechos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-blue">100%</div>
                      <div className="text-xs text-text-secondary" data-es="Proyectos Exitosos" data-en="Successful Projects">Proyectos Exitosos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-orange">4.9/5</div>
                      <div className="text-xs text-text-secondary" data-es="Rating Promedio" data-en="Average Rating">Rating Promedio</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-description text-text-secondary leading-relaxed mb-4">
                <p className="mb-4 text-lg font-medium" data-es="🎯 MISIÓN: Democratizar el acceso a soluciones digitales de alta calidad para PYMEs" data-en="🎯 MISSION: Democratize access to high-quality digital solutions for SMEs">
                  🎯 MISIÓN: Democratizar el acceso a soluciones digitales de alta calidad para PYMEs
                </p>
                <div className="achievements">
                  <h4 className="text-accent-purple font-semibold mb-3 flex items-center gap-2" data-es="🏆 CASOS DE ÉXITO:" data-en="🏆 SUCCESS STORIES:">
                    <span className="text-xl">🏆</span>
                    <span data-es="CASOS DE ÉXITO:" data-en="SUCCESS STORIES:">CASOS DE ÉXITO:</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-purple/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-purple mt-1 text-lg">🌐</span>
                        <div>
                          <div className="font-semibold text-accent-purple" data-es="20+ Sitios Web de Alto Impacto" data-en="20+ High-Impact Websites">20+ Sitios Web de Alto Impacto</div>
                          <div className="text-sm" data-es="PYMEs que aumentaron sus ventas online 200%+ promedio" data-en="SMEs that increased their online sales 200%+ on average">PYMEs que aumentaron sus ventas online 200%+ promedio</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-green/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-green mt-1 text-lg">🍽️</span>
                        <div>
                          <div className="font-semibold text-accent-green" data-es="Sistemas de Gestión Inteligentes" data-en="Smart Management Systems">Sistemas de Gestión Inteligentes</div>
                          <div className="text-sm" data-es="Restaurantes y tiendas con automatización completa" data-en="Restaurants and stores with complete automation">Restaurantes y tiendas con automatización completa</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-blue/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-blue mt-1 text-lg">📱</span>
                        <div>
                          <div className="font-semibold text-accent-blue" data-es="PWAs de Nueva Generación" data-en="Next-Generation PWAs">PWAs de Nueva Generación</div>
                          <div className="text-sm" data-es="Experiencias móviles que rivalizan con apps nativas" data-en="Mobile experiences that rival native apps">Experiencias móviles que rivalizan con apps nativas</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded-lg p-3 border border-accent-orange/20">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-orange mt-1 text-lg">🔓</span>
                        <div>
                          <div className="font-semibold text-accent-orange" data-es="Contribuciones Open Source" data-en="Open Source Contributions">Contribuciones Open Source</div>
                          <div className="text-sm" data-es="Devolviendo valor a la comunidad de desarrolladores" data-en="Giving back value to the developer community">Devolviendo valor a la comunidad de desarrolladores</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}