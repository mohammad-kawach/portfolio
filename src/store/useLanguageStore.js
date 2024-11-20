import create from "zustand";

const useLanguageStore = create((set) => ({
  language: localStorage.getItem("language") || "en", // Load the language from local storage or default to 'en'
  toggleLanguage: (lang) => {
    localStorage.setItem("language", lang); // Save the new language to local storage
    set({ language: lang }); // Update the language in the store
  },
}));

export default useLanguageStore;
