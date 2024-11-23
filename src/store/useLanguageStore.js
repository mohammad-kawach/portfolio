import create from "zustand";

const useLanguageStore = create((set) => {
// Read the language from localStorage when the store is initialized
const storedLanguage = localStorage.getItem("language") || "en";
console.log("Initial language from localStorage:", storedLanguage);

return {
  language: storedLanguage,
  toggleLanguage: (lang) => {
    localStorage.setItem("language", lang); // Save the new language to localStorage
    set({ language: lang }); // Update the language in the store
  },
};
});

export default useLanguageStore;