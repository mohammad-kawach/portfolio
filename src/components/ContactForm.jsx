import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import useThemeStore from "../store/useThemeStore";
// import { DevTool } from "@hookform/devtools";
import { EMAIL_REGEX, SERVICE_ID, TEMPLATE_ID, USER_ID } from "./constants";
import { useState } from "react";

function ContactForm() {
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
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: data.name, message: data.message, reply_to: data.email },
        USER_ID
      )
      .then((response) => {
        seIsSending(false);
        console.log("Email sent successfully!", response);
        setMessageSentSuccessfullyAlert(
          "I've received your message successfully."
        );
        reset();
        setTimeout(closeSuccessAlert, 7000);
      })
      .catch((error) => {
        seIsSending(false);
        setMessageNotSentAlert("There was an error, please try again later.");
        console.error("Error sending email:", error);
        setTimeout(closeErrorAlert, 7000);
      });
  };

  const onSubmit = (data) => {
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
              required: "Please type your name.",
              minLength: {
                value: 2,
                message: "The name is too short.",
              },
            })}
            className={`${theme === "dark" ? "dark-theme-input" : ""}`}
            type="text"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="d-md-none error-msg">{errors.name.message}</p>
          )}
          <input
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address format.",
              },
            })}
            className={`${theme === "dark" ? "dark-theme-input" : ""}`}
            type="email"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="d-md-none error-msg">{errors.email.message}</p>
          )}
        </div>
        <div className="errors d-sm-none d-md-grid">
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </div>
        <textarea
          {...register("message", { required: "Message is required." })}
          className={`${theme === "dark" ? "dark-theme-input" : ""} message`}
          placeholder="Your Message"
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
            {isSubmitting ? "Sending..." : "Send Email"}
          </button>
        </div>
        {/* <DevTool control={control} /> */}
      </form>
    </>
  );
}

export default ContactForm;
