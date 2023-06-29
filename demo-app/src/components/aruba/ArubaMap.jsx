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

import { userLocation } from '../../utils/locations';
import { generateArubaLocations } from '../../utils/ArubaData';
import { ClusterPopup } from '../../ClusterPopup';
import { ArubaPopup } from './ArubaPopup';

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
        >
          <Controls locations={locations} />
          <Marker position={geolocation} icon={<Grommet />} />
          <MarkerCluster popup={cluster => <ClusterPopup cluster={cluster} />}>
            {locations.map((location, index) => {
              console.log(location.status.good);
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
                    <Pin status={status} text={location?.type.slice(0, 1)} />
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
