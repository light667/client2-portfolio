"use client";

import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLng = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(nextLng);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md border border-accent-cyan/30 hover:bg-accent-cyan/10 transition-colors font-mono text-xs"
    >
      {i18n.language === "fr" ? "EN" : "FR"}
    </button>
  );
}
