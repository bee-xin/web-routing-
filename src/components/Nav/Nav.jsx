import React, { useState } from "react";
import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Nav.css";
function Nav() {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <nav className="navigation">
      <div className="col">
        <a className="lg-icon" href="#">
          Subha Bihani Digital Media Pvt.Ltd
        </a>
        <a className="sm-icon" href="#">
          Subha Bihani{" "}
        </a>
        <div
          onClick={() => {
            console.log("Before:", showMediaIcon);
            setShowMediaIcon(!showMediaIcon);
            console.log("After:", !showMediaIcon);
          }}
        >
          <RxHamburgerMenu className="ham" />
        </div>
      </div>
      <div className={`mobile-nav-links ${showMediaIcon ? "active" : ""}`}>
        <ul className="links">
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
