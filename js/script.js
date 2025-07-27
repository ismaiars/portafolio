// Portfolio App - Optimized JavaScript
class PortfolioApp {
    constructor() {
        this.initCritical();
        this.initNonCritical();
    }

    // Inicializar funcionalidades críticas inmediatamente
    initCritical() {
        this.setupLoader();
        this.setupLanguageToggle();
        this.setupActiveNavigation();
    }

    // Inicializar funcionalidades no críticas con delay
    initNonCritical() {
        // Usar requestIdleCallback para funcionalidades no críticas
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => this.initSecondaryFeatures());
        } else {
            setTimeout(() => this.initSecondaryFeatures(), 100);
        }
    }

    initSecondaryFeatures() {
        this.setupTypewriterEffect();
        this.setupScrollToTopButton();
        this.setupSmoothScrolling();
        this.setupScrollProgress();
        this.setupSectionAnimations();
        this.setupCurrentYear();
        this.setupSkillHoverEffects();
        this.setupProjectHoverEffects();
        this.setupTerminalFunctionality();
        this.setupContactRippleEffects();

        this.setupKeyboardNavigation();
        this.setupPerformanceMonitoring();
        this.setupErrorHandling();
        this.setupLazyLoading();
    }

    setupLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Activar animaciones después de que se oculte el loader
                    this.enableAnimations();
                }, 500);
            }, 2000);
        }
    }

    // Nuevo método para activar animaciones de forma lazy
    enableAnimations() {
        // Esperar un poco más para asegurar que el contenido principal esté cargado
        setTimeout(() => {
            document.body.classList.add('animations-loaded');
        }, 1000);
    }

    setupLanguageToggle() {
        const languageToggle = document.getElementById('languageToggle');
        const html = document.documentElement;
        
        if (!languageToggle) return;
        
        // Check for saved language preference or default to Spanish
        const currentLanguage = localStorage.getItem('language') || 'es';
        html.setAttribute('lang', currentLanguage);
        this.updateLanguage(currentLanguage);
        
        languageToggle.addEventListener('click', () => {
            const currentLang = html.getAttribute('lang');
            const newLang = currentLang === 'es' ? 'en' : 'es';
            
            html.setAttribute('lang', newLang);
            localStorage.setItem('language', newLang);
            this.updateLanguage(newLang);
            
            // Add animation effect
            languageToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                languageToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }

    updateLanguage(lang) {
        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-es], [data-en]');
        elements.forEach(element => {
            // Skip typewriter element and protected elements
            if (element.classList.contains('typewriter') || element.hasAttribute('data-protected')) return;
            
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });
        
        // Update title
        const title = document.querySelector('title');
        if (title) {
            const titleText = title.getAttribute(`data-${lang}`);
            if (titleText) title.textContent = titleText;
        }
        
        // Update language toggle text
        const languageToggle = document.getElementById('languageToggle');
        const languageSpan = languageToggle?.querySelector('span');
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
    }

    setupScrollToTopButton() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        if (!scrollToTopBtn) return;

        // Show/hide button based on scroll position
        window.addEventListener('scroll', this.throttle(() => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, 100), { passive: true });

        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Update active navigation
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                    });
                    anchor.classList.add('active');
                }
            });
        });
    }

    setupScrollProgress() {
        let ticking = false;
        
        const updateProgress = () => {
            const scrollProgress = document.getElementById('scrollProgress');
            if (scrollProgress) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
                scrollProgress.style.width = progress + '%';
            }
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        }, { passive: true });
    }

    setupSectionAnimations() {
        // Sistema de animaciones mejorado usando Intersection Observer
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        // Observer principal para secciones
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Animar elementos hijos con delay escalonado
                    this.animateChildElements(entry.target);
                    
                    // Dejar de observar una vez animado
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observer para elementos individuales
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    elementObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Aplicar clases de animación a secciones
        const sections = document.querySelectorAll('section:not(#inicio)');
        sections.forEach(section => {
            section.classList.add('section-animate');
            sectionObserver.observe(section);
        });

        // Animar elementos específicos
        this.setupElementAnimations(elementObserver);
        
        // Animación especial para el hero
        this.setupHeroAnimation();
    }

    animateChildElements(section) {
        // Animar títulos
        const titles = section.querySelectorAll('h2, h3, h4');
        titles.forEach((title, index) => {
            title.classList.add('animate-title', `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => title.classList.add('animate'), 100 * (index + 1));
        });

        // Animar párrafos
        const paragraphs = section.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            p.classList.add('animate-fade-in', `animate-delay-${Math.min(index + 2, 5)}`);
            setTimeout(() => p.classList.add('animate'), 200 * (index + 1));
        });

        // Animar tarjetas de proyecto
        const projectCards = section.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('animate-card', `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => card.classList.add('animate'), 150 * (index + 1));
        });

        // Animar elementos de timeline
        const timelineItems = section.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const animationClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';
            item.classList.add(animationClass, `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => item.classList.add('animate'), 200 * (index + 1));
        });

        // Animar habilidades
        const skillItems = section.querySelectorAll('.skill-item');
        skillItems.forEach((skill, index) => {
            skill.classList.add('animate-scale', `animate-delay-${Math.min((index % 10) + 1, 5)}`);
            setTimeout(() => skill.classList.add('animate'), 50 * (index + 1));
        });

        // Animar elementos de lista
        const listItems = section.querySelectorAll('li');
        listItems.forEach((item, index) => {
            item.classList.add('animate-list-item', `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => item.classList.add('animate'), 100 * (index + 1));
        });

        // Animar botones
        const buttons = section.querySelectorAll('.btn, button');
        buttons.forEach((btn, index) => {
            btn.classList.add('animate-slide-up', `animate-delay-${Math.min(index + 3, 5)}`);
            setTimeout(() => btn.classList.add('animate'), 300 * (index + 1));
        });
    }

    setupElementAnimations(observer) {
        // Elementos que necesitan animación individual
        const animatedElements = document.querySelectorAll(`
            .hero-buttons,
            .about-me-content-box,
            .methodology-terminal,
            .skills-grid,
            .certifications-container,
            .contact-form,
            .social-links
        `);

        animatedElements.forEach(element => {
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        });
    }

    setupHeroAnimation() {
        const heroContent = document.querySelector('.hero-content');
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroContent) {
            heroContent.classList.add('hero-animate');
            
            // Animar hero después de que se cargue la página
            setTimeout(() => {
                heroContent.classList.add('animate');
                
                // Animar elementos del hero por separado
                const heroTitle = heroContent.querySelector('h1');
                const heroDescription = heroContent.querySelector('p');
                const heroButtons = heroContent.querySelector('.hero-buttons');
                const lottiePlayer = heroContent.querySelector('lottie-player');

                if (heroTitle) {
                    heroTitle.classList.add('animate-title');
                    setTimeout(() => heroTitle.classList.add('animate'), 300);
                }

                if (heroDescription) {
                    heroDescription.classList.add('animate-fade-in');
                    setTimeout(() => heroDescription.classList.add('animate'), 600);
                }

                if (heroButtons) {
                    heroButtons.classList.add('animate-slide-up');
                    setTimeout(() => heroButtons.classList.add('animate'), 900);
                }

                if (lottiePlayer) {
                    lottiePlayer.classList.add('animate-scale');
                    setTimeout(() => lottiePlayer.classList.add('animate'), 1200);
                }
            }, 500);
        }

        // Animar fondo del hero
        if (heroBackground) {
            heroBackground.classList.add('animate-fade-in');
            setTimeout(() => heroBackground.classList.add('animate'), 100);
        }
    }

    setupCurrentYear() {
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
    }

    setupActiveNavigation() {
        // Initialize active class for home section
        const initialActiveLink = document.querySelector('.nav-links a[href="#inicio"]');
        if (initialActiveLink) {
            initialActiveLink.classList.add('active');
        }

        // Update active navigation on scroll
        window.addEventListener('scroll', this.throttle(() => {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        }, 100), { passive: true });
    }

    setupSkillHoverEffects() {
        // Hover effects removed as requested
    }

    setupProjectHoverEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 255, 65, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 8px 25px rgba(0, 255, 65, 0.2)';
            });
        });
    }

    setupTerminalFunctionality() {
        const skillItems = document.querySelectorAll('.skill-item');
        const terminalModal = document.getElementById('terminalModal');
        const terminalOutput = document.getElementById('terminalOutput');
        const terminalInput = document.getElementById('terminalInput');
        
        if (!terminalModal || !terminalOutput || !terminalInput) return;
        
        // Skills data structure
        const skillsData = {
            'avanzado': ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Git', 'Linux'],
            'intermedio': ['Apache', 'Figma', 'Spring', 'Next.js', 'Bootstrap', 'React', 'Angular', 'Django', 'Ionic', 'Nuxt', 'SQLite', 'Express.js', 'Swagger'],
            'basico': ['Python', 'Node.js', 'MongoDB', 'Docker', 'AWS', 'Vue.js', 'TypeScript', 'PostgreSQL', 'Redis', 'GraphQL']
        };
        
        // Terminal commands
        const commands = {
            'help': () => {
                return `Comandos disponibles:
- ls skills: Listar todas las habilidades
- ls skills/[nivel]: Listar habilidades por nivel (avanzado, intermedio, basico)
- skill --info [nombre]: Información detallada de una habilidad
- clear: Limpiar terminal
- help: Mostrar esta ayuda`;
            },
            'ls skills': () => {
                let output = 'Habilidades por nivel:\n\n';
                Object.keys(skillsData).forEach(level => {
                    output += `${level.toUpperCase()}:\n`;
                    skillsData[level].forEach(skill => {
                        output += `  - ${skill}\n`;
                    });
                    output += '\n';
                });
                return output;
            },
            'clear': () => {
                terminalOutput.innerHTML = '';
                return '';
            }
        };
        
        // Add dynamic commands for skill levels
        Object.keys(skillsData).forEach(level => {
            commands[`ls skills/${level}`] = () => {
                let output = `Habilidades ${level}:\n`;
                skillsData[level].forEach(skill => {
                    output += `  - ${skill}\n`;
                });
                return output;
            };
        });
        
        const showTerminal = () => {
            terminalModal.style.display = 'flex';
            terminalInput.focus();
        };
        
        const closeTerminal = () => {
            terminalModal.style.display = 'none';
            terminalOutput.innerHTML = '';
        };
        
        const executeCommand = (command) => {
            // Add command to output
            const commandLine = document.createElement('div');
            commandLine.className = 'terminal-line';
            commandLine.innerHTML = `<span class="terminal-prompt">ismael@portfolio:~$</span> ${command}`;
            terminalOutput.appendChild(commandLine);
            
            // Execute command
            const output = commands[command] || `Comando no encontrado: ${command}. Escribe 'help' para ver comandos disponibles.`;
            
            if (output) {
                const outputDiv = document.createElement('div');
                outputDiv.className = 'terminal-output';
                outputDiv.textContent = output;
                terminalOutput.appendChild(outputDiv);
            }
            
            // Scroll to bottom
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        };
        
        // Event listeners for skills
        skillItems.forEach(item => {
            item.addEventListener('click', showTerminal);
        });
        
        // Terminal input handling
        terminalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const command = this.value.trim();
                if (command) {
                    executeCommand(command);
                    this.value = '';
                }
            }
        });
        
        // Close terminal events
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeTerminal();
            }
        });
        
        // Close on overlay click
        terminalModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeTerminal();
            }
        });
        
        // Make functions globally available
        window.showTerminal = showTerminal;
        window.closeTerminal = closeTerminal;
    }

    setupTypewriterEffect() {
        const typewriterElement = document.querySelector('.typewriter');
        if (!typewriterElement) return;
        
        // Set the name immediately and make it permanent
        const originalText = 'Ismael Salazar';
        typewriterElement.textContent = originalText;
        
        // Mark this element as protected from language updates
        typewriterElement.setAttribute('data-protected', 'true');
        
        // The CSS already handles the typewriter animation, just ensure it's visible
        typewriterElement.style.display = 'inline-block';
    }

    setupContactRippleEffects() {
        const contactLinks = document.querySelectorAll('.contact-item a');
        
        contactLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(0, 255, 65, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add ripple animation CSS
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Escape key to scroll to top
            if (e.key === 'Escape' && !document.querySelector('#terminalModal[style*="flex"]')) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    setupPerformanceMonitoring() {
        // Monitor page load time
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        });
    }

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript Error:', e.error);
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled Promise Rejection:', e.reason);
        });
    }

    setupLazyLoading() {
        // Enhanced lazy loading for images and picture elements WITHOUT blur effects
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    
                    // Handle picture elements
                    if (target.tagName === 'PICTURE') {
                        const img = target.querySelector('img');
                        const sources = target.querySelectorAll('source');
                        
                        if (img) {
                            // Load sources first
                            sources.forEach(source => {
                                if (source.dataset.srcset) {
                                    source.srcset = source.dataset.srcset;
                                    source.removeAttribute('data-srcset');
                                }
                            });
                            
                            // Then load the img
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.onload = () => {
                                    img.classList.add('loaded');
                                };
                                img.removeAttribute('data-src');
                            }
                        }
                    } 
                    // Handle regular img elements
                    else if (target.tagName === 'IMG') {
                        if (target.dataset.src) {
                            target.src = target.dataset.src;
                            target.onload = () => {
                                target.classList.add('loaded');
                            };
                            target.removeAttribute('data-src');
                        }
                        
                        if (target.dataset.srcset) {
                            target.srcset = target.dataset.srcset;
                            target.removeAttribute('data-srcset');
                        }
                    }
                    
                    observer.unobserve(target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px 0px'
        });

        // Observe all images and picture elements with data-src
        const lazyElements = document.querySelectorAll('img[data-src], picture');
        lazyElements.forEach(element => imageObserver.observe(element));

        // Handle already loaded images - NO BLUR EFFECTS
        const allImages = document.querySelectorAll('.project-image, .hero img');
        allImages.forEach(img => {
            if (img.complete && img.naturalHeight !== 0) {
                // Image is already loaded, mark as loaded immediately
                img.classList.add('loaded');
            } else {
                // No blur effects - just handle loading
                img.onload = () => {
                    img.classList.add('loaded');
                };
            }
        });

        // Preload critical images after initial load
        setTimeout(() => {
            const criticalImages = document.querySelectorAll('.project-image');
            criticalImages.forEach(img => {
                if (!img.classList.contains('loaded')) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = img.src;
                    document.head.appendChild(link);
                }
            });
        }, 2000);
    }

    // Utility functions
    // Optimized throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Debounce function for resize events
    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});