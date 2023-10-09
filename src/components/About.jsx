import { useEffect } from "react";

const About = () => {
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
          <h1 className="mb-0">
            Mohammad
            <span className="text-primary">&nbsp;Kawash</span>
          </h1>
          <div className="subheading mb-5">
            Homs, Syria
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
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/mohammad-kawach/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/mohammad-kawach/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://telegram.me/Mohammad_Kawash"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              className="social-icon"
              href="https://wa.me/+963954250979"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.codewars.com/users/mohammad-kawach/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
