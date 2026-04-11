import React from 'react';
import { PortfolioData } from '@/types';

interface HeroProps {
  data: PortfolioData['hero'];
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
        {data.name}.
      </h1>
      <h2 className="text-2xl md:text-4xl text-zinc-400 font-medium mb-6">
        {data.title}
      </h2>
      <p className="text-xl md:text-2xl max-w-2xl text-zinc-300 mb-4">
        {data.punchline}
      </p>
      <p className="text-base md:text-lg max-w-2xl text-zinc-500 mb-1 border-l-2 border-zinc-700 pl-4">
        {data.subline}
      </p>
      <p className="text-base md:text-lg max-w-2xl text-zinc-500 mb-10 border-l-2 border-zinc-700 pl-4">{data.subline1}</p>
      <div className="flex gap-4">
        <a 
          href="#projects" 
          className="bg-white text-zinc-950 px-6 py-3 rounded-md font-semibold hover:bg-zinc-200 transition-colors"
        >
          View Work &rarr;
        </a>
        <a 
          href="#contact" 
          className="bg-transparent border border-zinc-700 px-6 py-3 rounded-md font-semibold hover:border-zinc-500 transition-colors"
        >
          Contact
        </a>
      </div>
    </section>
  );
};