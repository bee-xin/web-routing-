import React from "react";
import { data } from "../../assets/data";
import { NavLink } from "react-router";
function About() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          Name: {item.name}
          <NavLink to={"/about/" + item.id}>
            <button>See Description of {item.name}</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default About;
