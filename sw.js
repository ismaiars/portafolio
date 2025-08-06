// Service Worker Optimizado v2.5 - HTTP/2 Push Simulation
const CACHE_VERSION = 'v2.5';
const CACHE_NAMES = {
    critical: `portfolio-critical-${CACHE_VERSION}`,
    static: `portfolio-static-${CACHE_VERSION}`,
    dynamic: `portfolio-dynamic-${CACHE_VERSION}`,
    images: `portfolio-images-${CACHE_VERSION}`,
    fonts: `portfolio-fonts-${CACHE_VERSION}`,
    external: `portfolio-external-${CACHE_VERSION}`
};

// Recursos críticos que se cargan inmediatamente
const CRITICAL_RESOURCES = [
    '/',
    '/index.html',
    '/css/style.min.css',
    '/js/ui.js',
    '/js/animations.js',
    '/js/script.js',
    '/images/projects/preimagen.webp'
];

// Recursos para HTTP/2 Push simulation
const PUSH_RESOURCES = [
    '/css/style.min.css',
    '/js/script.min.js',
    'https://fonts.gstatic.com/s/jetbrainsmono/v23/tDbV2o-flEEny0FZhsfKu5WU4xD7OwGtT0rU.woff2'
];

// Pre-cache resources
const PRE_CACHE_RESOURCES = [
    ...CRITICAL_RESOURCES,
    '/manifest.json',
    '/images/projects/favicon/favicon-96x96.png',
    '/images/projects/favicon/favicon.svg'
];

// Patrones de URL optimizados
const URL_PATTERNS = {
    images: /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i,
    fonts: /\.(woff|woff2|ttf|eot)$/i,
    scripts: /\.(js|css)$/i,
    documents: /\.(html|htm)$/i,
    external: /^https?:\/\/(?!localhost)/
};

// Cache limits optimizados
const CACHE_LIMITS = {
    static: 30,
    dynamic: 20,
    images: 25,
    fonts: 10,
    external: 15
};

// Event Listeners
self.addEventListener('install', event => {
    console.log('[SW] Installing...');
    event.waitUntil(
        Promise.all([
            installCriticalResources(),
            simulateHTTP2Push()
        ]).then(() => {
            console.log('[SW] Installation complete');
            return self.skipWaiting();
        })
    );
});

// HTTP/2 Push Simulation
async function simulateHTTP2Push() {
    try {
        const cache = await caches.open(CACHE_NAMES.critical);
        const pushPromises = PUSH_RESOURCES.map(async resource => {
            try {
                const response = await fetch(resource, {
                    mode: 'cors',
                    credentials: 'omit'
                });
                if (response.ok) {
                    await cache.put(resource, response.clone());
                    console.log(`[SW] Pushed: ${resource}`);
                }
            } catch (error) {
                console.warn(`[SW] Failed to push: ${resource}`, error);
            }
        });
        
        await Promise.allSettled(pushPromises);
    } catch (error) {
        console.error('[SW] HTTP/2 Push simulation failed:', error);
    }
}

// Install critical resources
async function installCriticalResources() {
    try {
        const cache = await caches.open(CACHE_NAMES.critical);
        const responses = await Promise.allSettled(
            PRE_CACHE_RESOURCES.map(url => 
                fetch(url, { mode: 'cors', credentials: 'omit' })
                    .then(response => {
                        if (response.ok) {
                            return cache.put(url, response.clone());
                        }
                        throw new Error(`Failed to fetch ${url}: ${response.status}`);
                    })
            )
        );
        
        const successful = responses.filter(r => r.status === 'fulfilled').length;
        console.log(`[SW] Cached ${successful}/${PRE_CACHE_RESOURCES.length} critical resources`);
    } catch (error) {
        console.error('[SW] Failed to install critical resources:', error);
    }
}

self.addEventListener('activate', event => {
    console.log('[SW] Activating...');
    event.waitUntil(
        Promise.all([
            cleanupOldCaches(),
            self.clients.claim()
        ]).then(() => {
            console.log('[SW] Activation complete');
        })
    );
});

// Cleanup old caches
async function cleanupOldCaches() {
    try {
        const cacheNames = await caches.keys();
        const validCacheNames = Object.values(CACHE_NAMES);
        
        const deletePromises = cacheNames
            .filter(cacheName => !validCacheNames.includes(cacheName))
            .map(cacheName => {
                console.log(`[SW] Deleting old cache: ${cacheName}`);
                return caches.delete(cacheName);
            });
        
        await Promise.all(deletePromises);
        console.log('[SW] Cache cleanup complete');
    } catch (error) {
        console.error('[SW] Cache cleanup failed:', error);
    }
}

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    
    const url = new URL(event.request.url);
    
    // Skip chrome-extension and other non-http requests
    if (!url.protocol.startsWith('http')) return;
    
    event.respondWith(handleRequest(event.request));
});

