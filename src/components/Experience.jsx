import useThemeStore from "../store/useThemeStore";
import ExperienceCompany from "./ExperienceCompany";
import { WORK_EXPERIENCE } from "../utils/constants";

const Experience = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Experience
        </h2>
        {Object.entries(WORK_EXPERIENCE).map(([key, experience]) => (
          <ExperienceCompany
            key={key}
            location={experience?.LOCATION}
            companyName={experience?.COMPANY_NAME}
            position={experience?.POSITION}
            description={experience?.DESCRIPTION}
            certificateName={experience?.CERTIFICATE_NAME}
            certificateURL={experience?.CERTIFICATE_URL}
            projects={experience?.PROJECTS}
            period={experience?.PERIOD}
          />
        ))}
        {/* <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Junior Web Designer</h3>
            <div className="subheading mb-3">Shout! Media Productions</div>
            <p>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance indicators
              offline to maximise the long tail. Keeping your eye on the ball
              while performing a deep dive on the start-up mentality to derive
              convergence on cross-platform integration.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">July 2010 - December 2011</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Web Design Intern</h3>
            <div className="subheading mb-3">Shout! Media Productions</div>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">September 2008 - June 2010</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
