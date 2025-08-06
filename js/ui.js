
class UIController {
    constructor() {
        this.setupLoader();
        this.setupLanguageToggle();
        this.setupActiveNavigation();
        this.setupScrollToTopButton();
        this.setupSmoothScrolling();
        this.setupScrollProgress();
        this.setupCurrentYear();
        this.setupTerminalFunctionality();
        this.setupContactRippleEffects();
        this.setupKeyboardNavigation();
        this.setupNavbarToggle();
    }

    setupLoader() {
        const loader = document.getElementById('loader');
        const loaderTerminal = document.getElementById('loader-terminal');
        if (!loader || !loaderTerminal) return;

        const bootLines = [
            { text: 'Initializing system... ', time: 200 },
            { text: '[OK]', time: 100, color: 'var(--accent-green)' },
            { text: '\nLoading kernel modules... ', time: 150 },
            { text: '[OK]', time: 100, color: 'var(--accent-green)' },
            { text: '\nMounting file systems... ', time: 250 },
            { text: '[OK]', time: 100, color: 'var(--accent-green)' },
            { text: '\nAuthenticating user: visitor...', time: 300 },
            { text: '\nAccess Granted.', time: 200, color: 'var(--accent-purple)' },
            { text: '\nLoading portfolio interface...', time: 400 },
        ];

        let currentLine = '';
        let lineElement = null;

        const typeLine = (lineIndex) => {
            if (lineIndex >= bootLines.length) {
                setTimeout(() => {
                    loader.classList.add('hidden');
                    setTimeout(() => {
                        loader.style.display = 'none';
                        if (window.AnimationController) {
                            window.AnimationController.enableAnimations();
                        }
                    }, 500);
                }, 500);
                return;
            }

            const line = bootLines[lineIndex];
            const span = document.createElement('span');
            span.textContent = line.text;
            if (line.color) {
                span.style.color = line.color;
            }

            loaderTerminal.appendChild(span);
            
            setTimeout(() => typeLine(lineIndex + 1), line.time);
        };

        typeLine(0);
    }

    setupLanguageToggle() {
        const languageToggle = document.getElementById('languageToggle');
        const html = document.documentElement;

        if (!languageToggle) return;

        const currentLanguage = localStorage.getItem('language') || 'es';
        html.setAttribute('lang', currentLanguage);
        this.updateLanguage(currentLanguage);

        languageToggle.addEventListener('click', () => {
            const currentLang = html.getAttribute('lang');
            const newLang = currentLang === 'es' ? 'en' : 'es';

            html.setAttribute('lang', newLang);
            localStorage.setItem('language', newLang);
            this.updateLanguage(newLang);

            languageToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                languageToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }

    updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-es], [data-en]');
        elements.forEach(element => {
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

        const title = document.querySelector('title');
        if (title) {
            const titleText = title.getAttribute(`data-${lang}`);
            if (titleText) title.textContent = titleText;
        }

        const languageToggle = document.getElementById('languageToggle');
        const languageSpan = languageToggle?.querySelector('span');
        if (languageSpan) {
            languageSpan.textContent = lang.toUpperCase();
        }

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

        window.addEventListener('scroll', this.throttle(() => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, 100), { passive: true });

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

    setupCurrentYear() {
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
    }

    setupActiveNavigation() {
        const initialActiveLink = document.querySelector('.nav-links a[href="#inicio"]');
        if (initialActiveLink) {
            initialActiveLink.classList.add('active');
        }

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

    setupTerminalFunctionality() {
        const skillItems = document.querySelectorAll('.skill-item');
        const terminalModal = document.getElementById('terminalModal');
        const terminalOutput = document.getElementById('terminalOutput');
        const terminalInput = document.getElementById('terminalInput');

        if (!terminalModal || !terminalOutput || !terminalInput) return;

        const skillsData = {
            'avanzado': ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Git', 'Linux'],
            'intermedio': ['Apache', 'Figma', 'Spring', 'Next.js', 'Bootstrap', 'React', 'Angular', 'Django', 'Ionic', 'Nuxt', 'SQLite', 'Express.js', 'Swagger'],
            'basico': ['Python', 'Node.js', 'MongoDB', 'Docker', 'AWS', 'Vue.js', 'TypeScript', 'PostgreSQL', 'Redis', 'GraphQL']
        };

        const commands = {
            'help': () => {
                return `Comandos disponibles:\n- ls skills: Listar todas las habilidades\n- ls skills/[nivel]: Listar habilidades por nivel (avanzado, intermedio, basico)\n- skill --info [nombre]: Información detallada de una habilidad\n- clear: Limpiar terminal\n- help: Mostrar esta ayuda`;
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
            const commandLine = document.createElement('div');
            commandLine.className = 'terminal-line';
            commandLine.innerHTML = `<span class="terminal-prompt">ismael@portfolio:~$</span> ${command}`;
            terminalOutput.appendChild(commandLine);

            const output = commands[command] || `Comando no encontrado: ${command}. Escribe 'help' para ver comandos disponibles.`;

            if (output) {
                const outputDiv = document.createElement('div');
                outputDiv.className = 'terminal-output';
                outputDiv.textContent = output;
                terminalOutput.appendChild(outputDiv);
            }

            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        };

        skillItems.forEach(item => {
            item.addEventListener('click', showTerminal);
        });

        terminalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const command = this.value.trim();
                if (command) {
                    executeCommand(command);
                    this.value = '';
                }
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeTerminal();
            }
        });

        terminalModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeTerminal();
            }
        });

        window.showTerminal = showTerminal;
        window.closeTerminal = closeTerminal;
    }

    setupContactRippleEffects() {
        const contactLinks = document.querySelectorAll('.contact-item a');

        contactLinks.forEach(link => {
            link.addEventListener('click', function(e) {
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
            if (e.key === 'Escape' && !document.querySelector('#terminalModal[style*="flex"]')) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    setupNavbarToggle() {
        const navbarToggle = document.getElementById('navbarToggle');
        const navMenu = document.getElementById('nav-menu');

        if (navbarToggle && navMenu) {
            navbarToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const isExpanded = navMenu.classList.contains('active');
                navbarToggle.setAttribute('aria-expanded', isExpanded);
            });

            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navbarToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }
    }

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
