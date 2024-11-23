import { useTranslation } from "react-i18next";
import useThemeStore from "../store/useThemeStore";
const BachelorsDegree = () => {
  const { t } = useTranslation();

  const { theme } = useThemeStore();

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-0`}>
          {t("BACHELORS_FIELD_OF_STUDY")}{" "}
          <span className="text-primary">/</span> {t("BACHELORS_UNIVERSITY")}
        </h3>
        <div className="text-primary subheading mb-3">
          {t("BACHELORS_DEGREE_LEVEL")}
        </div>
        <p>{t("BACHELORS_DESCRIPTION")}</p>
        <strong className="text-primary">
          {t("Graduation_Percentage")}: {t("BACHELORS_PERCENTAGE")}
        </strong>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{t("BACHELORS_PERIOD")}</span>
      </div>
    </div>
  );
};

export default BachelorsDegree;
