import useThemeStore from "../store/useThemeStore";
import Certificate from "./Certificate";

const Experience = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Certificates
        </h2>
        <Certificate
          certificateName="AWS Cloud Practitioner"
          certificateSource="AWS"
          description="AWS Cloud Practitioner"
          certificateURL="#"
        />
      </div>
    </section>
  );
};

export default Experience;
