import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here
    // You can use a library like `axios` to send data to a backend API
    // or a service like `EmailJS` to send emails directly

    console.log("Form submitted:", { name, email, message });

    // Clear form fields after submission (optional)
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
      <section className="get-in-touch">
        <h1 className="title">Get in touch</h1>
        <form className="contact-form row" onSubmit={handleSubmit}>
          <div className="form-field col x-50">
            <input
              id="name"
              className="input-text js-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-field col x-50">
            <input
              id="email"
              className="input-text js-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label" htmlFor="email">
              E-mail
            </label>
          </div>
          <div className="form-field col x-100">
            <input
              id="message"
              className="input-text js-input"
              type="text"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="label" htmlFor="message">
              Message
            </label>
          </div>
          <div className="form-field col x-100 align-center">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
        {/* <p className="note">
          Based on{" "}
          <a
            className="link"
            href="http://redcollar.digital/contacts/"
            target="_blank"
          >
            Red Collar Contact Form
          </a>
        </p> */}
      </section>
  );
};

export default Contact;
