import React, { useEffect, useRef, useState } from 'react';
import { Box, Text } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Cluster,
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';

import { userLocation } from '../../utils/locations';
import { generateArubaLocations } from './ArubaData';
import { ClusterPopup } from '../../ClusterPopup';
import { ArubaPopup } from './ArubaPopup';
import { hpeLeaflet } from '../../themes';
import { getClusterStatus, getClusterSize } from '../../utils/status';

function ArubaMap() {
  const [geolocation, setGeolocation] = useState();
  const [locations, setLocations] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
      setLocations(generateArubaLocations(20, { center: location, radius: 6 }));
    });
  }, []);

  return (
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <Map
          id="map"
          ref={mapContainerRef}
          center={geolocation}
          zoom={6}
          zoomControl={false}
          theme={hpeLeaflet}
        >
          <Controls locations={locations} />
          <Marker position={geolocation} icon={<Grommet />} />
          <MarkerCluster
            popup={cluster => <ClusterPopup cluster={cluster} />}
            icon={cluster => {
              const kind = getClusterStatus(cluster.getAllChildMarkers());
              const size = getClusterSize(cluster);

              return <Cluster kind={kind} size={size} />;
            }}
          >
            {locations.map((location, index) => {
              const total =
                location.status.critical +
                location.status.warning +
                location.status.good;
              let status = 'good';
              if (total * 0.15 < location.status.critical) {
                status = 'critical';
              } else if (total * 0.15 < location.status.warning) {
                status = 'warning';
              }
              return (
                <Marker
                  key={index}
                  position={location?.coord}
                  icon={
                    <Pin
                      kind={status}
                      text={
                        <Text
                          alignSelf="center"
                          size="xsmall"
                          color="text-strong"
                          weight={500}
                        >
                          {location?.type.slice(0, 1)}
                        </Text>
                      }
                      height={{ min: '35px', max: '35px' }}
                      width={{ min: '35px', max: '35px' }}
                    />
                  }
                  popup={<ArubaPopup location={location} />}
                />
              );
            })}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
}

export default ArubaMap;
