// app/components/Template2_Minimal.tsx
import {
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { ResumeData } from "../app/types";

export default function TemplateMinimal({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg">
      <div className="p-8 border-b border-gray-200">
        <h1 className="text-4xl font-light tracking-tight text-gray-900">
          {data.personal.firstName} {data.personal.lastName}
        </h1>
        <p className="text-lg text-gray-500 mt-1">{data.personal.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
          <span>{data.personal.email}</span>
          <span>•</span>
          <span>{data.personal.phone}</span>
          <span>•</span>
          <span>{data.personal.location}</span>
        </div>
      </div>
      <div className="p-8">
        <p className="text-gray-600 mb-8 leading-relaxed">
          {data.personal.bio}
        </p>
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Briefcase size={14} />
              Experience
            </h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-400">
                    {exp.startDate}–{exp.endDate}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap size={14} />
              Education
            </h2>
            {data.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-400">
                    {edu.startDate}–{edu.endDate}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{edu.institution}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award size={14} />
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-gray-600 text-sm bg-gray-50 px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
