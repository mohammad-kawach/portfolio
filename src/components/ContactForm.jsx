import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import useThemeStore from "../store/useThemeStore";
// import "./ContactForm.css"; // Import the CSS file for styling

function ContactForm() {
  const { theme } = useThemeStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // New state flag
  const IS_FORM_EMPTY = message === "" || email === "" || name === "";
  const SERVICE_ID = "service_qtqbv5j";
  const TEMPLATE_ID = "template_sq1gamw";
  const USER_ID = "Waiya8XK4ra9Uh58K";
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (formSubmitted && errorMessages.length === 0) {
      sendEmail();
    }
  }, [formSubmitted, errorMessages]); // Trigger the effect when formSubmitted or errorMessages change

  const sendEmail = () => {
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, message, reply_to: email },
        USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setFormSubmitted(false); // Reset the formSubmitted flag
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessages([]);
    setFormSubmitted(true); // Set the formSubmitted flag to true

    if (message.length < 5) {
      setErrorMessages((prevMessages) => [
        ...prevMessages,
        "Message is too short.",
      ]);
    }

    if (!EMAIL_REGEX.test(email)) {
      setErrorMessages((prevMessages) => [
        ...prevMessages,
        "Email is invalid.",
      ]);
    }

    if (name.length === 0) {
      setErrorMessages((prevMessages) => [
        ...prevMessages,
        "Please type your name.",
      ]);
    }
  };

  const removeErrorMessage = (index) => {
    setErrorMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages.splice(index, 1);
      return updatedMessages;
    });

    // Check if all error messages have been cleared
    if (errorMessages.length === 1) {
      setFormSubmitted(false); // Reset the formSubmitted flag
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {errorMessages.length > 0 && (
        <div>
          {errorMessages.map((message, index) => (
            <div key={index} className="alert alert-danger alert-section">
              {message}
              <div onClick={() => removeErrorMessage(index)}>
                <i className="fa fa-lg fa-close close-icon"></i>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="sender-info">
        <input
          className={`${theme === "dark" ? "dark-theme-input" : ""}`}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          className={`${theme === "dark" ? "dark-theme-input" : ""}`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your Email"
          required
        />
      </div>
      <textarea
        className={`${theme === "dark" ? "dark-theme-input" : ""} message`}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Your Message"
        required
      />
      <div className="sending">
        <button
          // className="btn btn-primary btn-submit"
          className="btn"
          type="submit"
          disabled={IS_FORM_EMPTY || errorMessages.length > 0}
        >
          Send Email
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
