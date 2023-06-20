import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Controls,
  Map,
  Marker,
  GeoJSON,
  LocationBounds,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';

import { generateLocations, userLocation } from './utils/locations';
import geojsonLocations from './utils/geojson_data.json';

function LocationsMap() {
  const [geolocation, setGeolocation] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => setGeolocation(location));
  }, []);

  return (
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <Map
          id="map"
          ref={mapContainerRef}
          center={LocationBounds({ locations: geojsonLocations }).getCenter()}
          zoom={6}
          zoomControl={false}
        >
          <Controls locations={geojsonLocations} />
          <Marker position={geolocation} icon={<Grommet />} />
          <MarkerCluster>
            {generateLocations(250, { center: geolocation, radius: 6 }).map(
              (location, index) => (
                <Marker
                  key={index}
                  position={location?.coord}
                  icon={<Pin status={location?.status} />}
                />
              ),
            )}
          </MarkerCluster>
          <MarkerCluster>
            <GeoJSON key="my-geojson" data={geojsonLocations} />
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
}

export default LocationsMap;
