import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/50">
      <h3 className="text-3xl font-bold mb-12">Featured Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-zinc-800 p-8 rounded-lg bg-zinc-950 hover:border-zinc-600 transition-colors flex flex-col">
            
            {/* Media Rendering Logic*/}
            {(project.video || project.image) && (
              <div className="mb-6 rounded-md overflow-hidden border border-zinc-800/50 bg-zinc-900 aspect-video relative">
                {project.video ? (
                  <video 
                    src={project.video}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
                  />
                ) : (
                  <Image
                    src={project.image!} 
                    alt={`${project.title} interface`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
                  />
                )}
              </div>
            )}

            <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
            <p className="text-zinc-400 mb-6 grow">{project.pitch}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.ctaLink || "#contact"} 
              className="mt-auto text-sm font-semibold text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white transition-colors self-start"
            >
              {project.ctaText} &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};