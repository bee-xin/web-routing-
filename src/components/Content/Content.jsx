import React from "react";
import "./Content.css";
import Aboutus from "../../Pages/About/Aboutus";
import Services2 from "../../Pages/Services/Services2";

function Content() {
  return (
    <>
      <section className="image-back">
        <div className="container">
          <div className="sub-container">
            <p className="p1-color">Subha Bihani Digital Media Pvt.Ltd</p>
            <h1>Empower Your Business Traffic at the Top</h1>
            <p className="p2">
              Holisticly procrastinate mission-critical convergence with
              reliable customer service Assertively underwhelm idea-sharing for
              impactful solutions{" "}
            </p>
            <button>Get start Now</button>
          </div>
        </div>
      </section>
      <Aboutus />
      <Services2 />
    </>
  );
}

export default Content;
