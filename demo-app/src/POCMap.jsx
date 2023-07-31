import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Controls,
  Cluster,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';
import { generateLocations, userLocation } from './utils/locations';
import { ClusterPopup } from './ClusterPopup';
import { getClusterStatus, getClusterSize } from './utils/status';
import { hpeLeaflet } from './themes';

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
      height="medium"
    >
      {geolocation && (
        <Map
          id="map"
          ref={mapContainerRef}
          center={geolocation}
          theme={hpeLeaflet}
        >
          <Controls locations={locations} />
          <Marker
            position={geolocation}
            icon={<Grommet color="purple!" size="large" />}
          />
          <MarkerCluster
            popup={cluster => <ClusterPopup cluster={cluster} />}
            icon={cluster => {
              const kind = getClusterStatus(cluster.getAllChildMarkers());
              const size = getClusterSize(cluster);

              return <Cluster kind={kind} size={size} />;
            }}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location?.coord}
                icon={<Pin kind={location?.status} />}
              />
            ))}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
}

export default POCMap;
