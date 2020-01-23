import React from "react";
import "../styles/navigator.css";
import NavButton from "./navbutton";

const navigator = () => {
  return (
    <div className="Navigator">
      <NavButton name="All locations" />
    </div>
  );
};

export default navigator;
