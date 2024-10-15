import React from "react";

const LangButton = ({ changeLanguage }) => {
  return (
    <div>
      <button onClick={() => changeLanguage("fr")}>Français</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
    </div>
  );
};

export default LangButton;
