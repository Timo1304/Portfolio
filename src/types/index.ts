export interface Project {
  id: string;
  title: string;
  pitch: string;
  techStack: string[];
  ctaText: string;
  ctaLink?: string; 
  video?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactMethod {
  platform: string;
  value: string;
  href: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    punchline: string;
    subline: string;
    subline1: string;
  };
  projects: Project[];
  skills: SkillCategory[];
  contact: ContactMethod[];
}