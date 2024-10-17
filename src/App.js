import React, { useState } from "react";
import LangButton from "./components/LangButton";
import Main from "./components/Main";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

const App = () => {
  const [language, setLanguage] = useState("fr");
  const [darkMode, setDarkMode] = useState(false); // Pour le mode sombre

  const translations = { fr, ar, en };
  const content = translations[language] || translations.fr;

  const changeLanguage = (lang) => setLanguage(lang);
  const toggleDarkMode = () => setDarkMode(!darkMode); // Basculer mode sombre

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <LangButton
        changeLanguage={changeLanguage}
        toggleDarkMode={toggleDarkMode}
      />
      <Main content={content} />
    </div>
  );
};

export default App;
