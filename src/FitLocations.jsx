import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const delay = 3000;
const flyDuration = 1.5;

export const FitLocations = ({ locations }) => {
  // get the map instance
  const map = useMap();

  // calculate the bounds of the locations
  const bounds = React.useMemo(() => {
    const b = L.latLngBounds();
    locations.forEach((location) => {
      b.extend([location[0], location[1]]);
    });
    return b;
  }, [locations]);

  // when the bounds change, fit the map to those bounds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (bounds.isValid()) {
        map.flyToBounds(bounds, { duration: flyDuration });
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [bounds, map]);

  return null;
};
