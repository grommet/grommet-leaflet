import React from 'react';
import PropTypes from 'prop-types';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { Box, Button } from 'grommet';
import { Add, Subtract, Globe } from 'grommet-icons';

export const LocationBounds = ({ locations }) => {
  const b = L.latLngBounds();

  // calculate the bounds of the locations
  if (locations.features) {
    locations.features.forEach(location => {
      b.extend([
        location.geometry?.coordinates[0],
        location.geometry?.coordinates[1],
      ]);
    });
  } else {
    locations.forEach(location => {
      b.extend([location?.[0], location?.[1]]);
    });
  }

  return b;
};

const flyToBoundsDuration = 1.5;

const Controls = ({ locations }) => {
  const map = useMap();
  const bounds = locations && LocationBounds({ locations });

  // on mount, zoom to the bounds of the locations
  if (bounds) {
    map.flyToBounds(bounds, { duration: flyToBoundsDuration });
  }

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
            {bounds && (
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

Controls.propTypes = {
  locations: PropTypes.array,
};

export { Controls };
