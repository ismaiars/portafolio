// Portfolio App - Optimized JavaScript
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoader();
        this.setupTypewriterEffect(); // Moved before language toggle
        this.setupLanguageToggle();
        this.setupScrollToTopButton();
        this.setupSmoothScrolling();
        this.setupScrollProgress();
        this.setupSectionAnimations();
        this.setupCurrentYear();
        this.setupActiveNavigation();
        this.setupSkillHoverEffects();
        this.setupProjectHoverEffects();
        this.setupTerminalFunctionality();
        this.setupParticleEffect();
        this.setupContactRippleEffects();
        this.setupSkillTooltips();
        this.setupProjectTooltips();
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
                }, 500);
            }, 2000);
        }
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
        }, 100));

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
        // Optimized animations using Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections
        const sections = document.querySelectorAll('section:not(#inicio)');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease-out';
            observer.observe(section);
        });

        // Observe timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease-out';
            observer.observe(item);
        });

        // Observe project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        });

        // Observe skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.4s ease-out';
            observer.observe(item);
        });

        // Make hero section immediately visible
        const heroSection = document.querySelector('#inicio');
        if (heroSection) {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
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
        }, 100));
    }

    setupSkillHoverEffects() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                this.style.boxShadow = '0 10px 25px rgba(0, 255, 65, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 4px 15px rgba(0, 255, 65, 0.2)';
            });
        });
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

    setupParticleEffect() {
        const heroSection = document.getElementById('inicio');
        if (!heroSection) return;
        
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--terminal-green);
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.7;
                left: ${Math.random() * 100}%;
                top: 100%;
                animation: floatUp 6s linear infinite;
            `;
            
            heroSection.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        };
        
        // Create particles periodically
        setInterval(createParticle, 300);
        
        // Add CSS animation for particles
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.7;
                    }
                    90% {
                        opacity: 0.7;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
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

    setupSkillTooltips() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const level = item.getAttribute('data-level') || 'intermedio';
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = `Nivel: ${level}`;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--terminal-surface);
                color: var(--terminal-green);
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                top: -35px;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
                border: 1px solid var(--terminal-green);
                z-index: 1000;
            `;
            
            item.style.position = 'relative';
            item.appendChild(tooltip);
            
            item.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
            });
            
            item.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
    }

    setupProjectTooltips() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const status = card.getAttribute('data-status') || 'Completado';
            const tooltip = document.createElement('div');
            tooltip.className = 'project-tooltip';
            tooltip.textContent = `Estado: ${status}`;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--terminal-surface);
                color: var(--terminal-green);
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                top: 10px;
                right: 10px;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
                border: 1px solid var(--terminal-green);
                z-index: 1000;
            `;
            
            card.style.position = 'relative';
            card.appendChild(tooltip);
            
            card.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
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
        // Enhanced lazy loading for images
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Add loading placeholder
                    img.style.filter = 'blur(5px)';
                    img.style.transition = 'filter 0.3s ease';
                    
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.onload = () => {
                            img.style.filter = 'none';
                            img.classList.add('loaded');
                        };
                        img.removeAttribute('data-src');
                    }
                    
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                        img.removeAttribute('data-srcset');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px 0px'
        });

        // Observe all images with data-src
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));

        // Observe project images specifically
        const projectImages = document.querySelectorAll('.project-card img, .hero img');
        projectImages.forEach(img => {
            if (!img.complete) {
                img.style.filter = 'blur(5px)';
                img.style.transition = 'filter 0.3s ease';
                img.onload = () => {
                    img.style.filter = 'none';
                };
            }
        });
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