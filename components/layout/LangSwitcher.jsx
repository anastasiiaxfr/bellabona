"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const langs = [
    { id: "en", label: "EN" },
    { id: "de", label: "DE" },
  ];

  const currentLang = pathname.split("/")[1];

  const switchLanguage = (lang) => {
    const segments = pathname.split("/");

    segments[1] = lang;

    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-2">
      {langs.map((l) => (
        <button
          key={l.id}
          onClick={() => switchLanguage(l.id)}
          aria-pressed={currentLang === l.id}
          className={`px-3 py-1 rounded ${
            currentLang === l.id ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
