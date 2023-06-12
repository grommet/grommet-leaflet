import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { Box } from "grommet";
import { Grommet } from "grommet-icons";

import GrommetMarker from "./GrommetMarker";
import MarkerClusterGroup from "./MarkerClusterGroup";
import { generateLocations } from "./utils/locations";
import { geojsonLocations } from "./utils/geojson_data";
import { Controls, LocationBounds } from "./Controls";

const initialStyle = {
  height: "100%",
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
          center={LocationBounds({ locations: geojsonLocations }).getCenter()}
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
          <Controls locations={geojsonLocations} />
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
