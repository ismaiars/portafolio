'use client';

import { useState, useEffect } from 'react';
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
    <section id="sobre-mi" className="section-animate py-8 md:py-16 bg-terminal-surface/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-accent-green" data-es="¿Por Qué Elegir a Ismael?" data-en="Why Choose Ismael?">
          ¿Por Qué Elegir a Ismael?
        </h2>
        <p className="text-xl text-center mb-12 text-text-secondary max-w-3xl mx-auto" data-es="El desarrollador que convierte tu visión en resultados medibles" data-en="The developer who turns your vision into measurable results">
          El desarrollador que convierte tu visión en resultados medibles
        </p>

        <div className="about-me-content-box max-w-6xl mx-auto">
          <div className="mb-8 text-text-secondary text-lg leading-relaxed">
            <p className="mb-6" data-es="No soy solo otro desarrollador. Soy tu aliado estratégico en el mundo digital. En mis 2+ años de experiencia, he ayudado a empresas como la tuya a:" data-en="I'm not just another developer. I'm your strategic ally in the digital world. In my 2+ years of experience, I've helped companies like yours to:">
              No soy solo otro desarrollador. Soy tu aliado estratégico en el mundo digital. En mis 2+ años de experiencia, he ayudado a empresas como la tuya a:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-green/20">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <span className="text-xl md:text-2xl">🎯</span>
                  <span className="text-accent-green font-semibold text-sm md:text-base" data-es="Aumentar sus ventas online hasta un 300%" data-en="Increase their online sales by up to 300%">
                    Aumentar sus ventas online hasta un 300%
                  </span>
                </div>
              </div>

              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-blue/20">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <span className="text-xl md:text-2xl">⚡</span>
                  <span className="text-accent-blue font-semibold text-sm md:text-base" data-es="Reducir costos operativos mediante automatización" data-en="Reduce operational costs through automation">
                    Reducir costos operativos mediante automatización
                  </span>
                </div>
              </div>

              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-purple/20">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <span className="text-xl md:text-2xl">🚀</span>
                  <span className="text-accent-purple font-semibold text-sm md:text-base" data-es="Acelerar su crecimiento con tecnología de vanguardia" data-en="Accelerate their growth with cutting-edge technology">
                    Acelerar su crecimiento con tecnología de vanguardia
                  </span>
                </div>
              </div>

              <div className="bg-terminal-surface/30 rounded-lg p-3 md:p-4 border border-accent-orange/20">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <span className="text-xl md:text-2xl">💡</span>
                  <span className="text-accent-orange font-semibold text-sm md:text-base" data-es="Superar a su competencia con soluciones innovadoras" data-en="Outperform their competition with innovative solutions">
                    Superar a su competencia con soluciones innovadoras
                  </span>
                </div>
              </div>
            </div>

            <p className="text-center text-xl font-medium" data-es="Mi enfoque no es solo escribir código, sino entender tu negocio y crear soluciones que generen ROI real." data-en="My approach isn't just writing code, but understanding your business and creating solutions that generate real ROI.">
              Mi enfoque no es solo escribir código, sino entender tu negocio y crear soluciones que generen ROI real.
            </p>
          </div>

          {/* Unique Value Proposition */}
          <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 border border-accent-green/30 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🌟</span>
              <h3 className="text-xl font-bold text-accent-green" data-es="MI DIFERENCIADOR" data-en="MY DIFFERENTIATOR">
                MI DIFERENCIADOR
              </h3>
            </div>
            <p className="text-text-secondary text-lg" data-es="No solo desarrollo tu proyecto, te acompaño en todo el proceso de crecimiento digital con soporte técnico y estratégico continuo." data-en="I don't just develop your project, I accompany you throughout the digital growth process with continuous technical and strategic support.">
              No solo desarrollo tu proyecto, te acompaño en todo el proceso de crecimiento digital con soporte técnico y estratégico continuo.
            </p>
          </div>

          {/* Terminal Output */}
          <div className="terminal-output bg-terminal-bg border border-terminal-border rounded-lg mb-8 overflow-hidden">
            <div className="terminal-header bg-terminal-surface px-3 md:px-4 py-2 flex items-center justify-between">
              <span className="terminal-title text-text-primary font-mono text-xs md:text-sm">Terminal</span>
              <div className="terminal-controls flex gap-1 md:gap-2">
                <span className="terminal-control w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></span>
                <span className="terminal-control w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></span>
                <span className="terminal-control w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>
            <div className="terminal-content p-3 md:p-4 font-mono text-xs md:text-sm">
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