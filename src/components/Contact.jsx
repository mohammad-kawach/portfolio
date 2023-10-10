import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="resume-section" id="contact">
      <div className="resume-section-content">
        <h2 className="mb-3">Contact Me</h2>
        <div className="subheading mb-3">Feel free to send me a messgae</div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
