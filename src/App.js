import React from "react";
import "./App.css";
import Menu from "./components/menu";
import Navigator from "./components/navigator";
import Location from "./components/location";

function App() {
  return (
    <div className="App">
      <div className="aside">
        <Menu name={"Hryhorii Zlowetski"} />
      </div>
      <div className="main">
        <div className="header">
          <Navigator />
        </div>
        <div className="section">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default App;