// Main request handler with routing
async function handleRequest(request) {
    const url = new URL(request.url);
    
    // Route to appropriate strategy based on resource type
    if (URL_PATTERNS.images.test(url.pathname)) {
        return handleImageRequest(request);
    } else if (URL_PATTERNS.fonts.test(url.pathname)) {
        return handleFontRequest(request);
    } else if (URL_PATTERNS.scripts.test(url.pathname)) {
        return handleStaticRequest(request);
    } else if (URL_PATTERNS.documents.test(url.pathname) || url.pathname === '/') {
        return handleDocumentRequest(request);
    } else if (URL_PATTERNS.external.test(request.url)) {
        return handleExternalRequest(request);
    } else {
        return handleDynamicRequest(request);
    }
}

// Cache First Strategy for Images
async function handleImageRequest(request) {
    try {
        const cache = await caches.open(CACHE_NAMES.images);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request, {
            mode: 'cors',
            credentials: 'omit'
        });
        
        if (networkResponse.ok) {
            await cache.put(request, networkResponse.clone());
            await limitCacheSize(CACHE_NAMES.images, CACHE_LIMITS.images);
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('[SW] Image request failed:', error);
        return new Response('Image not available', { status: 404 });
    }
}

// Cache First Strategy for Fonts
async function handleFontRequest(request) {
    try {
        const cache = await caches.open(CACHE_NAMES.fonts);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request, {
            mode: 'cors',
            credentials: 'omit'
        });
        
        if (networkResponse.ok) {
            await cache.put(request, networkResponse.clone());
            await limitCacheSize(CACHE_NAMES.fonts, CACHE_LIMITS.fonts);
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('[SW] Font request failed:', error);
        return fetch(request);
    }
}

// Stale While Revalidate for Static Resources
async function handleStaticRequest(request) {
    try {
        const cache = await caches.open(CACHE_NAMES.static);
        const cachedResponse = await cache.match(request);
        
        // Return cached version immediately if available
        if (cachedResponse) {
            // Update in background
            fetch(request, { mode: 'cors', credentials: 'omit' })
                .then(response => {
                    if (response.ok) {
                        cache.put(request, response.clone());
                    }
                })
                .catch(() => {}); // Silent fail for background update
            
            return cachedResponse;
        }
        
        // If not cached, fetch and cache
        const networkResponse = await fetch(request, {
            mode: 'cors',
            credentials: 'omit'
        });
        
        if (networkResponse.ok) {
            await cache.put(request, networkResponse.clone());
            await limitCacheSize(CACHE_NAMES.static, CACHE_LIMITS.static);
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('[SW] Static request failed:', error);
        return fetch(request);
    }
}

// Network First for Documents
async function handleDocumentRequest(request) {
    try {
        const networkResponse = await fetch(request, {
            mode: 'cors',
            credentials: 'omit'
        });
        
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAMES.dynamic);
            await cache.put(request, networkResponse.clone());
            await limitCacheSize(CACHE_NAMES.dynamic, CACHE_LIMITS.dynamic);
        }
        
        return networkResponse;
    } catch (error) {
        // Fallback to cache if network fails
        const cache = await caches.open(CACHE_NAMES.dynamic);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Ultimate fallback
        return new Response('Offline - Document not available', {
            status: 503,
            headers: { 'Content-Type': 'text/html' }
        });
    }
}

// External Resources Strategy
async function handleExternalRequest(request) {
    try {
        const cache = await caches.open(CACHE_NAMES.external);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request, {
            mode: 'cors',
            credentials: 'omit'
        });
        
        if (networkResponse.ok) {
            await cache.put(request, networkResponse.clone());
            await limitCacheSize(CACHE_NAMES.external, CACHE_LIMITS.external);
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('[SW] External request failed:', error);
        return fetch(request);
    }
}

// Dynamic Content Strategy
async function handleDynamicRequest(request) {
    try {
        const networkResponse = await fetch(request, {
            mode: 'cors',
            credentials: 'omit'
        });
        
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAMES.dynamic);
            await cache.put(request, networkResponse.clone());
            await limitCacheSize(CACHE_NAMES.dynamic, CACHE_LIMITS.dynamic);
        }
        
        return networkResponse;
    } catch (error) {
        const cache = await caches.open(CACHE_NAMES.dynamic);
        const cachedResponse = await cache.match(request);
        
        return cachedResponse || new Response('Offline', { status: 503 });
    }
}

// Utility function to limit cache size
async function limitCacheSize(cacheName, maxItems) {
    try {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        
        if (keys.length > maxItems) {
            const itemsToDelete = keys.slice(0, keys.length - maxItems);
            await Promise.all(itemsToDelete.map(key => cache.delete(key)));
        }
    } catch (error) {
        console.warn(`[SW] Failed to limit cache size for ${cacheName}:`, error);
    }
}

// Manejar mensajes del cliente
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_CACHE_SIZE') {
        getCacheSize().then(size => {
            event.ports[0].postMessage({ type: 'CACHE_SIZE', size });
        });
    }
});

// Obtener tamaño total del caché
async function getCacheSize() {
    const cacheNames = await caches.keys();
    let totalSize = 0;
    
    for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        totalSize += keys.length;
    }
    
    return totalSize;
}