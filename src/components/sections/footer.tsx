'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Heart } from 'lucide-react'
import { OmpPrompt, TerminalWindow } from '@/components/ui/omp-prompt'
import { useScrollTo } from '@/hooks/use-scroll-to'
import { getCurrentYear } from '@/lib/utils'

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@ismaiars',
    icon: Github,
    url: 'https://github.com/ismaiars',
    accent: 'hover:border-[#c4b5fd] hover:text-[#c4b5fd]',
  },
  {
    name: 'LinkedIn',
    handle: 'in/ismael-salazar',
    icon: Linkedin,
    url: 'https://linkedin.com/in/ismael-salazar',
    accent: 'hover:border-[#38bdf8] hover:text-[#38bdf8]',
  },
  {
    name: 'Email',
    handle: 'iarsfate@gmail.com',
    icon: Mail,
    url: 'mailto:iarsfate@gmail.com',
    accent: 'hover:border-[#00ff9c] hover:text-[#00ff9c]',
  },
]

const quickLinks = [
  { id: 'home', name: 'inicio', nameEn: 'home' },
  { id: 'about', name: 'sobre-mi', nameEn: 'about' },
  { id: 'methodology', name: 'metodologia', nameEn: 'workflow' },
  { id: 'experience', name: 'experiencia', nameEn: 'experience' },
  { id: 'projects', name: 'proyectos', nameEn: 'projects' },
  { id: 'contact', name: 'contacto', nameEn: 'contact' },
]

export function Footer() {
  const currentYear = getCurrentYear()
  const [lang, setLang] = useState<'es' | 'en'>('es')
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

  return (
    <footer className="bg-[#090b10] border-t border-[#262e40] pt-12 pb-8 px-4">
      <div className="container mx-auto max-w-6xl space-y-6">
        <TerminalWindow
          title="zsh — ismael@toluca: ~/portafolio (exit 0)"
          badge="session · end"
        >
          <div className="space-y-8">
            <OmpPrompt
              path="~/portafolio"
              branch="main"
              tag="eof"
              command={
                lang === 'es'
                  ? 'echo "Gracias por pasar por aquí. ¿Construimos algo juntos?"'
                  : 'echo "Thanks for stopping by. Ready to build something together?"'
              }
              execTime="2ms"
              speed={28}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pl-2 sm:pl-4 border-l-2 border-[#262e40]">
              {/* Col 1: Bio & Social */}
              <div className="md:col-span-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-lg font-bold text-white">
                    <Terminal className="w-4 h-4 text-[#00ff9c]" />
                    <span>Ismael Salazar</span>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {lang === 'es'
                      ? 'Ingeniero en Sistemas y desarrollador web full-stack en Toluca, México. Me enfoco en crear software claro, rápido y pensado para personas reales.'
                      : 'Systems Engineer and full-stack web developer based in Toluca, Mexico. Focused on building clear, fast software designed for real people.'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#090b10] border border-[#262e40] text-xs font-mono text-[#cbd5e1] transition-colors ${social.accent}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Col 2: Directory Navigation */}
              <div className="md:col-span-3 space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#0ea5e9] font-semibold">
                  {'// ls ~/secciones'}
                </h3>
                <ul className="space-y-1.5 font-mono text-xs sm:text-sm">
                  {quickLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(link.id)}
                        className="text-[#94a3b8] hover:text-[#00ff9c] transition-colors flex items-center gap-1.5"
                      >
                        <span className="text-[#7c3aed]">❯</span>
                        <span>cd ~/{lang === 'es' ? link.name : link.nameEn}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Contact Env */}
              <div className="md:col-span-4 space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#f59e0b] font-semibold">
                  {'// cat ./contacto.env'}
                </h3>
                <div className="p-3.5 rounded-lg bg-[#090b10] border border-[#262e40] font-mono text-xs space-y-1.5">
                  <div>
                    <span className="text-[#7c3aed]">EMAIL</span>
                    <span className="text-[#64748b]">=</span>
                    <span className="text-[#e2e8f0]">&quot;iarsfate@gmail.com&quot;</span>
                  </div>
                  <div>
                    <span className="text-[#0ea5e9]">LOCATION</span>
                    <span className="text-[#64748b]">=</span>
                    <span className="text-[#e2e8f0]">&quot;Toluca, México&quot;</span>
                  </div>
                  <div>
                    <span className="text-[#10b981]">STATUS</span>
                    <span className="text-[#64748b]">=</span>
                    <span className="text-[#00ff9c]">
                      {lang === 'es' ? '"Disponible para proyectos"' : '"Open to new projects"'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#00ff9c]/10 border border-[#00ff9c]/40 text-[#00ff9c] hover:bg-[#00ff9c] hover:text-[#06121e] font-mono text-xs font-semibold transition-colors"
                >
                  <span>{lang === 'es' ? './trabajemos-juntos' : './lets-work-together'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </TerminalWindow>

        {/* Bottom tmux-style status bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#151a26] border border-[#262e40] font-mono text-[11px] text-[#94a3b8]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#10b981]/15 text-[#00ff9c] font-semibold">
              exit 0
            </span>
            <span>© {currentYear} Ismael Salazar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>{lang === 'es' ? 'Hecho con' : 'Built with'}</span>
            <Heart className="w-3.5 h-3.5 text-[#ec4899]" />
            <span>{lang === 'es' ? 'y mucho café en Toluca, MX' : 'and plenty of coffee in Toluca, MX'}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
