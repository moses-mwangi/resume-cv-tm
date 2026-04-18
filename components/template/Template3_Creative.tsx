// app/components/Template3_Creative.tsx
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { ResumeData } from "../../app/types";

export default function TemplateCreative({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl overflow-hidden">
      <div className="relative h-48 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
        <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
          <Sparkles className="text-orange-500" size={32} />
        </div>
        <div className="absolute bottom-4 right-8 text-right text-white">
          <h1 className="text-3xl font-bold">
            {data.personal.firstName} {data.personal.lastName}
          </h1>
          <p className="text-amber-100">{data.personal.title}</p>
        </div>
      </div>
      <div className="pt-16 px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 italic">
                &quot;{data.personal.bio}&quot;
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-bold text-orange-600 text-lg flex items-center gap-2">
                <Briefcase size={18} />
                Work Experience
              </h2>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-orange-200 pl-4">
                  <h3 className="font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-orange-600 text-sm">
                    {exp.company} | {exp.startDate}–{exp.endDate}
                  </p>
                  <ul className="text-gray-600 text-sm mt-1 list-disc list-inside">
                    {exp.achievements.slice(0, 2).map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-orange-500 text-white p-4 rounded-lg mb-6">
              <h2 className="font-bold mb-2">Contact</h2>
              <div className="space-y-1 text-sm">
                <p>📧 {data.personal.email}</p>
                <p>📞 {data.personal.phone}</p>
                <p>📍 {data.personal.location}</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                <Award size={18} />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                <GraduationCap size={18} />
                Education
              </h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-gray-500 text-sm">
                    {edu.institution} ({edu.startDate}-{edu.endDate})
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
