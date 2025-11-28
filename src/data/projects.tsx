import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiStripe, SiPython, SiFastapi, SiWordpress, SiJson, SiDocker, SiSupabase, SiVite } from 'react-icons/si';

export interface ProjectResult {
  icon: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  colorClass: string;
}

export interface ProjectTech {
  name: string;
  icon?: React.ReactNode;
  colorClass?: string;
}

export interface Project {
  id: string;
  title: string;
  type: {
    es: string;
    en: string;
  };
  image: string;
  category: string;
  categoryColorClass: string; // e.g., 'bg-accent-green'
  accentColorClass: string; // e.g., 'text-accent-green'
  borderHoverClass: string; // e.g., 'hover:border-accent-green'
  gradientClass: string; // e.g., 'from-accent-green/10 to-accent-blue/10'
  techStack: {
    name: string;
    role: string;
    colorClass: string;
  }[];
  challenge: {
    es: string;
    en: string;
  };
  results: ProjectResult[];
  technologies: ProjectTech[];
  links: {
    url: string;
    label: {
      es: string;
      en: string;
    };
    icon: 'external' | 'github';
    colorClass: string; // e.g., 'bg-accent-green/20 text-accent-green'
  }[];
  badge?: {
    text: {
      es: string;
      en: string;
    };
    colorClass: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'kairoz-crud',
    title: 'Ópticas Kairóz - Sistema de Gestión',
    type: {
      es: 'Sistema de Gestión Integral',
      en: 'Comprehensive Management System'
    },
    image: '/images/projects/kairoz-crud.png',
    category: 'SaaS',
    categoryColorClass: 'bg-accent-blue',
    accentColorClass: 'text-accent-blue',
    borderHoverClass: 'hover:border-accent-blue',
    gradientClass: 'from-accent-blue/10 to-accent-cyan/10',
    techStack: [
      { name: 'React', role: 'Frontend', colorClass: 'text-accent-blue' },
      { name: 'Supabase', role: 'Backend', colorClass: 'text-accent-green' },
      { name: 'Tailwind', role: 'UI', colorClass: 'text-accent-cyan' }
    ],
    challenge: {
      es: '🎯 DESAFÍO: Desarrollar un sistema completo de gestión para ópticas que administre inventario, clientes, ventas y métricas avanzadas, optimizando la operación diaria y la toma de decisiones.',
      en: '🎯 CHALLENGE: Develop a complete management system for optical shops that manages inventory, clients, sales, and advanced metrics, optimizing daily operations and decision-making.'
    },
    results: [
      {
        icon: '👥',
        title: { es: 'Gestión de Clientes', en: 'Client Management' },
        description: { es: 'Historial clínico y citas', en: 'Clinical history and appointments' },
        colorClass: 'text-accent-blue'
      },
      {
        icon: '📦',
        title: { es: 'Control de Inventario', en: 'Inventory Control' },
        description: { es: 'Stock en tiempo real y alertas', en: 'Real-time stock and alerts' },
        colorClass: 'text-accent-green'
      },
      {
        icon: '🧾',
        title: { es: 'Punto de Venta', en: 'Point of Sale' },
        description: { es: 'Ventas, abonos y facturación', en: 'Sales, payments and billing' },
        colorClass: 'text-accent-purple'
      },
      {
        icon: '📊',
        title: { es: 'Métricas Avanzadas', en: 'Advanced Metrics' },
        description: { es: 'Dashboard con KPIs y metas', en: 'Dashboard with KPIs and goals' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '🔐',
        title: { es: 'Seguridad Total', en: 'Total Security' },
        description: { es: 'Roles y protección de datos', en: 'Roles and data protection' },
        colorClass: 'text-accent-red'
      },
      {
        icon: '📱',
        title: { es: 'Diseño Responsivo', en: 'Responsive Design' },
        description: { es: 'Acceso desde cualquier dispositivo', en: 'Access from any device' },
        colorClass: 'text-accent-cyan'
      }
    ],
    technologies: [
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
      { name: 'Chart.js', icon: <span className="text-orange-400">📊</span> }
    ],
    links: [
      {
        url: 'https://github.com/sistemascarpe-ui/kairozcrud',
        label: { es: 'Ver Código Fuente', en: 'View Source Code' },
        icon: 'github',
        colorClass: 'bg-accent-blue/20 hover:bg-accent-blue hover:text-terminal-bg text-accent-blue'
      }
    ],
    badge: {
      text: { es: 'Sistema Integral de Gestión', en: 'Comprehensive Management System' },
      colorClass: 'text-accent-blue bg-accent-blue/10'
    }
  },
  {
    id: 'carpe-diem',
    title: 'Carpe Diem México',
    type: {
      es: 'Transformación Digital',
      en: 'Digital Transformation'
    },
    image: '/images/projects/carpediem.webp',
    category: 'E-commerce',
    categoryColorClass: 'bg-accent-green',
    accentColorClass: 'text-accent-green',
    borderHoverClass: 'hover:border-accent-green',
    gradientClass: 'from-accent-green/10 to-accent-blue/10',
    techStack: [
      { name: 'Next.js', role: 'Framework', colorClass: 'text-accent-green' },
      { name: 'CMS', role: 'Gestión', colorClass: 'text-accent-blue' },
      { name: 'SEO', role: 'Optimizado', colorClass: 'text-accent-purple' }
    ],
    challenge: {
      es: '🎯 DESAFÍO: Desarrollar una plataforma educativa especializada en cursos de optometría y certificaciones profesionales, con sistema de gestión de contenidos y modalidades híbridas de aprendizaje.',
      en: '🎯 CHALLENGE: Develop an educational platform specialized in optometry courses and professional certifications, with content management system and hybrid learning modalities.'
    },
    results: [
      {
        icon: '🔒',
        title: { es: 'Seguridad Reforzada', en: 'Enhanced Security' },
        description: { es: 'SSL, autenticación 2FA, firewall', en: 'SSL, 2FA authentication, firewall' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '📈',
        title: { es: 'Marketing Digital', en: 'Digital Marketing' },
        description: { es: 'SEO, Google Ads, redes sociales', en: 'SEO, Google Ads, social media' },
        colorClass: 'text-accent-blue'
      },
      {
        icon: '🎓',
        title: { es: 'Plataforma LMS', en: 'LMS Platform' },
        description: { es: 'Gestión completa de cursos', en: 'Complete course management' },
        colorClass: 'text-accent-green'
      },
      {
        icon: '💳',
        title: { es: 'Pagos Integrados', en: 'Integrated Payments' },
        description: { es: 'PayPal, Stripe, transferencias', en: 'PayPal, Stripe, transfers' },
        colorClass: 'text-accent-purple'
      },
      {
        icon: '📊',
        title: { es: 'Analytics Avanzado', en: 'Advanced Analytics' },
        description: { es: 'Tracking de conversiones y ROI', en: 'Conversion and ROI tracking' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '🏆',
        title: { es: 'Certificaciones CONOCER', en: 'CONOCER Certifications' },
        description: { es: 'EC0052, EC0994, EC0301 oficiales', en: 'Official EC0052, EC0994, EC0301' },
        colorClass: 'text-accent-blue'
      }
    ],
    technologies: [
      { name: 'WordPress', icon: <SiWordpress className="text-blue-500" /> },
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'SEO', icon: <span className="text-green-500">🔍</span> },
      { name: 'Security', icon: <span className="text-red-500">🔒</span> }
    ],
    links: [
      {
        url: 'https://carpediemmexico.com.mx/2022/',
        label: { es: 'Ver Caso de Éxito', en: 'View Success Story' },
        icon: 'external',
        colorClass: 'bg-accent-green/20 hover:bg-accent-green hover:text-terminal-bg text-accent-green'
      }
    ],
    badge: {
      text: { es: 'Certificaciones oficiales CONOCER', en: 'Official CONOCER certifications' },
      colorClass: 'text-accent-green bg-accent-green/10'
    }
  },
  {
    id: 'opticas-kairoz',
    title: 'Ópticas Kairóz',
    type: {
      es: 'E-commerce Especializado',
      en: 'Specialized E-commerce'
    },
    image: '/images/projects/opticas-kairoz.webp',
    category: 'E-commerce',
    categoryColorClass: 'bg-accent-orange',
    accentColorClass: 'text-accent-orange',
    borderHoverClass: 'hover:border-accent-orange',
    gradientClass: 'from-accent-orange/10 to-accent-purple/10',
    techStack: [
      { name: 'React', role: 'Frontend', colorClass: 'text-accent-orange' },
      { name: 'Node.js', role: 'Backend', colorClass: 'text-accent-blue' },
      { name: 'MongoDB', role: 'Database', colorClass: 'text-accent-green' }
    ],
    challenge: {
      es: '🎯 DESAFÍO: Desarrollar una plataforma web profesional para servicios ópticos integrales, con sistema de citas, catálogo de productos y servicios especializados en salud visual con tecnología de punta.',
      en: '🎯 CHALLENGE: Develop a professional web platform for comprehensive optical services, with appointment system, product catalog and specialized visual health services with cutting-edge technology.'
    },
    results: [
      {
        icon: '🛒',
        title: { es: 'E-commerce Completo', en: 'Complete E-commerce' },
        description: { es: 'Carrito, pagos, inventario automático', en: 'Cart, payments, automatic inventory' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '📱',
        title: { es: 'App Móvil Nativa', en: 'Native Mobile App' },
        description: { es: 'iOS y Android optimizadas', en: 'Optimized iOS and Android' },
        colorClass: 'text-accent-blue'
      },
      {
        icon: '🏆',
        title: { es: 'Reconocimiento Amazon', en: 'Amazon Recognition' },
        description: { es: 'Contactados por excelencia técnica', en: 'Contacted for technical excellence' },
        colorClass: 'text-accent-green'
      },
      {
        icon: '📊',
        title: { es: 'Analytics Avanzado', en: 'Advanced Analytics' },
        description: { es: 'Google Analytics 4, heatmaps', en: 'Google Analytics 4, heatmaps' },
        colorClass: 'text-accent-purple'
      },
      {
        icon: '🔒',
        title: { es: 'Seguridad PCI DSS', en: 'PCI DSS Security' },
        description: { es: 'Certificación para pagos seguros', en: 'Certification for secure payments' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '🚀',
        title: { es: 'CDN Global', en: 'Global CDN' },
        description: { es: 'Carga rápida en todo el mundo', en: 'Fast loading worldwide' },
        colorClass: 'text-accent-blue'
      }
    ],
    technologies: [
      { name: 'WordPress', icon: <SiWordpress className="text-blue-500" /> },
      { name: 'WooCommerce', icon: <span className="text-purple-500">🛒</span> },
      { name: 'SEO', icon: <span className="text-green-500">🔍</span> },
      { name: 'Stripe', icon: <SiStripe className="text-purple-500" /> }
    ],
    links: [
      {
        url: 'https://opticaskairoz.com',
        label: { es: 'Ver Sitio Web', en: 'View Website' },
        icon: 'external',
        colorClass: 'bg-accent-orange/20 hover:bg-accent-orange hover:text-terminal-bg text-accent-orange'
      }
    ],
    badge: {
      text: { es: 'Reconocido por Amazon por excelencia técnica', en: 'Recognized by Amazon for technical excellence' },
      colorClass: 'text-accent-orange bg-accent-orange/10'
    }
  },
  {
    id: 'scca-project',
    title: 'SCCA Project',
    type: {
      es: 'Automatización IA',
      en: 'AI Automation'
    },
    image: '/images/projects/scca-project.svg',
    category: 'IA & Video',
    categoryColorClass: 'bg-accent-blue',
    accentColorClass: 'text-accent-blue',
    borderHoverClass: 'hover:border-accent-blue',
    gradientClass: 'from-accent-blue/10 to-accent-purple/10',
    techStack: [
      { name: 'Python', role: 'Backend', colorClass: 'text-accent-blue' },
      { name: 'Whisper', role: 'IA Audio', colorClass: 'text-accent-green' },
      { name: 'LLM', role: 'Análisis', colorClass: 'text-accent-purple' }
    ],
    challenge: {
      es: '🎯 DESAFÍO: Crear una aplicación web local que utiliza IA para extraer clips temáticos de videos largos de forma completamente automatizada, optimizada para CPU sin necesidad de GPU dedicada.',
      en: '🎯 CHALLENGE: Create a local web application that uses AI to extract thematic clips from long videos in a completely automated way, optimized for CPU without the need for dedicated GPU.'
    },
    results: [
      {
        icon: '🎤',
        title: { es: 'Transcripción Automática', en: 'Automatic Transcription' },
        description: { es: 'Whisper.cpp optimizado para CPU', en: 'Whisper.cpp optimized for CPU' },
        colorClass: 'text-accent-blue'
      },
      {
        icon: '🧠',
        title: { es: 'Análisis Inteligente', en: 'Intelligent Analysis' },
        description: { es: 'Modelos LLM locales (Mistral-7B)', en: 'Local LLM models (Mistral-7B)' },
        colorClass: 'text-accent-green'
      },
      {
        icon: '✂️',
        title: { es: 'Corte Automático', en: 'Automatic Cutting' },
        description: { es: 'FFmpeg con progreso en tiempo real', en: 'FFmpeg with real-time progress' },
        colorClass: 'text-accent-purple'
      },
      {
        icon: '🎨',
        title: { es: 'Perfiles Personalizables', en: 'Customizable Profiles' },
        description: { es: 'Redes sociales, educativo, archivo', en: 'Social media, educational, archive' },
        colorClass: 'text-accent-orange'
      }
    ],
    technologies: [
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-green-500" /> },
      { name: 'Whisper.cpp' },
      { name: 'Mistral-7B' },
      { name: 'FFmpeg' }
    ],
    links: [
      {
        url: 'https://github.com/ismaiars/Scca_Project',
        label: { es: 'Ver Código Fuente', en: 'View Source Code' },
        icon: 'github',
        colorClass: 'bg-accent-blue/20 hover:bg-accent-blue hover:text-terminal-bg text-accent-blue'
      }
    ],
    badge: {
      text: { es: 'IA local sin GPU requerida', en: 'Local AI without GPU required' },
      colorClass: 'text-accent-blue bg-accent-blue/10'
    }
  },
  {
    id: 'inventario-corporativo',
    title: 'Inventario Corporativo',
    type: {
      es: 'Sistema de Gestión',
      en: 'Management System'
    },
    image: '/images/projects/inventario.webp',
    category: 'Web App',
    categoryColorClass: 'bg-accent-purple',
    accentColorClass: 'text-accent-purple',
    borderHoverClass: 'hover:border-accent-purple',
    gradientClass: 'from-accent-purple/10 to-accent-orange/10',
    techStack: [
      { name: 'Next.js', role: 'Frontend', colorClass: 'text-accent-purple' },
      { name: 'OAuth', role: 'Seguridad', colorClass: 'text-accent-orange' },
      { name: 'Shadcn/ui', role: 'UI/UX', colorClass: 'text-accent-green' }
    ],
    challenge: {
      es: '🎯 DESAFÍO: Desarrollar una aplicación web moderna para la gestión eficiente del inventario de equipos corporativos, con autenticación segura y acceso restringido solo al personal autorizado.',
      en: '🎯 CHALLENGE: Develop a modern web application for efficient management of corporate equipment inventory, with secure authentication and restricted access only to authorized personnel.'
    },
    results: [
      {
        icon: '📊',
        title: { es: 'Dashboard Interactivo', en: 'Interactive Dashboard' },
        description: { es: 'Estadísticas clave del inventario', en: 'Key inventory statistics' },
        colorClass: 'text-accent-purple'
      },
      {
        icon: '🔐',
        title: { es: 'Autenticación Google OAuth', en: 'Google OAuth Authentication' },
        description: { es: 'Acceso seguro con whitelist', en: 'Secure access with whitelist' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '🔍',
        title: { es: 'Búsqueda y Filtrado', en: 'Search and Filtering' },
        description: { es: 'Por estado, departamento y más', en: 'By status, department and more' },
        colorClass: 'text-accent-green'
      },
      {
        icon: '📱',
        title: { es: 'Interfaz Responsiva', en: 'Responsive Interface' },
        description: { es: 'Shadcn/ui + Tailwind CSS', en: 'Shadcn/ui + Tailwind CSS' },
        colorClass: 'text-accent-blue'
      }
    ],
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> }
    ],
    links: [
      {
        url: 'https://github.com/ismaiars/Inventario-Corporativo',
        label: { es: 'Ver Código Fuente', en: 'View Source Code' },
        icon: 'github',
        colorClass: 'bg-accent-purple/20 hover:bg-accent-purple hover:text-terminal-bg text-accent-purple'
      }
    ],
    badge: {
      text: { es: 'Autenticación OAuth 2.0 integrada', en: 'OAuth 2.0 authentication integrated' },
      colorClass: 'text-accent-purple bg-accent-purple/10'
    }
  },
  {
    id: 'wordpress-generator',
    title: 'Sistema de Generación de Páginas WP',
    type: {
      es: 'Automatización Web',
      en: 'Web Automation'
    },
    image: '/images/projects/wordpress-generator.svg',
    category: 'Automatización',
    categoryColorClass: 'bg-accent-green',
    accentColorClass: 'text-accent-green',
    borderHoverClass: 'hover:border-accent-green',
    gradientClass: 'from-accent-green/10 to-accent-blue/10',
    techStack: [
      { name: 'Python', role: 'Backend', colorClass: 'text-accent-green' },
      { name: 'WordPress', role: 'CMS', colorClass: 'text-accent-blue' },
      { name: 'API REST', role: 'Integración', colorClass: 'text-accent-orange' }
    ],
    challenge: {
      es: '🎯 DESAFÍO: Automatizar la creación masiva de páginas en WordPress para Ópticas Kairóz, reduciendo el tiempo de desarrollo de horas a minutos mediante scripts inteligentes y plantillas dinámicas.',
      en: '🎯 CHALLENGE: Automate massive WordPress page creation for Ópticas Kairóz, reducing development time from hours to minutes through intelligent scripts and dynamic templates.'
    },
    results: [
      {
        icon: '⚡',
        title: { es: 'Generación Automática', en: 'Automatic Generation' },
        description: { es: 'Páginas desde plantillas JSON', en: 'Pages from JSON templates' },
        colorClass: 'text-accent-green'
      },
      {
        icon: '🔗',
        title: { es: 'Integración WordPress API', en: 'WordPress API Integration' },
        description: { es: 'REST API nativa', en: 'Native REST API' },
        colorClass: 'text-accent-blue'
      },
      {
        icon: '📋',
        title: { es: 'Plantillas Dinámicas', en: 'Dynamic Templates' },
        description: { es: 'Configurables por JSON', en: 'Configurable via JSON' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '📊',
        title: { es: 'Logging Detallado', en: 'Detailed Logging' },
        description: { es: 'Seguimiento de procesos', en: 'Process tracking' },
        colorClass: 'text-accent-purple'
      }
    ],
    technologies: [
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
      { name: 'WordPress API', icon: <SiWordpress className="text-blue-600" /> },
      { name: 'JSON', icon: <SiJson className="text-yellow-500" /> },
      { name: 'REST API' },
      { name: 'Requests' }
    ],
    links: [
      {
        url: 'https://github.com/ismaiars/Sistema_De_Generacion_Paginas_WP',
        label: { es: 'Ver Código Fuente', en: 'View Source Code' },
        icon: 'github',
        colorClass: 'bg-accent-green/20 hover:bg-accent-green hover:text-terminal-bg text-accent-green'
      }
    ],
    badge: {
      text: { es: 'Automatización 95% más rápida', en: '95% faster automation' },
      colorClass: 'text-accent-green bg-accent-green/10'
    }
  },
  {
    id: 'forensectl',
    title: 'ForenseCTL',
    type: {
      es: 'Análisis Forense Digital',
      en: 'Digital Forensic Analysis'
    },
    image: '/images/projects/forensectl.svg',
    category: 'Ciberseguridad',
    categoryColorClass: 'bg-accent-orange',
    accentColorClass: 'text-accent-orange',
    borderHoverClass: 'hover:border-accent-orange',
    gradientClass: 'from-accent-orange/10 to-accent-red/10',
    techStack: [
      { name: 'Python', role: 'Core', colorClass: 'text-accent-orange' },
      { name: 'Multiplataforma', role: 'Windows/Linux', colorClass: 'text-accent-red' },
      { name: 'DFIR', role: 'Forense', colorClass: 'text-accent-purple' }
    ],
    challenge: {
      es: '🎯 DESAFÍO: Desarrollar un sistema completo de análisis forense digital multiplataforma para profesionales de ciberseguridad, equipos DFIR y analistas forenses, proporcionando un ciclo completo de investigación: recopilación → análisis → reporte → cadena de custodia.',
      en: '🎯 CHALLENGE: Develop a complete multiplatform digital forensic analysis system for cybersecurity professionals, DFIR teams and forensic analysts, providing a complete investigation cycle: collection → analysis → reporting → chain of custody.'
    },
    results: [
      {
        icon: '🔍',
        title: { es: 'Recopilación Automática', en: 'Automatic Collection' },
        description: { es: 'Artefactos del sistema en tiempo real', en: 'Real-time system artifacts' },
        colorClass: 'text-accent-orange'
      },
      {
        icon: '🌐',
        title: { es: 'Multiplataforma', en: 'Multiplatform' },
        description: { es: 'Windows (ejecutable) y Linux (script)', en: 'Windows (executable) and Linux (script)' },
        colorClass: 'text-accent-red'
      },
      {
        icon: '📄',
        title: { es: 'Reportes Profesionales', en: 'Professional Reports' },
        description: { es: 'HTML y JSON con diseño técnico', en: 'HTML and JSON with technical design' },
        colorClass: 'text-accent-purple'
      },
      {
        icon: '🔗',
        title: { es: 'Cadena de Custodia', en: 'Chain of Custody' },
        description: { es: 'Registro automático de acciones', en: 'Automatic action logging' },
        colorClass: 'text-accent-blue'
      },
      {
        icon: '⚡',
        title: { es: 'Sin Instalaciones Complejas', en: 'No Complex Installations' },
        description: { es: 'Ejecutable único o script directo', en: 'Single executable or direct script' },
        colorClass: 'text-accent-green'
      },
      {
        icon: '🛡️',
        title: { es: 'Análisis Forense Integral', en: 'Comprehensive Forensic Analysis' },
        description: { es: 'Sistema, procesos, red y logs', en: 'System, processes, network and logs' },
        colorClass: 'text-accent-orange'
      }
    ],
    technologies: [
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-500" /> }
    ],
    links: [
      {
        url: 'https://github.com/ismaiars/ForenseCTL',
        label: { es: 'Ver Código Fuente', en: 'View Source Code' },
        icon: 'github',
        colorClass: 'bg-accent-orange/20 hover:bg-accent-orange hover:text-terminal-bg text-accent-orange'
      }
    ],
    badge: {
      text: { es: 'Herramienta profesional DFIR', en: 'Professional DFIR tool' },
      colorClass: 'text-accent-orange bg-accent-orange/10'
    }
  }
];
