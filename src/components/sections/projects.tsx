'use client';

import { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { OmpPrompt } from '@/components/ui/omp-prompt';
import { projectsData } from '@/data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projectsData.map((p) => p.category)));
    return ['ALL', ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="proyectos" className="section-animate py-8 md:py-16 bg-[#090b10]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 space-y-4">
          <OmpPrompt
            path="~/portafolio/proyectos"
            branch="main"
            tag={`${filteredProjects.length} repos`}
            command={
              selectedCategory === 'ALL'
                ? 'ls -la ./proyectos --featured'
                : `ls -la ./proyectos --category="${selectedCategory}"`
            }
            execTime="8ms"
          />

          <div className="pl-2 sm:pl-4 border-l-2 border-[#262e40] space-y-2">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white font-mono"
              data-es="Proyectos Destacados"
              data-en="Featured Projects"
            >
              Proyectos Destacados
            </h2>
            <p
              className="text-sm sm:text-base text-[#94a3b8] max-w-3xl leading-relaxed"
              data-es="Cada proyecto aquí nació de una necesidad real: desde automatizar inventarios y puntos de venta hasta crear sitios web rápidos que convierten visitas en clientes."
              data-en="Every project here started from a real-world need: from automating inventory and point-of-sale workflows to building fast websites that turn visitors into customers."
            >
              Cada proyecto aquí nació de una necesidad real: desde automatizar inventarios y puntos de venta hasta crear sitios web rápidos que convierten visitas en clientes.
            </p>
          </div>

          {/* CLI Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-xs">
            <span className="text-[#64748b] mr-1">$ filter:</span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === 'ALL'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-md border transition-colors ${
                    isActive
                      ? 'bg-[#00ff9c]/15 text-[#00ff9c] border-[#00ff9c]/50 font-semibold'
                      : 'bg-[#151a26] text-[#94a3b8] border-[#262e40] hover:text-[#e2e8f0] hover:border-[#38bdf8]/40'
                  }`}
                >
                  {cat === 'ALL' ? '--all' : `--${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  <span className="ml-1.5 text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
