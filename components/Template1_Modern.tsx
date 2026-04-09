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
  Briefcase as Github,
  Briefcase as Linkedin,
  Briefcase as Twitter,
} from "lucide-react";
import { ResumeData } from "../app/types";

export default function TemplateModern({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-emerald-700 px-8 py-10 text-white">
        <h1 className="text-5xl font-bold mb-2">
          {data.personal.firstName}{" "}
          <span className="text-emerald-200">{data.personal.lastName}</span>
        </h1>
        <p className="text-xl text-emerald-100 mb-4">{data.personal.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-emerald-50">
          <span className="flex items-center gap-2">
            <Mail size={14} />
            {data.personal.email}
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} />
            {data.personal.phone}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            {data.personal.location}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1 bg-gray-50 p-6 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-emerald-700 mb-3">Profile</h2>
            <p className="text-gray-600 text-sm">{data.personal.bio}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-700 mb-3">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill}>
                  <div className="text-sm font-medium text-gray-700">
                    {skill}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-emerald-600 h-1.5 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-700 mb-3">
              Languages
            </h2>
            {data.languages.map((lang) => (
              <div key={lang.name} className="mb-2">
                <div className="flex justify-between text-sm">
                  <span>{lang.name}</span>
                  <span className="text-gray-500">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-700 mb-3">Social</h2>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
              >
                <Github size={14} />
                {data.social.github}
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
              >
                <Linkedin size={14} />
                {data.social.linkedin}
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
              >
                <Twitter size={14} />
                {data.social.twitter}
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 p-6 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
              <Briefcase size={18} />
              Experience
            </h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-500">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-emerald-600 text-sm mb-2">
                  {exp.company} • {exp.location}
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
              <GraduationCap size={18} />
              Education
            </h2>
            {data.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-500">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <p className="text-emerald-600 text-sm">{edu.institution}</p>
                <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
