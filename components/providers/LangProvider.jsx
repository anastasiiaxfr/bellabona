"use client";

import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext({
  language: "en",
  setLanguage: () => {},
});

export function LangProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored) setLanguage(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}
