import React from "react";
import { ResumeData } from "@/types/types";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { Separator } from "../ui/separator";
import ProjectsPreview from "./views/ProjectsPreview";
import SkillsPreview from "@/components/template/views/SkillsPreview";

interface Template6_PdfStyleProps {
  data: ResumeData;
}

const Template6_PdfStyle: React.FC<Template6_PdfStyleProps> = ({ data }) => {
  const { personal, experience, education, skills, languages, certifications } =
    data;

  const formatDate = (start: string, end: string, current?: boolean) => {
    if (current) return `${start} - Present`;
    return `${start} - ${end}`;
  };

  return (
    <div className=" mx-auto bg-white py-6 font-sans">
      <div className=" py-4 px-6 text-right text-sm text-gray-500">
        <div className="text-center">
          <h1 style={{ color: "#8b5cf6" }} className="text-4xl font-bold mb-3 ">
            {`${personal.firstName} ${personal.lastName}` || "Your Name"}
          </h1>

          {personal.title && (
            <p className="text-md text-gray-500 mb-4">{personal.title}</p>
          )}
        </div>

        <div className="border-t border-b py-3 my-3">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
            {personal.email && (
              <div className="flex items-center gap-2">
                <Mail style={{ color: "#8b5cf6" }} className="w-4 h-4 " />
                <a
                  href={`mailto:${personal.email}`}
                  className="text-gray-600 hover:"
                >
                  {personal.email}
                </a>
              </div>
            )}
            {personal.phone && (
              <div className="flex items-center gap-2">
                <Phone style={{ color: "#8b5cf6" }} className="w-4 h-4 " />
                <a href={`tel:${personal.phone}`} className="text-gray-600">
                  {personal.phone}
                </a>
              </div>
            )}
            {personal.location && (
              <div className="flex items-center gap-2">
                <MapPin style={{ color: "#8b5cf6" }} className="w-4 h-4" />
                <span className="text-gray-600">{personal.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <LiaLinkedin style={{ color: "#8b5cf6" }} className="w-4 h-4 " />
              <a
                href={"https://www.linkedin.com/in/moses-mwangi-tm"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-violet-500"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-2">
              <BsGithub style={{ color: "#8b5cf6" }} className="w-4 h-4 " />
              <a
                href={"https://github.com/moses-mwangi"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-violet-500"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe style={{ color: "#8b5cf6" }} className="w-4 h-4 " />
              <a
                href={"https://moses-tm.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-violet-500"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <section className="mb-8">
          <h2 className="text-lg font-semibold tracking-wide pb-1">
            Professional Summary
          </h2>
          <Separator className="mb-3" />
          <p className="text-[15px] text-gray-700 leading-relaxed">
            {/* <span className="text-violet-600 underline">Software Engineer</span> */}
            {personal?.summary}
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold  tracking-wide pb-1">
            Work Experience
          </h2>
          <Separator className="mb-3" />
          {experience &&
            experience.map((exp, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex justify-between items-baseline flex-wrap">
                  <h3
                    style={{ color: "#8b5cf6" }}
                    className="text-md font-semibold "
                  >
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(exp.startDate, exp.endDate)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {exp.company} - {exp.location}
                </p>
                <ul className="list-disc pl-5 text-[15px] space-y-1">
                  {exp.achievements?.slice(0, 4).map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
        </section>

        <ProjectsPreview data={data.projects} />

        <SkillsPreview data={data.skills} />

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold tracking-wide pb-1 ">
            Education
          </h2>
          <Separator className="mb-4" />
          <div className="flex flex-col gap-4">
            {education &&
              education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex gap-2 justify-between items-baseline flex-wrap">
                    <h3
                      style={{ color: "#8b5cf6" }}
                      className="text-md font-semibold"
                    >
                      {edu.institution}
                    </h3>
                    <span className="text-[15px] text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className="text-[15px] text-gray-600">{edu.degree}</p>
                  {/* {edu.gpa && (
                    <p className="text-sm text-gray-500">GPA: {edu.}</p>
                  )} */}
                </div>
              ))}
          </div>
        </section>

        <section>
          {certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold pb-1">Certifications</h2>
              <Separator className="mb-4" />

              <div className="space-y-2">
                {certifications.map((cert, id) => (
                  <div key={id} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-blue-600">{cert.name}</p>
                      <p className="text-[15px] text-gray-600">{cert.issuer}</p>
                    </div>
                    <div className="text-right text-[15px] text-gray-500">
                      {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-semibold tracking-wide pb-1">
            Languages
          </h2>
          <Separator className="mb-4" />

          <div className="flex gap-6 text-[15px]">
            {languages &&
              languages.map((lang, idx) => (
                <p key={idx}>
                  <strong>{lang.name}</strong>{" "}
                  <span className="text-gray-500">(Fluent)</span>
                </p>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template6_PdfStyle;
