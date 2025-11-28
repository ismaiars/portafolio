'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={`project-card project-mobile bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden ${project.borderHoverClass} transition-all duration-300 group`}>
            <div className="project-image relative overflow-hidden">
                <Image
                    src={project.image}
                    alt={`${project.title} - ${project.type.es}`}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                    <span className={`${project.categoryColorClass} text-terminal-bg px-3 py-1 rounded-full text-sm font-bold`}>
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="project-header p-4 md:p-6 border-b border-terminal-border">
                <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${project.accentColorClass}`}>{project.title}</h3>
                    <span
                        className={`project-type px-3 py-1 ${project.categoryColorClass}/20 ${project.accentColorClass} rounded-full text-sm font-medium`}
                        data-es={project.type.es}
                        data-en={project.type.en}
                    >
                        {project.type.es}
                    </span>
                </div>

                <div className={`bg-gradient-to-r ${project.gradientClass} rounded-lg p-4 mb-4`}>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {project.techStack.map((tech) => (
                            <div key={tech.name}>
                                <div className={`text-lg font-bold ${tech.colorClass}`}>{tech.name}</div>
                                <div className="text-xs text-text-secondary">{tech.role}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <p
                    className="text-text-secondary leading-relaxed mb-4"
                    data-es={project.challenge.es}
                    data-en={project.challenge.en}
                >
                    {project.challenge.es}
                </p>
            </div>

            <div className="project-details p-4 md:p-6">
                <div className="mb-4">
                    <h4 className={`${project.accentColorClass} font-semibold mb-3 flex items-center gap-2`} data-es="💰 RESULTADOS ENTREGADOS:" data-en="💰 DELIVERED RESULTS:">
                        <span className="text-lg">💰</span>
                        RESULTADOS ENTREGADOS:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                        {project.results.map((result, index) => (
                            <div key={index} className={`bg-terminal-bg/50 rounded-lg p-3 border ${result.colorClass.replace('text-', 'border-')}/20`}>
                                <div className="flex items-start gap-2">
                                    <span className={`${result.colorClass} mt-1 text-lg`}>{result.icon}</span>
                                    <div>
                                        <div
                                            className={`font-semibold ${result.colorClass} text-sm`}
                                            data-es={result.title.es}
                                            data-en={result.title.en}
                                        >
                                            {result.title.es}
                                        </div>
                                        <div
                                            className="text-xs text-text-secondary"
                                            data-es={result.description.es}
                                            data-en={result.description.en}
                                        >
                                            {result.description.es}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="technologies mb-4">
                    <h4 className="text-accent-purple font-semibold mb-2" data-es="Tecnologías:" data-en="Technologies:">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag px-2 py-1 bg-terminal-border text-text-primary rounded text-xs font-mono flex items-center gap-1">
                                {tech.icon}
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="project-links flex gap-3">
                    {project.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full ${link.colorClass} px-4 py-2 rounded text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                            {link.icon === 'external' ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                            <span data-es={link.label.es} data-en={link.label.en}>{link.label.es}</span>
                        </a>
                    ))}
                </div>

                {project.badge && (
                    <div className="mt-3 text-center">
                        <span
                            className={`text-xs font-semibold px-2 py-1 rounded ${project.badge.colorClass}`}
                            data-es={project.badge.text.es}
                            data-en={project.badge.text.en}
                        >
                            {project.badge.text.es}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
