import useThemeStore from "../store/useThemeStore";
import MySkills from "./MySkills";
import Tools from "./Tools";
import { SKILLS, WORKFLOW } from "../utils/constants";

const Skills = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Skills
        </h2>
        {Object.entries(SKILLS).map(([key, skills]) => (
          <MySkills
            key={key}
            skillsHeading={`${
              key.charAt(0) + key.slice(1).toLowerCase()
            } Skills`}
            skills={skills}
          />
        ))}
        <Tools />
        <MySkills skillsHeading="Workflow" skills={WORKFLOW} />
      </div>
    </section>
  );
};

export default Skills;
