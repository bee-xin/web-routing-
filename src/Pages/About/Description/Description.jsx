import React from "react";
import { useParams } from "react-router";
import { servicesdata } from "../../../assets/servicesdata";
function Description() {
  const params = useParams();
  if (isNaN(params.description)) return <h1>Invalid params</h1>;
  const id = parseInt(params.description);
  const servicesdatas = servicesdata.filter((item) => item.id === id);
  const servicedata = servicesdatas[0];
  return (
    <div>
      <div>heading:{servicedata.heading}</div>
      <div>Content:{servicesdata.heading}</div>
      <div>
        <img src={servicesdata.image} alt="image" />
      </div>
    </div>
  );
}

export default Description;
