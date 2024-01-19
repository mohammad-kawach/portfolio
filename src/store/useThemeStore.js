import create from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light", // Load the theme from local storage or default to 'light'
  toggleTheme: () => {
    const newTheme =
      localStorage.getItem("theme") === "light" ? "dark" : "light"; // Toggle the theme
    localStorage.setItem("theme", newTheme); // Save the new theme to local storage
    set({ theme: newTheme }); // Update the theme in the store
    console.log("Theme toggled to:", newTheme); // Log the new theme to the console
  },
}));

export default useThemeStore;
