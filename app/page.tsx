// app/page.tsx
"use client";

import { useState } from "react";
import { defaultResumeData } from "./types";
import TemplateSelector from "@/components/TemplateSelector";
import TemplateClassic from "@/components/Template0_Classic";
import TemplateModern from "@/components/Template1_Modern";
import TemplateMinimal from "@/components/Template2_Minimal";
import TemplateCreative from "@/components/Template3_Creative";
import TemplateExecutive from "@/components/Template4_Executive";
import TemplateTech from "@/components/Template5_Tech";

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [resumeData] = useState(defaultResumeData);

  const renderTemplate = () => {
    switch (activeTemplate) {
      case 0:
        return <TemplateClassic data={resumeData} />;
      case 1:
        return <TemplateModern data={resumeData} />;
      case 2:
        return <TemplateMinimal data={resumeData} />;
      case 3:
        return <TemplateCreative data={resumeData} />;
      case 4:
        return <TemplateExecutive data={resumeData} />;
      case 5:
        return <TemplateTech data={resumeData} />;
      default:
        return <TemplateClassic data={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <TemplateSelector
        currentTemplate={activeTemplate}
        onSelect={setActiveTemplate}
      />
      <div className="transition-all duration-300 ease-in-out">
        {renderTemplate()}
      </div>
    </div>
  );
}
