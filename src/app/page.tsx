import { Hero }     from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills }   from '@/components/Skills';
import { Contact }  from '@/components/Contacts';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero     data={portfolioData.hero} />
      <Projects projects={portfolioData.projects} />
      <Skills   skills={portfolioData.skills} />
      <Contact
        contact={portfolioData.contact}
        className="md:flex md:justify-center"
      />

      <footer className="
        py-8 text-center text-sm font-mono
        text-(--text-muted)
        border-t border-(--border-subtle)
        bg-(--bg-base)
      ">
        &copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
      </footer>
    </main>
  );
}
