import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import "./Header.css";
function Header() {
  return (
    <header>
      <ul className="list">
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
    </header>
  );
}

export default Header;
