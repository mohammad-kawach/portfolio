// import React from "react";
import { useEffect } from "react";
import useThemeStore from "../store/useThemeStore";
import SocialIcons from "./SocialIcons";
import CodewarsBadge from "./CodewarsBadge";

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
          <h1
            className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-0`}
          >
            Mohammad
            <span className="text-primary">&nbsp;Kawash</span>
          </h1>
          <div className="subheading mb-5">
            Software Engineer & Front-End Developer
            <br />
            <a href="tel:+963954250979">Call me</a>
            {/* <a href="mailto:mohmaad.kawach.777@gmail.com">Email me</a> */}
          </div>
          <p className="lead mb-5">
            As a passionate software engineer and front-end (React JS)
            developer, I bring a wealth of experience in agile frameworks,
            scrum, and software development. I thrive on leveraging iterative
            approaches to corporate strategy, fostering collaborative thinking,
            and driving the overall value proposition to new heights. With a
            focus on delivering innovative solutions, I am dedicated to creating
            exceptional user experiences and contributing to the success of
            dynamic and forward-thinking teams.
          </p>
          <SocialIcons />
          <CodewarsBadge />
        </div>
      </section>
    </>
  );
};

export default About;
