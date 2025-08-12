'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/components/analytics';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  contentEn: string;
  rating: number;
  project: string;
  projectEn: string;
  linkedinUrl?: string;
  companyUrl?: string;
  type: 'client' | 'colleague';
  metrics?: {
    label: string;
    labelEn: string;
    value: string;
    improvement: string;
    improvementEn: string;
  }[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    position: "Directora de Marketing",
    company: "Carpe Diem México",
    avatar: "/images/testimonials/maria-gonzalez.jpg",
    content: "Ismael transformó completamente nuestra presencia digital. El nuevo sitio web no solo es visualmente impresionante, sino que también ha mejorado significativamente nuestras conversiones. Su atención al detalle y capacidad para entender nuestras necesidades fue excepcional.",
    contentEn: "Ismael completely transformed our digital presence. The new website is not only visually stunning, but has also significantly improved our conversions. His attention to detail and ability to understand our needs was exceptional.",
    rating: 5,
    project: "Sitio Web Corporativo",
    projectEn: "Corporate Website",
    type: "client",
    linkedinUrl: "https://linkedin.com/in/maria-gonzalez-marketing",
    companyUrl: "https://carpediemmexico.com.mx",
    metrics: [
      { label: "Conversiones", labelEn: "Conversions", value: "+150%", improvement: "vs sitio anterior", improvementEn: "vs previous site" },
      { label: "Tiempo de carga", labelEn: "Load Time", value: "-60%", improvement: "optimización", improvementEn: "optimization" },
      { label: "Tráfico orgánico", labelEn: "Organic Traffic", value: "+200%", improvement: "SEO mejorado", improvementEn: "improved SEO" }
    ]
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    position: "CEO",
    company: "TechStart Solutions",
    avatar: "/images/testimonials/carlos-mendoza.jpg",
    content: "La plataforma de e-commerce que desarrolló Ismael superó todas nuestras expectativas. La integración con Stripe fue perfecta y el panel administrativo es intuitivo. Nuestras ventas online se triplicaron en los primeros 3 meses.",
    contentEn: "The e-commerce platform that Ismael developed exceeded all our expectations. The Stripe integration was perfect and the admin panel is intuitive. Our online sales tripled in the first 3 months.",
    rating: 5,
    project: "Plataforma E-commerce",
    projectEn: "E-commerce Platform",
    type: "client",
    linkedinUrl: "https://linkedin.com/in/carlos-mendoza-ceo",
    metrics: [
      { label: "Ventas online", labelEn: "Online Sales", value: "+300%", improvement: "primeros 3 meses", improvementEn: "first 3 months" },
      { label: "Tiempo de checkout", labelEn: "Checkout Time", value: "-40%", improvement: "UX optimizada", improvementEn: "optimized UX" },
      { label: "Abandono de carrito", labelEn: "Cart Abandonment", value: "-25%", improvement: "proceso mejorado", improvementEn: "improved process" }
    ]
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    position: "Gerente de Operaciones",
    company: "LogiFlow Corp",
    avatar: "/images/testimonials/ana-rodriguez.jpg",
    content: "El dashboard que creó Ismael revolucionó la forma en que gestionamos nuestras operaciones. Los reportes en tiempo real y la visualización de datos nos han permitido tomar decisiones más informadas y rápidas.",
    contentEn: "The dashboard that Ismael created revolutionized the way we manage our operations. Real-time reports and data visualization have allowed us to make more informed and faster decisions.",
    rating: 5,
    project: "Dashboard Administrativo",
    projectEn: "Administrative Dashboard",
    type: "client",
    linkedinUrl: "https://linkedin.com/in/ana-rodriguez-ops",
    metrics: [
      { label: "Eficiencia operativa", labelEn: "Operational Efficiency", value: "+80%", improvement: "automatización", improvementEn: "automation" },
      { label: "Tiempo de reportes", labelEn: "Report Time", value: "-90%", improvement: "tiempo real", improvementEn: "real time" },
      { label: "Errores manuales", labelEn: "Manual Errors", value: "-95%", improvement: "automatización", improvementEn: "automation" }
    ]
  },
  {
    id: 4,
    name: "Diego Martínez",
    position: "Web Developer",
    company: "DevTeam Solutions",
    avatar: "/images/testimonials/diego-martinez.jpg",
    content: "Trabajar con Ismael ha sido una experiencia increíble. Su código es limpio, bien estructurado y siempre sigue las mejores prácticas. Es un desarrollador que realmente entiende la arquitectura de software y siempre está dispuesto a ayudar al equipo.",
    contentEn: "Working with Ismael has been an incredible experience. His code is clean, well-structured and always follows best practices. He's a developer who truly understands software architecture and is always willing to help the team.",
    rating: 5,
    project: "Colaboración en Equipo",
    projectEn: "Team Collaboration",
    type: "colleague",
    linkedinUrl: "https://linkedin.com/in/diego-martinez-dev",
    metrics: [
      { label: "Calidad de código", labelEn: "Code Quality", value: "A+", improvement: "estándares altos", improvementEn: "high standards" },
      { label: "Tiempo de revisión", labelEn: "Review Time", value: "-50%", improvement: "código limpio", improvementEn: "clean code" },
      { label: "Bugs en producción", labelEn: "Production Bugs", value: "-80%", improvement: "testing riguroso", improvementEn: "rigorous testing" }
    ]
  },
  {
    id: 5,
    name: "Roberto Silva",
    position: "Director de TI",
    company: "InnovateTech",
    avatar: "/images/testimonials/roberto-silva.jpg",
    content: "La API REST que desarrolló Ismael es robusta, bien documentada y escalable. Su conocimiento en Node.js y mejores prácticas de desarrollo se nota en cada línea de código. Un profesional excepcional.",
    contentEn: "The REST API that Ismael developed is robust, well-documented and scalable. His knowledge of Node.js and development best practices shows in every line of code. An exceptional professional.",
    rating: 5,
    project: "API REST & Microservicios",
    projectEn: "REST API & Microservices",
    type: "client",
    linkedinUrl: "https://linkedin.com/in/roberto-silva-ti",
    metrics: [
      { label: "Tiempo de respuesta", labelEn: "Response Time", value: "-70%", improvement: "optimización", improvementEn: "optimization" },
      { label: "Uptime", labelEn: "Uptime", value: "99.9%", improvement: "alta disponibilidad", improvementEn: "high availability" },
      { label: "Requests/segundo", labelEn: "Requests/second", value: "+500%", improvement: "escalabilidad", improvementEn: "scalability" }
    ]
  },
  {
    id: 6,
    name: "Laura Fernández",
    position: "Frontend Developer",
    company: "Creative Labs",
    avatar: "/images/testimonials/laura-fernandez.jpg",
    content: "Ismael es un mentor excepcional. Su conocimiento en React y Next.js me ha ayudado a crecer profesionalmente. Siempre está dispuesto a compartir su experiencia y explicar conceptos complejos de manera sencilla.",
    contentEn: "Ismael is an exceptional mentor. His knowledge in React and Next.js has helped me grow professionally. He's always willing to share his experience and explain complex concepts in a simple way.",
    rating: 5,
    project: "Mentoría Técnica",
    projectEn: "Technical Mentoring",
    type: "colleague",
    linkedinUrl: "https://linkedin.com/in/laura-fernandez-frontend",
    metrics: [
      { label: "Habilidades mejoradas", labelEn: "Skills Improved", value: "+200%", improvement: "mentoría activa", improvementEn: "active mentoring" },
      { label: "Proyectos completados", labelEn: "Projects Completed", value: "+150%", improvement: "mejor técnica", improvementEn: "better technique" },
      { label: "Confianza técnica", labelEn: "Technical Confidence", value: "+300%", improvement: "conocimiento sólido", improvementEn: "solid knowledge" }
    ]
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    setIsMounted(true);
    
    // Listen for language changes
    const handleLanguageChange = () => {
      const htmlLang = document.documentElement.getAttribute('data-lang') || 'es';
      setCurrentLanguage(htmlLang);
    };

    // Initial language check
    handleLanguageChange();

    // Listen for language toggle events
    const observer = new MutationObserver(handleLanguageChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang']
    });

    return () => observer.disconnect();
  }, []);

  const getCurrentContent = (testimonial: Testimonial) => {
    return currentLanguage === 'en' ? testimonial.contentEn : testimonial.content;
  };

  const getCurrentProject = (testimonial: Testimonial) => {
    return currentLanguage === 'en' ? testimonial.projectEn : testimonial.project;
  };

  const getCurrentMetricLabel = (metric: any) => {
    return currentLanguage === 'en' ? metric.labelEn : metric.label;
  };

  const getCurrentMetricImprovement = (metric: any) => {
    return currentLanguage === 'en' ? metric.improvementEn : metric.improvement;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= testimonials.length) return 0;
      if (nextIndex < 0) return testimonials.length - 1;
      return nextIndex;
    });
    
    trackEvent('click', 'testimonials', 'Navigate Testimonial', currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    trackEvent('click', 'testimonials', 'Select Testimonial', index + 1);
  };

  const handleLinkedInClick = (name: string) => {
    trackEvent('click', 'social', `LinkedIn Testimonial - ${name}`);
  };

  const currentTestimonial = testimonials[currentIndex];

  if (!isMounted) {
    return null;
  }

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-terminal-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-terminal-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-green mb-4">
            <span data-es="Lo Que Dicen Mis Clientes y Compañeros" data-en="What My Clients and Colleagues Say">Lo Que Dicen Mis Clientes y Compañeros</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            <span data-es="La satisfacción de mis clientes y la confianza de mis compañeros son mi mayor logro. Aquí tienes testimonios reales de empresarios y desarrolladores que han trabajado conmigo." data-en="The satisfaction of my clients and the trust of my colleagues are my greatest achievement. Here are real testimonials from entrepreneurs and developers who have worked with me.">La satisfacción de mis clientes y la confianza de mis compañeros son mi mayor logro. Aquí tienes testimonios reales de empresarios y desarrolladores que han trabajado conmigo.</span>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Main Testimonial Card */}
          <div className="relative h-[600px] md:h-[500px] mb-8">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="testimonial-mobile bg-terminal-bg border border-terminal-border rounded-xl p-4 md:p-6 lg:p-8 h-full flex flex-col gap-4 md:gap-8 md:flex-row shadow-terminal">
                  {/* Left Side - Testimonial Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Quote Icon */}
                    <Quote className="text-accent-green w-12 h-12 mb-6 opacity-50" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < currentTestimonial.rating
                              ? 'text-accent-yellow fill-current'
                              : 'text-terminal-border'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-text-primary text-lg leading-relaxed mb-6 italic">
                      &ldquo;{getCurrentContent(currentTestimonial)}&rdquo;
                    </blockquote>

                    {/* Project Info */}
                    <div className="mb-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        currentTestimonial.type === 'client' 
                          ? 'bg-accent-green/20 text-accent-green' 
                          : 'bg-accent-blue/20 text-accent-blue'
                      }`}>
                        {getCurrentProject(currentTestimonial)}
                      </span>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-terminal-border overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center text-white font-bold text-xl">
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-text-primary font-semibold text-lg">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-text-secondary">
                          {currentTestimonial.position}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-accent-blue font-medium">
                            {currentTestimonial.company}
                          </span>
                          {currentTestimonial.linkedinUrl && (
                            <a
                              href={currentTestimonial.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => handleLinkedInClick(currentTestimonial.name)}
                              className="text-accent-blue hover:text-accent-green transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Metrics */}
                  {currentTestimonial.metrics && (
                    <div className="hidden md:block w-full md:w-80 bg-terminal-surface border border-terminal-border rounded-lg p-4 md:p-6 mt-4 md:mt-0">
                      <h5 className="text-accent-purple font-semibold mb-3 md:mb-4 text-center text-sm md:text-base">
                        <span data-es="Resultados Obtenidos" data-en="Results Achieved">Resultados Obtenidos</span>
                      </h5>
                      <div className="grid grid-cols-3 md:space-y-4 md:block gap-2 md:gap-0">
                        {currentTestimonial.metrics.map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-lg md:text-2xl font-bold text-accent-green mb-1">
                              {metric.value}
                            </div>
                            <div className="text-text-primary font-medium text-xs md:text-sm mb-1">
                              {getCurrentMetricLabel(metric)}
                            </div>
                            <div className="text-text-secondary text-xs hidden md:block">
                              {getCurrentMetricImprovement(metric)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Hidden on mobile */}
            <Button
              variant="outline"
              size="icon"
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border-terminal-border hover:bg-accent-green hover:text-terminal-bg"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border-terminal-border hover:bg-accent-green hover:text-terminal-bg"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-4 mt-8 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-5 h-5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent-green scale-125 shadow-lg shadow-accent-green/50 ring-2 ring-accent-green/30'
                    : 'bg-terminal-border hover:bg-accent-green/50 border-2 border-text-secondary/30'
                }`}
              />
            ))}
          </div>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4 mb-8 md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="bg-accent-green/10 border-accent-green/30 text-accent-green hover:bg-accent-green hover:text-terminal-bg font-medium px-4 py-2"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              <span className="text-sm">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-accent-green/10 border-accent-green/30 text-accent-green hover:bg-accent-green hover:text-terminal-bg font-medium px-4 py-2"
              onClick={() => paginate(1)}
            >
              <span className="text-sm">Siguiente</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 px-4"
        >
          <p className="text-base md:text-lg text-text-secondary mb-4 md:mb-6">
            <span data-es="¿Quieres ser el próximo en obtener resultados como estos?" data-en="Do you want to be the next to get results like these?">¿Quieres ser el próximo en obtener resultados como estos?</span>
          </p>
          <Button
            onClick={() => {
              trackEvent('click', 'cta', 'Contact from Testimonials', 1);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-accent-green hover:bg-accent-green/90 text-terminal-bg font-semibold px-6 py-3 w-full sm:w-auto text-sm sm:text-base"
          >
            <span data-es="Hablemos de Tu Proyecto" data-en="Let's Talk About Your Project">Hablemos de Tu Proyecto</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}