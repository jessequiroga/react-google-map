import React from "react";
import "../styles/personal.css";
import starImg from "../img/Star.png";
import placeImg from "../img/icon/place_24px.png";
import restoreImg from "../img/icon/restore_24px.png";

const Personal = props => {
  const getPlace = () => {
    const { street, city, country } = props.info;
    return `${street}, ${city}, ${country}`;
  };

  const getOpenInfo = () => {
    const { opening_hours } = props.info;
    if (!opening_hours.open_now) return "Closed";

    let d = new Date();
    let n = d.getDay();
    let startTime = opening_hours.periods[n].opens_at;
    startTime = [startTime.slice(0, 2), ":", startTime.slice(2)].join("");
    let closeTime = opening_hours.periods[n].closes_at;
    closeTime = [closeTime.slice(0, 2), ":", closeTime.slice(2)].join("");
    return `Open Now: ${startTime}-${closeTime}`;
  };
  return (
    <div className="Personal">
      <div className="rating">
        <img className="ratingImg" src={starImg} alt=""></img>
        <div className="ratingText">{props.info.rating}</div>
      </div>
      <span className="locName">{props.info.name}</span>
      <div className="place">
        <img className="placeImg" src={placeImg} alt=""></img>
        <div className="placeText">{getPlace()}</div>
      </div>
      <div className="restore">
        <img className="restoreImg" src={restoreImg} alt=""></img>
        <div className="restoreText">{getOpenInfo()}</div>
      </div>
    </div>
  );
};

export default Personal;
