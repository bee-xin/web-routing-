import React from "react";
import ContactForm from "./ContactForm";

function Content01() {
  return (
    <>
      <div className="maindiv">
        <div className="callus">
          <div>Call us</div>
        </div>
        <div className="visitus">
          <div>Visit us</div>
        </div>
        <div className="mailus">
          <div>Mail us</div>
        </div>
      </div>
      <div className="before-query">
        <h1>Looking for a excellent Business idea?</h1>
        <p>
          Seamlessly deliver pandemic e-services and next-generation
          initiatives.
        </p>
        <button> Get direction</button>
        <br />
        <br />
        <h5>Our Office</h5>
        <address>
          Mid-Baneshowr <br></br>
          Kathmandu, Nepal
        </address>
        <br />
        <span>Phone: 01-4435890</span>
        <br />
        <span>
          <a href="info@subhabihani.com.np">Email: info@subhabihani.com.np</a>
        </span>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8340231446336!2d85.33985991450105!3d27.691524332795257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d35bb6dfb%3A0x9dc397c100a9eca0!2sMid%20baneshwor!5e0!3m2!1sen!2snp!4v1668071256431!5m2!1sen!2snp"
          frameborder="0"
        ></iframe>
      </div>
      <ContactForm />
    </>
  );
}

export default Content01;
