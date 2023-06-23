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

function LocationsMap() {
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
    <Box height="medium">
      <Box ref={containerRef} flex background="background-contrast">
        {geolocation && (
          <Map
            id="map"
            ref={mapContainerRef}
            center={geolocation}
            zoom={6}
            zoomControl={false}
          >
            <Controls locations={locations} />
            <Marker position={geolocation} icon={<Grommet />} />
            <MarkerCluster
              popup={cluster => <ClusterPopup cluster={cluster} />}
            >
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
    </Box>
  );
}

export default LocationsMap;
