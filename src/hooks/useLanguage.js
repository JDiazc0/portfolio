import { useState, useEffect } from "react";
import es from "../lang/es";
import en from "../lang/en";

export const useLanguage = () => {
  const [lang, setLang] = useState(
    () => localStorage.getItem("language") || "es"
  );

  const translations = { es, en };

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  return {
    t: (key) => {
      const keys = key.split(".");
      let value = translations[lang];
      try {
        keys.forEach((k) => (value = value[k]));
        return value || key;
      } catch (error) {
        console.error(`Translation not found for key: ${key}`);
        return key;
      }
    },
    setLang,
    currentLang: lang,
  };
};
