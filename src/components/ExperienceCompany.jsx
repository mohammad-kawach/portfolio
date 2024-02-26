import PropTypes from "prop-types";
import useThemeStore from "../store/useThemeStore";

const ExperienceCompany = (props) => {
  const { theme } = useThemeStore();

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-0`}>
          {props.companyName}
        </h3>
        <div className="subheading mb-3 text-primary">{props.position}</div>
        <p>{props.description}</p>
        {props.certificateName && (
          <a
            className="btn btn-secondary mb-3"
            href={props.certificateURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.certificateName}
          </a>
        )}
        {props.projects && (
          <a
            className="text-primary projects-link"
            href={props.projects}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        )}
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{props.period}</span>
      </div>
    </div>
  );
};

ExperienceCompany.propTypes = {
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  certificateName: PropTypes.string,
  projects: PropTypes.string,
  certificateURL: PropTypes.string,
};

export default ExperienceCompany;
