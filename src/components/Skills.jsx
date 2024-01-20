import useThemeStore from "../store/useThemeStore";
import MySkills from "./MySkills";
import Tools from "./Tools";
import { MAJOR_SKILLS, MINOR_SKILLS, WORKFLOW } from "./constants";

const Skills = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Skills
        </h2>
        <MySkills skillsHeading="Major Skills" skills={MAJOR_SKILLS} />
        <MySkills skillsHeading="Minor Skills" skills={MINOR_SKILLS} />
        <Tools />
        <MySkills skillsHeading="Workflow" skills={WORKFLOW} />
      </div>
    </section>
  );
};

export default Skills;
