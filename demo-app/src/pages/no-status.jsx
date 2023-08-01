import React, { useEffect, useRef, useState } from 'react';
import { Box, Page, PageContent, PageHeader } from 'grommet';
import {
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';
import {
  formatLocationsToLatLng,
  generateLocations,
  userLocation,
} from '../utils/locations';
import { ClusterPopup } from '../ClusterPopup';

const NoStatus = () => {
  const [geolocation, setGeolocation] = useState();
  const [locations, setLocations] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
      setLocations(generateLocations(50, { center: location, radius: 6 }));
    });
  }, []);
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader title="Acme, Inc." />
        <Box
          ref={containerRef}
          flex="grow"
          background="background-contrast"
          height={{ min: 'medium' }}
        >
          {geolocation && (
            <Map id="map" ref={mapContainerRef} center={geolocation}>
              <Controls locations={formatLocationsToLatLng(locations)} />
              <MarkerCluster
                popup={cluster => <ClusterPopup cluster={cluster} />}
              >
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={location?.coord}
                    icon={<Pin />}
                  />
                ))}
              </MarkerCluster>
            </Map>
          )}
        </Box>
      </PageContent>
    </Page>
  );
};

export default NoStatus;
