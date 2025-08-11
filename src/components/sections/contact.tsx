'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { trackEvent } from '@/components/analytics';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Configuración de EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS no está configurado. Usando modo demo.');
        // Simular envío exitoso en modo demo
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        trackEvent('form_submit', 'contact', 'Contact Form Demo', 1);
      } else {
        // Enviar email real con EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Ismael Salazar',
        };
        
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSubmitStatus('success');
        trackEvent('form_submit', 'contact', 'Contact Form Success', 1);
      }
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setSubmitStatus('error');
      trackEvent('form_error', 'contact', 'Contact Form Error', 1);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contacto" className="section-animate py-8 md:py-16 bg-terminal-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-accent-green" data-es="¿Hablamos de tu Proyecto?" data-en="Let's Talk About Your Project?">
          ¿Hablamos de tu Proyecto?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-center mb-6 md:mb-8 text-text-secondary max-w-3xl mx-auto" data-es="Respuesta rápida | Análisis personalizado | Solo 3 proyectos disponibles este mes" data-en="Quick response | Personalized analysis | Only 3 projects available this month">
          Respuesta rápida | Análisis personalizado | Solo 3 proyectos disponibles este mes
        </p>
        <p className="contact-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Si has llegado hasta aquí, es porque tienes una idea o proyecto en mente. Me especializo en crear soluciones digitales que transforman negocios y generan resultados reales. Cuéntame sobre tu visión y trabajemos juntos para hacerla realidad." data-en="If you've made it this far, it's because you have an idea or project in mind. I specialize in creating digital solutions that transform businesses and generate real results. Tell me about your vision and let's work together to make it a reality.">
          Si has llegado hasta aquí, es porque tienes una idea o proyecto en mente. Me especializo en 
          crear soluciones digitales que transforman negocios y generan resultados reales. 
          Cuéntame sobre tu visión y trabajemos juntos para hacerla realidad.
        </p>

        <div className="contact-container max-w-4xl mx-auto">
          <div className="contact-terminal form-mobile bg-terminal-bg border border-terminal-border rounded-lg overflow-hidden shadow-2xl">
            <div className="contact-terminal-header bg-terminal-surface px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-terminal-border">
              <div className="controls flex gap-2">
                <span className="control w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></span>
                <span className="control w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></span>
                <span className="control w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="title text-text-primary font-mono text-xs md:text-sm">~/contacto.sh</span>
              <div className="w-8 md:w-16"></div>
            </div>
            
            <div className="contact-terminal-body p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Información de contacto */}
                <div className="contact-info space-y-6">
                  <div className="contact-line">
                    <div className="flex items-start gap-4">
                      <span className="prompt text-accent-green font-mono text-xl mt-1">➜</span>
                      <div className="command-content flex-1">
                        <h4 className="text-xl font-bold text-accent-green mb-2" data-es="Contacto Directo VIP" data-en="VIP Direct Contact">Contacto Directo VIP</h4>
                        <p className="text-text-secondary mb-2" data-es="Línea directa para clientes serios. Respuesta garantizada en menos de 2 horas durante días laborales. Prioridad máxima para proyectos de alto impacto." data-en="Direct line for serious clients. Guaranteed response in less than 2 hours during business days. Maximum priority for high-impact projects.">
                          Línea directa para clientes serios. Respuesta garantizada en menos de 2 horas 
                          durante días laborales. Prioridad máxima para proyectos de alto impacto.
                        </p>
                        <a href="mailto:iarsfate@gmail.com" 
                           className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-green transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          iarsfate@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-line">
                    <div className="flex items-start gap-4">
                      <span className="prompt text-accent-blue font-mono text-xl mt-1">➜</span>
                      <div className="command-content flex-1">
                        <h4 className="text-xl font-bold text-accent-blue mb-2" data-es="Casos de Éxito en Vivo" data-en="Live Success Stories">Casos de Éxito en Vivo</h4>
                        <p className="text-text-secondary mb-4" data-es="Sígueme para ver actualizaciones en tiempo real de proyectos exitosos, estrategias que generan resultados y testimonios de clientes satisfechos con ROI comprobado." data-en="Follow me for real-time updates on successful projects, strategies that generate results and testimonials from satisfied clients with proven ROI.">
                          Sígueme para ver actualizaciones en tiempo real de proyectos exitosos, 
                          estrategias que generan resultados y testimonios de clientes satisfechos con ROI comprobado.
                        </p>
                        <div className="social-links flex gap-4">
                          <a href="https://github.com/ismaiars" target="_blank" rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-text-secondary hover:text-accent-green transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                          <a href="https://linkedin.com/in/ismael-salazar" target="_blank" rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-line">
                    <div className="flex items-start gap-4">
                      <span className="prompt text-accent-purple font-mono text-xl mt-1">➜</span>
                      <div className="command-content flex-1">
                        <h4 className="text-xl font-bold text-accent-purple mb-2" data-es="Cobertura Global" data-en="Global Coverage">Cobertura Global</h4>
                        <p className="text-text-secondary" data-es="Basado en México con clientes en 15+ países. Trabajo en tu zona horaria para máxima eficiencia. Disponibilidad 24/7 para proyectos críticos y soporte post-lanzamiento." data-en="Based in Mexico with clients in 15+ countries. I work in your time zone for maximum efficiency. 24/7 availability for critical projects and post-launch support.">
                          Basado en México con clientes en 15+ países. Trabajo en tu zona horaria para máxima eficiencia. 
                          Disponibilidad 24/7 para proyectos críticos y soporte post-lanzamiento.
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-accent-purple">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          México
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Formulario de contacto */}
                <div className="contact-form">
                  <div className="contact-line">
                    <div className="flex items-start gap-4">
                      <span className="prompt text-accent-orange font-mono text-xl mt-1">➜</span>
                      <div className="command-content flex-1">
                        <h4 className="text-xl font-bold text-accent-orange mb-2" data-es="Envíame un Mensaje" data-en="Send Me a Message">Envíame un Mensaje</h4>
                         <div className="bg-gradient-to-r from-accent-orange/10 to-accent-green/10 rounded-lg p-3 mb-4">
                           <div className="flex items-center gap-2 text-accent-orange text-sm font-semibold">
                             <span>💡</span>
                             <span data-es="Disponibilidad limitada: Solo 3 proyectos este mes" data-en="Limited availability: Only 3 projects this month">Disponibilidad limitada: Solo 3 proyectos este mes</span>
                           </div>
                         </div>
                        {/* Mensaje de estado */}
                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-accent-green/10 border border-accent-green/30 rounded-lg"
                          >
                            <div className="flex items-center gap-2 text-accent-green">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="font-medium" data-es="¡Mensaje enviado exitosamente!" data-en="Message sent successfully!">¡Mensaje enviado exitosamente!</span>
                            </div>
                            <p className="text-text-secondary text-sm mt-1" data-es="Gracias por contactarme. Te responderé lo antes posible." data-en="Thank you for contacting me. I'll get back to you as soon as possible.">
                              Gracias por contactarme. Te responderé lo antes posible.
                            </p>
                          </motion.div>
                        )}

                        {submitStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                          >
                            <div className="flex items-center gap-2 text-red-500">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-medium" data-es="Error al enviar el mensaje" data-en="Error sending message">Error al enviar el mensaje</span>
                            </div>
                            <p className="text-text-secondary text-sm mt-1" data-es="Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o contáctame directamente por email." data-en="There was a problem sending your message. Please try again or contact me directly by email.">
                              Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o contáctame directamente por email.
                            </p>
                          </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-text-secondary text-sm mb-2" htmlFor="name" data-es="Tu nombre:" data-en="Your name:">
                              Tu nombre:
                            </label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className={`form-mobile w-full bg-terminal-surface border rounded px-3 md:px-4 py-2 md:py-3 text-text-primary focus:outline-none transition-colors text-base ${
                                errors.name 
                                  ? 'border-red-500 focus:border-red-500' 
                                  : 'border-terminal-border focus:border-accent-green'
                              }`}
                              placeholder="Tu nombre completo"
                              data-es-placeholder="Tu nombre completo"
                              data-en-placeholder="Your full name"
                            />
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-text-secondary text-sm mb-2" htmlFor="email" data-es="Tu email:" data-en="Your email:">
                              Tu email:
                            </label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`form-mobile w-full bg-terminal-surface border rounded px-3 md:px-4 py-2 md:py-3 text-text-primary focus:outline-none transition-colors text-base ${
                                errors.email 
                                  ? 'border-red-500 focus:border-red-500' 
                                  : 'border-terminal-border focus:border-accent-green'
                              }`}
                              placeholder="tu@email.com"
                              data-es-placeholder="tu@email.com"
                              data-en-placeholder="your@email.com"
                            />
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-text-secondary text-sm mb-2" htmlFor="subject" data-es="Tipo de Proyecto:" data-en="Project Type:">Tipo de Proyecto:</label>
                            <select 
                              id="subject" 
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              className={`form-mobile w-full bg-terminal-surface border rounded px-3 md:px-4 py-2 md:py-3 text-text-primary focus:outline-none transition-colors text-base ${
                                errors.subject 
                                  ? 'border-red-500 focus:border-red-500' 
                                  : 'border-terminal-border focus:border-accent-green'
                              }`}
                            >
                              <option value="" data-es="Selecciona el tipo de proyecto..." data-en="Select project type...">Selecciona el tipo de proyecto...</option>
                              <option value="Tienda en línea / E-commerce" data-es="Tienda en línea / E-commerce" data-en="Online store / E-commerce">Tienda en línea / E-commerce</option>
                              <option value="Sitio web corporativo" data-es="Sitio web corporativo" data-en="Corporate website">Sitio web corporativo</option>
                              <option value="Sistema empresarial" data-es="Sistema empresarial" data-en="Enterprise system">Sistema empresarial</option>
                              <option value="Aplicación móvil" data-es="Aplicación móvil" data-en="Mobile application">Aplicación móvil</option>
                              <option value="Transformación digital" data-es="Transformación digital" data-en="Digital transformation">Transformación digital</option>
                              <option value="Asesoría técnica" data-es="Asesoría técnica" data-en="Technical advisory">Asesoría técnica</option>
                            </select>
                            {errors.subject && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.subject}
                              </motion.p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-text-secondary text-sm mb-2" htmlFor="message" data-es="Describe tu desafío de negocio:" data-en="Describe your business challenge:">Describe tu desafío de negocio:</label>
                            <textarea 
                              id="message" 
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={4}
                              className={`form-mobile w-full bg-terminal-surface border rounded px-3 md:px-4 py-2 md:py-3 text-text-primary focus:outline-none transition-colors resize-none text-base ${
                                errors.message 
                                  ? 'border-red-500 focus:border-red-500' 
                                  : 'border-terminal-border focus:border-accent-green'
                              }`}
                              placeholder="Cuéntame sobre tu proyecto (ej: 'Necesito una tienda online para mi negocio', 'Quiero automatizar procesos de mi empresa', 'Busco crear una plataforma para mis clientes')"
                              data-es-placeholder="Cuéntame sobre tu proyecto (ej: 'Necesito una tienda online para mi negocio', 'Quiero automatizar procesos de mi empresa', 'Busco crear una plataforma para mis clientes')"
                              data-en-placeholder="Tell me about your project (ex: 'I need an online store for my business', 'I want to automate my company processes', 'I'm looking to create a platform for my clients')"
                            ></textarea>
                            {errors.message && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.message}
                              </motion.p>
                            )}
                          </div>
                          
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`btn-mobile w-full font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base md:text-lg ${
                               isSubmitting
                                 ? 'bg-accent-green/50 text-terminal-bg/70 cursor-not-allowed'
                                 : 'bg-gradient-to-r from-accent-green to-accent-blue hover:from-accent-green/90 hover:to-accent-blue/90 text-terminal-bg hover:shadow-xl hover:shadow-accent-green/30 transform hover:scale-105'
                             }`}
                             data-es="🚀 ENVIAR MENSAJE"
                             data-en="🚀 SEND MESSAGE"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span data-es="Enviando..." data-en="Sending...">Enviando...</span>
                              </>
                            ) : (
                              <>
                                <span className="text-xl">🚀</span>
                                <span data-es="ENVIAR MENSAJE" data-en="SEND MESSAGE">ENVIAR MENSAJE</span>
                              </>
                            )}
                          </button>
                        </form>
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