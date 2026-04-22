import { ResumeData } from "@/types/types";

export const defaultResumeData: ResumeData = {
  personal: {
    firstName: "Moses",
    lastName: "Mwangi",
    title: "Full Stack Developer",
    summary:
      "Software Engineer with a strong foundation in building scalable web applications and AI-integrated solutions. Experienced in full-stack development with React, Next.js, and Node.js. Passionate about clean code, performance optimization, and solving real-world problems while continuously expanding expertise in modern software architectures and emerging technologies.",
    bio: "Im not using bio im using Summary",
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
    // ==================== FRONTEND ====================
    { id: "f1", name: "React", category: "Frontend", level: 5, active: true },
    { id: "f2", name: "Next.js", category: "Frontend", level: 5, active: true },
    {
      id: "f3",
      name: "React Native",
      category: "Frontend",
      level: 4,
      active: true,
    },
    // { id: "f4", name: "Vue.js", category: "Frontend", level: 4, active: true },
    // { id: "f5", name: "Angular", category: "Frontend", level: 4, active: true },

    // ==================== BACKEND ====================
    { id: "b1", name: "Node.js", category: "Backend", level: 5, active: true },
    {
      id: "b2",
      name: "Express.js",
      category: "Backend",
      level: 4,
      active: true,
    },
    {
      id: "b3",
      name: "REST APIs",
      category: "Backend",
      level: 5,
      active: true,
    },
    {
      id: "b4",
      name: "Microservices",
      category: "Backend",
      level: 5,
      active: true,
    },
    { id: "b5", name: "GraphQL", category: "Backend", level: 3, active: false },
    {
      id: "b6",
      name: "System Design",
      category: "Backend",
      level: 3,
      active: true,
    },

    // ==================== PROGRAMMING LANGUAGES ====================
    {
      id: "p1",
      name: "JavaScript",
      category: "Programming Languages",
      level: 5,
      active: true,
    },
    {
      id: "p2",
      name: "TypeScript",
      category: "Programming Languages",
      level: 4,
      active: true,
    },
    {
      id: "p3",
      name: "Python",
      category: "Programming Languages",
      level: 4,
      active: true,
    },
    {
      id: "p4",
      name: "Golang",
      category: "Programming Languages",
      level: 4,
      active: true,
    },
    {
      id: "p5",
      name: "Rust",
      category: "Programming Languages",
      level: 4,
      active: true,
    },

    // ==================== DATABASE & CACHING ====================
    {
      id: "d1",
      name: "MongoDB",
      category: "Database & Caching",
      level: 5,
      active: true,
    },
    {
      id: "d2",
      name: "PostgreSQL",
      category: "Database & Caching",
      level: 4,
      active: true,
    },
    {
      id: "d3",
      name: "SQL",
      category: "Database & Caching",
      level: 4,
      active: true,
    },
    {
      id: "d4",
      name: "Firebase",
      category: "Database & Caching",
      level: 4,
      active: true,
    },
    {
      id: "d5",
      name: "Redis",
      category: "Database & Caching",
      level: 3,
      active: true,
    },

    // ==================== TESTING (NEW CATEGORY) ====================
    { id: "t1", name: "Jest", category: "Testing", level: 4, active: true },
    { id: "t2", name: "Vitest", category: "Testing", level: 3, active: true },
    { id: "t3", name: "Cypress", category: "Testing", level: 3, active: true },
    {
      id: "t4",
      name: "Unit Testing",
      category: "Testing",
      level: 4,
      active: false,
    },
    {
      id: "t5",
      name: "React Testing Library",
      category: "Testing",
      level: 3,
      active: false,
    },

    // ==================== DEVOPS & CLOUD ====================
    {
      id: "dev1",
      name: "Docker",
      category: "DevOps & Cloud",
      level: 4,
      active: true,
    },
    {
      id: "dev2",
      name: "AWS",
      category: "DevOps & Cloud",
      level: 4,
      active: false,
    },
    {
      id: "dev3",
      name: "Vercel",
      category: "DevOps & Cloud",
      level: 5,
      active: false,
    },
    {
      id: "dev4",
      name: "Cloud Deployment",
      category: "DevOps & Cloud",
      level: 5,
      active: true,
    },
    {
      id: "dev5",
      name: "Kubernetes",
      category: "DevOps & Cloud",
      level: 3,
      active: false,
    },
    {
      id: "dev6",
      name: "Terraform",
      category: "DevOps & Cloud",
      level: 2,
      active: true,
    },
    {
      id: "dev7",
      name: "Infrastructure as Code",
      category: "DevOps & Cloud",
      level: 2,
      active: true,
    },

    // ==================== MESSAGE QUEUES (NEW CATEGORY) ====================
    {
      id: "mq1",
      name: "RabbitMQ",
      category: "Message Queues",
      level: 2,
      active: true,
    },
    {
      id: "mq2",
      name: "Kafka",
      category: "Message Queues",
      level: 2,
      active: true,
    },

    // ==================== TOOLS & PLATFORMS ====================
    {
      id: "tool1",
      name: "Git & CI/CD",
      category: "Tools & Platforms",
      level: 5,
      active: true,
    },
    {
      id: "tool2",
      name: "GitHub",
      category: "Tools & Platforms",
      level: 5,
      active: true,
    },
    {
      id: "tool3",
      name: "Figma",
      category: "Tools & Platforms",
      level: 3,
      active: true,
    },

    // ==================== AI DEVELOPMENT TOOLS (NEW) ====================
    {
      id: "ait1",
      name: "Cursor",
      category: "AI Development Tools",
      level: 4,
      active: true,
    },
    {
      id: "ait2",
      name: "Windsurf",
      category: "AI Development Tools",
      level: 3,
      active: true,
    },
    {
      id: "ait3",
      name: "GitHub Copilot",
      category: "AI Development Tools",
      level: 4,
      active: true,
    },
    {
      id: "ait4",
      name: "Claude Code",
      category: "AI Development Tools",
      level: 3,
      active: true,
    },
    {
      id: "ait5",
      name: "Open Code",
      category: "AI Development Tools",
      level: 3,
      active: true,
    },

    // ==================== AUTOMATION & INTEGRATIONS ====================
    // {
    //   id: "auto1",
    //   name: "Workflow Automation",
    //   category: "Automation",
    //   level: 5,
    //   active: true,
    // },
    // {
    //   id: "auto2",
    //   name: "API Integrations",
    //   category: "Automation",
    //   level: 3,
    //   active: true,
    // },

    // ==================== AI & MACHINE LEARNING ====================
    // {
    //   id: "ai1",
    //   name: "AI Agents",
    //   category: "AI / Machine Learning",
    //   level: 5,
    //   active: true,
    // },
    // {
    //   id: "ai2",
    //   name: "Machine Learning",
    //   category: "AI / Machine Learning",
    //   level: 5,
    //   active: true,
    // },
    // {
    //   id: "ai3",
    //   name: "NLP Integration",
    //   category: "AI / Machine Learning",
    //   level: 3,
    //   active: true,
    // },
    // {
    //   id: "ai4",
    //   name: "Prompt Engineering",
    //   category: "AI / Machine Learning",
    //   level: 3,
    //   active: true,
    // },
  ],

  languages: [
    { name: "English", level: "Native", percentage: 100 },
    { name: "Swahili", level: "Fluent", percentage: 100 },
    // { name: "French", level: "Intermediate", percentage: 60 },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "KivaMall Inc.",
      location: "Nairobi, Kenya",
      startDate: "2024-02",
      endDate: "2024-06",
      achievements: [
        "Developed an e-commerce platform serving 500+ monthly active users",
        "Built authentication, product management, and payment workflows using Next.js and Node.js",
        "Reduced page load time by 40% through code splitting and image optimization",
        "Implemented RESTful APIs handling 10k+ requests daily",
        "Deployed and maintained platform on Vercel with 99.9% uptime",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Vydu INC",
      location: "New York, USA (Remote)",
      startDate: "2024-07",
      endDate: "2024-10",
      achievements: [
        "Developed AI-driven features including intelligent automation and data analytics dashboards",
        "Built and integrated REST APIs serving 5k+ daily requests",
        "Reduced API response time by 35% through query optimization and caching",
        "Collaborated with product team to ship 3 major features on schedule",
      ],
    },
    {
      title: "Software Engineer (Contract)",
      company: "Fibs College",
      location: "Nairobi, Kenya (Remote)",
      startDate: "2024-11",
      endDate: "2025-01",
      achievements: [
        "Built a School Management System handling 200+ students and 15 faculty members",
        "Implemented student records, grading, attendance, and reporting modules",
        "Reduced manual data entry time by 60% through workflow automation",
        "Deployed system with zero critical bugs in first 3 months",
      ],
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      location: "Nairobi, Kenya (Remote)",
      startDate: "2025-02",
      endDate: "2025-04",
      achievements: [
        "Delivered 3 client projects including a college website and restaurant UI",
        "Built responsive web applications using Next.js, TypeScript, and MongoDB",
        "Integrated third-party APIs and implemented authentication systems",
        "Managed end-to-end project delivery from requirements to deployment",
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
      description: "GPA: 3.9/4.0 • Specialization in Web Technologies",
    },
  ],
  certifications: [
    { name: "Full Stack Web Development", issuer: "Udemy", date: "2022-06" },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Service",
      date: "2023-11",
    },
    {
      name: "Artificial Intelligence (ML,DL)",
      issuer: "Udemy",
      date: "2024-01",
    },
  ],

  projects: [
    // ========== YOUR PORTFOLIO ==========
    {
      id: "5",
      name: "Personal Portfolio & Developer Hub",
      description: [
        "Designed and built a modern developer portfolio showcasing skills, projects, and experience",
        "Implemented dark/light mode with smooth animations and responsive layouts",
        "Organized skills with categorized filtering and dynamic project cards",
        "Optimized for performance, accessibility, and SEO",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "ShadCn",
        "Framer Motion",
        // "React Intersection Observer",
        // "Vercel",
        // "GitHub Actions",
      ],
      github: "https://github.com/moses-mwangi/moses-tm", // replace with your actual repo
      link: "https://moses-tm.vercel.app/", // replace with your actual URL
      startDate: "2025-04",
      endDate: "2025-04",
      isHighlight: true, // optional flag for featured projects
      active: true,
    },

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
        // "React 19",
        "TypeScript",
        "Tailwind CSS",
        "ShadCn",
        // "React Hook Form",
        // "Zod",
        "React-To-Print",
        // "LocalStorage API",
        "PostgreSQL",
      ],
      github: "https://github.com/moses-mwangi/Resume_Builder",
      link: "https://resume-builder-tm.vercel.app/",
      startDate: "2025-01",
      endDate: "2025-03",
      active: true,
    },

    // ========== RESTAURANT UI PROJECT ==========
    {
      id: "6",
      name: "FineDine – Premium Restaurant UI",
      description: [
        "Designed a high-end restaurant website with elegant UI/UX and smooth animations",
        "Created interactive menu system with category filtering and item modals",
        "Implemented responsive design for mobile, tablet, and desktop views",
        "Showcased advanced CSS skills including grid, flexbox, and custom animations",
      ],
      technologies: [
        "React",
        "CSS Modules",
        "Framer Motion",
        "Responsive Design",
      ],
      github: "https://github.com/moses-mwangi/Premium-Restaurant-UI", // replace
      link: "https://my-restaurants-livid.vercel.app/", // replace
      startDate: "2025-01",
      endDate: "2025-02",
      isUiOnly: true, // optional: flag to indicate UI-focused
      active: true,
    },

    // ========== FINS COLLEGE SITE ==========
    {
      id: "7",
      // name: "Fins College – Educational Institution Website",
      name: "Fibs College – Education Administration System",
      description: [
        "Built a complete college website with course listings, faculty profiles, and admission info",
        "Implemented dynamic course catalog with search and filter functionality",
        "Created admin dashboard for content management (if applicable)",
        "Ensured accessibility compliance and mobile-first responsive design",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "ShadCn",
        "MongoDB",
        "Node.js",
        "Express.js",
        // "NextAuth.js",
        // "React Query",
      ],
      github: "https://github.com/moses-mwangi/Fibs-Technical-College-V1", // replace
      link: "https://fibs-technical-college-v1.vercel.app/", // replace
      startDate: "2024-09",
      endDate: "2024-12",
      active: true,
    },

    // ========== YOUR EXISTING PROJECTS ==========

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
        "Express.js",
        "PostgreSQL",
        // "Sequilize",
        "Socket.IO",
        "Google Maps API",
        "Geolocation API",
        // "JWT",
        // "Bcrypt",
      ],
      github: "https://github.com/moses-mwangi/GasPoint",
      link: "", // leave empty if not deployed
      startDate: "2025-03",
      endDate: "2025-06",
      active: true,
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
      // technologies: ["JavaScript", "Chrome Extensions API", "HTML", "CSS"],
      technologies: [
        "JavaScript (ES6+)",
        "Chrome Extensions Manifest V3",
        "Chrome Storage API",
        "Chrome Tabs API",
        "HTML5",
        "CSS3",
      ],
      github: "https://github.com/moses-mwangi/quiet-interface-extension",
      link: "", // Chrome Web Store link if published
      startDate: "2025-02",
      endDate: "2025-02",
      active: false,
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
        "TypeScript",
        "OpenAI API (GPT-4)",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        // "LangChain",
        // "Vercel AI SDK",
      ],
      github: "https://github.com/moses-mwangi/ai-career-assistant",
      link: "",
      startDate: "2025-04",
      endDate: "Present",
      active: false,
    },
  ],
};
