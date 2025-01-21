import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-inside">
            <h5> Subha Bihani Digital Media Pvt. Ltd</h5>
            <p>
              Subha Bihani Digital Media PVT. LTD is a results-driven digital
              marketing agency in Nepal focused on connecting brands to people.
              We are a one-stop solution provider for all your Digital Marketing
              requirements.
            </p>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <CiTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>instagram</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
