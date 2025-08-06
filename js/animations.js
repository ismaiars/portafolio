
class AnimationController {
    constructor() {
        this.initAnimations();
    }

    initAnimations() {
        this.setupTypewriterEffect();
        this.setupSectionAnimations();
        this.setupSkillHoverEffects();
        this.setupProjectHoverEffects();
        this.setupDecodeEffect();
    }

    enableAnimations() {
        setTimeout(() => {
            document.body.classList.add('animations-loaded');
        }, 1000);
    }

    setupTypewriterEffect() {
        const typewriterElement = document.querySelector('.typewriter');
        if (!typewriterElement) return;

        const originalText = 'Ismael Salazar';
        typewriterElement.textContent = originalText;

        typewriterElement.setAttribute('data-protected', 'true');

        typewriterElement.style.display = 'inline-block';
    }

    setupSectionAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    this.animateChildElements(entry.target);
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    elementObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const sections = document.querySelectorAll('section:not(#inicio)');
        sections.forEach(section => {
            section.classList.add('section-animate');
            sectionObserver.observe(section);
        });

        this.setupElementAnimations(elementObserver);
        this.setupHeroAnimation();
    }

    animateChildElements(section) {
        const titles = section.querySelectorAll('h2, h3, h4');
        titles.forEach((title, index) => {
            title.classList.add('animate-title', `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => title.classList.add('animate'), 100 * (index + 1));
        });

        const paragraphs = section.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            p.classList.add('animate-fade-in', `animate-delay-${Math.min(index + 2, 5)}`);
            setTimeout(() => p.classList.add('animate'), 200 * (index + 1));
        });

        const projectCards = section.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('animate-card', `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => card.classList.add('animate'), 150 * (index + 1));
        });

        const timelineItems = section.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const animationClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';
            item.classList.add(animationClass, `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => item.classList.add('animate'), 200 * (index + 1));
        });

        const skillItems = section.querySelectorAll('.skill-item');
        skillItems.forEach((skill, index) => {
            skill.classList.add('animate-scale', `animate-delay-${Math.min((index % 10) + 1, 5)}`);
            setTimeout(() => skill.classList.add('animate'), 50 * (index + 1));
        });

        const listItems = section.querySelectorAll('li');
        listItems.forEach((item, index) => {
            item.classList.add('animate-list-item', `animate-delay-${Math.min(index + 1, 5)}`);
            setTimeout(() => item.classList.add('animate'), 100 * (index + 1));
        });

        const buttons = section.querySelectorAll('.btn, button');
        buttons.forEach((btn, index) => {
            btn.classList.add('animate-slide-up', `animate-delay-${Math.min(index + 3, 5)}`);
            setTimeout(() => btn.classList.add('animate'), 300 * (index + 1));
        });
    }

    setupElementAnimations(observer) {
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

        if (heroContent) {
            heroContent.classList.add('hero-animate');

            setTimeout(() => {
                heroContent.classList.add('animate');

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

    setupDecodeEffect() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        document.querySelectorAll('h2').forEach(h2 => {
            h2.dataset.value = h2.innerText;

            h2.addEventListener('mouseover', event => {
                let iterations = 0;
                const interval = setInterval(() => {
                    event.target.innerText = event.target.innerText.split("")
                        .map((letter, index) => {
                            if(index < iterations) {
                                return event.target.dataset.value[index];
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");

                    if(iterations >= event.target.dataset.value.length) {
                        clearInterval(interval);
                    }

                    iterations += 1 / 3;
                }, 30);
            });
        });
    }
}
