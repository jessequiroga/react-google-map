import React from "react";
import Personal from "./personal";
import Services from "./services";
import ImageSlider from "./imageslider";
import "../styles/info.css";

const Info = props => {
  return (
    <div id="Info" className="Info">
      <div className="Photos">
        <ImageSlider info={props.info.photos} />
      </div>
      <Personal info={props.info} />
      <Services info={props.info} />
    </div>
  );
};

export default Info;
