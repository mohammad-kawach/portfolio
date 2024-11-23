import { useTranslation } from "react-i18next";
import useThemeStore from "../store/useThemeStore";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  const { theme } = useThemeStore();

  return (
    <section className="resume-section" id="contact">
      <div className="resume-section-content">
        <h2 className={`${theme === "dark" ? "dark-theme-heading" : ""} mb-3`}>
          {t("ContactMe")}
        </h2>
        <div className="subheading mb-3">{t("sendMeMessage")}e</div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
