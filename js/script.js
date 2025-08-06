
// Main App Initializer
document.addEventListener('DOMContentLoaded', () => {
    // Initialize controllers
    window.UIController = new UIController();
    window.AnimationController = new AnimationController();

    // Initialize non-critical features with a delay
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Add any non-critical initializations here
        });
    } else {
        setTimeout(() => {
            // Fallback for browsers that don't support requestIdleCallback
        }, 100);
    }

    // Performance and error monitoring
    setupPerformanceMonitoring();
    setupErrorHandling();
    setupLazyLoading();
});

function setupPerformanceMonitoring() {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    });
}

function setupErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled Promise Rejection:', e.reason);
    });
}

function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                if (target.tagName === 'PICTURE') {
                    const img = target.querySelector('img');
                    const sources = target.querySelectorAll('source');

                    if (img) {
                        sources.forEach(source => {
                            if (source.dataset.srcset) {
                                source.srcset = source.dataset.srcset;
                                source.removeAttribute('data-srcset');
                            }
                        });

                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.onload = () => {
                                img.classList.add('loaded');
                            };
                            img.removeAttribute('data-src');
                        }
                    }
                } else if (target.tagName === 'IMG') {
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

    const lazyElements = document.querySelectorAll('img[data-src], picture');
    lazyElements.forEach(element => imageObserver.observe(element));

    const allImages = document.querySelectorAll('.project-image, .hero img');
    allImages.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            img.onload = () => {
                img.classList.add('loaded');
            };
        }
    });

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

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Export CV functionality
document.getElementById('exportCV').addEventListener('click', function(e) {
    e.preventDefault();

    const lang = document.documentElement.lang || 'es';

    const cvFile = lang === 'en' ? 'cv_ismael_salazar_en.pdf' : 'cv_ismael_salazar.pdf';

    const link = document.createElement('a');
    link.href = `docs/${cvFile}`;
    link.download = cvFile;
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});
