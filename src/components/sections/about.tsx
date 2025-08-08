'use client';

import { useState, useEffect } from 'react';
import { 
  SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiMysql, SiPostgresql, SiPython,
  SiNextdotjs, SiReact, SiTypescript, SiBootstrap, SiPhp, SiExpress, SiSpring, SiMongodb,
  SiSqlite, SiGit, SiDocker, SiApache, SiNginx, SiFigma, SiSwagger, SiAngular, SiVuedotjs,
  SiNuxtdotjs, SiDjango, SiFastapi, SiIonic, SiVercel, SiPostman,
  SiWordpress, SiNodedotjs, SiRedis, SiJest, SiArduino
} from 'react-icons/si';
import { FaMobile, FaGraduationCap, FaVideo, FaLink } from 'react-icons/fa';
import { VscTerminalBash } from 'react-icons/vsc';

const terminalCommands = [
  {
    command: 'whoami',
    response: {
      es: 'Ismael Salazar - Ingeniero de Sistemas',
      en: 'Ismael Salazar - Systems Engineer'
    }
  },
  {
    command: 'cat skills.txt',
    response: {
      es: 'HTML5, CSS3, JavaScript, Node.js, Python, Java, MySQL, WordPress...',
      en: 'HTML5, CSS3, JavaScript, Node.js, Python, Java, MySQL, WordPress...'
    }
  },
  {
    command: 'ls certifications/',
    response: {
      es: 'Oracle_Next_Education_Backend.pdf\nOracle_Databases.pdf\nPostman_Student_Expert.pdf',
      en: 'Oracle_Next_Education_Backend.pdf\nOracle_Databases.pdf\nPostman_Student_Expert.pdf'
    }
  },
  {
    command: 'cat about.txt',
    response: {
      es: 'Apasionado por la tecnología y la innovación...',
      en: 'Passionate about technology and innovation...'
    }
  }
];

