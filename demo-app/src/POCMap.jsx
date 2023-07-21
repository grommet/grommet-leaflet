import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';

import { generateLocations, userLocation } from './utils/locations';
import { ClusterPopup } from './ClusterPopup';

function POCMap() {
  const [geolocation, setGeolocation] = useState();
  const [locations, setLocations] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
      setLocations(generateLocations(250, { center: location, radius: 6 }));
    });
  }, []);

  return (
    <Box
      ref={containerRef}
      flex="grow"
      background="background-contrast"
      height={{ min: 'medium' }}
    >
      {geolocation && (
        <Map id="map" ref={mapContainerRef} center={geolocation}>
          <Controls locations={locations} />
          <Marker
            position={geolocation}
            icon={<Grommet color="purple!" size="large" />}
          />
          <MarkerCluster popup={cluster => <ClusterPopup cluster={cluster} />}>
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location?.coord}
                icon={<Pin status={location?.status} />}
              />
            ))}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
}

export default POCMap;
