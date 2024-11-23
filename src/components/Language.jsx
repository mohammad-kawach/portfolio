import { useState } from "react";
import useLanguageStore from "../store/useLanguageStore";
import { useTranslation } from "react-i18next";

export const Language = () => {
  const { i18n } = useTranslation();

  const [showOptions, setShowOptions] = useState(false);

  const { toggleLanguage } = useLanguageStore();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const changeLanguage = (lng) => {
    toggleLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="language-selection" onClick={toggleOptions}>
        <i className="fa-solid fa-language fa-2x"></i>
      </div>
      {showOptions && (
        <div className="language-options">
          <button
            onClick={() => {
              toggleOptions();
              changeLanguage("en");
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              toggleOptions();
              changeLanguage("de");
            }}
          >
            Deutsch
          </button>
        </div>
      )}
    </div>
  );
};
