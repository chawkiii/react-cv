import React from "react";

const LangButton = ({ changeLanguage, toggleDarkMode }) => {
  return (
    <div className="buttons-container">
      <button onClick={() => changeLanguage("fr")}>Français</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        Dark Mode
      </button>
    </div>
  );
};

export default LangButton;
