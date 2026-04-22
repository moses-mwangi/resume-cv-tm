// app/components/Template0_Classic.tsx
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Briefcase as Github,
  Briefcase as Linkedin,
  Briefcase as Twitter,
} from "lucide-react";
import { ResumeData } from "../../types/types";
import { RefObject } from "react";

export default function TemplateClassic({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-8 py-8 text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-xl font-bold">
              {data.personal.firstName[0]}
              {data.personal.lastName[0]}
            </span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-bold">
              {data.personal.firstName} {data.personal.lastName}
            </h1>
            <p className="text-lg font-semibold text-blue-100 ">
              {data.personal.title}
            </p>
            <p className="text-blue-50 text-[15px] max-w-2xl">
              {data.personal.bio}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-b border-gray-200 px-8 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={16} />
          <span>{data.personal.email}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={16} />
          <span>{data.personal.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} />
          <span>{data.personal.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Globe size={16} />
          <span>{data.personal.website}</span>
        </div>
      </div>
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <Heart size={18} className="text-blue-600" />
                Contact
              </h2>
              <div className="space-y-3">
                {data.personal.phone && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={16} />
                    <span>{data.personal.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={16} />
                  <span>{data.personal.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={16} />
                  <span>{data.personal.location}</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <Globe size={18} className="text-blue-600" />
                Social
              </h2>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600"
                >
                  <Github size={16} />
                  <span>{data.social.github}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600"
                >
                  <Linkedin size={16} />
                  <span>{data.social.linkedin}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600"
                >
                  <Twitter size={16} />
                  <span>{data.social.twitter}</span>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <Award size={18} className="text-blue-600" />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-blue-600" />
                Languages
              </h2>
              {data.languages.map((lang) => (
                <div key={lang.name} className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-gray-500">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <Briefcase size={18} className="text-blue-600" />
                Experience
              </h2>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 text-sm">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} – {exp.endDate}
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-blue-600" />
                Education
              </h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 text-sm">{edu.institution}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {edu.startDate} – {edu.endDate}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <Award size={18} className="text-blue-600" />
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.certifications.map((cert, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-500">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t border-gray-200 px-8 py-4 text-center text-sm text-gray-500">
        <p>
          © 2024 {data.personal.firstName} {data.personal.lastName} • Available
          for opportunities
        </p>
      </div>
    </div>
  );
}
