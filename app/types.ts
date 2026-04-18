// app/types.ts
export interface ResumeData {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    avatar?: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  skills: string[];
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
}

export const defaultResumeData: ResumeData = {
  personal: {
    firstName: "Moses",
    lastName: "Mwangi",
    title: "Senior Full Stack Developer",
    bio: "Passionate software engineer with 8+ years of experience building scalable web applications. Expert in React, Next.js, Node.js, and cloud technologies.",
    email: "moses.mwangi.me@gmail.com",
    phone: "+254 729617393",
    location: "Nairobi, Kenya",
    website: "https://moses-tm.vercel.app",
  },
  social: {
    github: "github.com/moses-mwangi",
    linkedin: "linkedin.com/in/moses-mwangi-tm",
    // linkedins: "linkedin.com/in/moses-mwangi-tm",
    twitter: "twitter.com/johnd",
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Tailwind",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  languages: [
    { name: "English", level: "Native", percentage: 100 },
    { name: "Swahili", level: "Fluent", percentage: 100 },
    // { name: "French", level: "Intermediate", percentage: 60 },
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "KivaMall Inc.",
      location: "Nairobi, Kenya",
      startDate: "2022",
      endDate: "Present",
      achievements: [
        " Founded and developed an e-commerce platform from concept to deployment",
        "Built full-stack architecture including user authentication, product management, and payment workflows",
        "Designed scalable backend systems and responsive front-end interfaces",
        "Led product development, feature design, and system improvements",
        "Managed deployment and ongoing maintenance of the platform",
      ],
    },
    {
      title: "AI Engineer / Full Stack Developer",
      company: "Vydu INC",
      location: "New York, USA",
      startDate: "2019",
      endDate: "2022",
      achievements: [
        "Developed and maintained full-stack web applications using modern frameworks and scalable architectures",
        "Designed and implemented AI-driven features, including intelligent automation and data-driven decision systems",
        "Built and integrated APIs to support dynamic front-end functionality",
        "Collaborated with cross-functional teams to deliver production-ready solutions",
        "Optimized application performance and improved system efficiency",
      ],
    },
    {
      title: "Software Engineer (Contract)",
      company: "Fibs College",
      location: "Nairobi, Kenya (remote)",
      startDate: "2017",
      endDate: "2019",
      achievements: [
        "Designed and developed a School Management System to streamline academic and administrative processes",
        "Implemented modules for student records, grading, attendance, and reporting",
        "Improved operational efficiency through automation of manual workflows",
        "Provided system deployment, testing, and user trainin",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "Zetech University",
      location: "Nairobi, Kenya",
      startDate: "2015",
      endDate: "2017",
      description: "GPA: 3.9/4.0 • Specialization in Web Technologies",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Service",
      date: "2023-11",
    },
    {
      name: "Artificial Intelligence (ML,DL)",
      issuer: "Udemy",
      date: "2023-01",
    },
    { name: "Full Stack Web Development", issuer: "Udemy", date: "2024-06" },
  ],

  projects: [
    {
      id: "1",
      name: "Resume & Cover Letter Builder",
      description: [
        "Built a web app to create and customize professional resumes and cover letters",
        "Implemented multiple modern templates with live preview functionality",
        "Enabled export to PDF using browser print optimization",
        "Designed reusable and scalable component architecture",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React-to-Print",
      ],
      github: "https://github.com/yourusername/resume-builder",
      link: "/",
      startDate: "2025-01",
      endDate: "2025-03",
    },
    {
      id: "2",
      name: "GasPoint – On-Demand Fuel Delivery Platform",
      description: [
        "Developed a platform connecting users with nearby fuel delivery services",
        "Implemented real-time location tracking and delivery updates",
        "Integrated maps and geolocation for route optimization",
        "Built scalable backend for handling orders and user management",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "Socket.io",
      ],
      github: "https://github.com/yourusername/gaspoint",
      link: "/",
      startDate: "2025-03",
      endDate: "2025-06",
    },
    {
      id: "3",
      name: "ScrollGuard – Chrome Extension",
      description: [
        "Created a Chrome extension to limit excessive scrolling on distracting websites",
        "Tracked user scroll behavior and displayed real-time feedback",
        "Allowed users to configure limits and blocked sites",
        "Optimized for performance with minimal resource usage",
      ],
      technologies: ["JavaScript", "Chrome Extensions API", "HTML", "CSS"],
      github: "https://github.com/yourusername/scrollguard",
      link: "/",
      startDate: "2025-02",
      endDate: "2025-02",
    },
    {
      id: "4",
      name: "AI Career Assistant Platform",
      description: [
        "Built an AI-powered platform for career guidance and job preparation",
        "Implemented resume analysis with intelligent improvement suggestions",
        "Developed mock interview simulations with AI-generated feedback",
        "Created personalized career recommendations based on user input",
      ],
      technologies: [
        "Next.js",
        "OpenAI API",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
      ],
      github: "https://github.com/yourusername/ai-career-assistant",
      link: "/",
      startDate: "2025-04",
      endDate: "Present",
    },
  ],
};
