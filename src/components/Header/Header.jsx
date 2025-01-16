import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./Header.css";
function Header() {
  return (
    <header className="head">
      <div>
        <ul className="list1">
          <li className="icon">
            <span>
              <FaHeadphones />
            </span>
            <span>24*7 Techincal Support</span>
          </li>
          <li className="icon">
            <span>
              <FaPhone />
            </span>
            01-4435890
          </li>
        </ul>
      </div>
      <div>
        <ul className="list02">
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
    </header>
  );
}

export default Header;
