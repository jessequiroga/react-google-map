import React, { useState } from "react";
import "../styles/menu.css";
import logoImg from "../img/TAU-LOGO.png";
import avatarImg from "../img/Avatar.png";
import MenuButton from "./menubutton";
import mapIcon from "../img/icon/map_24px.png";

const buttonList = [
  {
    id: 1,
    name: "Map"
  }
];

const Menu = props => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setCurrentMenuButton = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="Menu">
      <div className="TAU-LOGO">
        <img src={logoImg} alt=""></img>
      </div>
      <div className="Avatar">
        <img src={avatarImg} alt="" style={{ marginBottom: "16px" }}></img>
        <p style={{ marginBottom: "0px" }}>{props.name}</p>
      </div>
      {buttonList.map(button => (
        <MenuButton
          key={button.id}
          name={button.name}
          index={button.id}
          icon={mapIcon}
          current={currentIndex}
          setCurrentMenuButton={setCurrentMenuButton}
        />
      ))}
    </div>
  );
};

export default Menu;
