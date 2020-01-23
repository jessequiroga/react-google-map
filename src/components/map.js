import React from "react";
import "../styles/map.css";
import YOUR_KEY_URL from "../googlemap_keyurl";
import OnlineIcon from "../img/Marker.png";
import OfflineIcon from "../img/Marker2.png";

const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4} defaultCenter={props.defaultCenter}>
    {props.children}
  </GoogleMap>
));

const Map = props => {
  return (
    <div id="Map" className="Map">
      <MapWithAMarker
        googleMapURL={YOUR_KEY_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        defaultCenter={props.defaultCenter}
      >
        {props.places.map(place => (
          <Marker
            onClick={() => props.onMarkerClick(place.id)}
            key={place.id}
            icon={place.evse_statuses.offline ? OfflineIcon : OnlineIcon}
            position={{
              lat: place.coordinates.lat,
              lng: place.coordinates.lng
            }}
          />
        ))}
      </MapWithAMarker>
    </div>
  );
};

export default Map;
