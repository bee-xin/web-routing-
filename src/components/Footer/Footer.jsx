import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
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
        <div className="mini-icons">
          <ul className="mini-icons-list">
            <li>
              <TiSocialFacebook />
            </li>
            <li>
              <TiSocialTwitter />
            </li>
            <li>
              <TiSocialLinkedin />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="links">
          <strong>Quick Links</strong>
          <ul className="list01">
            <li>About</li>
            <li>Our Services</li>
            <li>Portfolio</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="links">
          <strong>Legal</strong>
          <ul className="list01">
            <li>Legal Information</li>
            <li>Privacy Policy</li>
            <li>Report</li>
            <li>Terms of Service </li>
          </ul>
        </div>
        <div className="links">
          <strong> GET IN TOUCH</strong>
          <ul className="list01">
            <li>Mid-baneshowr, Kathmandu</li>
            <li>info@@subhabihani.com.np</li>
            <li> 01-4435890</li>
          </ul>
        </div>
        <div className="copyright">
          Copyrights All rights reserved by Prabidhi Enterprises
        </div>
      </footer>
    </>
  );
}

export default Footer;