export default function About() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [isTypingCommand, setIsTypingCommand] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChange = () => {
      const htmlLang = document.documentElement.getAttribute('data-lang') || 'es';
      setCurrentLanguage(htmlLang);
      // Reset animation when language changes
      setDisplayedCommand('');
      setDisplayedResponse('');
      setIsTypingCommand(true);
    };

    // Initial language check
    handleLanguageChange();

    // Listen for language toggle events
    const observer = new MutationObserver(handleLanguageChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentCmd = terminalCommands[currentCommandIndex];
    const currentResponse = currentCmd.response[currentLanguage as keyof typeof currentCmd.response];
    
    if (isTypingCommand) {
      if (displayedCommand.length < currentCmd.command.length) {
        const timer = setTimeout(() => {
          setDisplayedCommand(currentCmd.command.slice(0, displayedCommand.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setIsTypingCommand(false);
      }
    } else {
      if (displayedResponse.length < currentResponse.length) {
        const timer = setTimeout(() => {
          setDisplayedResponse(currentResponse.slice(0, displayedResponse.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          const nextIndex = (currentCommandIndex + 1) % terminalCommands.length;
          setCurrentCommandIndex(nextIndex);
          setDisplayedCommand('');
          setDisplayedResponse('');
          setIsTypingCommand(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
    return;
  }, [currentCommandIndex, displayedCommand, displayedResponse, isTypingCommand, currentLanguage]);

  const currentCmd = terminalCommands[currentCommandIndex];
  const currentResponse = currentCmd.response[currentLanguage as keyof typeof currentCmd.response];
  const showCursor = !isTypingCommand && displayedResponse.length < currentResponse.length;

  return (
    <section id="sobre-mi" className="section-animate py-20 bg-terminal-surface/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent-green" data-es="Sobre Mi" data-en="About Me">
          Sobre Mi
        </h2>
        
        <div className="about-me-content-box max-w-6xl mx-auto">
          <div className="mb-8 text-text-secondary text-lg leading-relaxed">
            <p data-es="¡Hola! Soy Ismael, un apasionado de la tecnología que acaba de graduarse en Ingeniería en Sistemas Computacionales. Desde pequeño, siempre me fascinó entender cómo funcionan las cosas, y esa curiosidad me llevó al mundo de la programación." data-en="Hello! I'm Ismael, a technology enthusiast who just graduated in Computer Systems Engineering. Since I was little, I was always fascinated by understanding how things work, and that curiosity led me to the world of programming.">
              ¡Hola! Soy Ismael, un apasionado de la tecnología que acaba de graduarse en Ingeniería en Sistemas Computacionales. 
              Desde pequeño, siempre me fascinó entender cómo funcionan las cosas, y esa curiosidad me llevó al mundo de la programación.
            </p>
            <p data-es="Me encanta resolver problemas complejos y convertir ideas en soluciones digitales que realmente impacten la vida de las personas. Cuando no estoy frente a la computadora, probablemente me encuentres explorando nuevas tecnologías, leyendo sobre innovación, o disfrutando de un buen café mientras planeo mi próximo proyecto." data-en="I love solving complex problems and turning ideas into digital solutions that really impact people's lives. When I'm not in front of the computer, you'll probably find me exploring new technologies, reading about innovation, or enjoying a good coffee while planning my next project.">
              Me encanta resolver problemas complejos y convertir ideas en soluciones digitales que realmente impacten la vida de las personas. 
              Cuando no estoy frente a la computadora, probablemente me encuentres explorando nuevas tecnologías, leyendo sobre innovación, 
              o disfrutando de un buen café mientras planeo mi próximo proyecto.
            </p>
            <p data-es="Creo firmemente que la tecnología debe ser accesible y útil para todos, y esa filosofía guía cada línea de código que escribo. Mi objetivo es seguir aprendiendo, creciendo profesionalmente y contribuir a crear un mundo más conectado y eficiente a través de la tecnología." data-en="I firmly believe that technology should be accessible and useful for everyone, and that philosophy guides every line of code I write. My goal is to keep learning, growing professionally and contribute to creating a more connected and efficient world through technology.">
              Creo firmemente que la tecnología debe ser accesible y útil para todos, y esa filosofía guía cada línea de código que escribo. Mi objetivo es seguir aprendiendo, creciendo profesionalmente 
              y contribuir a crear un mundo más conectado y eficiente a través de la tecnología.
            </p>
          </div>

          {/* Terminal Output */}
          <div className="terminal-output bg-terminal-bg border border-terminal-border rounded-lg mb-8 overflow-hidden">
            <div className="terminal-header bg-terminal-surface px-4 py-2 flex items-center justify-between">
              <span className="terminal-title text-text-primary font-mono text-sm">Terminal</span>
              <div className="terminal-controls flex gap-2">
                <span className="terminal-control w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="terminal-control w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="terminal-control w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>
            <div className="terminal-content p-4 font-mono text-sm">
              <div className="terminal-line flex items-center mb-2">
                <span className="terminal-prompt text-accent-green mr-2">$</span>
                <span className="terminal-command text-text-primary">{displayedCommand}</span>
                {isTypingCommand && <span className="animate-pulse text-accent-green">|</span>}
              </div>
              {displayedResponse && (
                <div className="terminal-response text-text-secondary whitespace-pre-line">
                  {displayedResponse}
                  {showCursor && (
                    <span className="animate-pulse text-accent-green">|</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Skills por Nivel */}
          <div className="skills-by-level">
            {/* Nivel Avanzado */}
            <h4 className="skill-level-title text-2xl font-bold mb-6 text-accent-green flex items-center gap-3">
              <span className="level-indicator w-4 h-4 bg-accent-green rounded-full"></span>
              <span data-es="Nivel Avanzado" data-en="Advanced Level">Nivel Avanzado</span>
            </h4>
            <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
              {[
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
              ].map((skill) => (
                <div key={skill.name} className="skill-item bg-terminal-surface/60 border border-terminal-border rounded-lg p-3 hover:border-accent-green/50 transition-colors flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-text-primary text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Nivel Intermedio */}
            <h4 className="skill-level-title text-2xl font-bold mb-6 text-accent-blue flex items-center gap-3">
              <span className="level-indicator w-4 h-4 bg-accent-blue rounded-full"></span>
              <span data-es="Nivel Intermedio" data-en="Intermediate Level">Nivel Intermedio</span>
            </h4>
            <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
              {[
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
              ].map((skill) => (
                <div key={skill.name} className="skill-item bg-terminal-surface/60 border border-terminal-border rounded-lg p-3 hover:border-accent-blue/50 transition-colors flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-text-primary text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Nivel Básico */}
            <h4 className="skill-level-title text-2xl font-bold mb-6 text-accent-purple flex items-center gap-3">
              <span className="level-indicator w-4 h-4 bg-accent-purple rounded-full"></span>
              <span data-es="Nivel Básico" data-en="Basic Level">Nivel Básico</span>
            </h4>
            <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
              {[
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
              ].map((skill) => (
                <div key={skill.name} className="skill-item bg-terminal-surface/60 border border-terminal-border rounded-lg p-3 hover:border-accent-purple/50 transition-colors flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-text-primary text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="certifications-container bg-terminal-surface/60 border border-terminal-border rounded-lg p-6">
            <h3 className="certifications-title text-2xl font-bold mb-4 text-accent-green" data-es="Certificaciones" data-en="Certifications">Certificaciones</h3>
            <ul className="certifications-list space-y-2">
              <li className="text-text-secondary flex items-center gap-2">
                <span className="text-accent-green">•</span>
                Oracle Next Education F2 T5 - Back-End (Alura LATAM)
              </li>
              <li className="text-text-secondary flex items-center gap-2">
                <span className="text-accent-green">•</span>
                Oracle Next Education - Bases de Datos (Alura LATAM)
              </li>
              <li className="text-text-secondary flex items-center gap-2">
                <span className="text-accent-green">•</span>
                Postman Student Expert (Postman)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}