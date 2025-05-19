import PropTypes from "prop-types";
import useThemeStore from "../store/useThemeStore";
import { useTranslation } from "react-i18next";

const ExperienceCompany = (props) => {
  const { t } = useTranslation();

  const { theme } = useThemeStore();

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-0`}>
          {props.certificateName}
        </h3>
        <h5 className="subheading mb-2 text-primary">
          {t(props.certificateSource)}
        </h5>
        {/* <div className="subheading mb-2 text-primary">{t(props.position)}</div> */}
        {/* <div className="flex-shrink-0 mb-2">
          <span className="text-primary">{t(props.period)}</span>
        </div> */}
        <p>{t(props.description)}</p>
        <a
          className="btn btn-secondary mb-3"
          href={props.certificateURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(props.certificateName)}
        </a>
      </div>
    </div>
  );
};

ExperienceCompany.propTypes = {
  certificateName: PropTypes.string.isRequired,
  certificateSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  certificateURL: PropTypes.string,
};

export default ExperienceCompany;
