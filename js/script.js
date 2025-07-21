console.log("Script.js cargado y ejecutándose.");
document.addEventListener('DOMContentLoaded', function() {
    // Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    // Language Toggle
    const languageToggle = document.getElementById('languageToggle');
    const html = document.documentElement;
    const languageSpan = languageToggle.querySelector('span');
    
    // Check for saved language preference or default to Spanish
    const currentLanguage = localStorage.getItem('language') || 'es';
    html.setAttribute('lang', currentLanguage);
    updateLanguage(currentLanguage);
    
    languageToggle.addEventListener('click', () => {
        const currentLang = html.getAttribute('lang');
        const newLang = currentLang === 'es' ? 'en' : 'es';
        
        html.setAttribute('lang', newLang);
        localStorage.setItem('language', newLang);
        updateLanguage(newLang);
        
        // Add animation effect
        languageToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            languageToggle.style.transform = 'scale(1)';
        }, 150);
    });
    
    function updateLanguage(lang) {
        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-es][data-en]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
        
        // Update title
        const title = document.querySelector('title');
        if (title) {
            title.textContent = title.getAttribute(`data-${lang}`);
        }
        
        // Update language toggle text
        if (languageSpan) {
            languageSpan.textContent = lang.toUpperCase();
        }
        
        // Update skill levels
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            const level = item.getAttribute(`data-level${lang === 'en' ? '-en' : ''}`);
            if (level) {
                item.setAttribute('data-level', level);
            }
        });
        
        // Update typewriter effect for new language
        const typewriterElement = document.querySelector('.typewriter');
        if (typewriterElement) {
            const text = typewriterElement.textContent;
            typewriterElement.textContent = '';
            typewriterElement.style.maxWidth = '0';
            
            setTimeout(() => {
                let i = 0;
                const typeInterval = setInterval(() => {
                    if (i < text.length) {
                        typewriterElement.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typeInterval);
                        typewriterElement.style.borderRight = 'none';
                    }
                }, 100);
            }, 500);
        }
        // Se eliminó integración i18next para evitar conflictos
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling para la navegación
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Actualizar clase activa en la navegación
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Establecer el año actual en el pie de página
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Observador para animaciones de sección al hacer scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for project cards
                if (entry.target.id === 'proyectos') {
                    const projectCards = entry.target.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
                
                // Add staggered animation for skill items
                if (entry.target.id === 'sobre-mi') {
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 50);
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Inicializar la clase 'active' para la sección de inicio al cargar
    const initialActiveLink = document.querySelector('.nav-links a[href="#inicio"]');
    if (initialActiveLink) {
        initialActiveLink.classList.add('active');
    }

    // Actualizar la clase 'active' en la navegación al hacer scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Enhanced hover effects for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });

        // Terminal functionality for skills
        item.addEventListener('click', function() {
            const skill = this.getAttribute('data-skill');
            executeCommand(`skill --info ${skill.toLowerCase()}`);
        });
    });

    // Terminal functionality
    const terminalOutput = document.getElementById('terminalOutput');
    const terminalOverlay = document.getElementById('terminalOverlay');
    const currentCommand = document.getElementById('currentCommand');
    const terminalResponse = document.getElementById('terminalResponse');
    const closeTerminal = document.querySelector('.terminal-control.close');

    // Definir las skills por nivel
    const skillsByLevel = {
        basico: [
            { name: 'Shell Script', icon: 'devicon-bash-plain', description: 'Automatización de tareas con scripts bash y administración de sistemas Linux' },
            { name: 'React', icon: 'devicon-react-original', description: 'Desarrollo de interfaces con React, hooks y componentes funcionales' },
            { name: 'Angular', icon: 'devicon-angularjs-plain', description: 'Desarrollo de aplicaciones SPA con Angular y TypeScript' },
            { name: 'Spring', icon: 'devicon-spring-plain', description: 'Framework Java para desarrollo de aplicaciones empresariales' },
            { name: 'Django', icon: 'devicon-django-plain', description: 'Framework Python para desarrollo web rápido y seguro' },
            { name: 'Ionic', icon: 'devicon-ionic-original', description: 'Framework para desarrollo de aplicaciones móviles híbridas' },
            { name: 'Nuxt', icon: 'devicon-nuxtjs-plain', description: 'Framework Vue.js para aplicaciones universales y SSR' },
            { name: 'Docker', icon: 'devicon-docker-plain', description: 'Contenedores y virtualización para despliegue de aplicaciones' },
            { name: 'Figma', icon: 'devicon-figma-plain', description: 'Diseño de interfaces y prototipado de aplicaciones' },
            { name: 'Arduino', icon: 'devicon-arduino-plain', description: 'Programación de microcontroladores y proyectos IoT' },
            { name: 'WordPress', icon: 'devicon-wordpress-plain', description: 'Desarrollo de sitios web con WordPress, temas personalizados y plugins' }
        ],
        intermedio: [
            { name: 'JavaScript', icon: 'devicon-javascript-plain', description: 'Programación frontend con JavaScript ES6+, DOM manipulation y APIs modernas' },
            { name: 'Python', icon: 'devicon-python-plain', description: 'Programación con Python, automatización, análisis de datos y desarrollo web' },
            { name: 'Java', icon: 'devicon-java-plain', description: 'Desarrollo de aplicaciones con Java, POO y frameworks empresariales' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain', description: 'Desarrollo backend con Node.js, Express y APIs RESTful' },
            { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain', description: 'Framework CSS utility-first para diseño moderno y personalizable' },
            { name: 'SQLite', icon: 'devicon-sqlite-plain', description: 'Base de datos ligera para aplicaciones locales y móviles' },
            { name: 'Git', icon: 'devicon-git-plain', description: 'Control de versiones distribuido y colaboración en proyectos' },
            { name: 'Apache', icon: 'devicon-apache-plain', description: 'Servidor web y configuración de hosting para aplicaciones' }
        ],
        avanzado: [
            { name: 'HTML5', icon: 'devicon-html5-plain', description: 'Desarrollo web frontend con HTML5 semántico, accesibilidad y mejores prácticas SEO' },
            { name: 'CSS3', icon: 'devicon-css3-plain', description: 'Estilos avanzados con CSS3, Flexbox, Grid, animaciones y diseño responsive' },
            { name: 'PHP', icon: 'devicon-php-plain', description: 'Desarrollo backend con PHP, frameworks MVC y integración con bases de datos' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', description: 'Framework CSS para desarrollo rápido de interfaces responsive' },
            { name: 'MySQL', icon: 'devicon-mysql-plain', description: 'Administración y optimización de bases de datos relacionales MySQL' }
        ]
    };

    function showTerminal(command, response) {
        currentCommand.textContent = command;
        terminalResponse.textContent = response;
        
        terminalOverlay.classList.add('active');
        terminalOutput.classList.add('active');
    }

    function closeTerminalWindow() {
        terminalOverlay.classList.remove('active');
        terminalOutput.classList.remove('active');
    }

    // Comandos de terminal
    function executeCommand(command) {
        const currentLang = html.getAttribute('lang');
        const cmd = command.toLowerCase().trim();
        
        if (cmd === 'ls skills' || cmd === 'ls skills/') {
            const response = currentLang === 'es' ?
                `Directorio de habilidades:
                
📁 basico/     - Habilidades básicas (${skillsByLevel.basico.length} tecnologías)
📁 intermedio/ - Habilidades intermedias (${skillsByLevel.intermedio.length} tecnologías)
📁 avanzado/   - Habilidades avanzadas (${skillsByLevel.avanzado.length} tecnologías)

Comandos disponibles:
• ls skills/basico      - Ver habilidades básicas
• ls skills/intermedio  - Ver habilidades intermedias
• ls skills/avanzado    - Ver habilidades avanzadas
• skill --info [nombre] - Información detallada de una skill
• exit                  - Cerrar terminal` :
                `Skills directory:
                
📁 basico/     - Basic skills (${skillsByLevel.basico.length} technologies)
📁 intermedio/ - Intermediate skills (${skillsByLevel.intermedio.length} technologies)
📁 avanzado/   - Advanced skills (${skillsByLevel.avanzado.length} technologies)

Available commands:
• ls skills/basico      - View basic skills
• ls skills/intermedio  - View intermediate skills
• ls skills/avanzado    - View advanced skills
• skill --info [name]   - Detailed information of a skill
• exit                  - Close terminal`;
            
            showTerminal(command, response);
        }
        else if (cmd === 'ls skills/basico' || cmd === 'ls skills/basic') {
            const skills = skillsByLevel.basico;
            const response = currentLang === 'es' ?
                `Habilidades Básicas (${skills.length} tecnologías):
                
${skills.map(skill => `📄 ${skill.name}`).join('\n')}

Comandos disponibles:
• skill --info [nombre] - Información detallada de una skill
• ls skills/intermedio  - Ver habilidades intermedias
• ls skills/avanzado    - Ver habilidades avanzadas
• exit                  - Cerrar terminal` :
                `Basic Skills (${skills.length} technologies):
                
${skills.map(skill => `📄 ${skill.name}`).join('\n')}

Available commands:
• skill --info [name]   - Detailed information of a skill
• ls skills/intermedio  - View intermediate skills
• ls skills/avanzado    - View advanced skills
• exit                  - Close terminal`;
            
            showTerminal(command, response);
        }
        else if (cmd === 'ls skills/intermedio' || cmd === 'ls skills/intermediate') {
            const skills = skillsByLevel.intermedio;
            const response = currentLang === 'es' ?
                `Habilidades Intermedias (${skills.length} tecnologías):
                
${skills.map(skill => `📄 ${skill.name}`).join('\n')}

Comandos disponibles:
• skill --info [nombre] - Información detallada de una skill
• ls skills/basico      - Ver habilidades básicas
• ls skills/avanzado    - Ver habilidades avanzadas
• exit                  - Cerrar terminal` :
                `Intermediate Skills (${skills.length} technologies):
                
${skills.map(skill => `📄 ${skill.name}`).join('\n')}

Available commands:
• skill --info [name]   - Detailed information of a skill
• ls skills/basico      - View basic skills
• ls skills/avanzado    - View advanced skills
• exit                  - Close terminal`;
            
            showTerminal(command, response);
        }
        else if (cmd === 'ls skills/avanzado' || cmd === 'ls skills/advanced') {
            const skills = skillsByLevel.avanzado;
            const response = currentLang === 'es' ?
                `Habilidades Avanzadas (${skills.length} tecnologías):
                
${skills.map(skill => `📄 ${skill.name}`).join('\n')}

Comandos disponibles:
• skill --info [nombre] - Información detallada de una skill
• ls skills/basico      - Ver habilidades básicas
• ls skills/intermedio  - Ver habilidades intermedias
• exit                  - Cerrar terminal` :
                `Advanced Skills (${skills.length} technologies):
                
${skills.map(skill => `📄 ${skill.name}`).join('\n')}

Available commands:
• skill --info [name]   - Detailed information of a skill
• ls skills/basico      - View basic skills
• ls skills/intermedio  - View intermediate skills
• exit                  - Close terminal`;
            
            showTerminal(command, response);
        }
        else if (cmd.startsWith('skill --info ')) {
            const skillName = cmd.replace('skill --info ', '').trim();
            let foundSkill = null;
            let level = '';
            
            // Buscar la skill en todos los niveles
            for (const [skillLevel, skills] of Object.entries(skillsByLevel)) {
                const skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
                if (skill) {
                    foundSkill = skill;
                    level = skillLevel;
                    break;
                }
            }
            
            if (foundSkill) {
                const response = currentLang === 'es' ?
                    `Información de habilidad: ${foundSkill.name}
                    
Nivel: ${level.charAt(0).toUpperCase() + level.slice(1)}
Descripción: ${foundSkill.description}

Comandos disponibles:
• skill --info [nombre] - Información detallada de una skill
• ls skills/${level}     - Ver todas las habilidades ${level}
• ls skills             - Ver directorio de habilidades
• exit                  - Cerrar terminal` :
                    `Skill information: ${foundSkill.name}
                    
Level: ${level.charAt(0).toUpperCase() + level.slice(1)}
Description: ${foundSkill.description}

Available commands:
• skill --info [name]   - Detailed information of a skill
• ls skills             - View skills directory
• exit                  - Close terminal`;
                
                showTerminal(command, response);
            } else {
                const response = currentLang === 'es' ?
                    `Error: Habilidad '${skillName}' no encontrada.
                    
Comandos disponibles:
• ls skills             - Ver directorio de habilidades
• skill --info [nombre] - Información detallada de una skill
• exit                  - Cerrar terminal` :
                    `Error: Skill '${skillName}' not found.
                    
Available commands:
• ls skills             - View skills directory
• skill --info [name]   - Detailed information of a skill
• exit                  - Close terminal`;
                
                showTerminal(command, response);
            }
        }
        else if (cmd === 'exit' || cmd === 'quit') {
            closeTerminalWindow();
        }
        else {
            const response = currentLang === 'es' ?
                `Comando no reconocido: '${command}'
                
Comandos disponibles:
• ls skills             - Ver directorio de habilidades
• ls skills/basico      - Ver habilidades básicas
• ls skills/intermedio  - Ver habilidades intermedias
• ls skills/avanzado    - Ver habilidades avanzadas
• skill --info [nombre] - Información detallada de una skill
• exit                  - Cerrar terminal` :
                `Command not recognized: '${command}'
                
Available commands:
• ls skills             - View skills directory
• ls skills/basico      - View basic skills
• ls skills/intermedio  - View intermediate skills
• ls skills/avanzado    - View advanced skills
• skill --info [name]   - Detailed information of a skill
• exit                  - Close terminal`;
            
            showTerminal(command, response);
        }
    }

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    

    // Add typing effect to hero text
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        typewriterElement.style.maxWidth = '0';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    typewriterElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    typewriterElement.style.borderRight = 'none';
                }
            }, 100);
        }, 1000);
    }

    // Add particle effect to hero section
    function createParticle() {
        const hero = document.getElementById('inicio');
        if (!hero) return;
        
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animation = 'floatUp 3s linear forwards';
        
        hero.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 200);

    // Add CSS animation for particles
    const styleParticles = document.createElement('style');
    styleParticles.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) scale(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleParticles);

    // Enhanced contact form interaction
    const contactLinks = document.querySelectorAll('.contact-links a');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading animation for project links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading effect
            const originalText = this.textContent;
            const currentLang = html.getAttribute('lang');
            const loadingText = currentLang === 'es' ? 'Cargando...' : 'Loading...';
            
            this.textContent = loadingText;
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
                // Here you would normally navigate to the project
                const message = currentLang === 'es' ? 'Proyecto en desarrollo - Próximamente disponible' : 'Project in development - Coming soon';
                alert(message);
            }, 1500);
        });
    });

    // Add skill level tooltips
    skillItems.forEach(item => {
        const level = item.getAttribute('data-level');
        if (level) {
            const currentLang = html.getAttribute('lang');
            const tooltipText = currentLang === 'es' ? `Nivel: ${level}` : `Level: ${level}`;
            item.title = tooltipText;
        }
    });

    // Add project status tooltips
    const projectStatuses = document.querySelectorAll('.project-status');
    projectStatuses.forEach(status => {
        const statusText = status.textContent;
        const currentLang = html.getAttribute('lang');
        const tooltipText = currentLang === 'es' ? `Estado: ${statusText}` : `Status: ${statusText}`;
        status.title = tooltipText;
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        // Scroll-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or return to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Add touch support for mobile devices
    // Se ha deshabilitado el manejador de swipe para corregir el problema de scroll en móviles.
    /*
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could trigger scroll to top
                if (window.pageYOffset > 500) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }
    */

    // Initialize animations
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 500);

    // Comando inicial para mostrar el directorio
    function showInitialCommand() {
        executeCommand('ls skills');
    }

    // Mostrar comando inicial cuando se llegue a la sección "Sobre Mí"
    const sobreMiSection = document.getElementById('sobre-mi');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Mostrar el terminal después de un pequeño delay
                setTimeout(() => {
                    showInitialCommand();
                }, 1000);
                observer.unobserve(entry.target); // Solo ejecutar una vez
            }
        });
    }, { threshold: 0.5 });

    if (sobreMiSection) {
        observer.observe(sobreMiSection);
    }

    // Close terminal events
    closeTerminal.addEventListener('click', closeTerminalWindow);
    terminalOverlay.addEventListener('click', closeTerminalWindow);

    // Keyboard support for terminal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && terminalOutput.classList.contains('active')) {
            closeTerminalWindow();
        }
    });

    // Función para exportar CV
    function exportCV() {
        // Crear un enlace temporal para descargar
        const link = document.createElement('a');
        link.href = 'docs/cv_ismael_salazar.pdf';
        link.download = 'cv_ismael_salazar.pdf';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Tracking (opcional)
        trackEvent && trackEvent('cv_download', {
            'event_category': 'engagement',
            'event_label': 'CV Download'
        });
    }

    // Función para animar elementos cuando entran en viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section-animate, .section-animate-left, .section-animate-right, .section-animate-scale, .timeline-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                if (element.classList.contains('section-animate')) {
                    element.classList.add('animate-fade-in-up');
                } else if (element.classList.contains('section-animate-left')) {
                    element.classList.add('animate-fade-in-left');
                } else if (element.classList.contains('section-animate-right')) {
                    element.classList.add('animate-fade-in-right');
                } else if (element.classList.contains('section-animate-scale')) {
                    element.classList.add('animate-scale-in');
                } else if (element.classList.contains('timeline-item')) {
                    element.classList.add('animate');
                }
            }
        });
    }

    // Event listeners
    document.getElementById('exportCV').addEventListener('click', function(e) {
        e.preventDefault();
        exportCV();
    });

    // Animaciones al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Ejecutar una vez al cargar para elementos ya visibles
    animateOnScroll();

    // Google Analytics (reemplaza GA_MEASUREMENT_ID con tu ID real)
    function initGoogleAnalytics() {
        // Google Analytics 4
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID'); // Reemplaza con tu ID real
        
        // Cargar script de GA
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script);
    }

    // Tracking de eventos personalizados
    function trackEvent(eventName, eventData = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
    }

    // Tracking de interacciones importantes
    document.addEventListener('DOMContentLoaded', function() {
        // Track CV download
        document.getElementById('exportCV').addEventListener('click', function() {
            trackEvent('cv_download', {
                'event_category': 'engagement',
                'event_label': 'CV Download'
            });
        });

        // Track skill interactions
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('click', function() {
                const skillName = this.getAttribute('data-skill');
                trackEvent('skill_click', {
                    'event_category': 'engagement',
                    'event_label': skillName
                });
            });
        });

        // Track project views
        document.querySelectorAll('.project-card').forEach(card => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const projectName = entry.target.querySelector('h3').textContent;
                        trackEvent('project_view', {
                            'event_category': 'engagement',
                            'event_label': projectName
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(card);
        });
    });

    // Inicializar Analytics (descomenta cuando tengas tu ID real)
    // initGoogleAnalytics();

    // Particles personalizados
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.background = 'rgba(255, 255, 255, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.animation = 'floatUp 3s linear forwards';
            
            particlesContainer.appendChild(particle);
        }
    }

    // Add CSS animation for particles
    const styleParticles2 = document.createElement('style');
    styleParticles2.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) scale(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleParticles2);

    // Modo Presentación
    let presentationMode = false;
    let currentSlide = 0;
    let timerInterval = null;
    let timerSeconds = 0;

    const slides = [
        { id: 'inicio', title: 'Inicio' },
        { id: 'sobre-mi', title: 'Sobre Mí' },
        { id: 'timeline', title: 'Experiencia' },
        { id: 'proyectos', title: 'Proyectos' },
        { id: 'contacto', title: 'Contacto' }
    ];

    // Overlay de atajos
    const overlay = document.getElementById('presentationOverlay');
    const closeOverlayBtn = document.getElementById('closeOverlayBtn');

    if (closeOverlayBtn) {
        closeOverlayBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }

    function toggleOverlay() {
        if (!presentationMode) return;
        overlay.classList.toggle('active');
    }

    function initPresentationMode() {
        const presentationBtn = document.getElementById('presentationMode');
        const controls = document.getElementById('presentationControls');
        const timer = document.getElementById('presentationTimer');
        const timerDisplay = document.getElementById('timerDisplay');

        presentationBtn.addEventListener('click', togglePresentationMode);

        // Controles de presentación
        document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
        document.getElementById('nextSlideBtn').addEventListener('click', nextSlide);
        document.getElementById('prevSlideBtn').addEventListener('click', prevSlide);
        document.getElementById('startTimerBtn').addEventListener('click', toggleTimer);
        document.getElementById('exitPresentationBtn').addEventListener('click', exitPresentationMode);

        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (!presentationMode) return;
            
            switch(e.key) {
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'Escape':
                    exitPresentationMode();
                    break;
                case 'F11':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case 'h':
                case 'H':
                case '?':
                    e.preventDefault();
                    toggleOverlay();
                    break;
                case 't':
                case 'T':
                    e.preventDefault();
                    toggleTimer();
                    break;
            }
        });
    }

    function togglePresentationMode() {
        presentationMode = !presentationMode;
        const btn = document.getElementById('presentationMode');
        const controls = document.getElementById('presentationControls');
        const body = document.body;

        if (presentationMode) {
            btn.classList.add('active');
            controls.classList.add('active');
            body.classList.add('presentation-mode');
            goToSlide(0);
            overlay.classList.add('active');
        } else {
            exitPresentationMode();
        }
    }

    function exitPresentationMode() {
        presentationMode = false;
        document.getElementById('presentationMode').classList.remove('active');
        document.getElementById('presentationControls').classList.remove('active');
        document.getElementById('presentationTimer').classList.remove('active');
        document.body.classList.remove('presentation-mode');
        stopTimer();
    }

    function goToSlide(index) {
        if (index < 0 || index >= slides.length) return;
        currentSlide = index;
        const slide = slides[index];
        document.getElementById(slide.id).scrollIntoView({ behavior: 'smooth' });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    function toggleTimer() {
        if (timerInterval) {
            stopTimer();
        } else {
            startTimer();
        }
    }

    function startTimer() {
        timerSeconds = 0;
        document.getElementById('presentationTimer').classList.add('active');
        timerInterval = setInterval(() => {
            timerSeconds++;
            const minutes = Math.floor(timerSeconds / 60);
            const seconds = timerSeconds % 60;
            document.getElementById('timerDisplay').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        document.getElementById('presentationTimer').classList.remove('active');
    }

    // Lazy Loading
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Performance Monitoring
    function initPerformanceMonitoring() {
        // Medir tiempo de carga
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            trackEvent('page_load_time', {
                'event_category': 'performance',
                'value': Math.round(loadTime)
            });
        });

        // Medir Core Web Vitals
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                        trackEvent('lcp', {
                            'event_category': 'performance',
                            'value': Math.round(entry.startTime)
                        });
                    }
                }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }

    // Error Boundaries
    function initErrorHandling() {
        window.addEventListener('error', (e) => {
            trackEvent('javascript_error', {
                'event_category': 'error',
                'event_label': e.message,
                'value': 1
            });
        });

        window.addEventListener('unhandledrejection', (e) => {
            trackEvent('promise_rejection', {
                'event_category': 'error',
                'event_label': e.reason,
                'value': 1
            });
        });
    }

    // Inicializar todas las funcionalidades
    document.addEventListener('DOMContentLoaded', function() {
        // Inicializar cursor después de un pequeño delay para asegurar que todo esté listo
        setTimeout(() => {
            createParticles();
        }, 500);
        
        // initPresentationMode(); // Comentado para evitar errores
        initLazyLoading();
        initPerformanceMonitoring();
        initErrorHandling();
    });

    // También inicializar cuando la ventana esté completamente cargada
    window.addEventListener('load', function() {
        createParticles();
    });

    // Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);
    updateScrollProgress();

    

    // i18next setup
    // i18next setup

    // function translatePage() {
    //     document.querySelectorAll('[data-i18n]').forEach(el => {
    //         const key = el.getAttribute('data-i18n');
    //         el.textContent = i18next.t(key);
    //     });
    // }
});