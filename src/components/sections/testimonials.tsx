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
    name: "Mara Rodríguez",
    position: "CEO y Fundadora",
    company: "Carpe Diem México",
    avatar: "/images/testimonials/mara-rodriguez.jpg",
    content: "Ismael ha sido fundamental en el crecimiento de Carpe Diem México. Su liderazgo técnico y capacidad para transformar ideas complejas en soluciones digitales efectivas ha sido excepcional. Bajo su dirección, hemos logrado resultados extraordinarios.",
    contentEn: "Ismael has been fundamental to the growth of Carpe Diem México. His technical leadership and ability to transform complex ideas into effective digital solutions has been exceptional. Under his direction, we have achieved extraordinary results.",
    rating: 5,
    project: "Liderazgo Técnico y Desarrollo Corporativo",
    projectEn: "Technical Leadership and Corporate Development",
    type: "client",
    linkedinUrl: "https://linkedin.com/in/mara-rodriguez-ceo",
    companyUrl: "https://carpediemmexico.com.mx",
    metrics: [
      { label: "Crecimiento empresarial", labelEn: "Business Growth", value: "+250%", improvement: "liderazgo técnico", improvementEn: "technical leadership" },
      { label: "Proyectos entregados", labelEn: "Projects Delivered", value: "100%", improvement: "en tiempo y forma", improvementEn: "on time and budget" },
      { label: "Satisfacción del cliente", labelEn: "Client Satisfaction", value: "98%", improvement: "calidad excepcional", improvementEn: "exceptional quality" }
    ]
  },
  {
    id: 2,
    name: "Noé Resindez",
    position: "Frontend Developer",
    company: "Carpe Diem México",
    avatar: "/images/testimonials/noe-resindez.jpg",
    content: "Trabajar bajo la supervisión de Ismael ha sido una experiencia de crecimiento increíble. Su mentoría en React, Next.js y mejores prácticas de frontend me ha convertido en un desarrollador mucho más competente. Su paciencia y conocimiento son admirables.",
    contentEn: "Working under Ismael's supervision has been an incredible growth experience. His mentorship in React, Next.js and frontend best practices has made me a much more competent developer. His patience and knowledge are admirable.",
    rating: 5,
    project: "Desarrollo Frontend y Mentoría",
    projectEn: "Frontend Development and Mentoring",
    type: "colleague",
    linkedinUrl: "https://linkedin.com/in/noe-resindez-frontend",
    metrics: [
      { label: "Habilidades técnicas", labelEn: "Technical Skills", value: "+300%", improvement: "mentoría constante", improvementEn: "constant mentoring" },
      { label: "Velocidad de desarrollo", labelEn: "Development Speed", value: "+150%", improvement: "mejores prácticas", improvementEn: "best practices" },
      { label: "Calidad de código", labelEn: "Code Quality", value: "A+", improvement: "estándares altos", improvementEn: "high standards" }
    ]
  },
  {
    id: 3,
    name: "Javier Flores",
    position: "Backend Developer",
    company: "Carpe Diem México",
    avatar: "/images/testimonials/javier-flores.jpg",
    content: "Ismael es un líder técnico excepcional. Su experiencia en Node.js, APIs y arquitectura de software ha elevado significativamente la calidad de nuestros proyectos backend. Su capacidad para enseñar conceptos complejos de manera clara es impresionante.",
    contentEn: "Ismael is an exceptional technical leader. His experience in Node.js, APIs and software architecture has significantly elevated the quality of our backend projects. His ability to teach complex concepts clearly is impressive.",
    rating: 5,
    project: "Desarrollo Backend y Arquitectura",
    projectEn: "Backend Development and Architecture",
    type: "colleague",
    linkedinUrl: "https://linkedin.com/in/javier-flores-backend",
    metrics: [
      { label: "Performance de APIs", labelEn: "API Performance", value: "+200%", improvement: "optimización avanzada", improvementEn: "advanced optimization" },
      { label: "Tiempo de respuesta", labelEn: "Response Time", value: "-60%", improvement: "arquitectura mejorada", improvementEn: "improved architecture" },
      { label: "Escalabilidad", labelEn: "Scalability", value: "+400%", improvement: "diseño robusto", improvementEn: "robust design" }
    ]
  },
  {
    id: 4,
    name: "José Miguel Rodríguez",
    position: "Desarrollador Full Stack",
    company: "Freelance",
    avatar: "/images/testimonials/jose-miguel-rodriguez.jpg",
    content: "Colaborar con Ismael en proyectos freelance ha sido una experiencia enriquecedora. Su profesionalismo, conocimiento técnico y capacidad para resolver problemas complejos lo convierten en un socio de desarrollo excepcional. Siempre entrega resultados de calidad superior.",
    contentEn: "Collaborating with Ismael on freelance projects has been an enriching experience. His professionalism, technical knowledge and ability to solve complex problems make him an exceptional development partner. He always delivers superior quality results.",
    rating: 5,
    project: "Colaboración Freelance",
    projectEn: "Freelance Collaboration",
    type: "colleague",
    linkedinUrl: "https://linkedin.com/in/jose-miguel-rodriguez-dev",
    metrics: [
      { label: "Proyectos exitosos", labelEn: "Successful Projects", value: "100%", improvement: "colaboración efectiva", improvementEn: "effective collaboration" },
      { label: "Tiempo de entrega", labelEn: "Delivery Time", value: "-30%", improvement: "eficiencia mejorada", improvementEn: "improved efficiency" },
      { label: "Satisfacción del cliente", labelEn: "Client Satisfaction", value: "95%", improvement: "calidad garantizada", improvementEn: "guaranteed quality" }
    ]
  },
  {
    id: 5,
    name: "Larisa Soto",
    position: "Diseñadora UX/UI",
    company: "Freelance",
    avatar: "/images/testimonials/larisa-soto.jpg",
    content: "Trabajar con Ismael ha sido una experiencia fantástica. Su capacidad para traducir diseños complejos en código funcional y su atención al detalle en la implementación de interfaces es impresionante. Es un desarrollador que realmente entiende la importancia del diseño.",
    contentEn: "Working with Ismael has been a fantastic experience. His ability to translate complex designs into functional code and his attention to detail in interface implementation is impressive. He's a developer who truly understands the importance of design.",
    rating: 5,
    project: "Implementación de Diseños UX/UI",
    projectEn: "UX/UI Design Implementation",
    type: "colleague",
    linkedinUrl: "https://linkedin.com/in/larisa-soto-ux",
    metrics: [
      { label: "Fidelidad al diseño", labelEn: "Design Fidelity", value: "99%", improvement: "implementación precisa", improvementEn: "precise implementation" },
      { label: "Experiencia de usuario", labelEn: "User Experience", value: "+180%", improvement: "interfaces intuitivas", improvementEn: "intuitive interfaces" },
      { label: "Tiempo de desarrollo", labelEn: "Development Time", value: "-40%", improvement: "comunicación efectiva", improvementEn: "effective communication" }
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