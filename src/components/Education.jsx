import useThemeStore from "../store/useThemeStore";
import { EDUCATION_DESCRIPTION } from "../utils/constants";

const Education = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Education
        </h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3
              className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-0`}
            >
              IT - Software Engineering <span className="text-primary">/</span>{" "}
              Al-Baath University
            </h3>
            <div className="text-primary subheading mb-3">Bachelor Degree</div>
            <p>{EDUCATION_DESCRIPTION}</p>
            <strong className="text-primary">GPA: 3.0</strong>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">October 2017 - November 2022</span>
          </div>
        </div>
        {/* <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">James Buchanan High School</h3>
            <div className="subheading mb-3">Technology Magnet Program</div>
            <p>GPA: 3.56</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2002 - May 2006</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
