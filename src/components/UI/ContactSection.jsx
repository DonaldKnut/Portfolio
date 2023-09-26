import React from "react";
import "./InputSection.css";
import "./ContactDetailsSection.css";

const ContactSection = () => {
  return (
    <div className="ContactSectionWrapper">
      <div className="InputSection">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4"></textarea>
        <button>Contact Now</button>
      </div>
      <div className="ContactDetailsSection">
        <h2>Contact Details</h2>
        <p>
          Address: 123 Main Street, Cityville
          <br />
          Email: contact@example.com
          <br />
          Phone: +1 (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
