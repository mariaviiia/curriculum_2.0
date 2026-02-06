import "./contact.scss";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let’s work together</h2>

        <p className="contact-description">
          If you’d like to talk about a project, collaboration, or opportunity,
          feel free to reach out.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:mariaviiia@hotmail.com"
            className="contact-btn primary"
          >
            Send me an email
          </a>

          <a
            href="https://www.linkedin.com/in/maria-isabel-ochoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
