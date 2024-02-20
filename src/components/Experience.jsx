import useThemeStore from "../store/useThemeStore";
import ExperienceCompany from "./ExperienceCompany";
import {
  DIGITAL_EDGE_DESCRIPTION,
  INNOVURA_DESCRIPTION,
  UCT_DESCRIPTION,
} from "./constants";

const Experience = () => {
  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          Experience
        </h2>
        <ExperienceCompany
          companyName="Digital Edge"
          position="Front-End Developer & WordPress Developer"
          description={DIGITAL_EDGE_DESCRIPTION}
          certificateName="Qualified Certification"
          certificateURL="https://drive.google.com/file/d/1gP-LInN9N12w8iE98A5iJlbVheU9XTkq/view"
          period="October 2022 - October 2023"
        />
        <ExperienceCompany
          companyName="Innovura"
          position="Front-End Developer"
          description={INNOVURA_DESCRIPTION}
          certificateName="Employment Letter"
          certificateURL="https://drive.google.com/file/d/1tJzNNXi2z0GCLhw7Nx98KCb4KwSOZh10/view?usp=drive_link"
          period="March 2023 - September 2023"
        />
        <ExperienceCompany
          companyName="Unlimited Creative Solutions - UCT"
          position="WordPress Developer"
          description={UCT_DESCRIPTION}
          period="November 2023 - December 2023"
        />
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
