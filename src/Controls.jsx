import React from "react";
import { useMap } from "react-leaflet";
import { Box, Button } from "grommet";
import { Add, Subtract, Waypoint } from "grommet-icons";

export const LocationBounds = ({ locations }) => {
  const b = L.latLngBounds();

  // calculate the bounds of the locations
  if (locations.features) {
    locations.features.forEach((location) => {
      b.extend([
        location.geometry?.coordinates[1],
        location.geometry?.coordinates[0],
      ]);
    });
  } else {
    locations.forEach((location) => {
      b.extend([location[0], location[1]]);
    });
  }

  return b;
};

export const Controls = ({ locations }) => {
  const map = useMap();
  const bounds = LocationBounds({ locations });

  return (
    // css classes are coming from https://github.com/Leaflet/Leaflet/blob/main/dist/leaflet.css
    <Box className="leaflet-bottom leaflet-right">
      <Box className="leaflet-control">
        <Box elevation="large" round="medium" background="background">
          <Button
            icon={<Add />}
            onClick={(event) => {
              event.preventDefault();
              map.zoomIn();
            }}
          />
          <Button
            icon={<Subtract />}
            onClick={(event) => {
              event.preventDefault();
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
            onClick={(event) => {
              event.preventDefault();
              map.flyToBounds(bounds, { duration: 1.5 });
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
