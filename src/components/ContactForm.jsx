import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import useThemeStore from "../store/useThemeStore";
import { EMAILJS_CONFIGURATION } from "../utils/EmailJSConfiguration";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  const [isSending, seIsSending] = useState(false);
  const [messageSentSuccessfullyAlert, setMessageSentSuccessfullyAlert] =
    useState("");
  const [messageNotSentAlert, setMessageNotSentAlert] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    // control,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { theme } = useThemeStore();

  const sendEmail = (data) => {
    seIsSending(true);
    emailjs
      .send(
        EMAILJS_CONFIGURATION.SERVICE_ID,
        EMAILJS_CONFIGURATION.TEMPLATE_ID,
        { from_name: data.name, message: data.message, reply_to: data.email },
        EMAILJS_CONFIGURATION.USER_ID
      )
      .then((response) => {
        seIsSending(false);
        console.log("Email sent successfully!", response);
        setMessageSentSuccessfullyAlert(t("EmailThanking"));
        reset();
        setTimeout(closeSuccessAlert, 20000);
      })
      .catch((error) => {
        seIsSending(false);
        setMessageNotSentAlert(t("ErrSendingEmail"));
        console.error("Error sending email:", error);
        setTimeout(closeErrorAlert, 20000);
      });
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    sendEmail(data);
  };

  const closeSuccessAlert = () => {
    setMessageSentSuccessfullyAlert("");
  };

  const closeErrorAlert = () => {
    setMessageNotSentAlert("");
  };

  return (
    <>
      {messageSentSuccessfullyAlert && (
        <div className="alert alert-info d-flex justify-content-between">
          {messageSentSuccessfullyAlert}
          <div className="alert-close" onClick={closeSuccessAlert}>
            <div className="fa fa-close fa-lg"></div>
          </div>
        </div>
      )}
      {messageNotSentAlert && (
        <div className="alert alert-danger d-flex justify-content-between">
          {messageNotSentAlert}
          <div className="alert-close" onClick={closeErrorAlert}>
            <div className="fa fa-close fa-lg"></div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="sender-info">
          <input
            {...register("name", {
              required: t("PleaseEnterYourName"),
              minLength: {
                value: 2,
                message: "The name is too short.",
              },
            })}
            className={`${theme === "dark" ? "dark-theme-input" : ""}`}
            type="text"
            placeholder={t("YourName")}
          />
          {errors.name && (
            <p className="d-md-none error-msg">{errors.name.message}</p>
          )}
          <input
            {...register("email", {
              required: t("EmailIsRequiredErr"),
              pattern: {
                value: EMAILJS_CONFIGURATION.EMAIL_REGEX,
                message: t("InvalidEmailErr"),
              },
            })}
            className={`${theme === "dark" ? "dark-theme-input" : ""}`}
            // type="email"
            placeholder={t("YourEmail")}
          />
          {errors.email && (
            <p className="d-md-none error-msg">{errors.email.message}</p>
          )}
        </div>
        <div className="errors d-none d-md-grid">
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </div>
        <textarea
          {...register("message", {
            required: "Message is required.",
            minLength: {
              value: 10,
              message: t("MsgIsShortErr"),
            },
          })}
          className={`${theme === "dark" ? "dark-theme-input" : ""} message`}
          placeholder={t("YourMessage")}
        />

        {errors.message && (
          <p className="error-msg mb-4 mt-2">{errors.message.message}</p>
        )}
        <div className="sending">
          <button
            className="btn"
            type="submit"
            disabled={!isDirty || isSending || isSubmitting}
          >
            {isSubmitting ? t("Sending") : t("Submit")}
          </button>
        </div>
        {/* <DevTool control={control} /> */}
      </form>
    </>
  );
}

export default ContactForm;
