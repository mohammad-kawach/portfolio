import About from "./components/About";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import useThemeStore from "./store/useThemeStore";
import { useEffect } from "react";
import Education from "./components/Education";
import useLanguageStore from "./store/useLanguageStore"; // Uncomment this line
import { Language } from "./components/Language";
// import Awards from "./components/Awards";
import i18n from "i18next"; // Import i18next if using it

function App() {
  const { theme } = useThemeStore();
  const { toggleLanguage } = useLanguageStore(); // Use the language store

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }, [theme]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    toggleLanguage(storedLanguage); // Set the language from localStorage
    i18n.changeLanguage(storedLanguage); // Ensure i18next uses the correct language
  }, []); // Run only once on mount

  return (
    <>
      <Navigation />
      <div
        className={`${
          theme === "dark" ? "dark-theme" : ""
        } container-fluid p-0`}
      >
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        {/* <Certificates />
        <hr className="m-0" /> */}
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <Contact />
        <Language />
        {/* <hr className="m-0" /> */}
        {/* <Awards /> */}
      </div>
    </>
  );
}

export default App;
