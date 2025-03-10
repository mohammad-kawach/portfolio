import { useEffect } from "react";
import personal from "../assets/img/profile-pic.png";
import ThemeToggler from "./ThemeToggler";
import { useTranslation } from "react-i18next";
// import { ScrollSpy } from 'react-bootstrap';
// import { scroller } from "react-scroll";

const Navigation = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Collapse responsive navbar when a nav item is clicked
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = Array.from(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      {/* <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button> */}
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Mohammad Kawash</span>
        <span className="d-none d-lg-block">
        {/* <span className="d-lg-block"> */}
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            // src="../../assets/img/profile.jpg"
            src={personal}
            alt="personal-photo"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              {t("About")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              {t("Experience")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              {t("Education")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              {t("Skills")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Interests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">
              {t("Contact_Me")}
            </a>
          </li>
          <li className="nav-item">
            <ThemeToggler />
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">
              Awards
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
