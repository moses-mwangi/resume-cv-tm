// app/components/Template5_Tech.tsx
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Cpu,
  Database,
} from "lucide-react";
import { ResumeData } from "../app/types";

export default function TemplateTech({ data }: { data: ResumeData }) {
  const techSkills = data.skills;
  const frontend = techSkills.filter((s) =>
    ["React", "Next.js", "TypeScript", "Tailwind"].includes(s),
  );
  const backend = techSkills.filter((s) =>
    ["Node.js", "Python", "PostgreSQL"].includes(s),
  );
  const devops = techSkills.filter((s) => ["Docker", "AWS"].includes(s));

  return (
    <div className="max-w-5xl mx-auto bg-gray-900 text-gray-100 shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-mono font-bold">
              {data.personal.firstName}{" "}
              <span className="text-cyan-200">{data.personal.lastName}</span>
            </h1>
            <p className="text-cyan-100 font-mono mt-1">
              {data.personal.title}
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Code size={24} />
            <Cpu size={24} />
            <Database size={24} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        <div className="lg:col-span-1 bg-gray-800 p-6 space-y-6">
          <div>
            <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-3">
              Contact
            </h2>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={14} />
                {data.personal.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} />
                {data.personal.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} />
                {data.personal.location}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-3">
              Tech Stack
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 mb-1">Frontend</p>
                <div className="flex flex-wrap gap-1">
                  {frontend.map((s) => (
                    <span
                      key={s}
                      className="bg-gray-700 text-cyan-300 text-xs px-2 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Backend</p>
                <div className="flex flex-wrap gap-1">
                  {backend.map((s) => (
                    <span
                      key={s}
                      className="bg-gray-700 text-cyan-300 text-xs px-2 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">DevOps</p>
                <div className="flex flex-wrap gap-1">
                  {devops.map((s) => (
                    <span
                      key={s}
                      className="bg-gray-700 text-cyan-300 text-xs px-2 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 p-6 space-y-6">
          <div>
            <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-3">
              <Globe size={14} />
              Bio
            </h2>
            <p className="text-gray-300">{data.personal.bio}</p>
          </div>
          <div>
            <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <Briefcase size={14} />
              Experience
            </h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-5 bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-start flex-wrap">
                  <div>
                    <h3 className="font-bold text-cyan-300">{exp.title}</h3>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {exp.startDate} → {exp.endDate}
                  </span>
                </div>
                <ul className="mt-2 text-sm text-gray-300 list-disc list-inside">
                  {exp.achievements.slice(0, 2).map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap size={14} />
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.education.map((edu, idx) => (
                <div key={idx} className="bg-gray-800/50 p-3 rounded">
                  <p className="font-medium text-cyan-300">{edu.degree}</p>
                  <p className="text-gray-400 text-xs">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
