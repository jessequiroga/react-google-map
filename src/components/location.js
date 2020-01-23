import React, { useState, useEffect } from "react";
import "../styles/location.css";
import Info from "./info";
import Map from "./map";
import axios from "axios";

const Location = () => {
  const [data, setData] = useState([]);
  const [locInfo, setLocInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "https://api.tau.green/v1/locations?ne_lat=37.44446960614344&ne_lng=-122.06634320318699&sw_lat=37.3995197602049&sw_lng=-122.10165616124867"
      );
      setData(result.data);
      setIsLoaded(true);
    }
    fetchData();

    function containPoint(rect, pointX, pointY) {
      if (
        rect.x <= pointX &&
        pointX <= rect.x + rect.width &&
        rect.y <= pointY &&
        pointY <= rect.y + rect.height
      )
        return true;
      else return false;
    }

    const handleClick = e => {
      let domMap = document.getElementById("Map");
      if (domMap) {
        var rectMap = domMap.getBoundingClientRect();
        let domInfo = document.getElementById("Info");
        if (domInfo) {
          var rectInfo = domInfo.getBoundingClientRect();
          if (containPoint(rectInfo, e.clientX, e.clientY)) return;
        }
        if (containPoint(rectMap, e.clientX, e.clientY)) setLocInfo(null);
      }
    };

    window.addEventListener("click", handleClick, false);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const onMarkerClick = id => {
    async function fetchData() {
      const result = await axios("https://api.tau.green/v1/locations/" + id);
      setLocInfo(result.data);
    }
    fetchData();
  };

  return (
    <div className="Location">
      {isLoaded ? (
        data.length > 0 ? (
          <React.Fragment>
            {locInfo ? <Info info={locInfo} /> : ""}
            <Map
              places={data}
              defaultCenter={data[2].coordinates}
              onMarkerClick={onMarkerClick}
            />
          </React.Fragment>
        ) : (
          <span className="fetchComment"> No result.</span>
        )
      ) : (
        <span className="fetchComment"> Loading...</span>
      )}
    </div>
  );
};

export default Location;
