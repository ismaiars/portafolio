// Service Worker optimizado para mejor rendimiento
const CACHE_NAME = 'portfolio-cache-v2.2';
const STATIC_CACHE = 'static-v2.2';
const DYNAMIC_CACHE = 'dynamic-v2.2';
const IMAGE_CACHE = 'images-v2.2';

// Recursos críticos para caché inmediato
const CRITICAL_RESOURCES = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/script.js',
    '/manifest.json',
    '/images/projects/preimagen.webp'
];

// Recursos para pre-caché
const PRECACHE_RESOURCES = [
    '/robots.txt',
    '/sitemap.xml',
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Patrones de URLs para diferentes estrategias de caché
const CACHE_STRATEGIES = {
    images: /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i,
    fonts: /\.(woff|woff2|ttf|eot)$/i,
    scripts: /\.(js|css)$/i,
    documents: /\.(html|htm)$/i
};

// Límites de caché para evitar uso excesivo de almacenamiento
const CACHE_LIMITS = {
    [STATIC_CACHE]: 100,
    [DYNAMIC_CACHE]: 75,
    [IMAGE_CACHE]: 50
};

// Instalación del Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        Promise.all([
            // Caché crítico
            caches.open(STATIC_CACHE).then(cache => {
                console.log('Service Worker: Caching critical resources');
                return cache.addAll(CRITICAL_RESOURCES);
            }),
            // Pre-caché de recursos adicionales
            caches.open(DYNAMIC_CACHE).then(cache => {
                console.log('Service Worker: Pre-caching additional resources');
                return cache.addAll(PRECACHE_RESOURCES.filter(url => url.startsWith('http')));
            })
        ]).then(() => {
            console.log('Service Worker: Installation complete');
            return self.skipWaiting();
        }).catch(error => {
            console.error('Service Worker: Installation failed', error);
        })
    );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        Promise.all([
            // Limpiar cachés antiguos
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (![STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE].includes(cacheName)) {
                            console.log('Service Worker: Deleting old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Tomar control inmediato
            self.clients.claim()
        ]).then(() => {
            console.log('Service Worker: Activation complete');
        })
    );
});

// Interceptar requests con estrategias optimizadas
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Solo manejar requests HTTP/HTTPS
    if (!request.url.startsWith('http')) return;
    
    // Estrategia basada en el tipo de recurso
    if (CACHE_STRATEGIES.images.test(url.pathname)) {
        event.respondWith(handleImageRequest(request));
    } else if (CACHE_STRATEGIES.fonts.test(url.pathname)) {
        event.respondWith(handleFontRequest(request));
    } else if (CACHE_STRATEGIES.scripts.test(url.pathname)) {
        event.respondWith(handleStaticRequest(request));
    } else if (CACHE_STRATEGIES.documents.test(url.pathname) || url.pathname === '/') {
        event.respondWith(handleDocumentRequest(request));
    } else {
        event.respondWith(handleDynamicRequest(request));
    }
});

// Estrategia Cache First para imágenes
async function handleImageRequest(request) {
    try {
        const cache = await caches.open(IMAGE_CACHE);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Image request failed:', error);
        // Retornar imagen placeholder si está disponible
        return caches.match('/images/placeholder.svg') || new Response('', { status: 404 });
    }
}

// Estrategia Cache First para fuentes
async function handleFontRequest(request) {
    try {
        const cache = await caches.open(STATIC_CACHE);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Font request failed:', error);
        return new Response('', { status: 404 });
    }
}

// Estrategia Stale While Revalidate para recursos estáticos
async function handleStaticRequest(request) {
    try {
        const cache = await caches.open(STATIC_CACHE);
        const cachedResponse = await cache.match(request);
        
        const fetchPromise = fetch(request).then(networkResponse => {
            if (networkResponse.ok) {
                cache.put(request, networkResponse.clone());
            }
            return networkResponse;
        }).catch(() => cachedResponse);
        
        return cachedResponse || await fetchPromise;
    } catch (error) {
        console.error('Static request failed:', error);
        return new Response('', { status: 404 });
    }
}

// Estrategia Network First para documentos HTML
async function handleDocumentRequest(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Document request failed, trying cache:', error);
        const cache = await caches.open(DYNAMIC_CACHE);
        const cachedResponse = await cache.match(request);
        return cachedResponse || await cache.match('/index.html') || new Response('Offline', { status: 503 });
    }
}

// Estrategia Network First para recursos dinámicos
async function handleDynamicRequest(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            // Limitar el tamaño del caché dinámico
            await limitCacheSize(cache, CACHE_LIMITS[DYNAMIC_CACHE]);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cache = await caches.open(DYNAMIC_CACHE);
        const cachedResponse = await cache.match(request);
        return cachedResponse || new Response('Offline', { status: 503 });
    }
}

// Función optimizada para limitar el tamaño del caché
async function limitCacheSize(cache, maxItems) {
    const keys = await cache.keys();
    if (keys.length > maxItems) {
        // Eliminar los elementos más antiguos
        const itemsToDelete = keys.slice(0, keys.length - maxItems);
        await Promise.all(itemsToDelete.map(key => cache.delete(key)));
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