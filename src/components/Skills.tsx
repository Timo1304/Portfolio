import React from 'react';
import { SkillCategory } from '@/types';

interface SkillsProps {
  skills: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <h3 className="text-3xl font-bold mb-12">Technical Arsenal</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skills.map((category) => (
          <div key={category.title}>
            <h4 className="text-lg font-semibold text-zinc-300 mb-4 border-b border-zinc-800 pb-2">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-zinc-500 font-mono text-sm">
                  &bull; {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};