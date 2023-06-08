import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { Box, Button } from "grommet";
import { Add, Grommet, Subtract, Waypoint } from "grommet-icons";

import GrommetMarker from "./GrommetMarker";
import MarkerClusterGroup from "./MarkerClusterGroup";
import { generateLocations } from "./utils/locations";
import { geojsonLocations } from "./utils/geojson_data";

const initialStyle = {
  height: "100%",
};

const ZoomControl = ({ home }) => {
  const map = useMap();
  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control">
        <Box elevation="large" round="medium" background="background">
          <Button
            icon={<Add />}
            onClick={() => {
              map.zoomIn();
            }}
          />
          <Button
            icon={<Subtract />}
            onClick={() => {
              map.zoomOut();
            }}
          />
          <Box
            border={{
              color: "border-weak",
              side: "top",
            }}
          />
          <Button
            icon={<Waypoint />}
            onClick={() => {
              map.panTo(home);
            }}
          />
        </Box>
      </div>
    </div>
  );
};

function Map() {
  const [geolocation, setGeolocation] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextLocation = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setGeolocation(nextLocation);
        localStorage.setItem("geolocation", JSON.stringify(nextLocation));
      },
      () => {
        const stored = localStorage.getItem("geolocation");
        if (stored) setGeolocation(JSON.parse(stored));
      }
    );
  }, []);

  return (
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <MapContainer
          id="map"
          ref={mapContainerRef}
          center={geolocation}
          zoom={6}
          scrollWheelZoom={false}
          style={initialStyle}
          zoomControl={false}
        >
          <TileLayer
            attribution={`
              &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, 
              &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> 
              &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`}
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <ZoomControl home={geolocation} />
          <GrommetMarker position={geolocation} icon={<Grommet />} />
          <MarkerClusterGroup>
            {generateLocations(50, { center: geolocation, radius: 5 }).map(
              (location, index) => (
                <GrommetMarker key={index} position={location} />
              )
            )}
          </MarkerClusterGroup>
          <MarkerClusterGroup>
            <GeoJSON key="my-geojson" data={geojsonLocations} />
          </MarkerClusterGroup>
        </MapContainer>
      )}
    </Box>
  );
}

export default Map;
