// import React from "react";
import { useEffect } from "react";
import useThemeStore from "../store/useThemeStore";
import SocialIcons from "./SocialIcons";
import CodewarsBadge from "./CodewarsBadge";
import personal from "../assets/img/profile-pic.png";
import { ABOUT_ME } from "../utils/constants";

const About = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const handleTelLinkClick = (event) => {
      if (!/Mobi|Android/i.test(navigator.userAgent)) {
        event.preventDefault();
        alert("Please dial the phone number manually: +963954250979");
      }
    };

    const telLink = document.querySelector('a[href^="tel:"]');
    if (telLink) {
      telLink.addEventListener("click", handleTelLinkClick);
    }

    return () => {
      if (telLink) {
        telLink.removeEventListener("click", handleTelLinkClick);
      }
    };
  }, []);

  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          {/* <span className="d-block d-lg-none">Mohammad Kawash</span> */}
          {/* <span className="d-none d-lg-block"> */}
          <div className="grid-container">
            <span className="d-lg-none">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                // src="../../assets/img/profile.jpg"
                src={personal}
                alt="personal-photo"
              />
            </span>
            <div className="info">
              <h1
                className={`${
                  theme === "dark" ? "dark-theme-heading" : ""
                } mb-0`}
              >
                Mohammad
                <span className="text-primary">&nbsp;Kawash</span>
              </h1>
              <div className="subheading mb-5">
                Software Engineer & Front-End Developer
                <br />
                <a href="mailto:kawashmohammad42@gmail.com">Email me</a>
              </div>
            </div>
          </div>
          <p className="lead mb-5">{ABOUT_ME}</p>
          <CodewarsBadge />
          <SocialIcons />
        </div>
      </section>
    </>
  );
};

export default About;
