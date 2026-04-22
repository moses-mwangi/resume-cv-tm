"use client";

import { useRef, useState } from "react";
import TemplateSelector from "@/components/template/TemplateSelector";
import TemplateClassic from "@/components/template/Template0_Classic";
import TemplateModern from "@/components/template/Template1_Modern";
import TemplateMinimal from "@/components/template/Template2_Minimal";
import TemplateCreative from "@/components/template/Template3_Creative";
import TemplateExecutive from "@/components/template/Template4_Executive";
import TemplateTech from "@/components/template/Template5_Tech";
import Template6_PdfStyle from "@/components/template/Template6_PdfStyle";
import { useReactToPrint } from "react-to-print";
import FontSelector, {
  allFonts,
  FontKey,
} from "@/components/template/FontSelector";
import { defaultResumeData } from "@/lib/data/CV-DATA";
import { juniorResumeData } from "@/lib/data/JuniorResumeData";
import { midResumeData } from "@/lib/data/midResumeData";
import { seniorResumeData } from "@/lib/data/seniorResumeData";

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [resumeData] = useState(defaultResumeData);
  const printRef = useRef<HTMLDivElement>(null);

  const [currentFont, setCurrentFont] = useState<FontKey>("Arial");

  function getFont(key: FontKey) {
    if (key === "Inter") {
      return {
        family: "system-ui, -apple-system, sans-serif",
        category: "System Default",
      };
    }
    return allFonts[key];
  }

  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });

  const renderTemplate = () => {
    switch (activeTemplate) {
      case 0:
        return <Template6_PdfStyle data={resumeData} />;
      case 1:
        return <TemplateClassic data={resumeData} />;
      // case 2:
      //   return <TemplateModern data={resumeData} />;
      // case 3:
      //   return <TemplateMinimal data={resumeData} />;
      // case 4:
      //   return <TemplateCreative data={resumeData} />;
      // case 5:
      //   return <TemplateExecutive data={resumeData} />;
      // default:
      //   return <TemplateTech data={resumeData} />;
    }
  };

  return (
    <div className=" bg-gray-100 ">
      <div className="min-h-screen my-8 bg-gray-100 max-w-245 mx-auto mb-4 flex justify-between items-center ">
        <div className="">
          <TemplateSelector
            currentTemplate={activeTemplate}
            onSelect={setActiveTemplate}
            onDownload={handlePrint}
          />
        </div>

        <FontSelector
          currentFont={currentFont}
          setCurrentFont={setCurrentFont}
          getFont={getFont}
        />

        <div
          ref={printRef}
          className="print-container"
          style={{
            fontFamily: getFont(currentFont).family,
          }}
          // className="transition-all  duration-300 ease-in-out"
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}
