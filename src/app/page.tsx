import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contacts';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-zinc-800 selection:text-white">
      <Hero data={portfolioData.hero} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Contact contact={portfolioData.contact} className="md:flex md:justify-center" />
      
      <footer className="py-8 text-center text-zinc-600 text-sm font-mono border-t border-zinc-900">
        &copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
      </footer>
    </main>
  );
}