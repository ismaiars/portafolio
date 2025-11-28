'use client';

import { ProjectCard } from '@/components/ui/project-card';
import { projectsData } from '@/data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="section-animate py-8 md:py-16 bg-terminal-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-accent-green" data-es="Mis Proyectos Destacados" data-en="My Featured Projects">
          Mis Proyectos Destacados
        </h2>
        <p className="text-xl text-center mb-8 text-text-secondary max-w-3xl mx-auto" data-es="Soluciones creativas | Código limpio | Experiencias memorables" data-en="Creative solutions | Clean code | Memorable experiences">
          Soluciones creativas | Código limpio | Experiencias memorables
        </p>
        <p className="projects-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único y una oportunidad de aprender algo nuevo mientras creo soluciones efectivas." data-en="Here you can see some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn something new while creating effective solutions.">
          Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único
          y una oportunidad de aprender algo nuevo mientras creo soluciones efectivas.
        </p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}