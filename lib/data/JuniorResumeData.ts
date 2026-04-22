import { ResumeData } from "@/types/types";

export const juniorResumeData: ResumeData = {
  personal: {
    firstName: "Moses",
    lastName: "Mwangi",
    title: "Junior Full Stack Developer",
    summary:
      "Recent Computer Science graduate passionate about building web applications. Strong foundation in React, Next.js, and Node.js. Eager to contribute to real-world projects, learn from experienced engineers, and grow into a well-rounded software developer.",
    email: "moses.mwangi.me@gmail.com",
    phone: "+254 729617393",
    location: "Nairobi, Kenya",
    website: "https://moses-tm.vercel.app",
  },
  social: {
    github: "github.com/moses-mwangi",
    linkedin: "linkedin.com/in/moses-mwangi-tm",
    twitter: "twitter.com/moses-mwangi",
  },
  skills: [
    // Focus on core skills only
    { id: "f1", name: "React", category: "Frontend", level: 4, active: true },
    { id: "f2", name: "Next.js", category: "Frontend", level: 4, active: true },
    { id: "b1", name: "Node.js", category: "Backend", level: 4, active: true },
    {
      id: "b2",
      name: "Express.js",
      category: "Backend",
      level: 3,
      active: true,
    },
    {
      id: "b3",
      name: "REST APIs",
      category: "Backend",
      level: 4,
      active: true,
    },
    {
      id: "p1",
      name: "JavaScript",
      category: "Programming Languages",
      level: 4,
      active: true,
    },
    {
      id: "p2",
      name: "TypeScript",
      category: "Programming Languages",
      level: 3,
      active: true,
    },
    {
      id: "p3",
      name: "Python",
      category: "Programming Languages",
      level: 3,
      active: true,
    },
    { id: "d1", name: "MongoDB", category: "Database", level: 4, active: true },
    {
      id: "d2",
      name: "PostgreSQL",
      category: "Database",
      level: 3,
      active: true,
    },
    { id: "t1", name: "Jest", category: "Testing", level: 3, active: true },
    { id: "dev1", name: "Docker", category: "DevOps", level: 2, active: true },
    { id: "tool1", name: "Git", category: "Tools", level: 4, active: true },
  ],
  languages: [
    { name: "English", level: "Native", percentage: 100 },
    { name: "Swahili", level: "Fluent", percentage: 100 },
  ],
  experience: [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      location: "Nairobi, Kenya (Remote)",
      startDate: "2025-02",
      endDate: "2025-04",
      achievements: [
        "Built and delivered 3 client projects including a college website and restaurant UI",
        "Developed responsive web applications using Next.js, TypeScript, and MongoDB",
        "Collaborated with clients to understand requirements and deliver solutions",
      ],
    },
    {
      title: "Software Engineer Intern (Contract)",
      company: "Fibs College",
      location: "Nairobi, Kenya (Remote)",
      startDate: "2024-11",
      endDate: "2025-01",
      achievements: [
        "Assisted in building a School Management System for 200+ students",
        "Implemented student records and grading modules",
        "Learned full-stack development best practices from senior developers",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "Zetech University",
      location: "Nairobi, Kenya",
      startDate: "2021-09",
      endDate: "2024-06",
      description:
        "GPA: 3.9/4.0 • Coursework: Web Development, Databases, Algorithms",
    },
  ],
  certifications: [
    { name: "Full Stack Web Development", issuer: "Udemy", date: "2022-06" },
  ],
  projects: [
    {
      id: "1",
      name: "Resume & Cover Letter Builder",
      description: [
        "Built a web app to create professional resumes with live preview",
        "Implemented PDF export functionality",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/moses-mwangi/Resume_Builder",
      link: "https://resume-builder-tm.vercel.app/",
      startDate: "2025-01",
      endDate: "2025-03",
      active: true,
    },
    {
      id: "6",
      name: "FineDine – Restaurant UI",
      description: [
        "Designed a responsive restaurant website with modern UI/UX",
        "Implemented interactive menu and animations",
      ],
      technologies: ["React", "CSS Modules", "Framer Motion"],
      github: "https://github.com/moses-mwangi/Premium-Restaurant-UI",
      link: "https://my-restaurants-livid.vercel.app/",
      startDate: "2025-01",
      endDate: "2025-02",
      active: true,
    },
    {
      id: "5",
      name: "Personal Portfolio",
      description: [
        "Built modern portfolio to showcase projects and skills",
        "Implemented dark/light mode and responsive design",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/moses-mwangi/moses-tm",
      link: "https://moses-tm.vercel.app/",
      startDate: "2025-04",
      endDate: "2025-04",
      active: true,
    },
  ],
};
