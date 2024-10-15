import React, { useState } from "react";
import LangButton from "./components/LangButton";
import Main from "./components/Main";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

const App = () => {
  const [language, setLanguage] = useState("fr");

  // Utilisation d'un objet pour gérer les traductions
  const translations = { fr, ar, en };

  // Sélectionne le contenu en fonction de la langue
  const content = translations[language] || translations.fr; // Défaut à français

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <LangButton changeLanguage={changeLanguage} />
      <Main content={content} /> {/* Pass content directly to Main */}
    </div>
  );
};

export default App;
