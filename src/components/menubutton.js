import React from "react";
import "../styles/menubutton.css";

const MenuButton = props => {
  const getClassName = () => {
    return "MenuButton".concat(props.index === props.current ? "Selected" : "");
  };
  return (
    <div
      onClick={() => props.setCurrentMenuButton(props.index)}
      className={getClassName()}
    >
      <img className="MenuIcon" src={props.icon} alt=""></img>
      <div className="MenuText">{props.name}</div>
    </div>
  );
};

export default MenuButton;
