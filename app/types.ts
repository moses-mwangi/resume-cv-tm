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
}

export const defaultResumeData: ResumeData = {
  personal: {
    firstName: "John",
    lastName: "Doe",
    title: "Senior Full Stack Developer",
    bio: "Passionate software engineer with 8+ years of experience building scalable web applications. Expert in React, Next.js, Node.js, and cloud technologies.",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "johndoe.dev",
  },
  social: {
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    twitter: "twitter.com/johndoe",
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
    { name: "Spanish", level: "Fluent", percentage: 85 },
    { name: "French", level: "Intermediate", percentage: 60 },
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "2022",
      endDate: "Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Improved application performance by 40% through code optimization",
        "Mentored 5 junior developers and conducted code reviews",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub",
      location: "San Francisco, CA",
      startDate: "2019",
      endDate: "2022",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with design team to improve UX/UI components",
      ],
    },
    {
      title: "Junior Developer",
      company: "WebSolutions",
      location: "New York, NY",
      startDate: "2017",
      endDate: "2019",
      achievements: [
        "Developed and maintained client websites using modern frameworks",
        "Created reusable component libraries for internal use",
        "Assisted in database design and optimization",
      ],
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: "2015",
      endDate: "2017",
      description: "GPA: 3.9/4.0 • Specialization in Web Technologies",
    },
    {
      degree: "B.S. in Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2011",
      endDate: "2015",
      description: "Cum Laude • Dean's List 2013-2015",
    },
  ],
  certifications: [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    { name: "Meta Backend Developer", issuer: "Coursera", date: "2022" },
  ],
};
