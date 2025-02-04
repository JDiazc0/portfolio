import { createContext, useContext, useState, useEffect } from "react";
import en from "../lang/en";
import es from "../lang/es";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(
    () => localStorage.getItem("language") || "es"
  );

  const translations = { es, en };

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];

    try {
      keys.forEach((k) => (value = value[k]));
      return value || key;
    } catch (error) {
      console.error(`Translation not found for key: ${key}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ t, setLang, currentLang: lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
