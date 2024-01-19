import typescript from "../assets/icons/typescript.svg";
import bootstrap from "../assets/icons/bootstrap.png";
import cpp from "../assets/icons/c++.png";
import tailwind from "../assets/icons/tailwind-css.png";
import useThemeStore from "../store/useThemeStore";
import MajorSkills from "./MajorSkills";
import MinorSkills from "./MinorSkills";

const Skills = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Skills
        </h2>
        <MajorSkills />
        <MinorSkills />
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons grid-icons">
          <li className="list-inline-item inline-flex">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-js-square"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <img src={typescript} alt="icon" />
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-react"></i>
          </li>
          {/* <li className="list-inline-item inline-flex">
            <i className="fab fa-node-js"></i>
          </li> */}
          <li className="list-inline-item inline-flex">
            <i className="fab fa-sass"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-less"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-wordpress"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-java"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fas fa-database"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-php"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <i className="fab fa-github"></i>
          </li>
          <li className="list-inline-item inline-flex">
            <img src={bootstrap} alt="icon" />
          </li>
          <li className="list-inline-item inline-flex">
            <img src={tailwind} alt="icon" />
          </li>
          <li className="list-inline-item inline-flex">
            <img src={cpp} alt="icon" />
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Cross Functional Teams
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Agile Development & Scrum
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
