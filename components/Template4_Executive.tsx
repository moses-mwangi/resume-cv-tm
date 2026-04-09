// app/components/Template4_Executive.tsx
import {
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Globe,
  Target,
} from "lucide-react";
import { ResumeData } from "../app/types";

export default function TemplateExecutive({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl">
      <div className="bg-gray-900 text-white px-8 py-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {data.personal.firstName} {data.personal.lastName}
            </h1>
            <p className="text-xl text-gray-400 mt-1">{data.personal.title}</p>
          </div>
          <div className="text-right text-sm text-gray-300">
            <p>{data.personal.email}</p>
            <p>{data.personal.phone}</p>
            <p>{data.personal.location}</p>
          </div>
        </div>
      </div>
      <div className="px-8 py-8">
        <div className="mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Target size={14} />
            Executive Profile
          </h2>
          <p className="text-gray-700">{data.personal.bio}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase size={14} />
                Professional Experience
              </h2>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {exp.company} | {exp.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <GraduationCap size={14} />
                Education
              </h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {edu.startDate}–{edu.endDate}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Core Competencies
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700 text-sm">{skill}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-gray-800 h-1.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Certifications
              </h2>
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="mb-2">
                  <p className="font-medium text-gray-800 text-sm">
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
