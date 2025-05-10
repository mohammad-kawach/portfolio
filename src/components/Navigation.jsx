import { useEffect } from "react";
import personal from "../assets/img/profile-pic.png";
import ThemeToggler from "./ThemeToggler";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Collapse responsive navbar when a nav item is clicked
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarResponsive");
    const responsiveNavItems = Array.from(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );

    // Handle nav item clicks
    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });

    // Handle clicks outside the navbar
    const handleClickOutside = (event) => {
      if (
        navbarCollapse &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target) &&
        navbarCollapse.classList.contains("show") // Only close if navbar is expanded
      ) {
        navbarToggler.click();
      }
    };

    // Add click event listener to document
    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("click", handleClickOutside);
      responsiveNavItems.forEach((item) => {
        item.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Mohammad Kawash</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
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
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
