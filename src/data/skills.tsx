import {
    SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiMysql, SiPostgresql, SiPython,
    SiNextdotjs, SiReact, SiTypescript, SiBootstrap, SiPhp, SiExpress, SiSpring, SiMongodb,
    SiSqlite, SiGit, SiDocker, SiApache, SiNginx, SiFigma, SiSwagger, SiAngular, SiVuedotjs,
    SiNuxtdotjs, SiDjango, SiFastapi, SiIonic, SiVercel, SiPostman,
    SiWordpress, SiNodedotjs, SiRedis, SiJest, SiArduino
} from 'react-icons/si';
import { FaMobile, FaGraduationCap, FaVideo, FaLink } from 'react-icons/fa';
import { VscTerminalBash } from 'react-icons/vsc';

export interface Skill {
    name: string;
    icon: React.ReactNode;
}

export interface SkillCategory {
    title: {
        es: string;
        en: string;
    };
    icon: string;
    colorClass: string; // e.g., 'text-accent-green'
    skills: Skill[];
}

export interface Certification {
    icon: string;
    text: {
        es: string;
        en: string;
    };
}

export const premiumSpecialties: Skill[] = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Python', icon: <SiPython className="text-blue-400" /> },
    { name: 'Java', icon: <span className="text-red-500 font-bold">☕</span> },
{ name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
{ name: 'WordPress', icon: <SiWordpress className="text-blue-600" /> },
{ name: 'Moodle', icon: <FaGraduationCap className="text-orange-500" /> },
{ name: 'n8n', icon: <FaLink className="text-purple-500" /> },
{ name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
{ name: 'Shell Script', icon: <VscTerminalBash className="text-green-400" /> },
{ name: 'Arduino', icon: <SiArduino className="text-teal-500" /> },
{ name: 'CCTV', icon: <FaVideo className="text-red-500" /> }
];

export const masteredTechnologies: Skill[] = [
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
    { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'Spring', icon: <SiSpring className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'SQLite', icon: <SiSqlite className="text-blue-400" /> },
    { name: 'Git', icon: <SiGit className="text-orange-500" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    { name: 'Apache', icon: <SiApache className="text-red-600" /> },
    { name: 'Nginx', icon: <SiNginx className="text-green-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-purple-500" /> },
    { name: 'Swagger', icon: <SiSwagger className="text-green-500" /> }
];

export const developingTechnologies: Skill[] = [
    { name: 'Angular', icon: <SiAngular className="text-red-600" /> },
    { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500" /> },
    { name: 'Nuxt', icon: <SiNuxtdotjs className="text-green-400" /> },
    { name: 'Django', icon: <SiDjango className="text-green-600" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
    { name: 'Ionic', icon: <SiIonic className="text-blue-500" /> },
    { name: 'React Native', icon: <FaMobile className="text-cyan-400" /> },
    { name: 'AWS', icon: <span className="text-orange-400 font-bold">☁️</span> },
{ name: 'Vercel', icon: <SiVercel className="text-white" /> },
{ name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
{ name: 'Redis', icon: <SiRedis className="text-red-500" /> },
{ name: 'Jest', icon: <SiJest className="text-red-600" /> }
];

export const certifications: Certification[] = [
    {
        icon: '🎓',
        text: {
            es: 'Oracle Next Education - Desarrollo Backend Avanzado (Alura LATAM)',
            en: 'Oracle Next Education - Advanced Backend Development (Alura LATAM)'
        }
    },
    {
        icon: '🎓',
        text: {
            es: 'Oracle Next Education - Arquitectura de Bases de Datos (Alura LATAM)',
            en: 'Oracle Next Education - Database Architecture (Alura LATAM)'
        }
    },
    {
        icon: '🎓',
        text: {
            es: 'Postman Student Expert - Integración de APIs (Postman)',
            en: 'Postman Student Expert - API Integration (Postman)'
        }
    },
    {
        icon: '📚',
        text: {
            es: '+50 horas de formación continua anual en nuevas tecnologías',
            en: '+50 hours of continuous annual training in new technologies'
        }
    }
];
