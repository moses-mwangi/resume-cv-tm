// app/types.ts
export interface ResumeData {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    bio?: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    avatar?: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  skills: Skill[];
  languages: { name: string; level: string; percentage: number }[];
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    achievements: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  certifications: { name: string; issuer: string; date: string }[];
  projects: Project[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5
  active: boolean;
  // level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface Project {
  id: string;
  name: string;
  description: string[];
  technologies: string[];
  link?: string;
  github?: string; //added
  highlights?: string[]; //added
  startDate?: string;
  endDate?: string;
  isHighlight?: boolean;
  isUiOnly?: boolean;
  active: boolean;
}
