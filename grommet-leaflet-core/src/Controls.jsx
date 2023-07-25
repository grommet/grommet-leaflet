import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { Box, Button } from 'grommet';
import { Add, Subtract, Globe } from 'grommet-icons';

export const LocationBounds = ({ locations }) => {
  const bounds = L.latLngBounds();

  // features property indicates GeoJSON
  if (locations.features) {
    locations.features.forEach(location => {
      bounds.extend([
        location.geometry?.coordinates[0],
        location.geometry?.coordinates[1],
      ]);
    });
  } else {
    locations.forEach(location => {
      bounds.extend([location?.coord?.[0], location?.coord?.[1]]);
    });
  }

  return bounds;
};

const Controls = ({ locations }) => {
  const map = useMap();
  const bounds = LocationBounds({ locations });

  // on mount, zoom to the bounds of the locations
  map.flyToBounds(bounds, { duration: 1.5 });

  return (
    // css classes are coming from https://github.com/Leaflet/Leaflet/blob/main/dist/leaflet.css
    <Box className="leaflet-bottom leaflet-right">
      <Box className="leaflet-control">
        <Box elevation="large" round="medium" background="background">
          <Button
            a11yTitle="Zoom in"
            icon={<Add />}
            onClick={event => {
              event.preventDefault();
              map.zoomIn();
            }}
          />
          <Button
            a11yTitle="Zoom out"
            icon={<Subtract />}
            onClick={event => {
              event.preventDefault();
              map.zoomOut();
            }}
          />
          <Box
            border={{
              color: 'border-weak',
              side: 'top',
            }}
          >
            {locations && (
              <Button
                a11yTitle="Zoom to data"
                icon={<Globe />}
                onClick={event => {
                  event.preventDefault();
                  map.flyToBounds(bounds, { duration: 1.5 });
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Controls };
