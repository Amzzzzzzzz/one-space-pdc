import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Let's Discuss Your Next Project</h2>

      <p className="contactIntro">
        Whether you're planning a new facility, redesigning an existing
        workspace, or looking to optimise your current environment,
        we'd love to hear from you.
      </p>

      <div className="contactContainer">

        <div className="contactInfo">

          <h3>Get In Touch</h3>

          <p>
            Tell us about your project and we'll get back to you as
            soon as possible.
          </p>

          <div className="infoItem">
            <strong>Email</strong>
            <span>OneSpacePDC@yahoo.com</span>
          </div>

          <div className="infoItem">
            <strong>Phone</strong>
            <span>(214) 960-8498</span>
          </div>

          <div className="infoItem">
            <strong>Location</strong>
            <span>United States</span>
          </div>

        </div>

        <form className="contactForm">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Company (Optional)"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
          />

          <button type="submit">
            Send Enquiry
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;