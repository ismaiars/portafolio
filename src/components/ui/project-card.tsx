'use client';

import Image from 'next/image';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const slug = project.title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return (
    <article className="project-card flex flex-col bg-[#0d111a] border border-[#262e40] hover:border-[#00ff9c]/60 rounded-xl overflow-hidden transition-all duration-300 group shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]">
      {/* Terminal Pane Titlebar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#151a26] border-b border-[#262e40]">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="font-mono text-[11px] text-[#94a3b8] truncate">
            ~/proyectos/{slug}
          </span>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#7c3aed]/20 text-[#c4b5fd] border border-[#7c3aed]/30 shrink-0">
          {project.category}
        </span>
      </div>

      {/* Preview Image */}
      <div className="relative overflow-hidden border-b border-[#262e40]">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.type.es}`}
          width={400}
          height={192}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d111a] via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between">
          <span
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#090b10]/90 text-[#00ff9c] border border-[#00ff9c]/30"
            data-es={project.type.es}
            data-en={project.type.en}
          >
            {project.type.es}
          </span>
        </div>
      </div>

      {/* Header & Challenge */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col space-y-4">
        <div>
          <h3 className="text-xl font-bold font-mono text-white group-hover:text-[#00ff9c] transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#7c3aed] shrink-0" />
            <span>{project.title}</span>
          </h3>
          <p
            className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mt-2"
            data-es={project.challenge.es}
            data-en={project.challenge.en}
          >
            {project.challenge.es}
          </p>
        </div>

        {/* Stack Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-[#090b10] border border-[#262e40] text-center font-mono">
          {project.techStack.map((tech) => (
            <div key={tech.name} className="min-w-0">
              <div className={`text-xs font-bold leading-tight break-words ${tech.colorClass}`}>{tech.name}</div>
              <div className="text-[10px] text-[#64748b] leading-tight mt-0.5">{tech.role}</div>
            </div>
          ))}
        </div>

        {/* Delivered Results */}
        <div className="space-y-2">
          <h4
            className="font-mono text-[11px] uppercase tracking-wider text-[#0ea5e9] font-semibold"
            data-es="// resultados_entregados"
            data-en="// delivered_results"
          >
            {'// resultados_entregados'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="bg-[#090b10] rounded-md p-2.5 border border-[#262e40] flex items-start gap-2"
              >
                <span className={`${result.colorClass} text-sm shrink-0`}>{result.icon}</span>
                <div className="min-w-0">
                  <div
                    className={`font-mono font-semibold ${result.colorClass} text-xs leading-snug`}
                    data-es={result.title.es}
                    data-en={result.title.en}
                  >
                    {result.title.es}
                  </div>
                  <div
                    className="text-[11px] text-[#94a3b8] leading-snug"
                    data-es={result.description.es}
                    data-en={result.description.en}
                  >
                    {result.description.es}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-[#151a26] border border-[#262e40] text-[#cbd5e1] rounded text-[11px] font-mono inline-flex items-center gap-1"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 flex gap-2.5">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 px-3 py-2 rounded-md text-center font-mono text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 border ${
              link.icon === 'external'
                ? 'bg-[#00ff9c]/10 text-[#00ff9c] border-[#00ff9c]/40 hover:bg-[#00ff9c] hover:text-[#06121e]'
                : 'bg-[#151a26] text-[#e2e8f0] border-[#262e40] hover:border-[#7c3aed] hover:text-[#c4b5fd]'
            }`}
          >
            {link.icon === 'external' ? (
              <ExternalLink className="w-3.5 h-3.5" />
            ) : (
              <Github className="w-3.5 h-3.5" />
            )}
            <span data-es={link.label.es} data-en={link.label.en}>
              {link.label.es}
            </span>
          </a>
        ))}
      </div>
    </article>
  );
}
