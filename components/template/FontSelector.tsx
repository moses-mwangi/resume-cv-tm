// "use client";
// import { useState } from "react";

// // All unique fonts with their CSS font-family values
// export const allFonts = {
//   // Safest & Professional
//   Arial: { family: "Arial, sans-serif", category: "Safest & Professional" },
//   Calibri: { family: "Calibri, sans-serif", category: "Safest & Professional" },
//   Helvetica: {
//     family: "Helvetica, sans-serif",
//     category: "Safest & Professional",
//   },
//   Garamond: { family: "Garamond, serif", category: "Safest & Professional" },
//   Lato: { family: "'Lato', sans-serif", category: "Safest & Professional" },
//   // Traditional
//   "Times New Roman": {
//     family: "'Times New Roman', serif",
//     category: "Traditional",
//   },
//   Georgia: { family: "Georgia, serif", category: "Traditional" },
//   Cambria: { family: "Cambria, serif", category: "Traditional" },
//   // Modern/Creative
//   "Open Sans": {
//     family: "'Open Sans', sans-serif",
//     category: "Modern/Creative",
//   },
//   Roboto: { family: "'Roboto', sans-serif", category: "Modern/Creative" },
//   Montserrat: {
//     family: "'Montserrat', sans-serif",
//     category: "Modern/Creative",
//   },
//   Raleway: { family: "'Raleway', sans-serif", category: "Modern/Creative" },
//   // Space-Saving
//   Aptos: { family: "'Aptos', sans-serif", category: "Space-Saving" },
// };

// export default function FontSelector({ getFont, currentFont }) {
//   type FontKey = keyof typeof allFonts | "Inter";

//   return (
//     <div
//       style={{
//         fontFamily: getFont(currentFont as FontKey).family,
//       }}
//       className="fixed top-7 left-4 z-50 bg-white rounded-lg overflow-auto shadow-lg border border-gray-200 p-2"
//     >
//       <div className="flex flex-col gap-2 flex-wrap mt-2 overflow-y-auto">
//         {Object.entries(allFonts).map(([fontName]) => (
//           <button
//             key={fontName}
//             onClick={() => setCurrentFont(fontName as FontKey)}
//             style={{
//               padding: "0.4rem 0.8rem",
//               fontSize: "0.8rem",
//               backgroundColor: currentFont === fontName ? "#3b82f6" : "#f3f4f6",
//               color: currentFont === fontName ? "white" : "#374151",
//               border: "1px solid #d1d5db",
//               borderRadius: "0.375rem",
//               cursor: "pointer",
//               fontFamily: getFont(fontName as FontKey).family,
//             }}
//           >
//             {fontName}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

export const allFonts = {
  Arial: { family: "Arial, sans-serif", category: "Safest & Professional" },
  Calibri: { family: "Calibri, sans-serif", category: "Safest & Professional" },
  Helvetica: {
    family: "Helvetica, sans-serif",
    category: "Safest & Professional",
  },
  Garamond: { family: "Garamond, serif", category: "Safest & Professional" },
  Lato: { family: "'Lato', sans-serif", category: "Safest & Professional" },

  "Times New Roman": {
    family: "'Times New Roman', serif",
    category: "Traditional",
  },
  Georgia: { family: "Georgia, serif", category: "Traditional" },
  Cambria: { family: "Cambria, serif", category: "Traditional" },

  "Open Sans": {
    family: "'Open Sans', sans-serif",
    category: "Modern/Creative",
  },
  Roboto: { family: "'Roboto', sans-serif", category: "Modern/Creative" },
  Montserrat: {
    family: "'Montserrat', sans-serif",
    category: "Modern/Creative",
  },
  Raleway: { family: "'Raleway', sans-serif", category: "Modern/Creative" },

  Aptos: { family: "'Aptos', sans-serif", category: "Space-Saving" },
};

export type FontKey = keyof typeof allFonts | "Inter";

type Props = {
  currentFont: FontKey;
  setCurrentFont: (font: FontKey) => void;
  getFont: (key: FontKey) => { family: string; category: string };
};

export default function FontSelector({
  currentFont,
  setCurrentFont,
  getFont,
}: Props) {
  return (
    <div
      className="fixed top-7 left-2 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-2 max-h-[80vh] no-scrollbar overflow-y-auto"
      style={{ fontFamily: getFont(currentFont).family }}
    >
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setCurrentFont("Inter")}
          className={`px-3 py-1 text-sm rounded border cursor-pointer ${
            currentFont === "Inter"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          style={{ fontFamily: getFont("Inter").family }}
        >
          Inter
        </button>

        {/* Other fonts */}
        {Object.entries(allFonts).map(([fontName]) => (
          <button
            key={fontName}
            onClick={() => setCurrentFont(fontName as FontKey)}
            className={`px-3 py-1 text-sm rounded border cursor-pointer ${
              currentFont === fontName
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            style={{ fontFamily: getFont(fontName as FontKey).family }}
          >
            {fontName}
          </button>
        ))}
      </div>
    </div>
  );
}
