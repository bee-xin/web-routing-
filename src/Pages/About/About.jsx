import React from "react";
// import { data } from "../../assets/data";
import { NavLink } from "react-router";
import { servicesdata } from "../../assets/servicesdata";
function About() {
  return (
    <div>
      {servicesdata.map((item) => (
        <div key={item.id}>
          Name: {item.heading}
          <NavLink to={"/about/" + item.id}>
            <button>See Description of {item.heading}</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default About;
