import React from "react";
import { contactDetails } from "../Details";
import "../index.css"; // index.css import

function Contact() {
  const { email, phone } = contactDetails;

  return (
    <main className="contact-page bg-dark">
      <h1>For any questions, please drop a mail</h1>
      <a href={`mailto:${email}`} className="gradient-link">
        {email}
      </a>
      <span className="separator">or</span>
      <a href={`tel:${phone}`} className="gradient-link">
        {phone}
      </a>
    </main>
  );
}

export default Contact;
