import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-surface)]"
    >
      <h3 className="text-3xl font-bold mb-12 text-[var(--text-primary)]">
        Featured Work
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group flex flex-col
              border border-[var(--border-subtle)]
              bg-[var(--bg-base)]
              p-8 rounded-lg
              hover:border-[var(--border-strong)]
              hover:shadow-[var(--shadow-lg)]
              transition-all duration-300
            "
          >
            {/* Media block */}
            {(project.video || project.image) && (
              <div className="
                mb-6 rounded-md overflow-hidden
                border border-[var(--border-subtle)]
                bg-[var(--bg-elevated)]
                aspect-video relative
              ">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                ) : null}

                {project.video && (
                  <div className="
                    absolute top-3 right-3
                    px-2 py-1
                    bg-red-600/80 backdrop-blur-sm
                    text-[10px] font-bold uppercase tracking-widest text-white
                    rounded
                  ">
                    Live Intel
                  </div>
                )}
              </div>
            )}

            <h4 className="
              text-2xl font-semibold mb-3
              text-[var(--text-primary)]
              group-hover:text-[var(--accent-fg)]
              transition-colors duration-200
            ">
              {project.title}
            </h4>

            <p className="text-[var(--text-secondary)] mb-6 grow leading-relaxed">
              {project.pitch}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs font-mono
                    bg-[var(--bg-elevated)]
                    border border-[var(--border-subtle)]
                    text-[var(--text-muted)]
                    px-2 py-1 rounded
                    group-hover:border-[var(--border-default)]
                    transition-colors duration-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.ctaLink || "#contact"}
              target={project.ctaLink?.startsWith('http') ? "_blank" : undefined}
              rel={project.ctaLink?.startsWith('http') ? "noopener noreferrer" : undefined}
              className="
                mt-auto self-start
                text-sm font-semibold
                text-[var(--text-primary)]
                underline decoration-[var(--border-default)] underline-offset-4
                hover:decoration-[var(--text-primary)]
                transition-all duration-200
              "
            >
              {project.ctaText} &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
