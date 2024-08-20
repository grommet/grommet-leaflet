import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
  } else if (Array.isArray(locations[0])) {
    locations.forEach(location => {
      bounds.extend([location?.[0], location?.[1]]);
    });
  } else {
    locations.forEach(location => {
      bounds.extend([location?.lat, location?.lng]);
    });
  }

  return bounds;
};

const flyToBoundsDuration = 1.5;

const Controls = ({ locations }) => {
  const map = useMap();
  const bounds = locations && LocationBounds({ locations });
  const [mounted, setMounted] = React.useState(false);

  // on mount, zoom to the bounds of the locations
  useEffect(() => {
    if (bounds && !mounted) {
      if (
        // eslint-disable-next-line no-underscore-dangle
        JSON.stringify(bounds._northEast) === JSON.stringify(bounds._southWest)
      ) {
        // if the bounds are the same, zoom to the bounds of the locations
      } else {
        map.flyToBounds(bounds, { duration: flyToBoundsDuration });
      }
    }
  }, [bounds, map, mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

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
  locations: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.shape({
          lat: PropTypes.number,
          lng: PropTypes.number,
        }),
      ]),
    ),
    PropTypes.object,
  ]),
};

export { Controls };
