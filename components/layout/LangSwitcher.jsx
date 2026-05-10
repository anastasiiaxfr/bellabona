"use client";

import { useContext } from "react";
import { LangContext } from "@/components/providers/LangProvider";

export default function LangSwitcher() {
  const { language, setLanguage } = useContext(LangContext);
  const langs = [
    { id: "en", label: "EN" },
    { id: "de", label: "DE" },
  ];

  return (
    <div className="flex gap-2">
      {langs.map((l) => (
        <button
          key={l.id}
          onClick={() => setLanguage(l.id)}
          aria-pressed={language === l.id}
          className={`px-3 py-1 rounded ${language === l.id ? "bg-gray-800 text-white" : "bg-gray-200"}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
