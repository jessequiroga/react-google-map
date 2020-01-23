import React from "react";
import "../styles/services.css";
import Connector from "./connector";

const services = props => {
  return (
    <div className="Services">
      <div
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <span className="ServicesTotalLabel">Services</span>
        <div className="ServicesTotalCount">
          {props.info.services.length > 0 ? props.info.services.length : ""}
        </div>
      </div>
      {props.info.connectors.map(connector => {
        return <Connector key={connector.id} connector={connector} />;
      })}
      {props.info.services.length ? <div className="backgroundCount" /> : ""}
    </div>
  );
};

export default services;
