import useThemeStore from "../store/useThemeStore";
import Certificate from "./Certificate";
import PropTypes from "prop-types";

const Experience = (props) => {
  const { theme } = useThemeStore();

  return (
    <section className={`${props.display} resume-section`} id="experience">
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

Experience.propTypes = {
    display: PropTypes.string.isRequired,
};

export default Experience;
