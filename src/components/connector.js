import React from "react";
import "../styles/connector.css";
import typeImg from "../img/ServiceType2.png";
import carImg from "../img/sports-car.png";
import bicycleImg from "../img/youth-bicycle.png";

const Connector = props => {
  const { type, power, fee_per_minute, parking } = props.connector;
  return (
    <div className="Connector">
      <img
        src={typeImg}
        alt=""
        style={{ position: "absolute", top: "-28px" }}
      ></img>
      <span className="ConnectorType">{type}</span>
      <span className="ConnectorPower">{power + "kW"}</span>
      <span className="FeePerMinute">{fee_per_minute + "€/min"}</span>
      {parking.car ? (
        <img
          src={carImg}
          alt=""
          style={{
            position: "absolute",
            right: "40px",
            top: "12px",
            cursor: "pointer"
          }}
        />
      ) : (
        ""
      )}

      {parking.bike ? (
        <img
          src={bicycleImg}
          alt=""
          style={{
            position: "absolute",
            right: "16px",
            top: "12px",
            cursor: "pointer"
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Connector;
