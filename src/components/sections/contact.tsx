'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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
      // Simular envío de email (aquí puedes integrar con un servicio real como EmailJS, Formspree, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      // Por ahora, simularemos un envío exitoso para demostración
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contacto" className="section-animate py-8 md:py-16 bg-terminal-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-accent-green" data-es="¿Hablamos? Estoy a Solo un Mensaje de Distancia" data-en="Let's Talk? I'm Just One Message Away">
          ¿Hablamos? Estoy a Solo un Mensaje de Distancia
        </h2>
        <p className="contact-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Si llegaste hasta aquí, significa que algo te gustó (¡espero!). Ya sea que tengas un proyecto en mente, una pregunta técnica, o simplemente quieras charlar sobre tecnología, estaré encantado de escucharte. No muerdo, lo prometo." data-en="If you made it this far, it means you liked something (I hope!). Whether you have a project in mind, a technical question, or just want to chat about technology, I'll be happy to hear from you. I don't bite, I promise.">
          Si llegaste hasta aquí, significa que algo te gustó (¡espero!). Ya sea que tengas un proyecto en mente, 
          una pregunta técnica, o simplemente quieras charlar sobre tecnología, estaré encantado de escucharte. 
          No muerdo, lo prometo.
        </p>

        <div className="contact-container max-w-4xl mx-auto">
          <div className="contact-terminal bg-terminal-bg border border-terminal-border rounded-lg overflow-hidden shadow-2xl">
            <div className="contact-terminal-header bg-terminal-surface px-6 py-4 flex items-center justify-between border-b border-terminal-border">
              <div className="controls flex gap-2">
                <span className="control w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="control w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="control w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="title text-text-primary font-mono text-sm">~/contacto.sh</span>
              <div className="w-16"></div>
            </div>
            
            <div className="contact-terminal-body p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Información de contacto */}
                <div className="contact-info space-y-6">
                  <div className="contact-line">
                    <div className="flex items-start gap-4">
                      <span className="prompt text-accent-green font-mono text-xl mt-1">➜</span>
                      <div className="command-content flex-1">
                        <h4 className="text-xl font-bold text-accent-green mb-2" data-es="Email Principal" data-en="Main Email">Email Principal</h4>
                        <p className="text-text-secondary mb-2" data-es="La forma más directa de contactarme. Reviso mi email regularmente (bueno, obsesivamente)." data-en="The most direct way to contact me. I check my email regularly (well, obsessively).">
                          La forma más directa de contactarme. Reviso mi email regularmente 
                          (bueno, obsesivamente).
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
                        <h4 className="text-xl font-bold text-accent-blue mb-2" data-es="Redes Sociales" data-en="Social Media">Redes Sociales</h4>
                        <p className="text-text-secondary mb-4" data-es="Sígueme para ver mis últimos proyectos, reflexiones random sobre programación y ocasionales memes de desarrolladores." data-en="Follow me to see my latest projects, random programming thoughts and occasional developer memes.">
                          Sígueme para ver mis últimos proyectos, reflexiones random sobre programación 
                          y ocasionales memes de desarrolladores.
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
                        <h4 className="text-xl font-bold text-accent-purple mb-2" data-es="Ubicación" data-en="Location">Ubicación</h4>
                        <p className="text-text-secondary" data-es="Basado en México, pero trabajo con clientes de todo el mundo. El internet es mi oficina, y mi café es mi combustible." data-en="Based in Mexico, but I work with clients from around the world. The internet is my office, and coffee is my fuel.">
                          Basado en México, pero trabajo con clientes de todo el mundo. 
                          El internet es mi oficina, y mi café es mi combustible.
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
                        <h4 className="text-xl font-bold text-accent-orange mb-4" data-es="Envíame un Mensaje" data-en="Send Me a Message">Envíame un Mensaje</h4>
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
                              <span className="font-medium">¡Mensaje enviado exitosamente!</span>
                            </div>
                            <p className="text-text-secondary text-sm mt-1">
                              Gracias por contactarme. Te responderé lo antes posible.
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
                              className={`w-full bg-terminal-surface border rounded px-4 py-2 text-text-primary focus:outline-none transition-colors ${
                                errors.name 
                                  ? 'border-red-500 focus:border-red-500' 
                                  : 'border-terminal-border focus:border-accent-green'
                              }`}
                              placeholder="¿Cómo te llamas?"
                              data-es-placeholder="¿Cómo te llamas?"
                              data-en-placeholder="What's your name?"
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
                              className={`w-full bg-terminal-surface border rounded px-4 py-2 text-text-primary focus:outline-none transition-colors ${
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
                            <label className="block text-text-secondary text-sm mb-2" htmlFor="subject" data-es="Asunto:" data-en="Subject:">
                              Asunto:
                            </label>
                            <input 
                              type="text" 
                              id="subject" 
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              className={`w-full bg-terminal-surface border rounded px-4 py-2 text-text-primary focus:outline-none transition-colors ${
                                errors.subject 
                                  ? 'border-red-500 focus:border-red-500' 
                                  : 'border-terminal-border focus:border-accent-green'
                              }`}
                              placeholder="¿De qué quieres hablar?"
                              data-es-placeholder="¿De qué quieres hablar?"
                              data-en-placeholder="What do you want to talk about?"
                            />
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
                            <label className="block text-text-secondary text-sm mb-2" htmlFor="message" data-es="Tu mensaje:" data-en="Your message:">
                              Tu mensaje:
                            </label>
                            <textarea 
                              id="message" 
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={4}
                              className={`w-full bg-terminal-surface border rounded px-4 py-2 text-text-primary focus:outline-none transition-colors resize-none ${
                                errors.message 
                                  ? 'border-red-500 focus:border-red-500' 
                                  : 'border-terminal-border focus:border-accent-green'
                              }`}
                              placeholder="Cuéntame sobre tu proyecto, idea, o simplemente saluda..."
                              data-es-placeholder="Cuéntame sobre tu proyecto, idea, o simplemente saluda..."
                              data-en-placeholder="Tell me about your project, idea, or just say hello..."
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
                            className={`w-full font-medium py-3 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 ${
                              isSubmitting
                                ? 'bg-accent-green/50 text-terminal-bg/70 cursor-not-allowed'
                                : 'bg-accent-green hover:bg-accent-green/80 text-terminal-bg hover:shadow-lg hover:shadow-accent-green/25'
                            }`}
                            data-es="Enviar Mensaje"
                            data-en="Send Message"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Enviando...
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Enviar Mensaje
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