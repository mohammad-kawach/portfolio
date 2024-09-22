import useThemeStore from "../store/useThemeStore";
import { EDUCATION_DATA } from "../utils/constants";
const Education = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Education
        </h2>
        {Object.entries(EDUCATION_DATA).map(([key, education]) => (
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            key={key}
          >
            <div className="flex-grow-1">
              <h3
                className={`${
                  theme === "dark" ? "dark-theme-heading" : ""
                } mb-0`}
              >
                {education.FIELD_OF_STUDY}{" "}
                <span className="text-primary">/</span> {education.UNIVERSITY}
              </h3>
              <div className="text-primary subheading mb-3">
                {education.DEGREE_LEVEL}
              </div>
              <p>{education.DESCRIPTION}</p>
              {education.PERCENTAGE && (
                <strong className="text-primary">
                  Percentage: {education.PERCENTAGE}
                </strong>
              )}
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{education.PERIOD}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
