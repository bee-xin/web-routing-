import React, { useState } from "react";
import "./Form.css";
function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <>
      <div className="form">
        <div className="innerform">
          <h2>Any Query</h2>
          <div>
            <input
              className="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              value={name}
              name="name"
              placeholder="Enter name"
            />
          </div>
          <div>
            <input
              className="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              value={email}
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div>
            <textarea
              rows={5}
              cols={50}
              className="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              type="text"
              value={message}
              name="message"
              placeholder="Message"
            />
            <br />
            <br />
          </div>
          <div>
            <a href="_self">
              <button className="form-button"> Send Message</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
