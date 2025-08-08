'use client';

export default function Timeline() {
  return (
    <section id="timeline" className="section-animate py-20 bg-terminal-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-accent-green" data-es="Mi Aventura Profesional: De Cero a Héroe (Bueno, Casi)" data-en="My Professional Adventure: From Zero to Hero (Well, Almost)">
          Mi Aventura Profesional: De Cero a Héroe (Bueno, Casi)
        </h2>
        <p className="timeline-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Aquí tienes mi historia profesional sin filtros. Desde mis primeros pasos tropezando con HTML hasta convertirme en alguien que puede hacer que las computadoras hagan cosas geniales. Cada experiencia me ha enseñado algo valioso (y a veces doloroso)." data-en="Here's my unfiltered professional story. From my first steps stumbling with HTML to becoming someone who can make computers do cool things. Each experience has taught me something valuable (and sometimes painful).">
          Aquí tienes mi historia profesional sin filtros. Desde mis primeros pasos tropezando con HTML 
          hasta convertirme en alguien que puede hacer que las computadoras hagan cosas geniales. 
          Cada experiencia me ha enseñado algo valioso (y a veces doloroso).
        </p>

        <div className="timeline-container max-w-4xl mx-auto">
          <div className="timeline-item mb-12 relative">
            <div className="timeline-marker absolute left-0 top-0 w-4 h-4 bg-accent-green rounded-full border-4 border-terminal-bg z-10"></div>
            <div className="timeline-content ml-12 bg-terminal-bg p-6 rounded-lg border border-terminal-border">
              <div className="timeline-header mb-4">
                <h3 className="text-2xl font-bold text-accent-green mb-2" data-es="Carpe Diem México" data-en="Carpe Diem México">Carpe Diem México</h3>
                <div className="timeline-meta flex flex-wrap gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                    <span data-es="Desarrollador Full Stack" data-en="Full Stack Developer">Desarrollador Full Stack</span>
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
              </div>
              <div className="timeline-description text-text-secondary leading-relaxed mb-4">
                <p className="mb-3" data-es="Mi hogar digital actual. Aquí es donde realmente he podido desplegar mis alas y crear soluciones que importan. Desde sistemas de gestión hasta plataformas web completas, cada día es una nueva oportunidad de resolver problemas interesantes." data-en="My current digital home. This is where I've really been able to spread my wings and create solutions that matter. From management systems to complete web platforms, every day is a new opportunity to solve interesting problems.">
                  Mi hogar digital actual. Aquí es donde realmente he podido desplegar mis alas y crear 
                  soluciones que importan. Desde sistemas de gestión hasta plataformas web completas, 
                  cada día es una nueva oportunidad de resolver problemas interesantes.
                </p>
                <div className="achievements">
                  <h4 className="text-accent-green font-semibold mb-2" data-es="Lo que he logrado aquí:" data-en="What I've achieved here:">Lo que he logrado aquí:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">▸</span>
                      <span data-es="Desarrollé el sitio web corporativo completo con Next.js y un CMS personalizado" data-en="Developed the complete corporate website with Next.js and a custom CMS">Desarrollé el sitio web corporativo completo con Next.js y un CMS personalizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">▸</span>
                      <span data-es="Implementé un sistema de gestión de inventarios que redujo errores en un 85%" data-en="Implemented an inventory management system that reduced errors by 85%">Implementé un sistema de gestión de inventarios que redujo errores en un 85%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">▸</span>
                      <span data-es="Optimicé la infraestructura de servidores, mejorando la velocidad de carga en 60%" data-en="Optimized server infrastructure, improving loading speed by 60%">Optimicé la infraestructura de servidores, mejorando la velocidad de carga en 60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">▸</span>
                      <span data-es="Lideré la migración de sistemas legacy a tecnologías modernas" data-en="Led the migration of legacy systems to modern technologies">Lideré la migración de sistemas legacy a tecnologías modernas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mb-12 relative">
            <div className="timeline-marker absolute left-0 top-0 w-4 h-4 bg-accent-blue rounded-full border-4 border-terminal-bg z-10"></div>
            <div className="timeline-content ml-12 bg-terminal-bg p-6 rounded-lg border border-terminal-border">
              <div className="timeline-header mb-4">
                <h3 className="text-2xl font-bold text-accent-blue mb-2" data-es="Ópticas Kairóz" data-en="Ópticas Kairóz">Ópticas Kairóz</h3>
                <div className="timeline-meta flex flex-wrap gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                    <span data-es="Desarrollador Web" data-en="Web Developer">Desarrollador Web</span>
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
              </div>
              <div className="timeline-description text-text-secondary leading-relaxed mb-4">
                <p className="mb-3" data-es="Mi primera experiencia seria en el mundo del e-commerce. Aquí aprendí que vender lentes en línea es más complejo de lo que parece (¿quién lo hubiera pensado?). Fue donde realmente entendí la importancia de la experiencia del usuario." data-en="My first serious experience in the e-commerce world. Here I learned that selling glasses online is more complex than it seems (who would have thought?). This is where I really understood the importance of user experience.">
                  Mi primera experiencia seria en el mundo del e-commerce. Aquí aprendí que vender 
                  lentes en línea es más complejo de lo que parece (¿quién lo hubiera pensado?). 
                  Fue donde realmente entendí la importancia de la experiencia del usuario.
                </p>
                <div className="achievements">
                  <h4 className="text-accent-blue font-semibold mb-2" data-es="Mis contribuciones:" data-en="My contributions:">Mis contribuciones:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1">▸</span>
                      <span data-es="Creé una plataforma de e-commerce completa con carrito de compras y pasarela de pagos" data-en="Created a complete e-commerce platform with shopping cart and payment gateway">Creé una plataforma de e-commerce completa con carrito de compras y pasarela de pagos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1">▸</span>
                      <span data-es="Desarrollé un sistema de gestión de inventarios en tiempo real" data-en="Developed a real-time inventory management system">Desarrollé un sistema de gestión de inventarios en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1">▸</span>
                      <span data-es="Implementé un configurador virtual de lentes que aumentó las ventas en 40%" data-en="Implemented a virtual glasses configurator that increased sales by 40%">Implementé un configurador virtual de lentes que aumentó las ventas en 40%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-blue mt-1">▸</span>
                      <span data-es="Optimicé el SEO del sitio, mejorando el ranking en Google significativamente" data-en="Optimized the site's SEO, significantly improving Google ranking">Optimicé el SEO del sitio, mejorando el ranking en Google significativamente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mb-12 relative">
            <div className="timeline-marker absolute left-0 top-0 w-4 h-4 bg-accent-purple rounded-full border-4 border-terminal-bg z-10"></div>
            <div className="timeline-content ml-12 bg-terminal-bg p-6 rounded-lg border border-terminal-border">
              <div className="timeline-header mb-4">
                <h3 className="text-2xl font-bold text-accent-purple mb-2" data-es="Freelance & Proyectos Personales" data-en="Freelance & Personal Projects">Freelance & Proyectos Personales</h3>
                <div className="timeline-meta flex flex-wrap gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                    <span data-es="Desarrollador Independiente" data-en="Independent Developer">Desarrollador Independiente</span>
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
              </div>
              <div className="timeline-description text-text-secondary leading-relaxed mb-4">
                <p className="mb-3" data-es="Mi laboratorio de experimentación. Aquí es donde pruebo nuevas tecnologías, ayudo a pequeños negocios a tener presencia digital y, ocasionalmente, creo cosas que nadie pidió pero que son geniales." data-en="My experimentation lab. This is where I test new technologies, help small businesses have a digital presence and, occasionally, create things that nobody asked for but are awesome.">
                  Mi laboratorio de experimentación. Aquí es donde pruebo nuevas tecnologías, 
                  ayudo a pequeños negocios a tener presencia digital y, ocasionalmente, 
                  creo cosas que nadie pidió pero que son geniales.
                </p>
                <div className="achievements">
                  <h4 className="text-accent-purple font-semibold mb-2" data-es="Proyectos destacados:" data-en="Featured projects:">Proyectos destacados:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1">▸</span>
                      <span data-es="Más de 20 sitios web para pequeñas y medianas empresas" data-en="Over 20 websites for small and medium businesses">Más de 20 sitios web para pequeñas y medianas empresas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1">▸</span>
                      <span data-es="Sistemas de gestión personalizados para restaurantes y tiendas" data-en="Custom management systems for restaurants and stores">Sistemas de gestión personalizados para restaurantes y tiendas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1">▸</span>
                      <span data-es="Aplicaciones web progresivas (PWA) para mejorar la experiencia móvil" data-en="Progressive Web Applications (PWA) to improve mobile experience">Aplicaciones web progresivas (PWA) para mejorar la experiencia móvil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-purple mt-1">▸</span>
                      <span data-es="Contribuciones a proyectos open source en GitHub" data-en="Contributions to open source projects on GitHub">Contribuciones a proyectos open source en GitHub</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}