# 🚀 Portfolio Moderno - Next.js 14 + TypeScript

## 📋 Descripción

Este es un portafolio moderno construido con las tecnologías más demandadas del mercado actual. La arquitectura está diseñada para demostrar dominio técnico y seguir las mejores prácticas de desarrollo frontend.

## 🛠️ Stack Tecnológico

### Core Technologies
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **React 18** - Biblioteca de interfaz de usuario
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Biblioteca de animaciones

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **Prettier** - Formateador de código
- **Husky** - Git hooks para calidad de código
- **Jest** - Framework de testing
- **Storybook** - Desarrollo de componentes aislados

### Bibliotecas Adicionales
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **Lucide React** - Iconos modernos
- **Radix UI** - Componentes accesibles
- **Class Variance Authority** - Gestión de variantes de componentes

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                    # App Router de Next.js 14
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── api/               # API Routes
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI reutilizables
│   ├── sections/         # Secciones del portafolio
│   ├── navigation/       # Componentes de navegación
│   ├── layout/           # Componentes de layout
│   └── providers/        # Context providers
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
├── types/                # Definiciones de TypeScript
├── data/                 # Datos estáticos
└── styles/               # Estilos adicionales
```

## ✨ Características Principales

### 🎨 Diseño y UX
- **Tema Terminal/Cyberpunk** - Diseño moderno con colores neón
- **Responsive Design** - Adaptable a todos los dispositivos
- **Animaciones Fluidas** - Transiciones suaves con Framer Motion
- **Modo Oscuro** - Tema oscuro por defecto
- **Accesibilidad** - Cumple con estándares WCAG

### ⚡ Performance
- **Server-Side Rendering** - Renderizado del lado del servidor
- **Static Generation** - Generación estática cuando es posible
- **Image Optimization** - Optimización automática de imágenes
- **Code Splitting** - División automática del código
- **Bundle Analysis** - Análisis del tamaño del bundle

### 🔧 Desarrollo
- **TypeScript Strict Mode** - Tipado estricto
- **Custom Hooks** - Lógica reutilizable
- **Component Composition** - Composición de componentes
- **Error Boundaries** - Manejo de errores
- **Testing Setup** - Configuración de pruebas

### 📱 SEO y Marketing
- **Meta Tags Optimizados** - SEO mejorado
- **Open Graph** - Compartir en redes sociales
- **JSON-LD** - Datos estructurados
- **Sitemap Automático** - Generación automática de sitemap
- **Analytics** - Integración con herramientas de análisis

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm 8+ o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/ismaiars/portfolio-nextjs.git
cd portfolio-nextjs
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción

# Calidad de Código
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Corregir errores de ESLint
npm run type-check   # Verificar tipos de TypeScript

# Testing
npm run test         # Ejecutar pruebas
npm run test:watch   # Pruebas en modo watch
npm run test:coverage # Cobertura de pruebas

# Herramientas
npm run storybook    # Ejecutar Storybook
npm run analyze      # Analizar bundle
```

## 🎯 Componentes Principales

### Hero Section
- Efecto typewriter animado
- Partículas de fondo
- Botones de acción
- Estadísticas animadas

### About Section
- Información personal
- Skills con animaciones
- Timeline de experiencia

### Projects Section
- Grid de proyectos
- Filtros por tecnología
- Modal de detalles
- Enlaces a GitHub/Demo

### Contact Section
- Formulario con validación
- Integración con servicios de email
- Información de contacto
- Redes sociales

## 🔧 Personalización

### Colores y Tema
Edita `tailwind.config.js` para personalizar:
- Colores del tema
- Fuentes
- Animaciones
- Breakpoints

### Contenido
Modifica los archivos en `src/data/` para:
- Información personal
- Proyectos
- Experiencia laboral
- Skills y tecnologías

### Componentes
Todos los componentes están en `src/components/` y son:
- Totalmente tipados con TypeScript
- Reutilizables y composables
- Documentados con JSDoc
- Probados con Jest

## 📊 Performance Metrics

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔒 Seguridad

- Headers de seguridad configurados
- Validación de formularios
- Sanitización de datos
- CSP (Content Security Policy)
- Rate limiting en API routes

## 📱 Responsive Design

- **Mobile First**: Diseño móvil primero
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Elementos táctiles optimizados
- **Performance**: Optimizado para dispositivos móviles

## 🌐 Internacionalización

- Soporte para múltiples idiomas
- Español (es-MX) por defecto
- Inglés (en-US) disponible
- Fácil adición de nuevos idiomas

## 📈 Analytics y Monitoreo

- Google Analytics 4
- Vercel Analytics
- Error tracking
- Performance monitoring
- User behavior tracking

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta .next
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Ismael Salazar**
- GitHub: [@ismaiars](https://github.com/ismaiars)
- Email: iarsfate@gmail.com
- Portfolio: [https://ismael-salazar-iars.vercel.app](https://ismael-salazar-iars.vercel.app)

## 🙏 Agradecimientos

- Next.js team por el increíble framework
- Vercel por el hosting gratuito
- Tailwind CSS por el sistema de diseño
- Framer Motion por las animaciones
- Toda la comunidad open source

---

⭐ **¡No olvides dar una estrella al proyecto si te gustó!** ⭐