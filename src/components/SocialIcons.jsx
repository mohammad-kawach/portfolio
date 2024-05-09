import { socialIcons } from "../utils/constants";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      {socialIcons.map((socialIcon, index) => (
        <a
          key={index}
          className="social-icon"
          href={socialIcon.href}
          rel="noreferrer"
          target="_blank"
        >
          <i className={socialIcon.iconClass}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
