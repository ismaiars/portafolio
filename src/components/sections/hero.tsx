'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Github, Mail, ArrowRight, Terminal } from 'lucide-react'
import { OmpPrompt, TerminalWindow } from '@/components/ui/omp-prompt'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { useScrollTo } from '@/hooks/use-scroll-to'
import { trackEvent } from '@/components/analytics'

const roles = [
  { es: 'Soluciones Digitales Rentables', en: 'Profitable Digital Solutions' },
  { es: 'Aplicaciones Web de Alto Rendimiento', en: 'High-Performance Web Applications' },
  { es: 'Sistemas que Impulsan Negocios', en: 'Business-Driving Systems' },
  { es: 'Experiencias de Usuario Excepcionales', en: 'Exceptional User Experiences' },
  { es: 'Automatización que Ahorra Tiempo', en: 'Time-Saving Automation' },
]

interface HistoryEntry {
  id: number
  cmd: string
  output: React.ReactNode
}

export function Hero() {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [step, setStep] = useState<number>(0)
  const [inputCmd, setInputCmd] = useState('')
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const syncLang = () => {
      const htmlLang = (document.documentElement.getAttribute('data-lang') as 'es' | 'en') || 'es'
      setLang(htmlLang)
    }
    syncLang()
    const observer = new MutationObserver(syncLang)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang'],
    })
    return () => observer.disconnect()
  }, [])

  const handleDownloadCV = () => {
    trackEvent('download', 'engagement', 'CV Download', 1)
    const link = document.createElement('a')
    link.href = '/CV_Ismael_Ramirez_Salazar.pdf'
    link.download = 'CV_Ismael_Ramirez_Salazar.pdf'
    link.click()
  }

  const runShellCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([])
      setInputCmd('')
      return
    }

    let output: React.ReactNode
    if (cmd === 'help' || cmd === '?') {
      output = (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#94a3b8]">
          <div><span className="text-[#00ff9c]">projects</span> — {lang === 'es' ? 'Ir a proyectos destacados' : 'Jump to featured projects'}</div>
          <div><span className="text-[#00ff9c]">skills</span> — {lang === 'es' ? 'Ver stack técnico' : 'Inspect tech stack'}</div>
          <div><span className="text-[#00ff9c]">contact</span> — {lang === 'es' ? 'Abrir formulario de contacto' : 'Open contact section'}</div>
          <div><span className="text-[#00ff9c]">cv</span> — {lang === 'es' ? 'Descargar currículum PDF' : 'Download PDF resume'}</div>
          <div><span className="text-[#00ff9c]">whoami</span> — {lang === 'es' ? 'Resumen profesional' : 'Professional summary'}</div>
          <div><span className="text-[#00ff9c]">clear</span> — {lang === 'es' ? 'Limpiar consola interactiva' : 'Clear interactive output'}</div>
        </div>
      )
    } else if (cmd === 'projects' || cmd === 'ls proyectos' || cmd === 'proyectos') {
      output = (
        <span className="text-[#38bdf8] text-xs">
          {lang === 'es' ? '→ Navegando a ~/portafolio/proyectos...' : '→ Navigating to ~/portfolio/projects...'}
        </span>
      )
      setTimeout(() => scrollTo('projects'), 250)
    } else if (cmd === 'skills' || cmd === 'about') {
      output = (
        <div className="text-xs space-y-1 text-[#cbd5e1]">
          <div><span className="text-[#f59e0b]">frontend:</span> Next.js 14 · React · TypeScript · Tailwind CSS · Framer Motion</div>
          <div><span className="text-[#0ea5e9]">backend:</span> Node.js · Python · Django · PostgreSQL · Odoo ERP</div>
        </div>
      )
    } else if (cmd === 'contact' || cmd === 'ssh contacto' || cmd === 'contacto') {
      output = (
        <span className="text-[#00ff9c] text-xs">
          {lang === 'es' ? '→ Abriendo canal seguro en #contact...' : '→ Opening secure channel to #contact...'}
        </span>
      )
      setTimeout(() => scrollTo('contact'), 250)
    } else if (cmd === 'cv' || cmd === 'cat cv.pdf') {
      output = (
        <span className="text-[#00ff9c] text-xs">
          {lang === 'es' ? '✓ Descargando CV_Ismael_Ramirez_Salazar.pdf...' : '✓ Downloading CV_Ismael_Ramirez_Salazar.pdf...'}
        </span>
      )
      handleDownloadCV()
    } else if (cmd === 'whoami') {
      output = (
        <span className="text-[#e2e8f0] text-xs">
          Ismael Salazar — Full-Stack Web Developer · Toluca, México · iarsfate@gmail.com
        </span>
      )
    } else {
      output = (
        <span className="text-[#ff5555] text-xs">
          zsh: command not found: {cmd}. {lang === 'es' ? 'Escribe "help" para ver comandos.' : 'Type "help" for available commands.'}
        </span>
      )
    }

    setHistory((prev) => [...prev.slice(-3), { id: Date.now(), cmd: raw.trim(), output }])
    setInputCmd('')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden bg-[#090b10]">
      {/* Subtle terminal dot-matrix background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#262e40 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Subtle Oh My Posh ambient glow */}
      <div
        className="absolute -top-32 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <TerminalWindow
          title="zsh — ismael@toluca: ~/portafolio"
          badge="oh-my-posh · powerline"
          headerRight={
            <span className="hidden md:inline-flex items-center gap-1 font-mono text-[11px] text-[#00ff9c]">
              <Terminal className="w-3 h-3" />
              interactive
            </span>
          }
        >
          <div className="space-y-6">
            {/* PROMPT 1: neofetch --profile */}
            <OmpPrompt
              path="~/portafolio"
              branch="main"
              tag="next 14"
              command="neofetch --profile"
              execTime="14ms"
              speed={36}
              startDelay={150}
              onComplete={() => setStep((s) => Math.max(s, 1))}
            />

            {/* OUTPUT 1: Neofetch Split Layout */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 pl-2 sm:pl-4 border-l-2 border-[#262e40]"
                >
                  {/* Left: ASCII / Oh My Posh Identity Badge */}
                  <div className="lg:col-span-4 flex flex-col justify-between p-4 rounded-lg bg-[#090b10] border border-[#262e40] font-mono">
                    <pre className="text-[11px] sm:text-xs leading-tight text-[#00ff9c] overflow-x-auto select-none">
{`  ___                         _ 
 |_ _|___ _ __ ___   __ _  ___| |
  | |/ __| '_ \` _ \\ / _\` |/ _ \\ |
  | |\\__ \\ | | | | | (_| |  __/ |
 |___|___/_| |_| |_|\\__,_|\\___|_|`}
                    </pre>
                    <div className="mt-4 pt-3 border-t border-[#262e40] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#64748b]">theme</span>
                        <span className="text-[#c4b5fd]">omp-catppuccin</span>
                      </div>
                      {/* Oh My Posh color palette swatches */}
                      <div className="flex items-center gap-1.5 pt-1" aria-label="Terminal color palette">
                        {['#7c3aed', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899', '#ef4444'].map((hex) => (
                          <span
                            key={hex}
                            className="h-3 flex-1 rounded-sm"
                            style={{ backgroundColor: hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Main Headline + Key-Value Specs */}
                  <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
                    <div>
                      <p className="font-mono text-xs text-[#0ea5e9] mb-1">
                        {lang === 'es' ? '// Desarrollador Web Full-Stack' : '// Full-Stack Web Developer'}
                      </p>
                      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                        Ismael Salazar
                      </h1>
                    </div>

                    <div className="font-mono text-base sm:text-xl text-[#00ff9c] min-h-[2rem] flex items-center gap-2">
                      <span className="text-[#64748b] select-none">&gt;</span>
                      <TypewriterEffect
                        words={roles.map((r) => r[lang])}
                        className="font-mono font-semibold text-[#e2e8f0]"
                        cursorClassName="bg-[#00ff9c]"
                        typeSpeed={65}
                        deleteSpeed={35}
                        delayBetweenWords={2600}
                        loop={true}
                      />
                    </div>

                    {/* Key-value neofetch table */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-mono text-xs sm:text-sm pt-2">
                      <div>
                        <span className="text-[#7c3aed] font-semibold">location</span>
                        <span className="text-[#64748b]">: </span>
                        <span className="text-[#e2e8f0]">Toluca, México</span>
                      </div>
                      <div>
                        <span className="text-[#0ea5e9] font-semibold">stack</span>
                        <span className="text-[#64748b]">: </span>
                        <span className="text-[#e2e8f0]">Next.js · TS · Python</span>
                      </div>
                      <div>
                        <span className="text-[#10b981] font-semibold">status</span>
                        <span className="text-[#64748b]">: </span>
                        <span className="text-[#00ff9c]">
                          {lang === 'es' ? '✓ Disponible para proyectos' : '✓ Available for projects'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#f59e0b] font-semibold">delivery</span>
                        <span className="text-[#64748b]">: </span>
                        <span className="text-[#e2e8f0]">
                          {lang === 'es' ? 'A tiempo & alta calidad' : 'On-time & high quality'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* PROMPT 2: cat ./mission.txt */}
            {step >= 1 && (
              <OmpPrompt
                path="~/portafolio"
                branch="main"
                command="cat ./mission.txt"
                execTime="4ms"
                speed={32}
                startDelay={200}
                onComplete={() => setStep((s) => Math.max(s, 2))}
              />
            )}

            {/* OUTPUT 2: Mission + Action Flags */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="pl-2 sm:pl-4 border-l-2 border-[#10b981]/50 space-y-5"
              >
                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-3xl">
                  {lang === 'es'
                    ? '¡Hola! Soy Ismael, desarrollador web full-stack. Me gusta convertir ideas complejas en aplicaciones rápidas, claras y agradables de usar — desde plataformas a medida y automatizaciones hasta tiendas en línea que realmente ayudan a crecer tu negocio.'
                    : "Hi! I'm Ismael, a full-stack web developer. I enjoy turning complex ideas into fast, clear, and pleasant applications — from custom platforms and automations to online stores that genuinely help your business grow."}
                </p>

                {/* Terminal Flag CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      trackEvent('click', 'navigation', 'Contact Button', 1)
                      scrollTo('contact')
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#00ff9c] text-[#06121e] font-mono text-xs sm:text-sm font-bold hover:bg-[#34ffa9] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{lang === 'es' ? './platiquemos --ahora' : './lets-talk --now'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleDownloadCV}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#181d2a] text-[#e2e8f0] border border-[#262e40] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-mono text-xs sm:text-sm font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === 'es' ? 'descargar ./CV.pdf' : 'download ./Resume.pdf'}</span>
                  </button>

                  <a
                    href="https://github.com/ismaiars"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click', 'social', 'GitHub Profile', 1)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#181d2a] text-[#e2e8f0] border border-[#262e40] hover:border-[#7c3aed] hover:text-[#c4b5fd] font-mono text-xs sm:text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>github.com/ismaiars</span>
                  </a>
                </div>
              </motion.div>
            )}

            {/* INTERACTIVE MINI SHELL */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pt-4 border-t border-[#262e40] space-y-3"
              >
                {/* Command Output History */}
                {history.length > 0 && (
                  <div className="space-y-2.5 font-mono text-xs sm:text-sm bg-[#090b10] p-3 rounded-lg border border-[#262e40]">
                    {history.map((entry) => (
                      <div key={entry.id} className="space-y-1">
                        <div className="flex items-center gap-2 text-[#94a3b8]">
                          <span className="text-[#7c3aed]">❯</span>
                          <span className="text-[#e2e8f0]">{entry.cmd}</span>
                        </div>
                        <div className="pl-4">{entry.output}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Live Input Line */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    runShellCommand(inputCmd)
                  }}
                  onClick={() => inputRef.current?.focus()}
                  className="flex items-center gap-2 font-mono text-xs sm:text-sm bg-[#090b10] px-3 py-2.5 rounded-lg border border-[#262e40] focus-within:border-[#00ff9c]/60 transition-colors cursor-text"
                >
                  <span className="text-[#7c3aed] font-bold select-none">╰─❯</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputCmd}
                    onChange={(e) => setInputCmd(e.target.value)}
                    placeholder={
                      lang === 'es'
                        ? 'Escribe un comando (ej. help, projects, skills, cv, contact)...'
                        : 'Type a command (e.g. help, projects, skills, cv, contact)...'
                    }
                    className="flex-1 bg-transparent text-[#e2e8f0] placeholder:text-[#475569] focus:outline-none"
                    aria-label="Terminal command input"
                  />
                </form>

                {/* Quick-run command chips */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                  <span className="text-[#64748b]">
                    {lang === 'es' ? 'atajos:' : 'quick:'}
                  </span>
                  {['help', 'projects', 'skills', 'cv', 'contact', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => runShellCommand(cmd)}
                      className="px-2 py-0.5 rounded bg-[#151a26] border border-[#262e40] text-[#94a3b8] hover:text-[#00ff9c] hover:border-[#00ff9c]/40 transition-colors"
                    >
                      $ {cmd}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
