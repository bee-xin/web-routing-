import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div>
          <h3>Subha Bihani Digital Media Pvt. Ltd</h3>
          <p>
            Subha Bihani Digital Media PVT. LTD is a results-driven digital
            marketing agency in Nepal focused on connecting brands to people. We
            are a one-stop solution provider for all your Digital Marketing
            requirements.
          </p>
        </div>
        <div className="mini-icons"></div>
        <div className="links">
          <strong>Quick Links</strong>
          <ul className="list01">
            <li>About</li>
            <li>Our Services</li>
            <li>Portfolio</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>Legal</div>
        <div>GET IN TOUCH</div>
      </footer>
      <div>Copyrights</div>
    </>
  );
}

export default Footer;
