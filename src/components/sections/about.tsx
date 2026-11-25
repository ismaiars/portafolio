'use client';

import { useState, useEffect } from 'react';
import { OmpPrompt, TerminalWindow } from '@/components/ui/omp-prompt';
import { premiumSpecialties, masteredTechnologies, developingTechnologies, certifications } from '@/data/skills';

const terminalCommands = [
  {
    command: 'whoami',
    response: {
      es: 'Ismael Salazar - Tu Socio en Transformación Digital',
      en: 'Ismael Salazar - Your Digital Transformation Partner'
    }
  },
  {
    command: 'cat success_formula.txt',
    response: {
      es: 'Código Limpio + Estrategia de Negocio = Éxito Garantizado',
      en: 'Clean Code + Business Strategy = Guaranteed Success'
    }
  },
  {
    command: 'ls achievements/',
    response: {
      es: 'Proyectos que generaron +$500K en ingresos adicionales\n15+ clientes satisfechos\n300%+ aumento promedio en conversiones',
      en: 'Projects that generated +$500K in additional revenue\n15+ satisfied clients\n300%+ average conversion increase'
    }
  },
  {
    command: 'pwd',
    response: {
      es: '/home/ismael/mission/your_success',
      en: '/home/ismael/mission/your_success'
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
    <section id="sobre-mi" className="section-animate py-8 md:py-16 bg-[#090b10]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 space-y-3">
          <OmpPrompt
            path="~/portafolio/sobre-mi"
            branch="main"
            tag="stack"
            command="cat ./perfil_y_stack.md"
            execTime="5ms"
          />
          <div className="pl-2 sm:pl-4 border-l-2 border-[#262e40]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono" data-es="¿Por Qué Elegir a Ismael?" data-en="Why Choose Ismael?">
              ¿Por Qué Elegir a Ismael?
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-1" data-es="El desarrollador que convierte tu visión en resultados medibles" data-en="The developer who turns your vision into measurable results">
              El desarrollador que convierte tu visión en resultados medibles
            </p>
          </div>
        </div>

        <div className="about-me-content-box max-w-6xl mx-auto">
          <div className="mb-8 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p className="mb-6" data-es="¡Hola! Soy Ismael. Más que solo escribir líneas de código, me gusta involucrarme para entender cómo funciona tu proyecto y construir soluciones claras que de verdad te faciliten el día a día. En estos años de experiencia he ayudado a negocios y equipos a:" data-en="Hi! I'm Ismael. Beyond just writing lines of code, I like to get involved to understand how your project works and build clear solutions that genuinely make your day-to-day easier. Over these years I've helped businesses and teams to:">
              ¡Hola! Soy Ismael. Más que solo escribir líneas de código, me gusta involucrarme para entender cómo funciona tu proyecto y construir soluciones claras que de verdad te faciliten el día a día. En estos años de experiencia he ayudado a negocios y equipos a:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-green/20">
                <div className="flex items-center gap-2 md:gap-3 mb-1">
                  <span className="text-xl md:text-2xl">🎯</span>
                  <span className="text-accent-green font-semibold text-sm md:text-base" data-es="Llevar su negocio a internet con sitios rápidos y claros" data-en="Take their business online with fast, clear websites">
                    Llevar su negocio a internet con sitios rápidos y claros
                  </span>
                </div>
              </div>

              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-blue/20">
                <div className="flex items-center gap-2 md:gap-3 mb-1">
                  <span className="text-xl md:text-2xl">⚡</span>
                  <span className="text-accent-blue font-semibold text-sm md:text-base" data-es="Automatizar tareas repetitivas para ahorrar tiempo cada semana" data-en="Automate repetitive tasks to save time every week">
                    Automatizar tareas repetitivas para ahorrar tiempo cada semana
                  </span>
                </div>
              </div>

              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-purple/20">
                <div className="flex items-center gap-2 md:gap-3 mb-1">
                  <span className="text-xl md:text-2xl">🛠️</span>
                  <span className="text-accent-purple font-semibold text-sm md:text-base" data-es="Crear sistemas internos a medida (inventarios, POS, reportes)" data-en="Build custom internal tools (inventory, POS, reporting)">
                    Crear sistemas internos a medida (inventarios, POS, reportes)
                  </span>
                </div>
              </div>

              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-orange/20">
                <div className="flex items-center gap-2 md:gap-3 mb-1">
                  <span className="text-xl md:text-2xl">🤝</span>
                  <span className="text-accent-orange font-semibold text-sm md:text-base" data-es="Acompañar cada entrega con soporte cercano y sin tecnicismos" data-en="Back every delivery with friendly, jargon-free support">
                    Acompañar cada entrega con soporte cercano y sin tecnicismos
                  </span>
                </div>
              </div>
            </div>

            <p className="text-center text-lg sm:text-xl font-medium text-[#e2e8f0]" data-es="Mi objetivo es simple: que la tecnología trabaje para ti, no al revés." data-en="My goal is simple: make technology work for you, not the other way around.">
              Mi objetivo es simple: que la tecnología trabaje para ti, no al revés.
            </p>
          </div>

          {/* Terminal Output */}
          <TerminalWindow
            title="zsh — ismael@toluca: ~/sobre-mi"
            badge="interactive"
            className="mb-10"
          >
            <div className="font-mono text-xs sm:text-sm space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#7c3aed] text-white text-[11px] font-semibold">
                  ismael
                </span>
                <span className="px-2 py-0.5 rounded bg-[#0ea5e9] text-[#06121e] text-[11px] font-semibold">
                  ~/sobre-mi
                </span>
                <span className="text-[#7c3aed] font-bold">❯</span>
                <span className="text-[#00ff9c] font-semibold">{displayedCommand}</span>
                {isTypingCommand && <span className="inline-block w-2 h-4 bg-[#00ff9c] animate-pulse" />}
              </div>
              {displayedResponse && (
                <div className="pl-3 border-l-2 border-[#262e40] text-[#cbd5e1] whitespace-pre-line leading-relaxed">
                  {displayedResponse}
                  {showCursor && (
                    <span className="inline-block w-2 h-4 bg-[#00ff9c] animate-pulse ml-1 align-middle" />
                  )}
                </div>
              )}
            </div>
          </TerminalWindow>

          {/* Skills por Nivel */}
          <div className="skills-by-level">
            {/* Especialidades Premium */}
            <h4 className="skill-level-title text-2xl font-bold mb-6 text-accent-green flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span data-es="ESPECIALIDADES PREMIUM" data-en="PREMIUM SPECIALTIES">ESPECIALIDADES PREMIUM</span>
            </h4>
            <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 mb-8">
              {premiumSpecialties.map((skill) => (
                <div key={skill.name} className="skill-item bg-terminal-surface/60 border border-terminal-border rounded-lg p-2 md:p-3 hover:border-accent-green/50 transition-colors flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <span className="text-lg md:text-xl">{skill.icon}</span>
                  <span className="text-text-primary text-xs md:text-sm font-medium text-center sm:text-left">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Tecnologías Dominadas */}
            <h4 className="skill-level-title text-2xl font-bold mb-6 text-accent-blue flex items-center gap-3">
              <span className="text-2xl">💪</span>
              <span data-es="TECNOLOGÍAS DOMINADAS" data-en="MASTERED TECHNOLOGIES">TECNOLOGÍAS DOMINADAS</span>
            </h4>
            <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 mb-8">
              {masteredTechnologies.map((skill) => (
                <div key={skill.name} className="skill-item bg-terminal-surface/60 border border-terminal-border rounded-lg p-2 md:p-3 hover:border-accent-blue/50 transition-colors flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <span className="text-lg md:text-xl">{skill.icon}</span>
                  <span className="text-text-primary text-xs md:text-sm font-medium text-center sm:text-left">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Tecnologías en Desarrollo */}
            <h4 className="skill-level-title text-2xl font-bold mb-6 text-accent-purple flex items-center gap-3">
              <span className="text-2xl">🔧</span>
              <span data-es="TECNOLOGÍAS EN DESARROLLO" data-en="DEVELOPING TECHNOLOGIES">TECNOLOGÍAS EN DESARROLLO</span>
            </h4>
            <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 mb-8">
              {developingTechnologies.map((skill) => (
                <div key={skill.name} className="skill-item bg-terminal-surface/60 border border-terminal-border rounded-lg p-2 md:p-3 hover:border-accent-purple/50 transition-colors flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <span className="text-lg md:text-xl">{skill.icon}</span>
                  <span className="text-text-primary text-xs md:text-sm font-medium text-center sm:text-left">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones y Formación */}
          <div className="certifications-container bg-terminal-surface/60 border border-terminal-border rounded-lg p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-4">
              <span className="text-xl md:text-2xl">🎓</span>
              <h3 className="certifications-title text-lg md:text-xl lg:text-2xl font-bold text-accent-green" data-es="Certificaciones y Formación Continua" data-en="Certifications and Continuous Training">Certificaciones y Formación Continua</h3>
            </div>
            <ul className="certifications-list space-y-2 md:space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="text-text-secondary flex items-start md:items-center gap-2 md:gap-3 bg-terminal-surface/30 rounded-lg p-2 md:p-3">
                  <span className="text-accent-green text-lg md:text-xl flex-shrink-0 mt-0.5 md:mt-0">{cert.icon}</span>
                  <span className="font-medium text-sm md:text-base" data-es={cert.text.es} data-en={cert.text.en}>{cert.text.es}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}