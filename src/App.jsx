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
import useLanguageStore from "./store/useLanguageStore";
import { Language } from "./components/Language";
import Awards from "./components/Awards";
import i18n from "i18next";
import Projects from "./components/Projects";

function App() {
  const { theme } = useThemeStore();
  const { toggleLanguage } = useLanguageStore();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }, [theme]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    toggleLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
  }, []);

  return (
    <>
      <Navigation />
      <div
        className={`${
          theme === "dark" ? "dark-theme" : ""
        } container-fluid p-0`}
      >
        <div>
          <About />
          <hr className="m-0" />
          <Experience />
          <hr className="m-0" />
          <Projects display="d-none" />
          <hr className="m-0 d-none" />
          <Certificates display="d-none" />
          <hr className="m-0 d-none" />
          <Education />
          <hr className="m-0" />
          <Skills />
          <hr className="m-0" />
          <Interests />
          <hr className="m-0" />
          <Awards display="d-none" />
          <hr className="m-0 d-none" />
          <Contact />
          <Language />
        </div>
      </div>
    </>
  );
}

export default App;
