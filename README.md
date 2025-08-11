# 🚀 Portfolio Moderno PWA - Ismael Salazar

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

## 📋 Descripción

Portafolio personal moderno construido con Next.js 14, TypeScript y Tailwind CSS. Diseñado con un tema terminal/cyberpunk que demuestra habilidades técnicas y experiencia profesional. **Ahora es una Progressive Web App (PWA) completa** con formulario de contacto funcional.

## 🛠️ Stack Tecnológico

### Core
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones fluidas

### Funcionalidades
- **EmailJS** - Formulario de contacto funcional
- **Google Analytics 4** - Seguimiento de eventos y páginas
- **PWA** - Progressive Web App con Service Worker
- **React Hook Form** - Manejo de formularios
- **Lucide React** - Iconos modernos

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd portafolio
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

**Variables requeridas en `.env.local`:**
```env
# EmailJS (para formulario de contacto)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# SEO (opcional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=tu_verification_code
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_SITE_NAME=Tu Nombre
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos TypeScript
npm test             # Ejecutar tests con Jest
npm run test:watch   # Tests en modo watch
npm run test:coverage # Tests con coverage
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js 14
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal con PWA
│   ├── page.tsx           # Página de inicio
│   ├── loading.tsx        # Componente de carga
│   ├── sitemap.ts         # Sitemap dinámico
│   └── robots.ts          # Robots.txt dinámico
├── components/            # Componentes React
│   ├── analytics.tsx      # Google Analytics 4
│   ├── pwa.tsx           # Gestor PWA
│   ├── skip-nav.tsx      # Navegación accesible
│   ├── loading.tsx       # Componentes de carga
│   ├── optimized-image.tsx # Imágenes optimizadas
│   ├── ui/               # Componentes UI reutilizables
│   ├── sections/         # Secciones del portafolio
│   │   ├── hero.tsx      # Hero con tracking
│   │   ├── contact.tsx   # Formulario EmailJS
│   │   └── ...           # Otras secciones
│   └── seo/              # Componentes SEO
├── hooks/                # Custom hooks
├── lib/                  # Utilidades
└── types/                # Definiciones TypeScript

public/
├── manifest.json         # Manifiesto PWA
├── sw.js                 # Service Worker
└── icons/                # Iconos PWA (SVG)
    ├── icon-72x72.svg
    ├── icon-192x192.svg
    └── icon-512x512.svg
```

## ✨ Características

### 🎨 Diseño y UX
- 🎨 **Diseño Terminal/Cyberpunk** - Tema moderno con colores neón
- 📱 **Responsive Design** - Adaptable a todos los dispositivos
- ⚡ **Performance Optimizado** - SSR y optimización de imágenes
- 🌐 **Multiidioma** - Soporte para español e inglés
- ♿ **Accesible** - Cumple estándares de accesibilidad

### 📱 Progressive Web App (PWA)
- 📲 **Instalable** - Se puede instalar como app nativa
- 🔄 **Service Worker** - Funciona offline y cache inteligente
- 🚀 **Carga Rápida** - Optimizado para rendimiento móvil
- 📱 **App-like Experience** - Navegación fluida y nativa
- 🔔 **Push Notifications** - Soporte para notificaciones

### 📧 Formulario de Contacto
- ✉️ **EmailJS Integration** - Envío real de emails
- 📝 **Validación Completa** - Validación client-side robusta
- 🎯 **Event Tracking** - Seguimiento con Google Analytics
- 🛡️ **Modo Demo** - Fallback cuando no está configurado
- 💫 **Animaciones** - Feedback visual con Framer Motion

### 🔍 SEO y Analytics
- 🔍 **SEO Optimizado** - Meta tags y datos estructurados
- 📊 **Google Analytics 4** - Seguimiento avanzado de eventos
- 🗺️ **Sitemap Dinámico** - Generación automática
- 🤖 **Robots.txt** - Configuración para crawlers
- 🏷️ **Schema Markup** - Datos estructurados JSON-LD

## ⚙️ Configuración Avanzada

### 📧 Configurar EmailJS

1. **Crear cuenta en [EmailJS](https://www.emailjs.com/)**
2. **Configurar servicio de email:**
   - Ir a "Email Services" → "Add New Service"
   - Elegir proveedor (Gmail, Outlook, etc.)
   - Copiar el **Service ID**

3. **Crear template de email:**
   - Ir a "Email Templates" → "Create New Template"
   - Configurar con estas variables:
     - `{{subject}}` - Asunto del email
     - `{{from_name}}` - Nombre del remitente
     - `{{from_email}}` - Email del remitente
     - `{{message}}` - Mensaje del formulario
   - Copiar el **Template ID**

4. **Obtener Public Key:**
   - Ir a "Account" → "General"
   - Copiar el **Public Key**

5. **Configurar variables en `.env.local`:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 📊 Configurar Google Analytics

1. **Crear propiedad en [Google Analytics](https://analytics.google.com/)**
2. **Obtener Measurement ID (G-XXXXXXXXXX)**
3. **Agregar a `.env.local`:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 🔍 Configurar Google Search Console

1. **Verificar sitio en [Search Console](https://search.google.com/search-console)**
2. **Obtener código de verificación**
3. **Agregar a `.env.local`:**
```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxx
```

## 🚀 Deployment

### Vercel (Recomendado)

1. **Configurar variables de entorno en Vercel:**
   - Ir a Project Settings → Environment Variables
   - Agregar todas las variables de `.env.local`

2. **Deploy:**
```bash
npm run build
vercel --prod
```

### Netlify

1. **Configurar build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Configurar variables de entorno en Netlify:**
   - Site settings → Environment variables
   - Agregar todas las variables necesarias

### Otros Proveedores

```bash
# Verificar que todas las variables estén configuradas
npm run type-check
npm test
npm run build

# El directorio .next contiene la aplicación construida
```

### ✅ Checklist de Deployment

- [ ] Variables de entorno configuradas
- [ ] EmailJS configurado y probado
- [ ] Google Analytics configurado (opcional)
- [ ] PWA manifest y service worker funcionando
- [ ] Tests pasando (`npm test`)
- [ ] Build exitoso (`npm run build`)
- [ ] Verificación de tipos (`npm run type-check`)

### 📱 Verificar PWA

Después del deployment:
1. Abrir el sitio en móvil
2. Verificar que aparezca el prompt de instalación
3. Probar funcionalidad offline
4. Verificar que los iconos se muestren correctamente

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. **Fork el proyecto**
2. **Crear una rama para tu feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit tus cambios** (`git commit -m 'Add some AmazingFeature'`)
4. **Push a la rama** (`git push origin feature/AmazingFeature`)
5. **Abrir un Pull Request**

### 📋 Antes de contribuir:

- [ ] Ejecutar tests: `npm test`
- [ ] Verificar tipos: `npm run type-check`
- [ ] Ejecutar linter: `npm run lint`
- [ ] Probar build: `npm run build`

### 🐛 Reportar Bugs

Si encuentras un bug, por favor abre un issue con:
- Descripción clara del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots si es aplicable

### 💡 Sugerir Features

Para sugerir nuevas funcionalidades:
- Abre un issue con la etiqueta "enhancement"
- Describe claramente la funcionalidad
- Explica por qué sería útil

## 👨‍💻 Autor

**Ismael Salazar**
- GitHub: [@ismaiars](https://github.com/ismaiars)
- Email: iarsfate@gmail.com
- Portfolio: [https://ismael-salazar-iars.vercel.app](https://ismael-salazar-iars.vercel.app)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

⭐ **¡Dale una estrella si te gustó el proyecto!** ⭐