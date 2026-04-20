"use client";

import {
  LayoutTemplate,
  FileText,
  Layers,
  Newspaper,
  User,
  Terminal,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { UseReactToPrintFn } from "react-to-print";

interface TemplateSelectorProps {
  currentTemplate: number;
  onSelect: (templateId: number) => void;
  onDownload: UseReactToPrintFn;
}

export const templates = [
  {
    id: 0,
    name: "Classic",
    icon: LayoutTemplate,
    description: "Traditional two-column layout",
  },
  {
    id: 1,
    name: "Modern",
    icon: Layers,
    description: "Bold colors with sidebar",
  },
  {
    id: 2,
    name: "Minimal",
    icon: FileText,
    description: "Clean and simple design",
  },
  {
    id: 3,
    name: "Creative",
    icon: Newspaper,
    description: "Magazine-style layout",
  },
  {
    id: 4,
    name: "Executive",
    icon: User,
    description: "Professional leadership focus",
  },
  {
    id: 5,
    name: "Tech",
    icon: Terminal,
    description: "Developer-focused with skills grid",
  },
  {
    id: 6,
    name: "Prefer",
    icon: Terminal,
    description: "Developer-focused with skills grid",
  },
];

export default function TemplateSelector({
  currentTemplate,
  onSelect,
  onDownload,
}: TemplateSelectorProps) {
  return (
    <div className="fixed top-7 right-4 z-50 max-h-[80vh] h-full bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-2">
        <Button
          onClick={() => {
            onDownload();
          }}
          className="bg-amber-400 cursor-pointer w-full rounded-sm"
        >
          DownLoad PDF
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-3 px-3 py-2">
        {templates.map((template) => {
          const Icon = template.icon;
          const isActive = currentTemplate === template.id;
          return (
            <button
              key={template.id}
              onClick={() => onSelect(template.id)}
              className={`flex gap-2 items-center px-3 cursor-pointer py-2 rounded-md transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
              title={template.name}
            >
              <Icon size={17} />
              <span className="text-xs mt-1 font-medium">{template.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
