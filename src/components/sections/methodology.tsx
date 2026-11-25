'use client';

import { OmpPrompt, TerminalWindow } from '@/components/ui/omp-prompt';

const steps = [
  {
    id: '01',
    cmd: 'init --discovery',
    color: '#00ff9c',
    badgeBg: '#10b981',
    titleEs: 'El Café Inicial ☕',
    titleEn: 'The Initial Coffee ☕',
    descEs:
      'Empezamos con una charla sin tecnicismos para entender qué quieres lograr, quiénes son tus usuarios y qué problema vamos a resolver primero.',
    descEn:
      'We start with a jargon-free chat to understand what you want to achieve, who your users are, and which problem we should solve first.',
    bulletsEs: ['Reunión de descubrimiento', 'Definición de alcance y KPIs', 'Plan técnico sin rodeos'],
    bulletsEn: ['Discovery session', 'Scope & KPI definition', 'Straightforward technical roadmap'],
  },
  {
    id: '02',
    cmd: 'design --wireframe',
    color: '#38bdf8',
    badgeBg: '#0ea5e9',
    titleEs: 'El Boceto Maestro 🎨',
    titleEn: 'The Master Sketch 🎨',
    descEs:
      'Antes de escribir código pesado, armamos bocetos de pantallas y estructura de datos para que veas cómo se sentirá tu proyecto desde el día uno.',
    descEn:
      'Before heavy coding, we sketch out the screens and data structure so you can see how your project will feel from day one.',
    bulletsEs: ['Arquitectura de UI/UX', 'Modelado de base de datos', 'Validación temprana'],
    bulletsEn: ['UI/UX architecture', 'Database modeling', 'Early validation'],
  },
  {
    id: '03',
    cmd: 'build --clean-code',
    color: '#c4b5fd',
    badgeBg: '#7c3aed',
    titleEs: 'Construcción & Sprints ⚡',
    titleEn: 'Build & Sprints ⚡',
    descEs:
      'Construimos por etapas cortas con avances reales cada semana. Así puedes probar, opinar y ajustar detalles sin sorpresas al final.',
    descEn:
      'We build in short stages with real progress every week, so you can test, share feedback, and fine-tune details with zero surprises.',
    bulletsEs: ['Entregas semanales visibles', 'TypeScript + pruebas', 'Optimización de rendimiento'],
    bulletsEn: ['Weekly visible milestones', 'TypeScript + testing', 'Performance optimization'],
  },
  {
    id: '04',
    cmd: 'deploy --production',
    color: '#fbbf24',
    badgeBg: '#f59e0b',
    titleEs: 'Lanzamiento & Soporte 🚀',
    titleEn: 'Launch & Support 🚀',
    descEs:
      'Publicamos tu proyecto en producción con buen rendimiento y SEO, te enseño a administrarlo y sigo disponible para futuras mejoras.',
    descEn:
      'We launch your project to production with solid performance and SEO, walk you through managing it, and stay available for future updates.',
    bulletsEs: ['Deploy CI/CD automatizado', 'SEO y analítica configurada', 'Soporte post-lanzamiento'],
    bulletsEn: ['Automated CI/CD deploy', 'SEO & analytics wired', 'Post-launch support'],
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="section-animate py-8 md:py-16 bg-[#090b10]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 space-y-3">
          <OmpPrompt
            path="~/portafolio/proceso"
            branch="main"
            tag="4 stages"
            command="./workflow.sh --steps"
            execTime="6ms"
          />
          <div className="pl-2 sm:pl-4 border-l-2 border-[#262e40]">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white font-mono"
              data-es="Mi Proceso de Trabajo"
              data-en="My Work Process"
            >
              Mi Proceso de Trabajo
            </h2>
            <p
              className="text-sm sm:text-base text-[#94a3b8] mt-1"
              data-es="Metodología clara, comunicación constante y entregas predecibles."
              data-en="Clear methodology, constant communication, and predictable delivery."
            >
              Metodología clara, comunicación constante y entregas predecibles.
            </p>
          </div>
        </div>

        <TerminalWindow title="bash — ~/proceso.sh" badge="pipeline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="p-4 rounded-lg bg-[#090b10] border border-[#262e40] hover:border-[#38bdf8]/50 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between gap-2 font-mono text-xs">
                  <span
                    className="px-2 py-0.5 rounded font-bold text-[#06121e]"
                    style={{ backgroundColor: step.badgeBg }}
                  >
                    STEP {step.id}
                  </span>
                  <span className="text-[#64748b] truncate">$ {step.cmd}</span>
                </div>

                <h3
                  className="text-lg font-bold font-mono"
                  style={{ color: step.color }}
                  data-es={step.titleEs}
                  data-en={step.titleEn}
                >
                  {step.titleEs}
                </h3>

                <p
                  className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed"
                  data-es={step.descEs}
                  data-en={step.descEn}
                >
                  {step.descEs}
                </p>

                <ul className="space-y-1 pt-1 font-mono text-xs text-[#cbd5e1]">
                  {step.bulletsEs.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: step.color }}>✓</span>
                      <span data-es={b} data-en={step.bulletsEn[i]}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
