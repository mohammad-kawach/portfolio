import PropTypes from "prop-types";

const MySkills = (props) => {
  return (
    <div className="mb-3">
      <div className="subheading mb-3">{props.skillsHeading}</div>
      <ul className="fa-ul mb-0 skills-grid">
        {props.skills.map((skill, key) => {
          return (
            <li key={key} className="grid-item">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MySkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  skillsHeading: PropTypes.string.isRequired,
};

export default MySkills;
