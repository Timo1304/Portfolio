import React from 'react';
import { PortfolioData } from '@/types';

interface HeroProps {
  data: PortfolioData['hero'];
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-(--text-primary)">
        {data.name}.
      </h1>

      <h2 className="text-2xl md:text-4xl font-medium mb-6 text-(--text-secondary)">
        {data.title}
      </h2>

      <p className="text-xl md:text-2xl max-w-2xl mb-4 text-(--text-primary)">
        {data.punchline}
      </p>

      <p className="
        text-base md:text-lg max-w-2xl mb-1
        text-(--text-muted)
        border-l-2 border-(--border-default) pl-4
      ">
        {data.subline}
      </p>

      <p className="
        text-base md:text-lg max-w-2xl mb-10
        text-(--text-muted)
        border-l-2 border-(--border-default) pl-4
      ">
        {data.subline1}
      </p>

      <div className="flex gap-4">
        {/* Primary CTA — solid accent */}
        <a
          href="#projects"
          className="
            bg-(--accent-bg)
            text-(--text-inverse)
            px-6 py-3 rounded-md font-semibold
            hover:opacity-85
            active:scale-[0.98]
            transition-all duration-200
          "
        >
          View Work &rarr;
        </a>

        {/* Secondary CTA — ghost */}
        <a
          href="#contact"
          className="
            bg-transparent
            border border-(--border-default)
            text-(--text-primary)
            px-6 py-3 rounded-md font-semibold
            hover:border-(--border-strong)
            hover:bg-(--bg-elevated)
            active:scale-[0.98]
            transition-all duration-200
          "
        >
          Contact
        </a>
      </div>
    </section>
  );
};
