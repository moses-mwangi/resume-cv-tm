// // app/components/Template1_Modern.tsx
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
//   Award,
//   BookOpen,
//   Briefcase,
//   GraduationCap,
//   Briefcase as Github,
//   Briefcase as Linkedin,
//   Briefcase as Twitter,
// } from "lucide-react";
// import { ResumeData } from "../../app/types";

// export default function TemplateModern({ data }: { data: ResumeData }) {
//   return (
//     <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
//       <div className="bg-emerald-700 px-8 py-10 text-white">
//         <h1 className="text-5xl font-bold mb-2">
//           {data.personal.firstName}{" "}
//           <span className="text-emerald-200">{data.personal.lastName}</span>
//         </h1>
//         <p className="text-xl text-emerald-100 mb-4">{data.personal.title}</p>
//         <div className="flex flex-wrap gap-4 text-sm text-emerald-50">
//           <span className="flex items-center gap-2">
//             <Mail size={14} />
//             {data.personal.email}
//           </span>
//           <span className="flex items-center gap-2">
//             <Phone size={14} />
//             {data.personal.phone}
//           </span>
//           <span className="flex items-center gap-2">
//             <MapPin size={14} />
//             {data.personal.location}
//           </span>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3">
//         <div className="lg:col-span-1 bg-gray-50 p-6 space-y-6">
//           <div>
//             <h2 className="text-lg font-bold text-emerald-700 mb-3">Profile</h2>
//             <p className="text-gray-600 text-sm">{data.personal.bio}</p>
//           </div>
//           <div>
//             <h2 className="text-lg font-bold text-emerald-700 mb-3">Skills</h2>
//             <div className="space-y-2">
//               {data.skills.map((skill) => (
//                 <div key={skill}>
//                   <div className="text-sm font-medium text-gray-700">
//                     {skill}
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-1.5">
//                     <div
//                       className="bg-emerald-600 h-1.5 rounded-full"
//                       style={{ width: "80%" }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-bold text-emerald-700 mb-3">
//               Languages
//             </h2>
//             {data.languages.map((lang) => (
//               <div key={lang.name} className="mb-2">
//                 <div className="flex justify-between text-sm">
//                   <span>{lang.name}</span>
//                   <span className="text-gray-500">{lang.level}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <h2 className="text-lg font-bold text-emerald-700 mb-3">Social</h2>
//             <div className="space-y-2">
//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
//               >
//                 <Github size={14} />
//                 {data.social.github}
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
//               >
//                 <Linkedin size={14} />
//                 {data.social.linkedin}
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
//               >
//                 <Twitter size={14} />
//                 {data.social.twitter}
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="lg:col-span-2 p-6 space-y-6">
//           <div>
//             <h2 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
//               <Briefcase size={18} />
//               Experience
//             </h2>
//             {data.experience.map((exp, idx) => (
//               <div key={idx} className="mb-5">
//                 <div className="flex justify-between items-start mb-1">
//                   <h3 className="font-semibold text-gray-900">{exp.title}</h3>
//                   <span className="text-sm text-gray-500">
//                     {exp.startDate} – {exp.endDate}
//                   </span>
//                 </div>
//                 <p className="text-emerald-600 text-sm mb-2">
//                   {exp.company} • {exp.location}
//                 </p>
//                 <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-2">
//                   {exp.achievements.map((ach, i) => (
//                     <li key={i}>{ach}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div>
//             <h2 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
//               <GraduationCap size={18} />
//               Education
//             </h2>
//             {data.education.map((edu, idx) => (
//               <div key={idx} className="mb-4">
//                 <div className="flex justify-between items-start">
//                   <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
//                   <span className="text-sm text-gray-500">
//                     {edu.startDate} – {edu.endDate}
//                   </span>
//                 </div>
//                 <p className="text-emerald-600 text-sm">{edu.institution}</p>
//                 <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// app/components/Template1_Modern.tsx
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  // Github,
  // Linkedin,
  // Twitter,
  FolderGit2,
  Calendar,
  Building2,
  User2,
} from "lucide-react";
import { ResumeData } from "../../types/types";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function TemplateModern({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 px-8 py-12 text-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-3 tracking-tight">
            {data.personal.firstName}{" "}
            <span className="text-emerald-200">{data.personal.lastName}</span>
          </h1>
          <p className="text-2xl text-emerald-100 mb-6 font-light">
            {data.personal.title}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-emerald-50">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} />
              {data.personal.email}
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} />
              {data.personal.phone}
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin size={16} />
              {data.personal.location}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 bg-gray-50 p-8 space-y-8 border-r border-gray-200">
          {/* Profile Section */}
          <div>
            <h2 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <User2 size={18} />
              Professional Profile
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.personal.bio}
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-bold text-emerald-700 mb-4">
              Core Competencies
            </h2>
            <div className="space-y-3">
              {data.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-emerald-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-600 to-emerald-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${85 - idx * 5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h2 className="text-xl font-bold text-emerald-700 mb-4">
              Languages
            </h2>
            {data.languages.map((lang, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-gray-700">{lang.name}</span>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                    {lang.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-1.5 rounded-full"
                    style={{
                      width:
                        lang.level === "Native"
                          ? "100%"
                          : lang.level === "Fluent"
                            ? "90%"
                            : "70%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-bold text-emerald-700 mb-4">Connect</h2>
            <div className="space-y-3">
              {data.social.github && (
                <a
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 text-sm hover:text-emerald-600 transition-colors group"
                >
                  <BsGithub
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>github.com/{data.social.github.split("/").pop()}</span>
                </a>
              )}
              {data.social.linkedin && (
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 text-sm hover:text-emerald-600 transition-colors group"
                >
                  <BsLinkedin
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>
                    linkedin.com/in/{data.social.linkedin.split("/").pop()}
                  </span>
                </a>
              )}
              {data.social.twitter && (
                <a
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 text-sm hover:text-emerald-600 transition-colors group"
                >
                  <BsTwitter
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>@{data.social.twitter.split("/").pop()}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2 p-8 space-y-8">
          {/* Experience Section */}
          <div>
            <h2 className="text-xl font-bold text-emerald-700 mb-5 flex items-center gap-2 border-b-2 border-emerald-200 pb-2">
              <Briefcase size={20} />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-emerald-600 text-sm mb-3 flex items-center gap-1">
                    <Building2 size={14} />
                    {exp.company} • {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-emerald-500 mt-0.5">▹</span>
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          {data.projects && data.projects.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-emerald-700 mb-5 flex items-center gap-2 border-b-2 border-emerald-200 pb-2">
                <FolderGit2 size={20} />
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {data.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 text-xs hover:text-emerald-700"
                        >
                          View Project →
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* {project.achievements &&
                      project.achievements.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {project.achievements.map((ach, i) => (
                            <li
                              key={i}
                              className="text-gray-500 text-xs flex items-start gap-2"
                            >
                              <span className="text-emerald-400">•</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      )} */}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold text-emerald-700 mb-5 flex items-center gap-2 border-b-2 border-emerald-200 pb-2">
              <GraduationCap size={20} />
              Education
            </h2>
            <div className="space-y-5">
              {data.education.map((edu, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  <p className="text-emerald-600 text-sm mb-2">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
