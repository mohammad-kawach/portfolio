import { useTranslation } from "react-i18next";
import useThemeStore from "../store/useThemeStore";
import BachelorsDegree from "./BachelorsDegree";

const Education = () => {
  const { t } = useTranslation();

  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-5`}>
          {t("Education")}
        </h2>
        <BachelorsDegree />
      </div>
    </section>
  );
};

export default Education;
