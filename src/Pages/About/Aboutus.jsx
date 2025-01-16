import React from "react";
import "./Aboutus.css";
function Aboutus() {
  return (
    <>
      <section className="Aboutus">
        <div className="mgn">
          <strong>About us</strong>
          <h1>SUBHA BIHANI DIGITAL MEDIA PVT.LTD</h1>
          <p>
            {" "}
            Subha Bihani Digital Media PVT. LTD is a results-driven digital
            marketing agency in Nepal focused on connecting brands to people. We
            are a one-stop solution provider for all your Digital Marketing
            requirements. We offer an integrated digital marketing solution
            combining digital strategy to implementation.
          </p>
          <br />

          <p>
            Our expertise comprises specializing in an innovative marketing
            solution involving creative Search Engine Optimization (SEO), Social
            Media campaign, Email marketing, Content marketing, influencer
            marketing.
          </p>
          <div className="img-i2">
            <img
              src="i2.svg
            "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
