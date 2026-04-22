import { Project } from "@/types/types";
import { Separator } from "@/components/ui/separator";
// import { ResumeData } from "@/types/resume";
import React from "react";
// import { resumeTemplates } from "../../page";

export const resumeTemplates = {
  modern: {
    name: "Modern",
    primaryColor: "#3b82f6",
    secondaryColor: "#1e293b",
    // font: "Inter",
    font: "Arial, sans-serif",
    spacing: "comfortable",
  },
  classic: {
    name: "Classic",
    primaryColor: "#1e293b",
    secondaryColor: "#475569",
    font: "Georgia",
    spacing: "compact",
  },
  creative: {
    name: "Creative",
    primaryColor: "#8b5cf6",
    secondaryColor: "#ec4899",
    font: "Poppins",
    spacing: "relaxed",
  },
};

export default function ProjectsPreview({ data }: { data: Project[] }) {
  const style = resumeTemplates["creative"];
  const projects = data.filter((project) => project.active === true);

  return (
    <div>
      {projects.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-semibold pb-1"
            style={{ borderColor: style.secondaryColor }}
          >
            Projects
          </h2>
          <Separator className="mb-4 pb-px" />
          {projects.map((project) => (
            <div key={project.id} className="mb-4 ">
              <div className="flex justify-between pb-2 items-start">
                <h3
                  className="font-semibold"
                  style={{ color: style.primaryColor }}
                >
                  {project.name}
                </h3>
                <div className="text-sm text-gray-500">
                  {project.startDate} - {project.endDate}
                </div>
              </div>

              <ul className="list-disc pl-5 text-[15px] space-y-1">
                {project.description.slice(0, 4).map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: `${style.primaryColor}20`,
                      color: style.primaryColor,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-2 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
