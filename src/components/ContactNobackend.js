import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./ContactNobackend.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_id";
      const templateId = "template_id";
      const userId = "user_id";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      alert(
        "The functionality of the contact form is under construction. If you would like to give in contact with me, please reach out to me on Linkedin or Twitter."
      );
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact">
      <div id="contact-form">
        <p className="contact-header">Contact</p>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={submit}>Send Message</button>

        <span className={emailSent ? "visible" : null}>
          The functionality of the contact form is under construction. If you
          would like to give in contact with me, please reach out to me on
          Linkedin or Twitter.
        </span>
        {/* Thank you for your message, I will be in touch very soon! */}
      </div>
    </div>
  );
};

export default Contact;
