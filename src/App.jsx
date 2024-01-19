import About from "./components/About";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import useThemeStore from "./store/useThemeStore";
// import Awards from "./components/Awards";

function App() {
  const { theme } = useThemeStore();
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
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <Contact />
        {/* <hr className="m-0" /> */}
        {/* <Awards /> */}
      </div>
    </>
  );
}

export default App;
