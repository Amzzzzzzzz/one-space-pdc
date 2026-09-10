import { useState } from "react";
import "./Contact.css";
import { supabase } from "../../lib/supabase";

function Contact() {


  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

const { error } = await supabase
  .from("enquiries")
  .insert([form]);

if (error) {
  setLoading(false);
  alert(error.message);
  return;
}


const { error: emailError } = await supabase.functions.invoke(
  "send-enquiry-email",
  {
    body: form,
  }
);

if (emailError) {
  console.error("Email Error:", emailError);
}

setLoading(false);

alert("Thank you! Your inquiry has been sent.");

setForm({
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
});

};
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

        <form
  className="contactForm"
  onSubmit={handleSubmit}
>

<input
  type="text"
  name="name"
  placeholder="Your Name"
  value={form.name}
  onChange={handleChange}
  required
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={form.email}
  onChange={handleChange}
  required
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={form.phone}
  onChange={handleChange}
/>

<input
  type="text"
  name="company"
  placeholder="Company (Optional)"
  value={form.company}
  onChange={handleChange}
/>

<select
  name="service"
  value={form.service}
  onChange={handleChange}
  required
>

  <option value="">
    Select a Service
  </option>

  <option value="Space Audit">
    Space Audit
  </option>

  <option value="Space Planning & Design">
    Space Planning & Design
  </option>

  <option value="Master Planning">
    Master Planning
  </option>

  <option value="Consultation">
    Consultation
  </option>

</select>

<textarea
  rows="6"
  name="message"
  placeholder="Tell us about your project..."
  value={form.message}
  onChange={handleChange}
  required
/>

<button
  type="submit"
  disabled={loading}
>

  {loading
    ? "Sending..."
    : "Send Inquiry"}

</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;