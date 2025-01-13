import React from "react";
import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Nav.css";
function Nav() {
  return (
    <nav className="navigation">
      <div>
        <a href="#">Subha Bihani Digital Media Pvt.Ltd</a>
        <RxHamburgerMenu className="ham" />
      </div>
      {/* <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/about"}>about</NavLink>
      <NavLink to={"/contact"}>contact</NavLink> */}
    </nav>
  );
}

export default Nav;
