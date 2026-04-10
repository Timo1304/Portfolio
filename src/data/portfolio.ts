import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  hero: {
    name: "Timothy",
    title: "Frontend Engineer",
    punchline: "I build production-ready web apps that drive business.",
    subline: "Currently building SteadyLoop (mental health platform, closed beta) using Next.js & TypeScript.",
  },
  projects: [
    {
      id: "steadyloop",
      title: "SteadyLoop",
      pitch: "Privacy-first mental health tracking, mood patterns, and crisis alerts.",
      techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      ctaText: "Private Demo Available",
      video: "/steadyloop-demo.webm",
    },
    {
      id: "marketing-page",
      title: "High-Performance Landing Page",
      pitch: "SEO-optimized, ultra-fast marketing funnel conversion page.",
      techStack: ["React", "Tailwind CSS"],
      ctaText: "Live Demo",
      ctaLink: "https://tfrealestatesdemo.netlify.app/", 
      image: "/marketingdemo.png",
    },
    {
      id: "automation",
      title: "Workflow Automation",
      pitch: "Containerised automation workflows for business operations.",
      techStack: ["Docker", "n8n", "Zapier"],
      ctaText: "View Architecture",
    }
  ],
  skills: [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend / Data",
      skills: ["Supabase", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Automation / Ops",
      skills: ["Docker", "GCP", "AWS", "n8n", "Zapier", "GitHub", "Vercel"]
    }
  ],
  contact: [
    {
      platform: "Email",
      value: "tfinomo@gmail.com",
      href: "mailto:tfinomo@gmail.com"
    },
    {
      platform: "WhatsApp",
      value: "Let's Talk Business",
      href: "https://wa.me/2348109736483?text=Hi%20Timothy,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project." 
    },
    {
      platform: "GitHub",
      value: "View My Code", 
      href: "https://github.com/Timo1304"
    },
    {
    platform: "LinkedIn",
    value: "Let's Connect", 
    href: "https://www.linkedin.com/in/timothy-finomo-522bb1241/"
    }
  ]
};