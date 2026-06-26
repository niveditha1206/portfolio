export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  experience: string;
  company: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  designation: string;
  shortDescription: string;
}
